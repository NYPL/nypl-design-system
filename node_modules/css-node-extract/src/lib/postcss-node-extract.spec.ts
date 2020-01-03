import postcssNodeExtract = require('./postcss-node-extract');

describe(`postcssNodeExtract()`, () => {
  test(`It should be a function.`, () => {
    expect(typeof postcssNodeExtract).toBe(`function`);
  });

  test(`It should return a postcss plugin named "postcss-node-extract".`, () => {
    expect(postcssNodeExtract('foo').postcss).toBeDefined();
    expect(postcssNodeExtract('foo').postcss.postcssPlugin).toBe(`postcss-node-extract`);
  });
});
