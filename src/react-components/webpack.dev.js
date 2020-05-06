const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
module.exports = {
  mode: 'development',
  entry: {
    app: [
      "./src/index.ts"
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
    })
    // new SpriteLoaderPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".svg", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loaders: [
          'ts-loader',
          'react-docgen-typescript-loader'
        ]
      },
      {

      },
      {
        test: /\.svg$/,
        // include: [path.join(__dirname, "../icons/")],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        }]
      },
      {
        test: /\.(ttf|woff|eot|png|svg|woff2|gif|jpg)(\?[\s\S]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};

