# css-node-extract
[![Build Status](https://travis-ci.org/maoberlehner/css-node-extract.svg?branch=master)](https://travis-ci.org/maoberlehner/css-node-extract)
[![Coverage Status](https://coveralls.io/repos/github/maoberlehner/css-node-extract/badge.svg?branch=master)](https://coveralls.io/github/maoberlehner/css-node-extract?branch=master)
[![GitHub stars](https://img.shields.io/github/stars/maoberlehner/css-node-extract.svg?style=social&label=Star)](https://github.com/maoberlehner/css-node-extract)

Extract certain nodes from CSS code.

## Filters
- **at-rules**: `@media`, `@supports`, `@mixin`,...
- **declarations**: `$variable`, `@variable`,...
- **functions**: `@function`
- **mixins**: `@mixin` and `.less-mixin-selector()`
- **rules**: `.class-selector`, `#id-selector`,...
- **silent**: Extract only nodes that do not compile to CSS code (mixins, placeholder selectors, variables,...)
- **variables**: `$sass-variable` and `@less-variable`
- **make-your-own**: Define custom filters

## Demos
```js
const cssNodeExtract = require('css-node-extract');
const postcssScssSyntax = require('postcss-scss');

const options = {
  // CSS source code as string.
  css: '$variable: "value"; .selector { } .other-selector { }',
  // Extract only variables.
  filters: ['variables'],
  // postcss syntax plugin to add support for SCSS code.
  postcssSyntax: postcssScssSyntax
};

// Asynchronous:
cssNodeExtract.process(options).then((extractedCss) => {
  console.log(extractedCss); // Outputs: '$variable: "value";'.
});

// Synchronous:
const extractedCss = cssNodeExtract.processSync(options);
console.log(extractedCss); // Outputs: '$variable: "value";'.
```

### Custom filter
```js
const cssNodeExtract = require('css-node-extract');

const options = {
  // CSS source code as string.
  css: '@keyframes { } .selector { } .other-selector { }',
  filters: ['my-keyframe-filter'],
  customFilters: {
    myKeyframeFilter: [
      [
        { property: 'type', value: 'atrule' },
        { property: 'name', value: 'keyframes' }
      ]
    ]
  }
};

cssNodeExtract.process(options).then((extractedCss) => {
  console.log(extractedCss); // Outputs: '@keyframes { }'.
});
```

### Preserve lines
Usually `css-node-extract` removes all nodes which do not match the given filters. However under some circumstances it might be useful to preserve the original line numbers (e.g. to keep source map references intact).

```js
const cssNodeExtract = require('css-node-extract');

const options = {
  css: '$variable: "value"; .selector { } .other-selector { }',
  filters: ['variables'],
  postcssSyntax: postcssScssSyntax,
  preserveLines: true
};

cssNodeExtract.process(options).then((extractedCss) => {
  // Outputs the extracted nodes with empty lines where
  // other nodes got removed to preserve line numbers.
  console.log(extractedCss);
});
```

### ES2015 named exports
```js
import { process, processSync } from 'css-node-extract';
import postcssScssSyntax from 'postcss-scss';

const options = {
  // CSS source code as string.
  css: '$variable: "value"; .selector { } .other-selector { }',
  // Extract only variables.
  filters: ['variables'],
  // postcss syntax plugin to add support for SCSS code.
  postcssSyntax: postcssScssSyntax
};

// Asynchronous:
process(options).then((extractedCss) => {
  console.log(extractedCss); // Outputs: '$variable: "value";'.
});

// Synchronous:
processSync(options);
console.log(extractedCss); // Outputs: '$variable: "value";'.
```

## Upgrade from 1.x.x to 2.x.x
With version 2.0.0 the handling of custom filters was changed. The `customFilter` option was renamed to `customFilters` and this option now takes an object instead of an array. Instead of defining one custom filter named `custom`, you can now define unlimited custom filters with custom names.

## Upgrade from 0.x.x to 1.x.x
With version 1.0.0 the `filterNames` option was renamed to `filters`.

```js
// New
const options = {
  css: '$variable: "value"; .selector { } .other-selector { }',
  filters: ['variables'],
  postcssSyntax: postcssScssSyntax
};

// Old
const options = {
  css: '$variable: "value"; .selector { } .other-selector { }',
  filterNames: ['variables'],
  postcssSyntax: postcssScssSyntax
};
```

## Development
See [CONTRIBUTING.md](https://github.com/maoberlehner/css-node-extract/blob/master/CONTRIBUTING.md)

### Testing
```bash
npm test
```

## About
### Author
Markus Oberlehner  
Website: https://markus.oberlehner.net  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
