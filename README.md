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

## Working with Design System Modules
By default, the repo links everything under `src` for local development.  Sometimes, development may need to happen under a fixed version of `styles`. 
1. Navigate to `storybook`
2. `Run npm install design-system-styles@[version-number] --save-dev --save-exact`
3. You may need to remove `node_modules` and/or `package-lock.json`, depending on whether the install is throwing errors

## Publishing
You can publish npm modules from this repo by running:
```lerna publish```

`storybook` repo is private - Its version will be bumped, but it will not be published

After publishing new packages, remember also to bump the versions (or run `npm update` in `storybook`) so that it will pull in new npm modules.  


