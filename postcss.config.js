const postcssCustomMedia = require("postcss-custom-media");

module.exports = {
  plugins: [
    require("postcss-simple-vars"),
    require("postcss-import"),
    require("postcss-mixins"),
    postcssCustomMedia({ importFrom: "./src/styles/base/_02-breakpoints.css" }),
    require("precss"),
    require("postcss-nested"),
    require("autoprefixer"),
  ],
};
