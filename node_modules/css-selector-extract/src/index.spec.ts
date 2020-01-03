import * as fs from 'fs';
import * as postcssSyntax from 'postcss-scss';

import cssSelectorExtract, { process, processSync } from './';

describe(`cssSelectorExtract`, () => {
  const css = fs.readFileSync(`test/css/test.css`, { encoding: `utf8` });
  const scss = fs.readFileSync(`test/css/test.scss`, { encoding: `utf8` });
  const scssSyntaxTest = fs.readFileSync(`test/css/scss-syntax-test.scss`, { encoding: `utf8` });
  const scssPreserveLinesTest = fs.readFileSync(`test/css/preserve-lines-test.scss`, { encoding: `utf8` });

  test(`It should be an object.`, () => {
    expect(typeof cssSelectorExtract).toBe(`object`);
  });

  describe(`process()`, () => {
    test(`It should be a function.`, () => {
      expect(typeof process).toBe(`function`);
    });

    test(`CSS: correct way to extract default selector - should return filtered selector.`, () => {
      const referenceCss = fs.readFileSync(`test/css/reference/test1.css`, { encoding: `utf8` });
      const filters = [`.test-selector`];
      return process({ css, filters })
        .then((extractCss) => {
          expect(extractCss.trim()).toBe(referenceCss.trim());
        });
    });

    test(`CSS: correct way to extract nested selector - should return filtered selector.`, () => {
      const referenceCss = fs.readFileSync(`test/css/reference/test2.css`, { encoding: `utf8` });
      const filters = [`.nest .nested-test-selector`];
      return process({ css, filters })
        .then((extractCss) => {
          expect(extractCss.trim()).toBe(referenceCss.trim());
        });
    });

    test(`CSS: wrong way to extract nested selector - should return empty string.`, () => {
      const filters = [`.nested-test-selector`];
      return process({ css, filters })
        .then((extractCss) => {
          expect(extractCss.trim()).toBe(``);
        });
    });

    test(`CSS: correct way to extract @media nested selector - should return filtered selector.`, () => {
      const referenceCss = fs.readFileSync(`test/css/reference/test3.css`, { encoding: `utf8` });
      const filters = [`.nested-in-media-query`];
      return process({ css, filters })
        .then((extractCss) => {
          expect(extractCss.trim()).toBe(referenceCss.trim());
        });
    });

    test(`CSS: selector replacement - should return replaced selector.`, () => {
      const referenceCss = fs.readFileSync(`test/css/reference/test4.css`, { encoding: `utf8` });
      const filters = [{
        selector: `.test-selector`,
        replacement: `.test-selector-replaced`,
      }];
      return process({ css, filters })
        .then((extractCss) => {
          expect(extractCss.trim()).toBe(referenceCss.trim());
        });
    });

    test(`SCSS: wrong way to extract nested selector - should return empty string.`, () => {
      const filters = [`.nested-test-selector`];
      return process({ css: scss, filters, postcssSyntax })
        .then((extractCss) => {
          expect(extractCss.trim()).toBe(``);
        });
    });

    test(`SCSS: extract multiple instances of a selector with nested child selectors - should return the selectors with all nested selectors.`, () => {
      const referenceScss = fs.readFileSync(`test/css/reference/test5.scss`, { encoding: `utf8` });
      const filters = [
        `.nest`,
        `.commma-nest-test`,
        {
          selector: `.replace-nest-test`,
          replacement: `.replaced-nest-test`,
        },
        {
          selector: `.replace-nested-test-selector`,
          replacement: `.replaced-nested-test-selector`,
        },
      ];
      return process({ css: scss, filters, postcssSyntax })
        .then((extractCss) => {
          expect(extractCss.trim()).toBe(referenceScss.trim());
        });
    });

    test(`SCSS: correct way to extract @media nested selector - should return filtered selector.`, () => {
      const referenceScss = fs.readFileSync(`test/css/reference/test6.scss`, { encoding: `utf8` });
      const filters = [`.media-query-in-test-selector`];
      return process({ css: scss, filters, postcssSyntax })
        .then((extractCss) => {
          expect(extractCss.trim()).toBe(referenceScss.trim());
        });
    });

    test(`SCSS: test SCSS syntax - should finish without errors.`, () => {
      const referenceScss = fs.readFileSync(`test/css/reference/test7.scss`, { encoding: `utf8` });
      const filters = [`.none`];
      return process({ css: scssSyntaxTest, filters, postcssSyntax })
        .then((extractCss) => {
          expect(extractCss.trim()).toBe(referenceScss.trim());
        });
    });

    test(`RegEx: extract selectors using regular expressions.`, () => {
      const referenceCss = fs.readFileSync(`test/css/reference/test8.css`, { encoding: `utf8` });
      const filters = [/^\.test-.*/];
      return process({ css, filters })
        .then((extractCss) => {
          expect(extractCss.trim()).toBe(referenceCss.trim());
        });
    });

    test(`RegEx: extract and replace selectors using regular expressions.`, () => {
      const referenceCss = fs.readFileSync(`test/css/reference/test9.css`, { encoding: `utf8` });
      const filters = [{
        selector: /^\.test-(.+)-(.+).*/,
        replacement: `.test__$1--$2`,
      }];
      return process({ css, filters })
        .then((extractCss) => {
          expect(extractCss.trim()).toBe(referenceCss.trim());
        });
    });

    test(`Bootstrap: extract and replace selectors using regular expressions.`, () => {
      const bootstrapCss = fs.readFileSync(`node_modules/bootstrap/scss/_alert.scss`, {
        encoding: `utf8`,
      });
      const referenceCss = fs.readFileSync(`test/css/reference/test10.scss`, { encoding: `utf8` });
      const filters = [
        `.alert`,
        `.close`,
        {
          selector: `.alert-heading`,
          replacement: `.alert__heading`,
        },
        {
          selector: `.alert-link`,
          replacement: `.alert__link`,
        },
        {
          selector: /^\.alert-(.+)/,
          replacement: `.alert--$1`,
        },
      ];
      return process({ css: bootstrapCss, filters, postcssSyntax })
        .then((extractCss) => {
          expect(extractCss.trim()).toBe(referenceCss.trim());
        });
    });

    test(`Extract selectors but preserve lines.`, () => {
      const referenceScss = fs.readFileSync(`test/css/reference/test11.scss`, { encoding: `utf8` });
      const filters = [`.selector2`, `.selector4`];
      return process({ css: scssPreserveLinesTest, filters, preserveLines: true })
        .then((extractScss) => {
          expect(extractScss.trim()).toBe(referenceScss.trim());
        });
    });
  });

  describe(`processSync()`, () => {
    test(`It should be a function.`, () => {
      expect(typeof processSync).toBe(`function`);
    });
  });
});
