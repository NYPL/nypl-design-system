import postcssSelectorExtract = require('./postcss-selector-extract');

describe(`postcssSelectorExtract()`, () => {
  test(`It should be a function.`, () => {
    expect(typeof postcssSelectorExtract).toBe(`function`);
  });

  test(`It should return a postcss plugin named "postcss-extract-selectors".`, () => {
    expect(postcssSelectorExtract().postcss)
      .toBeDefined();
    expect(postcssSelectorExtract().postcss.postcssPlugin)
      .toBe(`postcss-extract-selectors`);
  });
});
