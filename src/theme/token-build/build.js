import fs from "node:fs";
import path from "node:path";
import StyleDictionary from "style-dictionary";

const themeDir = path.resolve("src/theme");
const sourceDir = path.join(themeDir, "v5-tokens");
const outputDir = path.join(themeDir, "generated");

const kebabToCamelCase = (name) =>
  name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

/**
 * Flatten Figma's nested token structure into dot-separated paths.
 * For example, this:
 * {
 *   "container": {
 *     "padding-x": {
 *       "$type": "number",
 *       "$value": 20,
 *       "$extensions": {
 *         "com.figma.variableId": "..."
 *       }
 *     }
 *   }
 * }
 * becomes:
 * {
 *   "container.padding-x": 20
 * }
 */
const flattenTokens = (object, prefix = "", result = {}) => {
  // Loop through each key-value pair in the JSON object.
  for (const [key, value] of Object.entries(object)) {
    if (key.startsWith("$")) continue;

    // Build the token path, ie "container" --> "container.padding-x"
    const tokenPath = prefix ? `${prefix}.${key}` : key;

    // If the token value exists in the object's value,
    // set it equal to the path in the result object.
    if (value && typeof value === "object" && "$value" in value) {
      result[tokenPath] = value.$value;
    } else if (value && typeof value === "object") {
      flattenTokens(value, tokenPath, result);
    }
  }

  return result;
};

// Read and flatten a Figma token export.
const readTokenFile = (collection, filename) => {
  const filePath = path.join(sourceDir, collection, filename); // ex: "src/theme/v5-tokens/spacing/mobile-small.tokens.json"

  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

/**
 * Resolve references such as "{soft}" or "{container.padding-x}".
 * For example, this:
 * {
 *   "soft": 8,
 *   "container.padding-x": 20,
 *   "spacing": {
 *     "small": "{soft}",
 *     "medium": "{container.padding-x}"
 *   }
 * }
 * becomes:
 * {
 *   "soft": 8,
 *   "container.padding-x": 20,
 *   "spacing.small": 8,
 *   "spacing.medium": 20
 * }
 */
const resolveTokens = (tokens) => {
  const resolved = {};
  const resolving = new Set();

  // Recursively resolve a token until we reach the real value.
  function resolve(name) {
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
const buildNestedTokens = (object, tokenPath, value) => {
  const parts = tokenPath.split(".").map(kebabToCamelCase);
  let current = object;

  for (const part of parts.slice(0, -1)) {
    current = current[part] ??= {};
  }

  current[parts.at(-1)] = value;
};

function buildResponsiveTokens(
  collection,
  tokenType = "dimension",
  prefix = ""
) {
  // Find all breakpoint files for this collection.
  // This allows different collections to have different breakpoints.
  const collectionDir = path.join(sourceDir, collection);

  const breakpoints = fs
    .readdirSync(collectionDir)
    .filter((file) => file.endsWith(".tokens.json"))
    .map((file) => file.replace(".tokens.json", ""));

  // Create one flattened, fully resolved token map per breakpoint.
  const byBreakpoint = Object.fromEntries(
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

  const result = {};

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
  filter: (token) =>
    token.$type === "dimension" && typeof token.$value === "number",
  transform: (token) => `${token.$value}px`,
});

// Generate a nested TypeScript object from transformed tokens.
StyleDictionary.registerFormat({
  name: "chakra/typescript",
  format: ({ dictionary, options }) => {
    const output = {};

    for (const token of dictionary.allTokens) {
      buildNestedTokens(output, token.path.join("."), token.$value);
    }

    return (
      "// Generated file. Do not edit manually.\n" +
      `export const ${options.exportName} = ` +
      `${JSON.stringify(output, null, 2)} as const;\n`
    );
  },
});

// Run Style Dictionary and write a generated theme file.
async function generate(tokens, exportName, filename) {
  const dictionary = new StyleDictionary({
    tokens,
    platforms: {
      chakra: {
        transforms: ["figma/number-to-px"],
        buildPath: `${outputDir}/`,
        files: [
          {
            destination: filename,
            format: "chakra/typescript",
            options: { exportName },
          },
        ],
      },
    },
  });

  await dictionary.buildPlatform("chakra");
  console.log(`Generated ${filename}`);
}

// Generate spacing tokens.
const space = buildResponsiveTokens("spacing");
await generate(space, "space", "space.ts");

// Generate size tokens.
const sizes = buildResponsiveTokens("size");
await generate(sizes, "sizes", "sizes.ts");

// Generate radius tokens.
const radii = resolveTokens(
  flattenTokens(readTokenFile("radius", "radius.tokens.json"))
);

const radiusTokens = {};

for (const [tokenPath, value] of Object.entries(radii)) {
  buildNestedTokens(radiusTokens, tokenPath, {
    $type: "dimension",
    $value: value,
  });
}

await generate(radiusTokens, "radii", "radii.ts");

// Generate breakpoint tokens.
const breakpointValues = resolveTokens(
  flattenTokens(readTokenFile("breakpoint", "breakpoint.tokens.json"))
);

const breakpointTokens = {};

for (const [tokenPath, value] of Object.entries(breakpointValues)) {
  if (!tokenPath.startsWith("bibliocommons.")) continue;

  const breakpointName = tokenPath.replace("bibliocommons.", "");

  // Chakra treats "base" (0px) implicitly, so the explicit "xxs" breakpoint
  // at 0px is redundant and intentionally omitted.
  if (breakpointName === "xxs") continue;

  buildNestedTokens(breakpointTokens, breakpointName, {
    $type: "dimension",
    $value: value,
  });
}

await generate(breakpointTokens, "breakpoints", "breakpoints.ts");

// Generate font size tokens.
const fontSizeTokens = buildResponsiveTokens("text", "dimension", "font-size.");

await generate({ ...fontSizeTokens.fontSize }, "fontSizes", "fontSizes.ts");

// Generate typography tokens.
const typographyTokens = {
  fonts: buildResponsiveTokens("text", "string", "font-family.").fontFamily,
  fontSizes: buildResponsiveTokens("text", "dimension", "font-size.").fontSize,
  fontWeights: buildResponsiveTokens("text", "number", "font-weight.")
    .fontWeight,
  lineHeights: buildResponsiveTokens("text", "dimension", "line-height.")
    .lineHeight,
};

await generate(typographyTokens, "typography", "typography.ts");
// Generate color tokens.

const formatColor = (color) => {
  const { hex, alpha } = color;

  if (alpha === 1) return hex;

  const [r, g, b] = color.components.map((value) => Math.round(value * 255));

  return `rgba(${r}, ${g}, ${b}, ${Number(alpha.toFixed(3))})`;
};

const colorValues = resolveTokens(
  flattenTokens(readTokenFile("color", "color.tokens.json"))
);

const colorTokens = {};

for (const [tokenPath, value] of Object.entries(colorValues)) {
  buildNestedTokens(colorTokens, tokenPath, {
    $type: "color",
    $value: formatColor(value),
  });
}

await generate(colorTokens, "colors", "colors.ts");
