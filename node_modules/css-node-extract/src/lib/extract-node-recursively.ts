import nodeMatchesFilter = require('./node-matches-filter');

import { IFilter } from '../interfaces/IFilter';
import { IFilterGroup } from '../interfaces/IFilterGroup';

/**
 * Whiteliste a node if it (or one of the nodes parents) matches the given filter.
 */
export = function extractNodeRecursively(node: { parent: any }, filterGroups: IFilterGroup[]): boolean {
  if (node.parent && node.parent.type !== `root`) {
    return extractNodeRecursively(node.parent, filterGroups);
  }

  let extractNode = false;

  filterGroups.some((filterGroup) => {
    extractNode = filterGroup.filter(
      (filter) => !nodeMatchesFilter(node, filter),
    ).length === 0;
    return extractNode;
  });

  return extractNode;
};
