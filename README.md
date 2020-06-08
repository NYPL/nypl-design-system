![NYPL Logo](./screenshot.png)

# NYPL Design System

Information about the Design System, philosophy, and timeline is available on [Confluence](https://confluence.nypl.org/pages/viewpage.action?spaceKey=DIGTL&title=Design+Systems+Forum)

## [WIP] Things to know before you use

At a high level, Design System is a collection of components.  
These components, whenever possible, will show content rather than throwing an error. This is to prevent your entire page from breaking because the database returned an empty string somewhere and there was no fallback for empty data. It is the product's responsibility to make sure the data is well-checked.

## Getting Started

This repo is versioned with [Lerna](https://github.com/lerna/lerna).

Follow these steps for setup:

1. Pull the repo `git clone https://github.com/NYPL/nypl-design-system.git`
2. Install the module `npm install`
3. Run the storybook instance `npm start`

You can now edit styles or templates in `src`, and they will update and re-build.

## Using the Design System

To use the Design System in your project:

1. Install the design system `npm install @nypl/design-system-react-components`
2. Import the styles in your main css file `@import '~@nypl/design-system-react-components/dist/app.css';`
3. Consult Storybook for the list of available components and props that they require.
4. Usage example

```
import * as DS from '@nypl/design-system-react-components';

function NewComponent(props) {
  return <DS.Link href="https://www.hathitrust.org/">HathiTrust</DS.Link>;
}
```

### Storybook

There should be no need to run the static Storybook instances. If the static Storybook npm script is run, make sure to not commit the `storybook/storybook-static` directory.

When change are merged into `development`, Travis CI will automatically build the Storybook instance as a static site and deploy to the `gh-pages` branch. If this needs to be tested locally, run `npm run storybook:static` and then view the `storybook/index.html` file in a browser. No server needs to be running since this is a static web site.
