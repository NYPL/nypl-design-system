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
      minWidth: {
        base: "100%",
        md: "175px",
      },
      justifyContent: "space-between",
    },
    menuWrapper: {
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
    menu: {
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
      // @TODO we need important here to override a focus style coming from
      // focus.scss file.
      _focus: {
        outline: "0px !important",
      },
    },
  },
};

export default MultiSelect;
