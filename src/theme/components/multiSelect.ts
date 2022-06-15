const multiSelectWidths = {
  default: {
    width: {
      base: "100%",
      md: "250px",
    },
  },
  fitContent: {
    width: {
      base: "100%",
      md: "fit-content",
    },
    minWidth: {
      md: "175px",
    },
  },
  full: {
    width: "100%",
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
  baseStyle: ({ width = "default", isBlockElement }) => ({
    ...multiSelectWidths[width],
    position: "relative",
    margin: {
      base: ".75rem 0",
      md: "0 2em 0 0",
    },
    menuContainer: {
      position: {
        md: isBlockElement ? "relative" : "absolute",
      },
      zIndex: isBlockElement ? 0 : 9999,
      ...(width === "fitContent" && {
        minWidth: {
          md: "275px",
        },
        maxWidth: {
          md: "375px",
        },
      }),
      width: "100%",
      // These are for active states
      boxSizing: "border-box",
      background: "ui.white",
      border: "1px solid",
      borderColor: "focus",
      borderRadius: "2px",
      paddingX: "xs",
      paddingY: "s",
      paddingBottom: "m",
    },
    menu: {
      paddingX: "xs",
      // Controls the height of the multiselect menu, before scroll bar.
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
      _focus: {
        outline: "0px !important",
      },
    },
    menuChildren: {
      paddingLeft: "m",
      marginBottom: 0,
    },
  }),
};

export default MultiSelect;
