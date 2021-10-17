const MultiSelect = {
  baseStyle: {
    container: {
      width: {
        base: "100%",
        md: "fit-content",
      },
      minWidth: {
        base: "100%",
        md: "175px",
      },
      margin: {
        base: ".75rem 0",
        md: "0 2em 0 0",
      },
    },
    menuButton: {
      width: "100%",
      justifyContent: "space-between",
    },
    menu: {
      position: {
        md: "absolute",
      },
      zIndex: 1,
      minWidth: {
        base: "100%",
        md: "275px",
      },
      // These are for active states
      boxSizing: "border-box",
      background: "white",
      border: "1px solid #000",
      padding: "1rem 1rem 1.5rem 1rem",
    },
    menuInner: {
      maxHeight: {
        base: "100%",
        md: "285px",
      },
      overflowX: {
        base: "hidden",
      },
      overflowY: {
        base: "auto",
      },
    },
    ctaButtonsContainer: {
      display: "flex",
      justifyContent: "space-between",
      float: "right",
      paddingTop: "0.5em",
    },
  },
};

export default MultiSelect;
