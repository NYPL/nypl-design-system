export const multiSelectWidths = {
  fitContent: {
    width: {
      base: "100%",
      md: "fit-content",
    },
    minWidth: {
      md: "175px",
    },
    maxWidth: {
      md: "200px",
    },
  },
  full: {
    width: "100%",
  },
};

const MultiSelect = {
  parts: [
    "accordionStyles",
    "buttonTextLabel",
    "menuChildren",
    "menuSearchInputBox",
    "viewAllButton",
  ],
  baseStyle: ({ isBlockElement, width = "full" }) => ({
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
        backgroundColor: "ui.white",
        fontWeight: "default",
        minWidth: width === "full" ? "100%" : "175px",
        position: "relative",
        width: width === "full" ? "100%" : "fit-content",
        overflow: "hidden",
        zIndex: 1,
        div: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        },
        span: {
          overflow: "hidden",
        },
        _hover: {
          backgroundColor: "ui.white",
        },
      },
      ".css-uaipls[aria-expanded=true]": {
        bgColor: "ui.link.primary-05",
      },
      ".chakra-collapse": {
        bgColor: "ui.white",
        borderTopWidth: "1px",
        marginTop: "-1px",
        position: isBlockElement ? null : "absolute",
        zIndex: 2,
        ...multiSelectWidths[width],
      },
    },
  }),
};

export default MultiSelect;
