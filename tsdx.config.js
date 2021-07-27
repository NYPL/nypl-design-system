const path = require("path");
const scss = require("rollup-plugin-scss");
const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const svgr = require("@svgr/rollup").default;

module.exports = {
  rollup(config, options) {
    config.plugins = [
      scss({
        output: "dist/styles.css",
        // processor: () => postcss([
        //   autoprefixer(),
        // ]),
        outputStyle: "compressed",
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
        includePaths: [path.join(__dirname, "./node_modules/")],
      }),
      svgr(),
      ...config.plugins,
    ];

    return config;
  },
};
