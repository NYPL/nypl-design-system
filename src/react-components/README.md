# NYPL Design System React Components

For an overview of the entire Design System, check out the Design System [README](https://github.com/NYPL/nypl-design-system/blob/development/README.md).

## How to use
This is intended to be used with [NYPL Design System Styles](https://github.com/NYPL/nypl-design-system/blob/development/src/styles/README.md)

Once the Styles are imported with the steps above, import the React Components using:

```
  npm install --save @nypl/design-system-react-components
```

The components can be imported using `import * as DS from '@nypl/design-system-react-components';` and rendering the appropriate component as needed.

Breadcrumbs example:
```
const Breadcrumbs = ({ props }) => {
  const arrayOfLinks = [...];
  return <DS.Breadcrumbs breadcrumbs={arrayOfLinks} />;
);
```

For a list of components available, check the [export file](https://github.com/NYPL/nypl-design-system/blob/development/src/react-components/src/index.ts).


## Using npm link
Working simultaneously on an npm package and a repo can be tedious and publishing a new version to test changes isn't appropriate. To fix this, run  `npm run dist` and `npm link` on this repo and `npm link @nypl/design-system-react-components` in the app repo to link both repos together. Any changes in the webpack build bundle will be picked up in the app.

For active local development, run `npm run watch-webpack`. This allows webpack to actively watch for any new changes and build a new `design-system-react-components.min.js` bundle.

Troubleshooting note: If you receive a permissions error related to `icons` when running `npm link`, delete the empty `@nypl` folder under `react-components/node_modules` and try again
