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
    "actionButtons",
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
    actionButtons: {
      borderTop: "1px solid",
      borderColor: "ui.gray.medium",
      gap: { base: "0", md: "s" },
      justifyContent: "flex-end",
      padding: { base: "s", md: "xs" },
      width: "auto",
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
      // background: "ui.gray.xx-light-cool",
      border: "1px solid",
      borderBottomLeftRadius: "button.default",
      borderBottomRightRadius: "button.default",
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
      borderColor: "ui.gray.dark",
      marginTop: "-1px",
      paddingX: 0,
      paddingY: 0,
      ul: {
        m: 0,
        px: 0,
        py: "xs",
        li: {
          p: 0,
          div: {
            px: "s",
            paddingTop: "xs",
            paddingBottom: "6px",
            _hover: {
              bg: "ui.gray.x-light-cool",
            },
          },
        },
        ul: {
          py: 0,
          li: {
            div: {
              paddingLeft: "46px",
              paddingRight: 0,
            },
          },
        },
      },
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
