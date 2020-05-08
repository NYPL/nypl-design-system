const path = require('path');
const globImporter = require('node-sass-glob-importer');
const packageConfig = require('../../src/react-components/webpack.dev.js');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Add config from react-components
  config.module.rules.unshift(...packageConfig.module.rules);

  // Adds SCSS support
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
          importer: globImporter(),
        }
      }
    ],
    include: [path.resolve(__dirname, './styles/**/*')]
  });

  config.resolve.extensions.push(...packageConfig.resolve.extensions);

  // Return the altered config
  return config;
};
