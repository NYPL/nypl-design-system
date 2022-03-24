// Utility functions to use throughout the codebase

/**
 * range
 * Get an array of values from `start` to `stop` - 1 with an optional
 * `step` between values.
 */
export const range = (start: number, stop: number, step = 1): number[] => {
  if (!start) {
    return [];
  }

  return Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);
};

/**
 * Map an enum value to a component's Chakra theme variant object. If a wrong
 * value is passed (typically in non-Typescript scenarios), then the "fallback"
 * value, if provided, will be used.
 */
export const getVariant = (variant, collection, fallback = null) => {
  const variantMap = {};
  for (const type in collection) {
    variantMap[collection[type]] = collection[type];
  }
  return variantMap[variant] || fallback;
};

/**
 * Given an enum object and its name, this will return (1) an array `options`
 * of all values with the enum name as the prefix, and (2) a function that
 * returns the correct enum value given a string from the `options` array.
 * @NOTE this is only used for Storybook documentation.
 */
export const getStorybookEnumValues = (enumObject: any, name: string) => {
  const options = Object.keys(enumObject).map((key) => `${name}.${key}`);
  const getValue = (key: string) => {
    // In case no value is passed, return the first value from the array above
    // as the default. Otherwise, remove the dot from the string and get the
    // last part to be able to get the correct enum value.
    return !key ? options[0] : enumObject[key.substr(key.indexOf(".") + 1)];
  };
  return { options, getValue };
};

/**
 * Given a pagination's pageCount, this will return (1) a page number,
 * derived from the current URL, and (2) a function that, when passed to
 * Pagination component, makes the URL change and refreshes the page.
 * @NOTE this is only used for Storybook documentation.
 */
export const getStorybookHrefProps = (pageCount: number) => {
  // This uses the `addon-queryparams` Storybook addon.
  const urlParams = new URLSearchParams(document.location.search);
  const pageParam = urlParams.get("page");

  const getPageNumber = (page: number, pageCount: number) => {
    return page > 0 && page <= pageCount ? page : 1;
  };
  const computedCurrentPage =
    pageParam &&
    Number(pageParam) &&
    getPageNumber(Number(pageParam), pageCount);
  const location = window.location;
  // Passing this function into `Pagination` makes the URL to change
  // and refreshes the page.
  const getPageHref = (selectedPage: number) => {
    return `${location.href}&page=${selectedPage}`;
  };

  return { computedCurrentPage, getPageHref };
};
