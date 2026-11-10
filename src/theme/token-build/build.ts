import fs from "node:fs";
import path from "node:path";
// style-dictionary's package.json has no "main"/"types" field which TypeScript's
// module resolution doesn't understand, so this import can't be resolved for
// type-checking purposes (it resolves fine at runtime).
// @ts-expect-error
import StyleDictionary from "style-dictionary";
import type {
  Config,
  DesignTokens,
  FormatFnArguments,
  TransformedToken,
} from "style-dictionary/types";

const themeDir = path.resolve("src/theme");
const sourceDir = path.join(themeDir, "v5-tokens");
const outputDir = path.join(themeDir, "generated");

const kebabToCamelCase = (name: string): string =>
  name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

// A color value as exported by Figma, eg:
// { colorSpace: "srgb", components: [1, 1, 1], alpha: 0, hex: "#FFFFFF" }
interface FigmaColorValue {
  colorSpace: string;
  components: number[];
  alpha: number;
  hex: string;
}

type TokenValue = string | number | FigmaColorValue;

// A single leaf node in a raw Figma token export (before flattening).
interface FigmaToken {
  $type?: string;
  $value?: TokenValue;
  $extensions?: Record<string, unknown>;
}

// The raw, nested shape of a Figma token export.
interface FigmaTokenTree {
  [key: string]: FigmaToken | FigmaTokenTree;
}

// A flattened map of dot-separated token paths to their (possibly
// still-aliased, ie "{other.token}") values.
type FlatTokenMap = Record<string, TokenValue>;

// A generic nested object, used while rebuilding dot-separated token
// paths back into nested objects of arbitrary shape.
interface NestedObject {
  [key: string]: unknown;
}

/**
 * Flatten Figma's nested token structure into dot-separated paths.
 * For example, this:
 * {
 *   "font-family": {
 *     "base": {
 *       "$type": "string",
 *       "$value": "Open Sans",
 *       "$extensions": {
 *         "com.figma.variableId": "VariableID:26:417",
 *         "com.figma.scopes": ["FONT_FAMILY"]
 *       }
 *     },
 *     "heading-default": {
 *       "$type": "string",
 *       "$value": "{font-family.base}",
 *       "$extensions": {
 *         "com.figma.variableId": "VariableID:26:418",
 *         "com.figma.scopes": ["FONT_FAMILY"]
 *       }
 *     }
 *   }
 * }
 * becomes:
 * {
 *   "font-family.base": "Open Sans",
 *   "font-family.heading-default": "{font-family.base}"
 * }
 */
const flattenTokens = (
  object: FigmaTokenTree,
  prefix = "",
  result: FlatTokenMap = {}
): FlatTokenMap => {
  // Loop through each key-value pair in the JSON object.
  for (const [key, value] of Object.entries(object)) {
    // "$root" represents the group's own value (ie the default state)
    // alongside sibling sub-state keys like "disabled"/"error", rather
    // than metadata, so give it a usable leaf name instead of skipping it.
    if (key === "$root") {
      const tokenPath = prefix ? `${prefix}.default` : "default";

      if (value && typeof value === "object" && "$value" in value) {
        result[tokenPath] = (value as FigmaToken).$value as TokenValue;
      }

      continue;
    }

    if (key.startsWith("$")) continue;

    // Build the token path, ie "container" --> "container.padding-x"
    const tokenPath = prefix ? `${prefix}.${key}` : key;

    // If the token value exists in the object's value,
    // set it equal to the path in the result object.
    if (value && typeof value === "object" && "$value" in value) {
      result[tokenPath] = (value as FigmaToken).$value as TokenValue;
    } else if (value && typeof value === "object") {
      flattenTokens(value as FigmaTokenTree, tokenPath, result);
    }
  }

  return result;
};

// Read and parse a raw Figma token export file.
const readTokenFile = (
  collection: string,
  filename: string
): FigmaTokenTree => {
  // ex: "src/theme/v5-tokens/spacing/space.tokens.json"
  const filePath = path.join(sourceDir, collection, filename);

  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

/**
 * Resolve references such as "{soft}" or "{container.padding-x}".
 * Takes an already-flattened token map (ie the output of `flattenTokens`),
 * not a raw Figma export.
 * For example, this:
 * {
 *   "soft": 8,
 *   "container.padding-x": 20,
 *   "spacing.small": "{soft}",
 *   "spacing.medium": "{container.padding-x}"
 * }
 * becomes:
 * {
 *   "soft": 8,
 *   "container.padding-x": 20,
 *   "spacing.small": 8,
 *   "spacing.medium": 20
 * }
 */
const resolveTokens = (tokens: FlatTokenMap): FlatTokenMap => {
  const resolved: FlatTokenMap = {};
  const resolving = new Set<string>();

  // Recursively resolve a token until we reach the real value.
  function resolve(name: string): TokenValue {
    // If the token has already been resolved, return the cached value.
    if (Object.hasOwn(resolved, name)) {
      return resolved[name];
    }

    // If the alias does not exist in the tokens object, throw an error.
    if (!Object.hasOwn(tokens, name)) {
      throw new Error(`Unknown token reference: ${name}`);
    }

    // If the token is already in the process of being resolved,
    // it indicates a circular reference. Throw an error.
    if (resolving.has(name)) {
      throw new Error(`Circular token reference: ${name}`);
    }

    resolving.add(name);

    const value = tokens[name];

    // If the value is a string that matches the "{...}" pattern,
    // it is an alias that needs to be resolved recursively.
    const match =
      typeof value === "string" ? value.match(/^\{([^}]+)\}$/) : null;

    const result = match ? resolve(match[1]) : value;

    resolving.delete(name);
    resolved[name] = result;

    return result;
  }

  for (const name of Object.keys(tokens)) {
    resolve(name);
  }

  return resolved;
};

/**
 * Create a nested object from the flattened, dot-separated token paths.
 * For example, this:
 * {
 *   "spacing.small": 8,
 *   "spacing.medium": 16
 * }
 * becomes:
 * {
 *   spacing: {
 *     small: 8,
 *     medium: 16
 *   }
 * }
 */
const buildNestedTokens = (
  object: NestedObject,
  tokenPath: string,
  value: unknown
): void => {
  const parts = tokenPath.split(".").map(kebabToCamelCase);
  let current = object;

  for (const part of parts.slice(0, -1)) {
    current = (current[part] ??= {}) as NestedObject;
  }

  current[parts.at(-1) as string] = value;
};

// Read a single token file and build a nested token tree from it.
/**
 * Figma resolves a token that aliases a variable in another collection
 * down to a single literal value, keeping the alias itself only as
 * metadata (`$extensions["com.figma.aliasData"]`) rather than as a
 * `"{...}"` reference string (which `resolveTokens` could otherwise
 * follow). That causes us to lose values for any token that aliases a
 * `responsive` collection variable.
 *
 * This walks the raw token tree and returns a map to the aliased variable
 *  within the `responsive` collection (eg "hero.background.paddingY" ->
 * "container.paddingX"), so `buildTokens` can look up the real value.
 */
const flattenResponsiveAliasTargets = (
  object: FigmaTokenTree,
  prefix = "",
  result: Record<string, string> = {}
): Record<string, string> => {
  for (const [key, value] of Object.entries(object)) {
    if (key.startsWith("$")) continue;

    const tokenPath = prefix ? `${prefix}.${key}` : key;

    if (value && typeof value === "object" && "$value" in value) {
      const aliasData = (value as FigmaToken).$extensions?.[
        "com.figma.aliasData"
      ] as
        | { targetVariableName?: string; targetVariableSetName?: string }
        | undefined;

      if (
        aliasData?.targetVariableSetName === "responsive" &&
        aliasData.targetVariableName
      ) {
        // eg "spacing/container/padding-x" -> "container.paddingX"
        // (the leading segment is just the collection name, already
        // known from context, so it's dropped).
        const [, ...segments] = aliasData.targetVariableName.split("/");

        result[tokenPath] = segments.map(kebabToCamelCase).join(".");
      }
    } else if (value && typeof value === "object") {
      flattenResponsiveAliasTargets(value as FigmaTokenTree, tokenPath, result);
    }
  }

  return result;
};

// Look up a dot-separated path (eg "container.paddingX") in a nested
// object, returning undefined if any segment along the way is missing.
const getNestedValue = (
  object: NestedObject | undefined,
  dotPath: string
): unknown => {
  let current: unknown = object;

  for (const part of dotPath.split(".")) {
    if (!current || typeof current !== "object") return undefined;

    current = (current as NestedObject)[part];
  }

  return current;
};

// Read a single token file and build a nested token tree from it.
// Used for every category except `responsive/`, which is the only one
// split across multiple (breakpoint) files.
//
// `responsiveOverrides` are any values required from the `responsive`
// collection.
const buildTokens = (
  collection: string,
  filename: string,
  tokenType = "dimension",
  prefix = "",
  responsiveOverrides?: NestedObject
): DesignTokens => {
  const rawTree = readTokenFile(collection, filename);
  const values = resolveTokens(flattenTokens(rawTree));
  const responsiveAliasTargets = flattenResponsiveAliasTargets(rawTree);

  const result: NestedObject = {};

  for (const [tokenPath, value] of Object.entries(values)) {
    if (!tokenPath.startsWith(prefix)) continue;

    const aliasTarget = responsiveAliasTargets[tokenPath];
    const responsiveValue = aliasTarget
      ? getNestedValue(responsiveOverrides, aliasTarget)
      : undefined;

    buildNestedTokens(
      result,
      tokenPath,
      responsiveValue ?? { $type: tokenType, $value: value }
    );
  }

  return result as DesignTokens;
};

const isTokenLeaf = (value: unknown): boolean =>
  !!value && typeof value === "object" && "$value" in value;

// Merge a nested token tree (eg breakpoint-specific overrides) into
// another, mutating `target` in place. Shared branches are merged
// recursively; leaf tokens in `source` take precedence over any in
// `target`. A leaf colliding with a group at the same path is treated as
// a data bug (eg a path typo) rather than an intentional override, so
// that case throws instead of silently replacing one with the other.
const mergeNestedTokens = (
  target: NestedObject,
  source: NestedObject
): void => {
  for (const [key, value] of Object.entries(source)) {
    const existing = target[key];

    if (existing === undefined) {
      target[key] = value;
      continue;
    }

    const existingIsLeaf = isTokenLeaf(existing);
    const valueIsLeaf = isTokenLeaf(value);

    if (existingIsLeaf && valueIsLeaf) {
      target[key] = value;
    } else if (!existingIsLeaf && !valueIsLeaf) {
      mergeNestedTokens(existing as NestedObject, value as NestedObject);
    } else {
      throw new Error(
        `Cannot merge token override at "${key}": a single value and a ` +
          "group of values both exist at this path."
      );
    }
  }
};

/**
 * A handful of spacing/font-size/line-height tokens vary by breakpoint.
 * Those live under `responsive/` as one file per breakpoint (mobile/
 * tablet/desktop), each containing only the overridden token paths,
 * nested under "spacing"/"text" keys that match the base files' shape.
 * Per-token, compare the resolved value across all 3 breakpoints: if
 * identical in all, emit a single value; if it differs, emit an object
 * keyed by breakpoint name.
 */
function buildResponsiveOverrides(tokenType = "dimension"): NestedObject {
  // Listed in mobile-first order, since this also determines the key
  // order of any resulting breakpoint-keyed objects.
  const breakpoints = ["mobile", "tablet", "desktop"];

  // Create one flattened, fully resolved token map per breakpoint.
  const byBreakpoint: Record<string, FlatTokenMap> = Object.fromEntries(
    breakpoints.map((breakpoint) => [
      breakpoint,
      resolveTokens(
        flattenTokens(readTokenFile("responsive", `${breakpoint}.tokens.json`))
      ),
    ])
  );

  // Collect every unique token path across all breakpoints.
  const allPaths = new Set(
    Object.values(byBreakpoint).flatMap((tokens) => Object.keys(tokens))
  );

  const result: NestedObject = {};

  for (const tokenPath of allPaths) {
    // Get this token's value at each breakpoint.
    const values = breakpoints.map(
      (breakpoint) => byBreakpoint[breakpoint][tokenPath]
    );

    // Ignore breakpoints where the token doesn't exist.
    const definedValues = values.filter((value) => value !== undefined);

    const uniqueValues = new Set(definedValues);

    if (
      uniqueValues.size === 1 &&
      definedValues.length === breakpoints.length
    ) {
      // Token exists at every breakpoint with the same value.
      buildNestedTokens(result, tokenPath, {
        $type: tokenType,
        $value: definedValues[0],
      });
    } else {
      // Token varies across breakpoints or is missing from some.
      for (const [index, breakpoint] of breakpoints.entries()) {
        const value = values[index];

        if (value === undefined) continue;

        buildNestedTokens(result, `${tokenPath}.${breakpoint}`, {
          $type: tokenType,
          $value: value,
        });
      }
    }
  }

  return result;
}

// Convert dimension values from numbers to CSS pixel strings.
StyleDictionary.registerTransform({
  name: "figma/number-to-px",
  type: "value",
  filter: (token: TransformedToken) =>
    token.$type === "dimension" && typeof token.$value === "number",
  transform: (token: TransformedToken) => `${token.$value}px`,
});

// Generate a nested TypeScript object from transformed tokens.
StyleDictionary.registerFormat({
  name: "chakra/typescript",
  format: ({ dictionary, options }: FormatFnArguments) => {
    const output: NestedObject = {};

    for (const token of dictionary.allTokens) {
      buildNestedTokens(output, token.path.join("."), token.$value);
    }

    return (
      `// Generated file from ${options.source}. Do not edit manually.\n` +
      `export const ${options.exportName} = ` +
      `${JSON.stringify(output, null, 2)} as const;\n`
    );
  },
});

// Run Style Dictionary and write a generated theme file.
async function generate(
  tokens: DesignTokens,
  exportName: string,
  filename: string,
  source: string
): Promise<void> {
  const config: Config = {
    tokens,
    platforms: {
      chakra: {
        transforms: ["figma/number-to-px"],
        buildPath: `${outputDir}/`,
        files: [
          {
            destination: filename,
            format: "chakra/typescript",
            options: { exportName, source },
          },
        ],
      },
    },
  };

  const dictionary = new StyleDictionary(config);

  await dictionary.buildPlatform("chakra");
  console.log(`Generated ${filename}`);
}

// A handful of spacing/font-size/line-height tokens vary by breakpoint;
// read those overrides once so they can be merged into the base trees below.
const responsiveOverrides = buildResponsiveOverrides();

// Generate spacing tokens.
const space = buildTokens(
  "spacing",
  "space.tokens.json",
  "dimension",
  "",
  responsiveOverrides.spacing as NestedObject
);
mergeNestedTokens(
  space as NestedObject,
  responsiveOverrides.spacing as NestedObject
);
// Drop the old, superseded container/grid values kept around under
// "deprecated" in the source file.
delete (space as NestedObject).deprecated;
await generate(
  space,
  "space",
  "space.ts",
  "v5-tokens/{spacing,responsive}/*.tokens.json"
);

// Generate size tokens.
const sizes = buildTokens("size", "size.tokens.json");
await generate(sizes, "sizes", "sizes.ts", "v5-tokens/size/*.tokens.json");

// Generate radius tokens.
const radiusTokens = buildTokens("radius", "radius.tokens.json");
await generate(
  radiusTokens,
  "radii",
  "radii.ts",
  "v5-tokens/radius/radius.tokens.json"
);

// Generate breakpoint tokens.
const breakpointValues = resolveTokens(
  flattenTokens(readTokenFile("breakpoint", "breakpoint.tokens.json"))
);

const breakpointTokens: NestedObject = {};

for (const [tokenPath, value] of Object.entries(breakpointValues)) {
  if (!tokenPath.startsWith("bibliocommons.")) continue;

  const breakpointName = tokenPath.replace("bibliocommons.", "");

  // Chakra treats "base" (0px) implicitly, so an explicit 0px breakpoint
  // is intentionally omitted.
  if (value === 0) continue;

  buildNestedTokens(breakpointTokens, breakpointName, {
    $type: "dimension",
    $value: value,
  });
}

await generate(
  breakpointTokens as DesignTokens,
  "breakpoints",
  "breakpoints.ts",
  "v5-tokens/breakpoint/breakpoint.tokens.json"
);

// Generate typography tokens.
const typographyTokens = {
  fonts: (
    buildTokens(
      "text",
      "text.tokens.json",
      "string",
      "font-family."
    ) as NestedObject
  ).fontFamily,
  fontSizes: (
    buildTokens(
      "text",
      "text.tokens.json",
      "dimension",
      "font-size.",
      responsiveOverrides.text as NestedObject
    ) as NestedObject
  ).fontSize,
  fontWeights: (
    buildTokens(
      "text",
      "text.tokens.json",
      "number",
      "font-weight."
    ) as NestedObject
  ).fontWeight,
  lineHeights: (
    buildTokens(
      "text",
      "text.tokens.json",
      "dimension",
      "line-height.",
      responsiveOverrides.text as NestedObject
    ) as NestedObject
  ).lineHeight,
} as DesignTokens;

// Merge in the font-size/line-height tokens that vary by breakpoint.
const responsiveText = responsiveOverrides.text as NestedObject;
mergeNestedTokens(
  (typographyTokens as NestedObject).fontSizes as NestedObject,
  responsiveText.fontSize as NestedObject
);
mergeNestedTokens(
  (typographyTokens as NestedObject).lineHeights as NestedObject,
  responsiveText.lineHeight as NestedObject
);

await generate(
  typographyTokens,
  "typography",
  "typography.ts",
  "v5-tokens/{text,responsive}/*.tokens.json"
);

// Generate color tokens.
const formatColor = (color: FigmaColorValue): string => {
  const { hex, alpha } = color;

  if (alpha === 1) return hex;

  const [r, g, b] = color.components.map((value) => Math.round(value * 255));

  return `rgba(${r}, ${g}, ${b}, ${Number(alpha.toFixed(3))})`;
};

const colorValues = resolveTokens(
  flattenTokens(readTokenFile("color", "color.tokens.json"))
);

const colorTokens: NestedObject = {};

for (const [tokenPath, value] of Object.entries(colorValues)) {
  buildNestedTokens(colorTokens, tokenPath, {
    $type: "color",
    $value: formatColor(value as FigmaColorValue),
  });
}

await generate(
  colorTokens as DesignTokens,
  "colors",
  "colors.ts",
  "v5-tokens/color/color.tokens.json"
);
