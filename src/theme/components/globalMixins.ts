/**
 * These objects are also SCSS mixins but are now JS objects in the
 * context of css-in-js and the custom NYPL-theme.
 */
const screenreaderOnly = {
  clip: "rect(1px, 1px, 1px, 1px)",
  height: "1px",
  overflow: "hidden",
  position: "absolute !important",
  width: "1px",
  wordWrap: "normal",
};
const wrapperStyles = {
  marginY: "0",
  marginX: "auto",
  maxWidth: "1280px",
  padding: "0",
  width: "100%",
};

export { screenreaderOnly, wrapperStyles };
