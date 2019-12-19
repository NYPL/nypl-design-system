const path = require("path");

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
    filename: "design-system-react-components.min.js",
    library: "DesignSystemReactComponents",
    libraryTarget: "umd",
    // This allows a server-side app to import this package and not crash.
    globalObject: 'this'
  },

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
      {
        test: /\.(ttf|woff|eot|svg|png|woff2|gif|jpg)(\?[\s\S]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};
