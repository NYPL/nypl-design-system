# NYPL Design System

The NYPL Design System (DS) is NYPL’s open-source extensible React library for products and experiences with the accessibility as its foundation. It ships functional, stateless components with consistent NYPL styling. You can learn more about the project and its goals [here](https://github.com/NYPL/nypl-design-system/wiki).

The Storybook documentation can be found [here](https://nypl.github.io/nypl-design-system/storybook-static/?path=/story/introduction--page).

| Table of Contents |                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------- |
| 1.                | [Contributing Quickstart](#contributing-quickstart)                                 |
| 2.                | [Developing with NPM Link](#developing-with-npm-link)                               |
| 3.                | [Using the Design System in Your Product](#using-the-design-system-in-your-product) |
| 4.                | [CDN](#cdn)                                                                         |
| 5.                | [Accessibility Product Requirements](#accessibility-product-requirements)           |
| 6.                | [Storybook](#storybook)                                                             |

## Contributing Quickstart

Follow these steps to setup a local installation of the project:

1. Clone the repo

```sh
$ git clone https://github.com/NYPL/nypl-design-system.git
```

2. Install all the dependencies

```sh
$ npm install
```

3. Run the Storybook instance and view it at `http://localhost:9001`

```sh
$ npm start
```

You can now edit styles or templates in the `src` directory, and they will automatically re-build and update in the Storybook instance. Adding new stories or changing story names will require a page refresh.

Information about active maintainers, how we run reviews, and more can be found in our wiki page for [Contributing to the Design System](https://github.com/NYPL/nypl-design-system/wiki/Contributing-to-the-React-Library).

Follow the [contribution document](/.github/CONTRIBUTING.md) to follow git branching convetions, component creation and update guidelines, testing methodoly, and documentation guidelines.

## Developing with NPM Link

To develop with a local version of the Design System:

1. In the Design System directory, run:

```sh
$ npm link
```

2. Go to the consuming application directory and run:

```sh
$ npm link @nypl/design-system-react-components
```

3. Go back to the Design System directory and run the following command. It allos the local Design System to be rebuilt and exported automatically:

```sh
$ npm run watch-webpack
```

### npm Unlink

To unlink the DS codebase:

1. Run `npm unlink` in the Design System directory.
2. Run `npm unlink --no-save @nypl/design-system-react-components` in the consuming application.

## Using the Design System in Your Product

To use the Design System in your project:

1. Install the DS:

```sh
$ npm install @nypl/design-system-react-components
```

2. Import the styles in your main css file

```css
@import "~@nypl/design-system-react-components/dist/styles.css";
```

3. Consult Storybook for the list of available components and props that they require.

Here's an example with the `Link` component:

```jsx
import { Link } from "@nypl/design-system-react-components";

function NewComponent(props) {
  return <Link href="https://www.hathitrust.org/">HathiTrust</Link>;
}
```

Sometimes you may have conflicts, perhaps with `React-Router`. In that case, you can alias your imports:

```jsx
import * as DS from "@nypl/design-system-react-components";
import { Link } from "react-router";

function NewComponent(props) {
  return (
    <DS.Link>
      <Link to="/license">public domain</Link>
    </DS.Link>
  );
}
```

Some CSS rules in the Design System, such as the universal focus styling and the box-model, are namespaced to the `.nypl-ds` class. To include those in your app, add `.nypl-ds` to whichever wrapper tag makes sense in your application (e.g., `<div class="app">` or `<div class="container">`).

```jsx
<div class="app nypl-ds">
  <!-- your code here -->
</div>
```

### NYPL DS, NYPL Header, and NYPL Footer

Please note that the NYPL Header and Footer should be _outside_ of the `.nypl-ds` wrapper class.

```jsx
<body>
  <NYPLHeader />

  <div class="app nypl-ds">
    <!-- your code here -->
  </div>

  <NYPLFooter />
</body>
```

## CDN

You can also use the Design System styles in your project through the `unpkg` CDN:

```jsx
<link href="https://unpkg.com/@nypl/design-system-react-components/dist/styles.css">
```

If you need to reference a particular version you can do do by including the version number in the URL:

```jsx
<link href="https://unpkg.com/@nypl/design-system-react-components@0.9.1/dist/styles.css">
```

You can check out a working Codepen with unpkg [here](https://codepen.io/edwinguzman/pen/ExmXGKx).

## Accessibility Product Requirements

The NYPL Design System provides accessible stories, but real live data can necessitate additional accessibility requirements beyond what we're committed to in our generic, extensible components. To ensure your products' final result is accessible, please adhere to the accessibility requirements put together by NYPL's accessibility coordinator on [Metronome](http://themetronome.co/).

NYPL's Metronome instance is currently password protected. For access to Metronome, please contact NYPL's UX team or Design System team.

## Storybook

The NYPL Design System leverages Storybook to document all the React components and style guidelines. The Storybook documentation can be found [here](https://nypl.github.io/nypl-design-system/storybook-static/?path=/story/introduction--page).

### Storybook Component Documentation

When actively developing components or fixing bugs, make sure that the related stories are created or updated. This means updating the respective `[component-name].stories.tsx` or `[component-name].stories.mdx` files. For more information on writing stories, check out the [Anatomy of a Story](https://github.com/NYPL/nypl-design-system/wiki/Anatomy-of-a-Story) wiki page.

For stand-alone document pages in Storybook, you need to:

1. create the `[page-name].stories.mdx` file in `src/docs/`
2. add the file reference to the `.storybook/main.js` file in the `stories` array

### Static Build

There should be no need to run the static Storybook instance while actively developing -- it's used exclusively for building out the `gh-pages` environment and deploying it to [Github Pages](https://nypl.github.io/nypl-design-system/storybook-static/?path=/story/introduction--page). In the event that you do run the static Storybook npm script, run:

```sh
$ npm run build-storybook
```

You can then view `/storybook-static/index.html` in your browser. _Make sure not to commit this directory_.
