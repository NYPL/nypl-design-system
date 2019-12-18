const path = require("path");
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    app: [
      "./src/index.ts"
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "design-system.js",
    library: "DesignSystem",
    libraryTarget: "umd"
  },

  // plugins: [
  //   new CleanWebpackPlugin()
  // ],

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   loader: "source-map-loader"
      // },
      {
        test: /\.(ttf|woff|eot|svg|png|woff2|gif|jpg)(\?[\s\S]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};
