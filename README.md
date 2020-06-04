![NYPL Logo](./screenshot.png)

# NYPL Design System

Information about the Design System, philosophy, and timeline is available on [Confluence](https://confluence.nypl.org/pages/viewpage.action?spaceKey=DIGTL&title=Design+Systems+Forum)

## [WIP] Things to know before you use

At a high level, Design System is a collection of components.  
These components, whenever possible, will show content rather than throwing an error. This is to prevent your entire page from breaking because the database returned an empty string somewhere and there was no fallback for empty data. It is the product's responsibility to make sure the data is well-checked.

## Getting Started

This repo is bootstrapped with [tsdx](https://github.com/jaredpalmer/tsdx).

Follow these steps for setup:

1. Clone the repo `git clone https://github.com/NYPL/nypl-design-system.git`
3. Install packages `npm install`
4. Run `npm start`.

You can now edit styles or templates in `src`, and they will update and re-build.

## Running Storybook

This repo uses storybook as a sandbox for developing components, as well as documentation for consumers. To run storybook, use `npm run storybook`. 

## Publishing

This repository is published automatically via Github Actions. All merges into `master` create a new release and publish that release on npm.

## Using the Design System

To use the design system, simply `npm install @nypl/ds` and then import and use components:

```js
import { SearchBar } from '@nypl/ds`;
```

You will need to import the design system stylesheet once globally. For example, in your app's entrypoint:

```js
// index.tsx
import "@nypl/ds/styles"
```
