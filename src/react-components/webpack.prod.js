const path = require("path");
const globImporter = require('node-sass-glob-importer');
const designSystemStylePath = [require.resolve('@nypl/design-system-styles')];
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT_PATH = path.resolve(__dirname);

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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.scss',
    }),
  ],

  resolve: {
    modules: ['node_modules'],
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: "ts-loader",
      },
      {
        test: /\.(ttf|woff|eot|svg|png|woff2|gif|jpg)(\?[\s\S]+)?$/,
        loader: 'url-loader?limit=100000'
      }, 
      {
        test: /\.scss?$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: globImporter(),
                includePaths: designSystemStylePath,
              }
            },
          }],
        include: path.resolve(ROOT_PATH, 'src'),
      },
    ]
  }
};
