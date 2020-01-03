import * as postcss from 'postcss';

import postcssNodeExtract = require('./lib/postcss-node-extract');

import { PRESERVE_LINES_END, PRESERVE_LINES_START } from './const';

import { IProcessOptions } from './interfaces/IProcessOptions';

/**
 * Synchronously extract nodes from a string.
 */
export const processSync = ({
  css,
  filters,
  customFilters,
  postcssSyntax,
  preserveLines,
}: IProcessOptions) => postcss(postcssNodeExtract(filters, customFilters, preserveLines))
  .process(css, { syntax: postcssSyntax }).css
  .replace(new RegExp(`\\/\\* ${PRESERVE_LINES_START}|${PRESERVE_LINES_END} \\*\\/`, `g`), ``);

/**
 * Asynchronously extract nodes from a string.
 */
export const process = (options: IProcessOptions): Promise<string> => new Promise((resolve) => {
  const result = processSync(options);
  resolve(result);
});

/**
 * cssNodeExtract
 */
export default {
  process,
  processSync,
};
