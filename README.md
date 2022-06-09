# Reservoir Design System

![Build Status](https://github.com/nypl/nypl-design-system/actions/workflows/ci.yml/badge.svg?branch=development)

[![npm version](https://badge.fury.io/js/%40nypl%2Fdesign-system-react-components.svg)](https://badge.fury.io/js/%40nypl%2Fdesign-system-react-components)

The Reservoir Design System (DS) is NYPL’s open-source extensible React library for products and experiences with the accessibility as its foundation. It ships functional, stateless components with consistent NYPL styling. You can learn more about the project and its goals [on the project's wiki](https://github.com/NYPL/nypl-design-system/wiki).

Storybook documentation

- [Production - deployed to Github Pages](https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/story/welcome--page)
- [Development/QA - deployed to Vercel](https://nypl-design-system.vercel.app/?path=/story/welcome--page)

| Table of Contents |                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------- |
| 1.                | [Contributing Quickstart](#contributing-quickstart)                                 |
| 2.                | [Developing with NPM Link](#developing-with-npm-link)                               |
| 3.                | [Using the Design System in Your Product](#using-the-design-system-in-your-product) |
| 4.                | [Using Chakra UI Components](#using-chakra-ui-components)                           |
| 5.                | [Storybook](#storybook)                                                             |
| 6.                | [Typescript Usage](#typescript-usage)                                               |
| 7.                | [Unit Testing](#unit-testing)                                                       |
| 8.                | [Accessibility](#accessibility)                                                     |
| 9.                | [CDN](#cdn)                                                                         |

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

3. Run the Storybook instance and view it at `http://localhost:6006`

```sh
$ npm run storybook
```

You can now edit styles or templates in the `src` directory, and they will automatically re-build and update in the Storybook instance. Adding new stories or changing story names will require a page refresh.

Information about active maintainers, how we run reviews, and more can be found in our wiki page for [Contributing to the Design System](https://github.com/NYPL/nypl-design-system/wiki/Contributing-to-the-React-Library).

Follow the [contribution document](/.github/CONTRIBUTING.md) to follow git branching convetions, component creation and update guidelines, testing methodoly, and documentation guidelines.

### Node Version

We recommend using Node version 12.22.x since the DS has some issues with versions higher than 12.x. The Github Actions for linting, automated testing, deploying to Github Pages, and releasing to npm are all running on Node 12.x.

If you are using `nvm`, the local `.nvmrc` file can be use to set your local Node version with the `nvm use` command (will be set to `12.22.x`).

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
$ npm start
```

### Error Troubleshooting

It's possible when running `npm link` that you'll get an `Invalid Hook` issue. If this occurs, it's most likely caused by having two versions of React when trying to run the application while the NYPL DS package is linked. This [Duplicate React](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react) issue is covered by the React team.

To be more specific, you should run the following in your local DS directory, where `[../path/to/application]` is the local directory of the consuming application.

```sh
$ npm link [../path/to/application]/node_modules/react
```

Now you should be able to run `npm start` in the DS directory and `npm run dev` (or whatever your application uses) in the application directory and not get an `Invalid Hook` error.

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

3. Import the `DSProvider` component

In order to use DS components in a consuming application, there is a necessary step that must be done for component styles to properly render. Consuming applications need to wrap all the DS components with a simple provider component. Fortunately, this only needs to be done once at the top level of the consuming application.

Once the following is completed, DS components that internally use Chakra UI will render styles properly.

```jsx
// your main application file
import { DSProvider } from "@nypl/design-system-react-components";

// ...
const ApplicationContainer = (props) => {
  // ...
  return (
    <DSProvider>
      <div className="my-app">
        // ...
        {children}
      </div>
    </DSProvider>
  );
};
```

4. Use DS components!

Consult Storybook for the list of available components and props that they require.

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

### NYPL DS, NYPL Header, and NYPL Footer

```jsx
<body>
  <NYPLHeader />

  <div class="app">
    <!-- your code here -->
  </div>

  <NYPLFooter />
</body>
```

## Using Chakra UI Components

The Chakra UI component library has been integrated into the Reservoir Design System. We are still progressing towards using Chakra components and patterns to build DS components, and therefore documentation and features are expected to change. While the implementation details of DS components will use Chakra, the DS package itself will export _some_ Chakra components.

The list of re-exported Chakra components can be found in the main [index.ts](/src/index.ts) file. They include:

- `Box`, `Center`, `Circle`, `Grid`, `GridItem`, `HStack`, `Square`, `Stack`, `VStack`

Find more information about the Design System's internal use of Chakra to create and refactor components in the Storybook documentation page. The following two links have the same information but in different formats for your reading preference:

- [MDX format](/src/docs/Chakra.stories.mdx)
- [Storybook page](https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/story/chakra-ui--page)

Chakra was integrated into the Design System in version `0.25.0`. For those looking to update to a version greater than or equal `0.25.0`, check out our [Chakra Migration Guide](/CHAKRA_MIGRATION_GUIDE.md).

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

## Storybook

The Reservoir Design System leverages Storybook to document all the React components and style guidelines. The Storybook documentation can be found [here](https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/story/welcome--page). For your convenience, the Reservoir Design System components have been organized into logical categories based on both form and function. Please refer to the COMPONENTS section in the Storybook sidebar.

### Documentation Instances

There are currently two main instances of the Reservoir Design System Storybook documentation. There are also "preview" sites that are used to quickly and easily view pull request changes.

**Production**

The production Storybook documentation is deployed to [Github Pages](https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/story/welcome--page). This is the main instance we use to share the latest stable release of the Reservoir Design System. This documentation site is deployed through [Github Actions](/.github/workflows/gh-pages.yml) only on merges to the `release` branch.

As of July, 2021, the Github Pages production site gets deployed every two weeks on the same schedule as npm releases.

**Development**

The development Storybook documentation is deployed to [Vercel](https://nypl-design-system.vercel.app/?path=/story/welcome--page). This development site has all the working updates that get merged to the `development` branch. This means that this site is constantly being updated as pull requests are being merged in. This site is used to see the lastest changes during a working sprint before a production release is made.

**Preview Sites**

Preview Storybook documentation sites are deployed to Vercel on every commit push to every branch in this repository. They follow a pattern such as `nypl-design-system-[hash]-nypl.vercel.app` where `[hash]` is a random hash created by Vercel. This means that the URL varies and that those instances are eventually shut off. They are not meant to be used as long-term sites but rather for reviewing working changes within the team.

### React Component Documentation

When actively developing components or fixing bugs, make sure that the related stories are created or updated. This means updating the respective `[component-name].stories.mdx` file. For information on how to write stories, check out the [Anatomy of a Story](https://github.com/NYPL/nypl-design-system/wiki/Anatomy-of-a-Story) wiki page.

For stand-alone document pages in Storybook, you need to:

1. create the `[page-name].stories.mdx` file in `src/docs/`
2. add the file reference to the `.storybook/main.js` file in the `stories` array

### React Component Versions

To help consuming application developers understand which version of the DS is required for a specific component, each component story page includes the following:

- when a component was added to the DS
- minimum version of the DS required for the latest version of a component

**Example Component Version Table**

| Component Version | DS Version |
| ----------------- | ---------- |
| Added             | `0.20.1`   |
| Latest            | `0.23.2`   |

### Static Build

There should be no need to run the static Storybook instance while actively developing -- it's used exclusively for building out the `gh-pages` environment and deploying it to [Github Pages](https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/story/welcome--page). In the event that you do run the static Storybook npm script, run:

```sh
$ npm run build-storybook:v1
```

You can then view `/reservoir/v1/index.html` in your browser. _Make sure not to commit this directory_.

## Typescript Usage

The Reservoir Design System is built with Typescript. Check out the Design System's [Typescript documentation](/TYPESCRIPT.md) for more information on why we chose to build React components in Typescript and the benefits and the gotchas we encountered.

## Unit Testing

The Reservoir Design System runs unit tests with Jest and React Testing Library.

To run all tests once:

```sh
$ npm test
```

If you're actively writing or updating tests, you can run the tests in watch mode. This will wait for any changes and run when a file is saved:

```sh
$ npm run test:watch
```

If you want to run tests on only one specific file, run:

```sh
$ npm test -- src/[path/to/file]
```

For example, to test the `Link` component, run:

```sh
$ npm test -- src/components/Link/Link.test.tsx
```

### Snapshot Testing

The NYPL DS implements snapshot testing with `react-test-renderer` and `jest`. Using React Testing Library to test our components works well to make sure that what the user sees is what the component should be rendering. There are also some behavioral tests that test user interactions. If, however, a component's DOM or SCSS styling was unintentionally updated, we can catch those bugs through snapshot testing.

The `react-test-renderer` package, will create a directory and a file to hold `.snap` files after a unit test is created. Using the `Notification` component as an example, this is the basic layout for a snapshot test:

```tsx
import renderer from "react-test-renderer";

// ...

it("Renders the UI snapshot correctly", () => {
  const tree = renderer
    .create(
      <Notification
        id="notificationID"
        notificationHeading="Notification Heading"
        notificationContent={<>Notification content.</>}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
```

If this is a new test and we run `npm test`, a [`/__snapshots__/Notification.test.tsx.snap`](/src/components/Notification/__snapshots__/Notification.test.tsx.snap) file is created. This holds the DOM structure as well as any inline CSS that was added.

```tsx
exports[`Notification Snapshot Renders the UI snapshot correctly 1`] = `
<aside
  className="notification notification--standard "
  id="notificationID"
>
  // Removed for brevity...
</aside>
`;
```

Now, if we unintentionally update the `Notification.tsx` component to render a `div` instead of an `aside` element, this test will fail.

If you want to update any existing snapshots, re-run the test script as:

```sh
$ npm test -- --updateSnapshot
```

Each snapshot file also includes a link to its [Jest Snapshot documentation](https://jestjs.io/docs/snapshot-testing) which is recommended to read!

### Storybook Jest Addon

Through the [`@storybook/addon-jest`](https://www.npmjs.com/package/@storybook/addon-jest) plugin, we can see a component's suite of unit tests right Storybook. In the "Addons" panel, a "Test" tab will display all the tests for the current component and whether they pass or fail.

After writing new tests, run `npm run test:generate-output` to create a new JSON file that is used by Storybook. This JSON file contains all the test suites for all the components and Storybook picks this up and automatically combines a component with its relevant unit tests. Make sure to commit this file although new builds on Github Pages will recreate this file for the production Storybook instance.

## Accessibility

### Development and Storybook

The Reservoir Design System is built with accessibility in mind. By using Chakra UI as our foundational base, the custom DS components built with Chakra have accessibility concerns already implemented. On top of built-in accessible elements, DS components internally work to link labels with input elements, to add correct `aria-*` attributes, to visually hide text but still associate it with the correct element for titles and descriptions, to auto-generate a random `id` attribute if none was passed, and much more.

We make use of:

- `eslint-plugin-jsx-a11y` for finding accessibility errors through linting and through IDE environments.
- `jest-axe` for running [`axe-core`](https://github.com/dequelabs/axe-core) on _every_ component's unit test file. This is part of the automated tests that run in Github Actions through the `npm test` command.
- `@storybook/addon-a11y` for real-time accessibility testing in the browser through Storybook. _Every_ component has a tab that displays violations, passes, and incomplete checks performed by `axe-core`.

If applicable, DS components have section(s) on accessibility in their Storybook documentation. For example, in the `Slider`'s [Storybook file](/src/components/Slider/Slider.stories.mdx), there are two "Accessibility" sections for each of the two `Slider` types, "single" and "range". This gives an explanation on additional changes we made to make the combination of elements in the `Slider` component accessible.

### Product Requirements

The Reservoir Design System provides accessible stories, but real live data can necessitate additional accessibility requirements beyond what we're committed to in our generic, extensible components. To ensure your products' final result is accessible, please adhere to the accessibility requirements put together by NYPL's accessibility coordinator on [Metronome](http://themetronome.co/).

NYPL's Metronome instance is currently password protected. For access to Metronome, please contact NYPL's UX team or Design System team.

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
