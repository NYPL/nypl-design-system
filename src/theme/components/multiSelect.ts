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
    "menuChildren",
    "viewAllButton",
    "accordionStyles",
    "buttonTextLabel",
  ],
  baseStyle: ({ isBlockElement, isOpen, width = "full" }) => ({
    position: "relative",
    menuChildren: {
      paddingLeft: "m",
      marginBottom: 0,
    },
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
        // position: isBlockElement ? "block" : "relative",
        position: isBlockElement ? "relative" : "relative",
        // position: "relative",
        ...multiSelectWidths[width],
      },
    },
  }),
};

export default MultiSelect;
