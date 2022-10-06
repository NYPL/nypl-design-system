/**
 * Chakra spacing values are based on:
 *   root size of 16px or 1rem
 *   1 spacing unit is 4px or 0.25rem
 *
 * Chakra's mental model: If you need a spacing of 40px, divide it by 4.
 * That'll give you 10. Then use it in your component.
 *
 * The DS uses nine CSS variables/values found in "src/styles/03-space/_space.css":
 *   --nypl-space-xxxs = 2px or 0.125rem
 *   --nypl-space-xxs = 4px or 0.25rem
 *   --nypl-space-xs = 8px or 0.5rem
 *   --nypl-space-s = 16px or 1rem
 *   --nypl-space-m = 24px or 1.5rem
 *   --nypl-space-l = 32px or 2rem
 *   --nypl-space-xl = 48px or 3rem
 *   --nypl-space-xxl = 64px or 4rem
 *   --nypl-space-xxxl = 96px or 6rem
 *
 * @note Even though all the following values are available through Chakra,
 * we recommend to only use the spacing values that map to the DS values
 * declared above.
 *
 * Chakra Number Value | Chakra Name value | DS Variable
 * ------------------- | ----------------- | -----------------
 *        0.5          |         xxxs      |   --nypl-space-xxxs
 *        1            |         xxs       |   --nypl-space-xxs
 *        2            |         xs        |   --nypl-space-xs
 *        4            |         s         |   --nypl-space-s
 *        6            |         m         |   --nypl-space-m
 *        8            |         l         |   --nypl-space-l
 *        12           |         xl        |   --nypl-space-xl
 *        16           |         xxl       |   --nypl-space-xxl
 *        24           |         xxxl      |   --nypl-space-xxxl
 */
const chakraSpacingTokens = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
};
const reservoirSpacingValues = {
  xxxs: "0.125rem", // 2px
  xxs: "0.25rem", // 4px
  xs: "0.5rem", // 8px
  s: "1rem", // 16px
  m: "1.5rem", // 24px
  l: "2rem", // 32px
  xl: "3rem", // 48px
  xxl: "4rem", // 64px
  xxxl: "6rem", // 96px
};
const reservoirSpacingTokens = {
  // Reservoir generic tokens
  xxxs: reservoirSpacingValues["xxxs"],
  xxs: reservoirSpacingValues["xxs"],
  xs: reservoirSpacingValues["xs"],
  s: reservoirSpacingValues["s"],
  m: reservoirSpacingValues["m"],
  l: reservoirSpacingValues["l"],
  xl: reservoirSpacingValues["xl"],
  xxl: reservoirSpacingValues["xxl"],
  xxxl: reservoirSpacingValues["xxxl"],
  // Reservoir semantic tokens
  button: {
    small: {
      px: reservoirSpacingValues["xs"],
      py: reservoirSpacingValues["xxs"],
    },
    medium: {
      px: reservoirSpacingValues["s"],
      py: reservoirSpacingValues["xs"],
    },
    large: {
      px: reservoirSpacingValues["l"],
      py: reservoirSpacingValues["s"],
    },
  },
  input: {
    group: {
      button: {
        hstack: reservoirSpacingValues["xs"],
        vstack: reservoirSpacingValues["xs"],
      },
      default: {
        hstack: reservoirSpacingValues["l"],
        vstack: reservoirSpacingValues["s"],
      },
    },
  },
  inset: {
    default: reservoirSpacingValues["s"],
    extranarrow: reservoirSpacingValues["xxs"],
    extrawide: reservoirSpacingValues["xl"],
    narrow: reservoirSpacingValues["xs"],
    wide: reservoirSpacingValues["l"],
  },
  grid: {
    default: reservoirSpacingValues["l"],
    xxs: reservoirSpacingValues["xxs"],
    xs: reservoirSpacingValues["xs"],
    s: reservoirSpacingValues["s"],
    m: reservoirSpacingValues["m"],
    l: reservoirSpacingValues["l"],
    xl: reservoirSpacingValues["xl"],
    xxl: reservoirSpacingValues["xxl"],
  },
  page: {
    hstack: reservoirSpacingValues["l"],
    vstack: reservoirSpacingValues["l"],
  },
  table: {
    column: reservoirSpacingValues["m"],
    row: reservoirSpacingValues["l"],
  },
};
export const spacing = {
  ...chakraSpacingTokens,
  ...reservoirSpacingTokens,
};
