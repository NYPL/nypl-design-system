const multiSelectWidths = {
  default: {
    minWidth: {
      base: "100%",
      md: "fit-content",
    },
  },
  small: {
    minWidth: {
      base: "100%",
      md: "165px",
    },
  },
  medium: {
    minWidth: {
      base: "100%",
      md: "225px",
    },
  },
  large: {
    minWidth: {
      base: "100%",
      md: "360px",
    },
  },
  full: {
    minWidth: "100%",
  },
};

const MultiSelect = {
  parts: [
    "menuButton",
    "menuContainer",
    "menu",
    "menuChildren",
    "selectedItemsCountButton",
  ],
  baseStyle: ({ width = "default" }) => ({
    width: {
      base: "100%",
      md: "fit-content",
    },
    ...multiSelectWidths[width],
    margin: {
      base: ".75rem 0",
      md: "0 2em 0 0",
    },
    menuButton: {
      width: "100%",
      minWidth: {
        base: "100%",
        md: "175px",
      },
      //...multiSelectWidths[width],
      justifyContent: "space-between",
    },
    menuContainer: {
      position: {
        md: "absolute",
      },
      zIndex: 1,
      minWidth: {
        base: "100%",
        md: "275px",
      },
      //...multiSelectWidths[width],
      // These are for active states
      boxSizing: "border-box",
      background: "white",
      border: "1px solid #000",
      paddingX: "xs",
      paddingY: "s",
      paddingBottom: "m",
    },
    menu: {
      paddingX: "xs",
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
    menuChildren: {
      paddingLeft: "m",
      marginBottom: 0,
    },
    selectedItemsCountButton: {
      marginRight: "xs",
      paddingLeft: "s",
      paddingRight: "s",
      backgroundColor: "ui.gray.x-light-cool",
      border: "1px",
      borderRadius: "20px",
      borderColor: "ui.gray.light-cool",
      fontSize: "12px",
    },
  }),
};

export default MultiSelect;
