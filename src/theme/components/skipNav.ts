const SkipNav = {
  baseStyle: {
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
        left: "2rem",
        top: "3rem",
        width: "auto",
      },
    },
  },
};

export default SkipNav;
