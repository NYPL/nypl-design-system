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
