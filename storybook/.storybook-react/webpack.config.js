const path = require('path');
const globImporter = require('node-sass-glob-importer');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Allows for inline comments to be used with Typescript for documenting
  // React components.
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loaders: [
      'ts-loader',
      'react-docgen-typescript-loader'
    ]
  });

  config.module.rules.push({
    test: /\.svg$/,
    include: [path.join(__dirname, "./icons/")],
    loader: "file-loader?name=assets/[name].[ext]"
  });

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

  config.resolve.extensions.push(".ts", ".tsx");

  // Return the altered config
  return config;
};
