# NYPL Design System

This design system is NYPL’s open-source extensible React library for products and experiences with the accessibility as its foundation. It ships functional, stateless components with consistent NYPL styling. You can learn more about the project and its goals [here](https://confluence.nypl.org/display/DIGTL/NYPL+Design+System).

| Table of Contents |                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------- |
| 1.                | [Contributing Quickstart](#contributing-quickstart)                                 |
| 2.                | [Developing With NPM Link](#developing-with-npm-link)                               |
| 3.                | [Using the Design System in Your Product](#using-the-design-system-in-your-product) |
| 4.                | [CDN](#cdn)                                                                         |
| 5.                | [Design System and Product Requirements](#design-system-and-product-requirements)   |
| 6.                | [Storybook and `npm run static`](#storybook-and-npm-run-static)                     |

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

1. Run `npm link` in the Design System repo
2. Go to the consuming application and run `npm link @nypl/design-system-react-components`
3. Go back to the Design System repo and run `npm run watch-webpack`

Changes in the local Design System will now be rebuilt and exported automatically.

To unlink:

1. Run `npm unlink` in the Design System repo
2. Run `npm unlink --no-save @nypl/design-system-react-components` in the consuming application

## Using the Design System in Your Product

To use the Design System in your project:

1. Install the design system `npm install @nypl/design-system-react-components`
2. Import the styles in your main css file `@import '~@nypl/design-system-react-components/dist/styles.css';`
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

Some things in the Design System, such as the universal focus styling and the box-model the DS uses, are namespaced to the `.nypl-ds` class. To include those in your app, add `.nypl-ds` to whichever wrapper tag makes sense in your application (e.g., `<div class="app">` or `<div class="container">`).

#### NYPL DS, NYPL Header, and NYPL Footer

Please note that the NYPL Header and Footer should be _outside_ of the `.nypl-ds` wrapper class.

### CDN

You can also use the Design System styles in your project with our CDN:

`<link href="https://unpkg.com/@nypl/design-system-react-components/dist/styles.css">`

If you need to reference a particular version you can do do by including the version number in the URL:

`<link href="https://unpkg.com/@nypl/design-system-react-components@0.9.1/dist/styles.css">`

You can check out a working Codepen with unpkg [here](https://codepen.io/scoooooooby/pen/wvGzebO).

## Design System and Product Requirements

The NYPL Design System provides accessible stories, but real live data can necessitate additional accessibility requirements beyond what we're committed to in our generic, extensible components. To ensure your products' final result is accessible, please adhere to the accessibility requirements put together by NYPL's accessibility coordinator on [Metronome](http://themetronome.co/).

## Storybook and `npm run static`

There should be no need to run the static Storybook instances while actively developing—it's used exclusively for building out `gh-pages` environment. In the event that you do run the static Storybook npm script, make sure to not commit the `storybook/storybook-static` directory.

When actively developing components or fixing bugs, make sure that the related stories are created or updated. This means updating the respective `[component-name].stories.tsx` or `[component-name].stories.mdx` files. For more information on writing stories, check out the [Anatomy of a Story](https://github.com/NYPL/nypl-design-system/wiki/Anatomy-of-a-Story) wiki page.

For stand-alone document pages in Storybook, you need to:

1. create the `[page-name].stories.mdx` file in `src/docs/`
2. add the file reference to the `.storybook/main.js` file in the `stories` array
