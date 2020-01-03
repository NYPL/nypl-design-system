import nodeMatchesFilter = require('./node-matches-filter');

describe(`nodeMatchesFilter()`, () => {
  test(`It should be a function.`, () => {
    expect(typeof nodeMatchesFilter).toBe(`function`);
  });

  test(`It should return false if the node does not match the filter.`, () => {
    const node = {};
    const filter = { property: `type`, value: `atrule` };
    expect(nodeMatchesFilter(node, filter)).toBe(false);
  });

  test(`It should return true if the node does match the filter.`, () => {
    const node = { type: `atrule` };
    const filter = { property: `type`, value: `atrule` };
    expect(nodeMatchesFilter(node, filter)).toBe(true);
  });

  test(`It should return true if the node does match the regex filter.`, () => {
    const node = { type: `atrule` };
    const filter = { property: `type`, value: /rule/ };
    expect(nodeMatchesFilter(node, filter)).toBe(true);
  });
});
