import { IFilter } from '../interfaces/IFilter';

/**
 * Check if a node matches the given filter.
 */
export = function nodeMatchesFilter(node: any, filter: IFilter) {
  if (!node[filter.property]) {
    return false;
  } else if (node[filter.property] === filter.value) {
    return true;
  } else if (filter.value instanceof RegExp && filter.value.test(node[filter.property])) {
    return true;
  }
  return false;
};
