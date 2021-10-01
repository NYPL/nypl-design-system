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
