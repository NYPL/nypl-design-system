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
        height: "auto",
        left: "1rem",
        paddingX: "inset.narrow",
        paddingY: "inset.extranarrow",
        top: "1rem",
        width: "auto",
      },
      _dark: {
        backgroundColor: "dark.ui.bg.page",
      },
    },
  },
};

export default SkipNavigation;
