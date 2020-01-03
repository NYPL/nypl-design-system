import * as postcss from 'postcss';

import postcssSelectorExtract = require('./lib/postcss-selector-extract');

import { PRESERVE_LINES_END, PRESERVE_LINES_START } from './const';

import { IProcessOptions } from './interfaces/IProcessOptions';

/**
 * Synchronously extract and replace CSS selectors from a string.
 */
export const processSync = ({
  css,
  filters,
  postcssSyntax,
  preserveLines,
}: IProcessOptions) => postcss(postcssSelectorExtract(filters, preserveLines))
  .process(css, { syntax: postcssSyntax }).css
  .replace(new RegExp(`\\/\\* ${PRESERVE_LINES_START}|${PRESERVE_LINES_END} \\*\\/`, `g`), ``);

/**
 * Asynchronously extract and replace CSS selectors from a string.
 */
export const process = (options: IProcessOptions) => new Promise((resolve) => {
  const result = processSync(options);
  resolve(result);
});

/**
 * cssSelectorExtract
 */
export default {
  process,
  processSync,
};
