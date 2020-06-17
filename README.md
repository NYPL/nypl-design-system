# NYPL Design System

This design system is NYPL’s open-source extensible tool for products and experiences. With the accessibility as its foundation, the system consists of working code via this React library, our [Drupal library](https://github.com/NYPL/nypl-d8/tree/development/web/themes/custom/nypl_emulsify), and our [design tools and resources](https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10733%3A56795).

| Table of Contents |                                                                                    |
| ----------------- | ---------------------------------------------------------------------------------- |
| 1.                | [Contributing Quickstart](#contributing-quickstart)                                |
| 2.                | [Developing With NPM Link](#developing-with-npm-link)                              |
| 3.                | [Using the Design System in Your Product](using-the-design-system-in-your-product) |
| 4.                | [Design System and Product Requirements](design-system-and-product-requirements)   |

## Contributing Quickstart

Follow these steps for setup:

1. Pull the repo `git clone https://github.com/NYPL/nypl-design-system.git`
2. Install the module `npm install`
3. Run the storybook instance `npm start`

You can now edit styles or templates in `src`, and they will update and re-build.
Adding new stories or changing story names will still require a Storybook restart.

Information about active maintainers, how we run reviews, and more can be found in our wiki page for [Contributing to the Design System](https://github.com/NYPL/nypl-design-system/wiki/Contributing-to-the-Design-System).

## Developing with NPM Link

To develop with a local version of the design system:

1. Run `npm link`
2. Go to the consuming application and run `npm link @nypl/design-system-react-components`
3. Go back to the Design System repo and run `npm run watch-webpack`

Changes in the local Design System will now be rebuilt and exported automatically.

## Using the Design System in Your Product

To use the Design System in your project:

1. Install the design system `npm install @nypl/design-system-react-components`
2. Import the styles in your main css file `@import '~@nypl/design-system-react-components/dist/app.css';`
3. Consult Storybook for the list of available components and props that they require.

Here's an example with `Link`:

```
import { Link } from '@nypl/design-system-react-components';

function NewComponent(props) {
  return <Link href="https://www.hathitrust.org/">HathiTrust</Link>;
}
```

Sometimes you may have conflicts, perhaps with `React-Router`. In that case, you can alias your imports:

```
import * as DS from '@nypl/design-system-react-components';
import { Link } from 'react-router'

function NewComponent(props) {
  return <DS.Link><Link to="/license">public domain</Link></DS.Link>;
}
```

## Design System and Product Requirements

The NYPL Design System provides accessible stories, but real live data can necessitate additional accessibility requirements beyond what we're committed to in our generic, extensible components. To ensure your products' final result is accessible, please adhere to the accessibility requirements put together by NYPL's accessibility coordinator on [Metronome](http://themetronome.co/).
