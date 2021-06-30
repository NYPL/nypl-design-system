const custom = require("../webpack.config.js");

module.exports = {
  // Where are the stories?
  stories: [
    "../src/docs/Intro.stories.mdx",
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
    "@storybook/addon-queryparams",
  ],
  // We want the repo's webpack configuration to be a part of the Storybook
  // configuration for SCSS and SVGs, but we want to keep the existing
  // configuration loaders to use MDX when the project builds.
  webpackFinal: config => {
    const { rules } = config.module;
    // We still want MDX-related configuration rules from Storybook's webpack
    // which come from `rules[4]`. This is not ideal as the order of the
    // rules can change and this will break if this rule is removed.
    // The custome webpack rules added here are from `webpack.config.js` and
    // they are loaders to handle SVG loading, Typescript compilation, and
    // CSS generation from SCSS.
    const customRules = [rules[4], ...custom.module.rules];
    return {
      ...config,
      module: {
        ...config.module,
        rules: customRules,
      },
    };
  },
};
