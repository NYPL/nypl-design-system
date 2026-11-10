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

// Read and flatten a Figma token export.
const readTokenFile = (
  collection: string,
  filename: string
): FigmaTokenTree => {
  // ex: "src/theme/v5-tokens/spacing/mobile-small.tokens.json"
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

function buildResponsiveTokens(
  collection: string,
  tokenType = "dimension",
  prefix = ""
): DesignTokens {
  // Find all breakpoint files for this collection.
  // This allows different collections to have different breakpoints.
  const collectionDir = path.join(sourceDir, collection);

  const breakpoints = fs
    .readdirSync(collectionDir)
    .filter((file) => file.endsWith(".tokens.json"))
    .map((file) => file.replace(".tokens.json", ""));

  // Create one flattened, fully resolved token map per breakpoint.
  const byBreakpoint: Record<string, FlatTokenMap> = Object.fromEntries(
    breakpoints.map((breakpoint) => [
      breakpoint,
      resolveTokens(
        flattenTokens(readTokenFile(collection, `${breakpoint}.tokens.json`))
      ),
    ])
  );

  // Collect every unique token path across all breakpoints.
  const allPaths = new Set(
    Object.values(byBreakpoint)
      .flatMap((tokens) => Object.keys(tokens))
      .filter((path) => path.startsWith(prefix))
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

  return result as DesignTokens;
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

// Generate spacing tokens.
const space = buildResponsiveTokens("spacing");
await generate(space, "space", "space.ts", "v5-tokens/spacing/*.tokens.json");

// Generate size tokens.
const sizes = buildResponsiveTokens("size");
await generate(sizes, "sizes", "sizes.ts", "v5-tokens/size/*.tokens.json");

// Generate radius tokens.
const radii = resolveTokens(
  flattenTokens(readTokenFile("radius", "radius.tokens.json"))
);

const radiusTokens: NestedObject = {};

for (const [tokenPath, value] of Object.entries(radii)) {
  buildNestedTokens(radiusTokens, tokenPath, {
    $type: "dimension",
    $value: value,
  });
}

await generate(
  radiusTokens as DesignTokens,
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

// Figma's FONT_FAMILY variable type has no concept of a CSS fallback stack,
// so font-family tokens only ever contain the primary typeface name and the
// fallbacks are appended here.
const fontFallbacks: Record<string, string> = {
  base: "Arial, sans-serif",
  headingDefault: "Arial, sans-serif",
  headingAlternate: "serif",
  monospace: "monospace",
};

const fontFamily = (
  buildResponsiveTokens("text", "string", "font-family.") as NestedObject
).fontFamily as Record<string, { $type: string; $value: string }>;

const fonts = Object.fromEntries(
  Object.entries(fontFamily).map(([name, token]) => [
    name,
    fontFallbacks[name]
      ? { ...token, $value: `${token.$value}, ${fontFallbacks[name]}` }
      : token,
  ])
);

// Generate typography tokens.
const typographyTokens = {
  fonts,
  fontSizes: (
    buildResponsiveTokens("text", "dimension", "font-size.") as NestedObject
  ).fontSize,
  fontWeights: (
    buildResponsiveTokens("text", "number", "font-weight.") as NestedObject
  ).fontWeight,
  lineHeights: (
    buildResponsiveTokens("text", "dimension", "line-height.") as NestedObject
  ).lineHeight,
} as DesignTokens;

await generate(
  typographyTokens,
  "typography",
  "typography.ts",
  "v5-tokens/text/*.tokens.json"
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
