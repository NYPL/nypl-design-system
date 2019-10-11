const path = require('path');
const globImporter = require('node-sass-glob-importer');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      'import-glob-loader'
    ],
    include: path.resolve(__dirname, '../../src/styles'),
  });

  config.module.rules.push({
    test: /\.(js|jsx)$/,    loader: 'babel-loader',
    exclude: /node_modules/,
    include: [
        path.resolve(__dirname, '../../src/react-components'),
        path.resolve(__dirname, '../stories') ],
    query: {
      presets: [
        '@babel/preset-react',
        '@babel/preset-env'
      ],
      plugins: [
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-transform-arrow-functions',
        '@babel/plugin-proposal-class-properties'
        // '@babel/plugin-symlink-import'
      ],
      babelrc: false,
    }
  });

  // Return the altered config
  return config;
};
