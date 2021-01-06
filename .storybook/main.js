const custom = require("../webpack.config.js");

module.exports = {
  // Where are the stories?
  stories: ["../src/components/**/*.stories.tsx"],
  // Each addon is added here by either it's name in a string or an object
  // configuration for that addon.
  addons: [
    "storybook-addon-designs",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-docs",
      options: {
        // This allows Storybook to read the doc style comments for
        // components and their props.
        sourceLoaderOptions: {
          parser: "typescript",
          injectStoryParameters: true,
        },
      },
    },
    "@storybook/addon-controls",
  ],
  // We want the repo's webpack configuration to be a part of the
  // Storybook configuration for SCSS and SVGs.
  webpackFinal: config => ({
    ...config,
    module: {
      ...config.module,
      rules: custom.module.rules,
    },
  }),
};
