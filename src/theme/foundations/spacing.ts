/**
 * This is based on:
 *   root size of 16px or 1rem
 *   1 spacing unit is 4px or 0.25rem
 *
 * Chakra's mental model: If you need a spacing of 40px, divide it by 4.
 * That'll give you 10. Then use it in your component.
 *
 * The DS uses eight CSS variables/values found in "src/styles/03-space/_space.css":
 *   --space-xxs = 4px or 0.25rem
 *   --space-xs = 8px or 0.5rem
 *   --space-s = 16px or 1rem
 *   --space-m = 24px or 1.5rem
 *   --space-l = 32px or 2rem
 *   --space-xl = 48px or 3rem
 *   --space-xxl = 64px or 4rem
 *   --space-xxxl = 96px or 6rem
 *
 * @note Even though all the following values are available through Chakra,
 * we recommend to use the spacing values that map to the DS values
 * declared above.
 *
 * Chakra Value | DS Variable
 * ----------------------------
 *     1        |  --space-xxs
 *     2        |  --space-xs
 *     4        |  --space-s
 *     6        |  --space-m
 *     8        |  --space-l
 *     12       |  --space-xl
 *     16       |  --space-xxl
 *     24       |  --space-xxl
 */
export const spacing = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",
  // --space-xxs = 4px
  // xxs: "0.25rem",
  // The above creates --chakra-space-xxs
  1: "0.25rem",
  1.5: "0.375rem",
  // --space-xs = 8px
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  // --space-s = 16px
  4: "1rem",
  5: "1.25rem",
  // --space-m = 24px
  6: "1.5rem",
  7: "1.75rem",
  // --space-l = 32px
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  // --space-xl = 48px
  12: "3rem",
  14: "3.5rem",
  // --space-xxl = 64px
  16: "4rem",
  20: "5rem",
  // --space-xxxl = 96px
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
