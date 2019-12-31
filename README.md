![NYPL Logo](./screenshot.png)

# NYPL Design System
Information about the Design System, philosophy, and timeline is available on [Confluence](https://confluence.nypl.org/pages/viewpage.action?spaceKey=DIGTL&title=Design+Systems+Forum) 

## Getting Started
This repo is versioned with [Lerna](https://github.com/lerna/lerna).  

Follow these steps for setup: 
 
1. Pull the repo `git clone https://github.com/NYPL/nypl-design-system.git`
2. Install Lerna globally `npm i -g lerna`
3. Install all the packages `npm run install-all`
4. Run `npm run storybook:twig` or `npm run storybook:react` depending on the product you are working on. 

You can now edit styles or templates in `src`, and they will update and re-build.  

## Troubleshooting
If there is an issue with `npm run install-all`, eg: 
* cb() not called
* Cannot read package.json.[random string of numbers]

Clean your git state thorougly with `git clean -fdx` and get rid of all your `package-lock.json`s with `find . -name "package-lock.json" -exec rm -rf '{}' +; `, and try `npm run install-all` again. We are tracking fixes to this in https://github.com/NYPL/nypl-design-system/issues/36

While we are getting our `lerna` process ironed out, packages will sometimes not get pulled in correctly.  When this happens, auto-rebuild can be broken.  If a single package is not found, cd into the directory and run `npm link {package name}`.  

## Contributing to Design System
By default, the repo links everything under `src` for local development.  Sometimes, development may need to happen under a fixed version of `styles`. 
1. Navigate to `storybook`
2. `Run npm install design-system-styles@[version-number] --save-dev --save-exact`
3. You may need to remove `node_modules` and/or `package-lock.json`, depending on whether the install is throwing errors

## Publishing
You can publish npm modules from this repo by running:
```lerna publish```

`storybook` repo is private - Its version will be bumped, but it will not be published

After publishing new packages, remember also to bump the versions (or run `npm update` in `storybook`) so that it will pull in new npm modules.  

## Using the Design System
The Design Systems offers modules and styles in different packages.  To use modules from the Design System, you need the [styles](https://www.npmjs.com/package/@nypl/design-system-styles) and either [react](https://www.npmjs.com/package/@nypl/design-system-react-components) or [twig](https://www.npmjs.com/package/@nypl/design-system-twig) packages.  

### Importing Styles
The design system does not compile styles and templates.  It is up to the product to do this.  This generally means updating your webpack (grunt, gulp, etc) config.  You can use the [storybook config](https://github.com/NYPL/nypl-design-system/blob/development/storybook/.storybook-react/webpack.config.js) as an example, and further documentation in the [styles readme](https://github.com/NYPL/nypl-design-system/blob/development/styles/README.md).

Make sure to include `glob-importer` in your (sass-loader)[https://github.com/NYPL/nypl-design-system/blob/development/storybook/.storybook-react/webpack.config.js#L2].

### Importing React Components
Once the Design System Styles package is imported, follow the steps in the React Components [README](https://github.com/NYPL/nypl-design-system/blob/development/src/react-components/README.md) to import and use the React Components.
