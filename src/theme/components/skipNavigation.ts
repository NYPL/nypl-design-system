const SkipNavigation = {
  baseStyle: {
    ul: {
      margin: "0",
    },
    // Don't display links by default...
    a: {
      backgroundColor: "ui.white",
      height: "1px",
      left: "-10000px",
      overflow: "hidden",
      position: "absolute",
      top: "auto",
      width: "1px",
      // Only display when the user focuses on the links.
      _focus: {
        border: "1px solid var(—nypl-colors-ui-gray-dark)",
        height: "auto",
        left: "2rem",
        padding:
          "var(--nypl-space-inset-extranarrow) var(--nypl-space-inset-narrow)",
        top: "3rem",
        width: "auto",
      },
    },
  },
};

export default SkipNavigation;
