# NYPL Design System

![Build Status](https://github.com/nypl/nypl-design-system/actions/workflows/ci.yml/badge.svg?branch=development)

[![npm version](https://badge.fury.io/js/%40nypl%2Fdesign-system-react-components.svg)](https://badge.fury.io/js/%40nypl%2Fdesign-system-react-components)

The NYPL Design System (DS) is NYPL’s open-source extensible React library for products and experiences with the accessibility as its foundation. It ships functional, stateless components with consistent NYPL styling. You can learn more about the project and its goals [on the project's wiki](https://github.com/NYPL/nypl-design-system/wiki).

Storybook documentation

- [Production - deployed to Github Pages](https://nypl.github.io/nypl-design-system/storybook-static/?path=/story/introduction--page)
- [Development - deployed to Tugboat QA](https://development-6y1v6na1ceqnmojvc5akrm5ewys3cshs.tugboat.qa/?path=/story/introduction--page)

| Table of Contents |                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------- |
| 1.                | [Contributing Quickstart](#contributing-quickstart)                                 |
| 2.                | [Developing with NPM Link](#developing-with-npm-link)                               |
| 3.                | [Using the Design System in Your Product](#using-the-design-system-in-your-product) |
| 4.                | [CDN](#cdn)                                                                         |
| 5.                | [Accessibility Product Requirements](#accessibility-product-requirements)           |
| 6.                | [Storybook](#storybook)                                                             |
| 7.                | [Typescript Usage](#typescript-usage)                                               |
| 8.                | [Unit Testing](#unit-testing)                                                       |

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

The NYPL Design System leverages Storybook to document all the React components and style guidelines. The Storybook documentation can be found [here](https://nypl.github.io/nypl-design-system/storybook-static/?path=/story/introduction--page). For your convenience, the NYPL Design System components have been organized into logical categories based on both form and function. Please refer to the COMPONENTS section in the Storybook sidebar.

### Documentation Instances

There are currently two main instances of the NYPL Design System Storybook documentation. There are also "preview" sites that are used to quickly and easily view pull request changes.

**Production**

The production Storybook documentation is deployed to [Github Pages](https://nypl.github.io/nypl-design-system/storybook-static/?path=/story/introduction--page). This is the main instance we use to share the latest stable release of the NYPL Design System. This documentation site is deployed through [Github Actions](/.github/workflows/gh-pages.yml) only on merges to the `release` branch.

As of July, 2021, the Github Pages production site gets deployed every two weeks on the same schedule as npm releases.

**Development**

The development Storybook documentation is deployed to [Tugboat QA](https://development-6y1v6na1ceqnmojvc5akrm5ewys3cshs.tugboat.qa/?path=/story/introduction--page). This development site has all the working updates that get merged to the `development` branch. This means that this site is constantly being updated as pull requests are being merged in. This site is used to see the lastest changes during a working sprint before a production release is made.

**Preview Sites**

Preview Storybook documentation sites are deployed to Tugboat QA for every pull request. They follow a pattern such as `pr[number]-[hash].tugboat.qa` where `[number]` is the number of the pull request it is deploying. For example, for pull request #101, Tugboat will deploy a "preview" site to `pr101-wldudndlk24kas42.tugboat.qa`. Since these "preview" sites are brought up only for pull requests, this means that the URL varies and that those instances are eventually shut off. They are not meant to be used as long-term sites but rather for reviewing working changes within the team.

### React Component Documentation

When actively developing components or fixing bugs, make sure that the related stories are created or updated. This means updating the respective `[component-name].stories.tsx` or `[component-name].stories.mdx` files. For more information on writing stories, check out the [Anatomy of a Story](https://github.com/NYPL/nypl-design-system/wiki/Anatomy-of-a-Story) wiki page.

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

There should be no need to run the static Storybook instance while actively developing -- it's used exclusively for building out the `gh-pages` environment and deploying it to [Github Pages](https://nypl.github.io/nypl-design-system/storybook-static/?path=/story/introduction--page). In the event that you do run the static Storybook npm script, run:

```sh
$ npm run build-storybook
```

You can then view `/storybook-static/index.html` in your browser. _Make sure not to commit this directory_.

## Typescript Usage

The NYPL Design System is built with Typescript. Check out the Design System's [Typescript documentation](/typescript.md) for more information on why we chose to build React components in Typescript and the benefits and the gotchas we encountered.

## Unit Testing

The NYPL Design System runs unit tests with Jest and React Testing Library.

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

```jsx
import renderer from "react-test-renderer";

// ...

it("Renders the UI snapshot correctly", () => {
  const tree = renderer
    .create(
      <Notification id="notificationID">
        <NotificationHeading>Notification Heading</NotificationHeading>
        <NotificationContent>Notification content.</NotificationContent>
      </Notification>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
```

If this is a new test and we run `npm test`, a [`/__snapshots__/Notification.test.tsx.snap`](/src/components/Notification/__snapshots__/Notification.test.tsx.snap) file is created. This holds the DOM structure as well as any inline CSS that was added.

```jsx
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
