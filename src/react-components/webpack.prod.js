const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    app: [
      "./src/index.ts"
    ]
  },
  target: 'node',
  externals: [nodeExternals()],
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
        test: /\.svg$/,
        use: [{
          loader: 'svg-inline-loader',
        }],
      },
      {
        test: /\.(ttf|woff|eot|png|woff2|gif|jpg)(\?[\s\S]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};
