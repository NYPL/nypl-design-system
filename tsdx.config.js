const path = require("path");
const scss = require("rollup-plugin-scss");
const svgr = require("@svgr/rollup").default;

module.exports = {
  rollup(config, options) {
    config.plugins = [
      scss({
        output: "dist/styles.css",
        outputStyle: "compressed",
        inject: false,
        // Only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
        includePaths: [path.join(__dirname, "./node_modules/")],
      }),
      // Include SVGs.
      svgr(),
      // The rest of the default configuration.
      ...config.plugins,
    ];

    return config;
  },
};
