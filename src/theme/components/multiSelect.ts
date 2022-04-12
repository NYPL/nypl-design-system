// const multiSelectWidths = {
//   default: {
//     minWidth: {
//       base: "100%",
//       //md: "fit-content",
//       md: "225px",
//     },
//   },
//   /*small: {
//     minWidth: {
//       base: "100%",
//       md: "165px",
//     },
//   },
//   medium: {
//     minWidth: {
//       base: "100%",
//       md: "225px",
//     },
//   },
//   large: {
//     minWidth: {
//       base: "100%",
//       md: "360px",
//     },
//   },
//   */
//   full: {
//     minWidth: "100%",
//   },
// };

const multiSelectWidths = {
  default: {
    width: {
      base: "100%",
      md: "250px",
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
  baseStyle: ({
    width = "default",
    isBlockElement,
    allowMenuContainerToOverflow = false,
  }) => ({
    ...multiSelectWidths[width],
    // ...(!allowMenuContainerToOverflow && {
    //   position: "relative",
    // }),
    position: "relative",
    margin: {
      base: ".75rem 0",
      md: "0 2em 0 0",
    },
    menuButton: {
      width: "100%",
      justifyContent: "space-between",
    },
    menuContainer: {
      position: {
        md: isBlockElement ? "relative" : "absolute",
      },
      zIndex: isBlockElement ? 0 : 1,
      ...(allowMenuContainerToOverflow && {
        minWidth: "275px",
        maxWidth: "375px",
      }),
      width: "100%",
      // These are for active states
      boxSizing: "border-box",
      background: "white",
      border: "1px solid #000",
      paddingX: "xs",
      paddingY: "s",
      paddingBottom: "m",
    },
    menu: {
      /*styleType: "none",
      marginInlineStart: "0px",
      */
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
      paddingRight: "xs",
      backgroundColor: "ui.gray.x-light-cool",
      border: "1px",
      borderRadius: "20px",
      borderColor: "ui.gray.light-cool",
      fontSize: "12px",
    },
  }),
};

export default MultiSelect;
