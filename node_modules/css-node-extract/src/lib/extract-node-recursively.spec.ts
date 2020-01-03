import extractNodeRecursively = require('./extract-node-recursively');

describe(`extractNodeRecursively()`, () => {
  test(`It should be a function.`, () => {
    expect(typeof extractNodeRecursively).toBe(`function`);
  });

  test(`It should return false if the node does not match a filter.`, () => {
    const node = { parent: undefined };
    const filterGroup = [[{ property: `type`, value: `atrule` }]];
    expect(extractNodeRecursively(node, filterGroup)).toBe(false);
  });

  test(`It should return true if the node does match a filter.`, () => {
    const node = { parent: undefined, type: `atrule` };
    const filterGroup = [[{ property: `type`, value: `atrule` }]];
    expect(extractNodeRecursively(node, filterGroup)).toBe(true);
  });

  test(`It should return true if the nodes parent does match a filter.`, () => {
    const node = { parent: { type: `atrule` } };
    const filterGroup = [[{ property: `type`, value: `atrule` }]];
    expect(extractNodeRecursively(node, filterGroup)).toBe(true);
  });
});
