const path = require("path");
const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const svgr = require("@svgr/rollup");

module.exports = {
  rollup(config, _options) {
    config.plugins = [
      postcss({
        plugins: [
          // Add vendor prefixes
          autoprefixer(),
          // Minify the css file
          cssnano({
            preset: "default",
          }),
        ],
        inject: false,
        includePaths: [path.join(__dirname, "./node_modules/")],
        extract: path.resolve("dist/styles.css"),
      }),
      // Include SVGs.
      svgr({ titleProp: true }),
      // The rest of the default configuration.
      ...config.plugins,
    ];

    return config;
  },
};
