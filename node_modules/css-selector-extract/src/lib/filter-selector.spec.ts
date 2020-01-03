import filterSelector = require('./filter-selector');

describe(`filterSelector()`, () => {
  test(`It should be a function.`, () => {
    expect(typeof filterSelector).toBe(`function`);
  });

  test(`It should return a empty selector because the rule selector is not whitelisted.`, () => {
    const ruleSelector = `.some-selector`;
    const ruleParentSelectors: any[] = [];
    const filters = [`.some-other-selector`];

    expect(filterSelector({ ruleSelector, ruleParentSelectors, filters }))
      .toBe(``);
  });

  test(`It should return the rule selector because it is whitelisted.`, () => {
    const ruleSelector = `.some-selector`;
    const ruleParentSelectors: any[] = [];
    const filters = [`.some-selector`];

    expect(filterSelector({ ruleSelector, ruleParentSelectors, filters }))
      .toBe(ruleSelector);
  });

  test(`It should return the rule selector because it is whitelisted (RegEx).`, () => {
    const ruleSelector = `.some-selector`;
    const ruleParentSelectors: any[] = [];
    const filters = [/\.some-selector/];

    expect(filterSelector({ ruleSelector, ruleParentSelectors, filters }))
      .toBe(ruleSelector);
  });

  test(`It should return the rule selector because the parent is whitelisted.`, () => {
    const ruleSelector = `.some-selector`;
    const ruleParentSelectors = [`.some-other-selector`];
    const filters = [`.some-other-selector`];

    expect(filterSelector({ ruleSelector, ruleParentSelectors, filters }))
      .toBe(ruleSelector);
  });

  test(`It should return the rule selector because the parent is whitelisted (RegEx).`, () => {
    const ruleSelector = `.some-selector`;
    const ruleParentSelectors = [`.some-other-selector`];
    const filters = [/\.some-other-selector/];

    expect(filterSelector({ ruleSelector, ruleParentSelectors, filters }))
      .toBe(ruleSelector);
  });

  test(`It should return the rule selector because the replaced parent is whitelisted.`, () => {
    const ruleSelector = `.some-selector`;
    const ruleParentSelectors = [`.some-other-replaced-selector`];
    const filters = [{
      selector: `.some-other-selector`,
      replacement: `.some-other-replaced-selector`,
    }];

    expect(filterSelector({ ruleSelector, ruleParentSelectors, filters }))
      .toBe(ruleSelector);
  });
});
