/**
 * These rules affect all the global elements on the `body` element of the
 * page when the `DSProvider` component is used. This means that even if the
 * `nypl-ds` CSS class name is not used in a consuming application, these
 * rules will still take effect.
 */
const global = {
  // styles for the `body` element
  body: {
    boxSizing: "border-box",
    bg: "ui.white",
    color: "ui.black",
    fontFamily: "body",
    fontSize: "0",
    fontWeight: "300",
    lineHeight: "1.5",
    overflowX: "hidden",
  },
  // styles for the `a` element
  a: {
    color: "ui.link.primary",
  },
  svg: {
    display: "inline",
  },
  p: {
    margin: "0 0 var(--nypl-space-s",
  },
};

export default global;
