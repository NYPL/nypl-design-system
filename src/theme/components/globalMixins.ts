/**
 * These objects are also SCSS mixins but are now JS objects in the
 * context of css-in-js and the custom NYPL-theme.
 */

/**
 * If the element that should be visually hidden should only be hidden on
 * small screens, then pass in true for the `isMobileOnly` argument. Otherwise,
 * this will set an element to always be visually hidden regardless of the
 * screen size.
 */
const screenreaderOnly = (isMobileOnly = false) => ({
  clip: "rect(1px, 1px, 1px, 1px)",
  height: { base: "1px", md: isMobileOnly ? "auto" : undefined },
  overflow: "hidden",
  position: {
    base: "absolute !important",
    md: isMobileOnly ? "relative !important" : undefined,
  },
  width: { base: "1px", md: isMobileOnly ? "100%" : undefined },
  wordWrap: "normal",
});
const displayScreenreaderOnly = {
  position: "relative !important",
  height: "auto",
  width: "100%",
};
const wrapperStyles = {
  marginY: "0",
  marginX: "auto",
  maxWidth: "1280px",
  padding: "0",
  width: "100%",
};

export { displayScreenreaderOnly, screenreaderOnly, wrapperStyles };
