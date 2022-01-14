const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  // Where are the stories?
  stories: [
    "../src/docs/Intro.stories.mdx",
    "../src/docs/Chakra.stories.mdx",
    "../src/components/StyleGuide/*.stories.@(tsx|mdx)",
    "../src/components/**/*.stories.@(tsx|mdx)",
  ],
  // Each addon is added here by either it's name in a string or an object
  // configuration for that addon.
  addons: [
    "storybook-addon-designs",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        // This allows Storybook to read the doc style comments for
        // components and their props.
        sourceLoaderOptions: {
          parser: "typescript",
          injectStoryParameters: true,
        },
      },
    },
    "@storybook/addon-controls",
    "@storybook/addon-queryparams",
    "@storybook/addon-jest",
  ],
  typescript: {
    // Type-check stories during Storybook build.
    check: true,
    // Display the enum variable name rather than the compiled values.
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: false,
    },
  },
  refs: {
    "@chakra-ui/react": { disable: true },
  },
  webpackFinal: async (config) => {
    const assetRule = config.module.rules.find(({ test }) => test.test(".svg"));
    // Exclude svg from the default storybook file-loader.
    assetRule.exclude = /\.svg$/;

    // Add svgr loader to handle svgs.
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            titleProp: true,
          },
        },
      ],
    });

    return {
      ...config,
      // The following allows Chakra styles to propagate through to Storybook.
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};
