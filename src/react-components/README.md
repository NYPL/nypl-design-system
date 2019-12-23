# NYPL Design System React Components
## How to use
This is intended to be used with [NYPL Design System Styles](https://github.com/NYPL/nypl-design-system/tree/master/src/styles)


## Using npm link
Working simultaneously on an npm package and a repo can be tedious and publishing a new version to test changes isn't appropriate. To fix this, run `npm link` on this repo and `npm link @nypl/design-system-react-components` in the app repo to link both repos together. Any changes in the webpack build bundle will be picked up in the app.

For active local development, run `npm run watch-webpack`. This allows webpack to actively watch for any new changes and build a new `design-system-react-components.min.js` bundle.
