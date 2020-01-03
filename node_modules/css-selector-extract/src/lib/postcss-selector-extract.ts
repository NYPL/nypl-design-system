import * as postcss from 'postcss';

import filterSelector = require('./filter-selector');

import { PRESERVE_LINES_END, PRESERVE_LINES_START } from '../const';

import { ISelectorFilter } from '../interfaces/ISelectorFilter';

/**
 * Provide a PostCSS plugin for extracting and replacing CSS selectors.
 */
export = function postcssSelectorExtract(filters: ISelectorFilter[]|string[] = [], preserveLines = false) {
  return postcss.plugin(`postcss-extract-selectors`, () => (nodes) => {
    // We have to force `any` type, because postcss type
    // definitions seem to be outdated.
    nodes.walkRules((rule: any) => {
      const ruleSelectors = rule.selector
        .split(`,`)
        .map((ruleSelector: any) => ruleSelector.replace(/(\r\n|\n|\r)/gm, ``).trim())
        .map((ruleSelector: any) => filterSelector({
          ruleSelector,
          ruleParentSelectors: rule.parent.selector ? rule.parent.selector.split(`,`) : [],
          filters,
        }))
        .filter((ruleSelector: any) => ruleSelector.length);

      if (ruleSelectors.length) {
        rule.selector = ruleSelectors.join(`,`);
      } else {
        if (preserveLines) {
          const ruleLines = rule.toString().split(/\r\n|\r|\n/).length;

          rule.cloneBefore({
            type: `comment`,
            text: `${PRESERVE_LINES_START}${'\n'.repeat(ruleLines - 1)}${PRESERVE_LINES_END}`,
            raws: Object.assign(rule.raws, { left: ' ', right: ' ' }),
          });
        }
        rule.remove();
      }
    });

    // Remove empty @ rules.
    nodes.walkAtRules((rule) => {
      if (rule.nodes && !rule.nodes.length) {
        rule.remove();
      }
    });
  });
};
