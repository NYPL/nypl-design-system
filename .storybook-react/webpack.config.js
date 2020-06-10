const path = require("path");
const globImporter = require("node-sass-glob-importer");
const packageConfig = require("../webpack.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    //Add plugins
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: "styles.css",
            chunkFilename: "[id].css",
        })
    );

    // Remove SVG config from storybook
    config.module.rules = config.module.rules.map((rule) => {
        if (rule.test.toString().includes("svg")) {
            const test = rule.test
                .toString()
                .replace("svg|", "")
                .replace(/\//g, "");
            return { ...rule, test: new RegExp(test) };
        } else {
            return rule;
        }
    });

    // Add config from react-components
    config.module.rules.unshift(...packageConfig.module.rules);

    config.resolve.extensions.push(...packageConfig.resolve.extensions);
    // Return the altered config
    return config;
};
