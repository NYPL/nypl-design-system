# css-selector-extract
[![Build Status](https://travis-ci.org/maoberlehner/css-selector-extract.svg?branch=master)](https://travis-ci.org/maoberlehner/css-selector-extract)
[![Coverage Status](https://coveralls.io/repos/github/maoberlehner/css-selector-extract/badge.svg?branch=master)](https://coveralls.io/github/maoberlehner/css-selector-extract?branch=master)
[![GitHub stars](https://img.shields.io/github/stars/maoberlehner/css-selector-extract.svg?style=social&label=Star)](https://github.com/maoberlehner/css-selector-extract)

With selector extracting, it is possible to extract certain CSS selectors (RegEx can be used to match selectors) from CSS code. This is especially useful if you want to extract only a few CSS classes from a huge library or framework.

## Demos
```js
const cssSelectorExtract = require('css-selector-extract');

const options = {
  // CSS source code as string.
  css: '.btn { } .btn-alert { } .btn-success { }',
  // Array of selectors which should get extracted.
  filters: ['.btn']
};

// Asynchronous:
cssSelectorExtract.process(options).then((extractedCss) => {
  console.log(extractedCss); // Outputs: `.btn { }`.
});

// Synchronous:
const extractedCss = cssSelectorExtract.processSync(options);
console.log(extractedCss); // Outputs: `.btn { }`.
```

### Rename extracted selectors
```js
const cssSelectorExtract = require('css-selector-extract');

const options = {
  // CSS source code as string.
  css: '.btn { } .btn-alert { } .btn-success { }',
  // Array of selector filter objects with selectors
  // which should get extracted and replaced.
  filters: [{ selector: '.btn', replacement: '.button' }]
};

// Asynchronous:
cssSelectorExtract.process(options).then((extractedCss) => {
  console.log(extractedCss); // Outputs: `.button { }`.
});
```

### RegEx
#### Filter selectors
```js
const cssSelectorExtract = require('css-selector-extract');

const options = {
  css: '.btn { } .btn-alert { }',
  filters: [/^\..+-alert/]
};

cssSelectorExtract.process(options).then((extractedCss) => {
  console.log(extractedCss); // Outputs: `.btn-alert { }`.
});
```

#### Replace selectors
```js
const cssSelectorExtract = require('css-selector-extract');

const options = {
  css: '.btn { } .btn-alert { }',
  filters: [{ selector: /^\.btn(.*)/, replacement: '.button$1' }]
};

cssSelectorExtract.process(options).then((extractedCss) => {
  console.log(extractedCss); // Outputs: `.button { } .button-alert { }`.
});
```

### Usage with syntaxes other than pure CSS
Install the corresponding postcss syntax plugin (e.g. [postcss-scss](https://www.npmjs.com/package/postcss-scss) or [postcss-less](https://www.npmjs.com/package/postcss-less)).

```js
const cssSelectorExtract = require('css-selector-extract');
const postcssScss = require('postcss-scss');

const options = {
  css: '.nested { .selector { } }',
  filters: ['.nested'],
  postcssSyntax: postcssScss
};

cssSelectorExtract.process(options).then((extractedCss) => {
  console.log(extractedCss);
});
```

### Preserve lines
Usually `css-selector-extract` removes all nodes which do not match the given selectors. However under some circumstances it might be useful to preserve the original line numbers (e.g. to keep source map references intact).

```js
const cssSelectorExtract = require('css-selector-extract');

const options = {
  css: '.multiple { } .selectors {}',
  filters: ['.some-selector'],
  preserveLines: true
};

cssSelectorExtract.process(options).then((extractedCss) => {
  // Outputs the extracted selector(s) with empty lines where
  // other selectors got removed to preserve line numbers.
  console.log(extractedCss);
});
```

### ES2015 named exports
```js
import { process, processSync } from 'css-selector-extract';

const options = {
  // CSS source code as string.
  css: '.btn { } .btn-alert { } .btn-success { }',
  // Array of selectors which should get extracted.
  filters: ['.btn']
};

// Asynchronous:
process(options).then((extractedCss) => {
  console.log(extractedCss); // Outputs: `.btn { }`.
});

// Synchronous:
const extractedCss = processSync(options);
console.log(extractedCss); // Outputs: `.btn { }`.
```

## Upgrade from 2.x.x to 3.x.x
With version 3.0.0 css-selector-extract takes an object as it's only parameter.

```js
const cssSelectorExtract = require('css-selector-extract');
const postcssScss = require('postcss-scss');

// New way:
const options = {
  css: '.btn { } .btn-alert { } .btn-success { }',
  filters: ['.btn'],
  postcssSyntax: postcssScss
};
cssSelectorExtract.process(options);
cssSelectorExtract.processSync(options);

// Old way:
const css = '.btn { } .btn-alert { } .btn-success { }';
const selectorFilters = ['.btn'];
cssSelectorExtract.process(css, selectorFilters, postcssScss);
cssSelectorExtract.processSync(css, selectorFilters, postcssScss);
```

## Development
See [CONTRIBUTING.md](https://github.com/maoberlehner/css-selector-extract/blob/master/CONTRIBUTING.md)

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
