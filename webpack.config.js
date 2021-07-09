const path = require("path");
const globImporter = require("node-sass-glob-importer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    app: ["./src/index.ts"],
  },
  target: "node",
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "design-system-react-components.min.js",
    library: "DesignSystemReactComponents",
    libraryTarget: "umd",
    // This allows a server-side app to import this package and not crash.
    globalObject: "this",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".css"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
          {
            loader: "react-docgen-typescript-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.scss?$/ || /\.css?$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                importer: globImporter(),
              },
            },
          },
        ],
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.(ttf|woff|eot|png|woff2|gif|jpg)(\?[\s\S]+)?$/,
        loader: "url-loader?limit=100000",
      },
    ],
  },
};
