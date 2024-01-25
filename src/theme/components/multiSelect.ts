export const multiSelectWidths = {
  fitContent: {
    width: "fit-content",
    minWidth: {
      md: "175px",
    },
    maxWidth: {
      md: "200px",
    },
  },
  full: {
    width: "100%",
    md: "100%",
  },
};

const MultiSelect = {
  parts: [
    "actionButtons",
    "menu",
    "menuButton",
    "menuContainer",
    "menuChildren",
    "viewAllButton",
    "accordian",
  ],
  baseStyle: ({ isBlockElement, isOpen, width = "full" }) => ({
    position: "relative",
    // menuButton: {
    //   minWidth: width === "full" ? "100%" : "175px",
    //   width: width === "full" ? "100%" : "fit-content",
    // },
    // menuContainer: {
    //   backgroundColor: "white",
    //   position: {
    //     md: isBlockElement ? "relative" : "absolute",
    //   },
    //   display: isOpen ? "block" : "none",
    //   zIndex: isBlockElement ? 0 : 9999,
    //   ...(width === "fitContent" && {
    //     minWidth: {
    //       md: "275px",
    //     },
    //     maxWidth: {
    //       md: "375px",
    //     },
    //   }),
    //   width: "100%",
    //   // These are for active states
    //   boxSizing: "border-box",
    //   border: "1px solid",
    //   borderBottomLeftRadius: "button.default",
    //   borderBottomRightRadius: "button.default",
    //   borderTopLeftRadius: "0",
    //   borderTopRightRadius: "0",
    //   borderColor: "ui.gray.dark",
    //   marginTop: "-1px",
    //   paddingX: 0,
    //   paddingY: 0,
    //   ul: {
    //     m: 0,
    //     px: 0,
    //     py: "xs",
    //     li: {
    //       p: 0,
    //       div: {
    //         px: "s",
    //         paddingTop: "xs",
    //         paddingBottom: "6px",
    //         _hover: {
    //           bg: "ui.gray.x-light-cool",
    //         },
    //       },
    //     },
    //     ul: {
    //       py: 0,
    //       li: {
    //         div: {
    //           paddingLeft: "46px",
    //           paddingRight: 0,
    //         },
    //       },
    //     },
    //   },
    //   _dark: {
    //     background: "dark.ui.bg.default",
    //     borderColor: "dark.ui.border.hover",
    //     ul: {
    //       li: {
    //         div: {
    //           _hover: {
    //             bg: "dark.ui.bg.hover",
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
    // menu: {
    //   paddingX: "xs",
    //   // Controls the height of the multiselect menu, before scroll bar.
    //   maxHeight: {
    //     base: "100%",
    //     md: "285px",
    //   },
    //   overflowX: {
    //     base: "hidden",
    //   },
    //   overflowY: {
    //     base: "auto",
    //   },
    //   _focus: {
    //     outline: "0px !important",
    //   },
    //   _dark: {
    //     colorScheme: "dark",
    //   },
    // },
    // menuChildren: {
    //   paddingLeft: "m",
    //   marginBottom: 0,
    // },
    viewAllButton: {
      color: "ui.link.primary",
      marginLeft: "-4px",
      px: "xs",
      py: "xxs",
      _hover: {
        bg: "ui.link.primary-05",
      },
    },
    buttonTextLabel: {
      marginBottom: 0,
      ...(width === "fitContent" && {
        textOverflow: "ellipsis",
        overflow: "hidden",
      }),
      marginLeft: "56px",
    },
    menuSearchInputBox: {
      input: {
        backgroundColor: "ui.bg.default",
        border: "none",
      },
    },
    accordionStyles: {
      ".chakra-accordion__button": {
        backgroundColor: isOpen ? "ui.link.primary-05" : "transparent",
        fontWeight: "default",
        minWidth: width === "full" ? "100%" : "175px",
        position: "relative",
        width: width === "full" ? "100%" : "fit-content",
        overflow: "hidden",
        zIndex: 2,
        div: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        },
        span: {
          overflow: "hidden",
        },
        // backgroundColor: "transparent",
      },
      ".css-uaipls[aria-expanded=true]": {
        bgColor: "ui.link.primary-05",
      },
      ".chakra-collapse": {
        borderTopWidth: "1px",
        marginTop: "-1px",
        position: isBlockElement ? "block" : "relative",
        ...multiSelectWidths[width],
      },

      // _first: {
      //   "> div": {
      //     button: {
      //       background: "ui.link.primary-05",
      //       minWidth: width === "full" ? "100%" : "175px",
      //       width: width === "full" ? "100%" : "fit-content",
      //     },
      //     "> div": {
      //       button: { minWidth: "0px" },
      //     },
      //   },
      // },
      // "> div": {
      //   _first: {
      //     "> div": {
      //       _first: {
      //         minWidth: width === "full" ? "100%" : "200px",
      //         maxWidth: width === "full" ? "100%" : "300px",
      //         borderTopWidth: "0.5px",
      //       },
      //     },
      //   },
      // },
    },
  }),
};

export default MultiSelect;
