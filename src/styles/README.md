# NYPL Design System Styles

For an overview of the entire Design System, check out the Design System [README](https://github.com/NYPL/nypl-design-system/blob/development/README.md).

## How to Use
The Design System Styles provides the full and uncompiled scss files. The product is responsible to import the styles into its project. To import the package, run

```
  npm install --save @nypl/design-system-styles
```

Configurations need to be updated to support importing files. Check out the [react storybook config](https://github.com/NYPL/nypl-design-system/blob/development/storybook/.storybook-react/webpack.config.js) or the [twig storybook config](https://github.com/NYPL/nypl-design-system/blob/development/storybook/.storybook-html/webpack.config.js) as full examples.

To set it up, the [`node-sass-glob-importer`](https://www.npmjs.com/package/node-sass-glob-importer) is required. In your webpack file make sure to include it and use it as an importer with the `sass-loader`:

```
// webpack.config.js
const globImporter = require('node-sass-glob-importer');

module.exports = async({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      ...
      {
        loader: 'sass-loader',
        options: {
          importer: globImporter(),
        }
      }
    ]
  });

  // other configs
};
```
