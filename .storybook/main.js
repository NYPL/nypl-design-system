const custom = require("../webpack.config.js");

module.exports = {
  // Where are the stories?
  stories: [
    "../src/Intro.stories.mdx",
    "../src/components/**/*.stories.@(tsx|mdx)",
  ],
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
  ],
  // We want the repo's webpack configuration to be a part of the Storybook
  // configuration for SCSS and SVGs, but we want to keep the existing
  // configuration loaders to use MDX when the project builds.
  webpackFinal: config => {
    const { rules } = config.module;
    // We still want MDX-related rules. This is not ideal as the order of the
    // rules can change, but we can't easily override custom SVG or Typescript
    // webpack configuration.
    const customRules = [rules[4], rules[5], ...custom.module.rules];
    return {
      ...config,
      module: {
        ...config.module,
        rules: customRules,
      },
    };
  },
};
