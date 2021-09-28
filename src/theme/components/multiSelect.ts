const MultiSelect = {
  baseStyle: {
    container: {
      width: "fit-content",
      minWidth: {
        //md: "100%",
        base: "175px",
      },
      margin: "0 2em 0 0",
    },
    menuButton: {
      w: "100%",
      /*border: "1px solid #e0e0e0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.65em 0.85em",
      borderRadius: "2px",
      backgroundColor: "white",
      color: "inherit",
      cursor: "pointer",
      fontWeight: 500,
      fontSize: "14px",
      textDecoration: "none",
      */
    },
    menu: {
      position: "absolute",
      zIndex: 1,
      minWidth: "275px",
      // These are for active states
      boxSizing: "border-box",
      background: "white",
      border: "1px solid #000",
      padding: "1rem 1rem 1.5rem 1rem",
    },
    menuInner: {
      maxHeight: {
        base: "285px",
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
