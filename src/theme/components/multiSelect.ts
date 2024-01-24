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
  baseStyle: ({ width = "full" }) => ({
    ...multiSelectWidths[width],
    position: "relative",
    menuChildren: {
      paddingLeft: "m",
      marginBottom: 0,
    },
    viewAllButton: {
      marginBottom: 0,
      color: "ui.link.primary",
    },
    buttonTextLabel: {
      marginBottom: 0,
      whiteSpace: "nowrap",
      width: "70px",
      ...(width === "fitContent" && {
        textOverflow: "ellipsis",
        overflow: "hidden",
      }),
      marginLeft: 54,
    },
    menuSearchInputBox: {
      input: {
        backgroundColor: "ui.bg.default",
        border: "none",
      },
      button: {
        width: width === "full" ? "100%" : "fit-content",
      },
      minWidth: {
        md: width === "full" ? "100%" : "175px",
      },
      maxWidth: {
        md: "200px",
      },
    },
    accordionStyles: {
      _first: {
        "> div": {
          button: {
            background: "ui.link.primary-05",
            minWidth: width === "full" ? "100%" : "175px",
            width: width === "full" ? "100%" : "fit-content",
          },
          "> div": {
            button: { minWidth: "0px" },
          },
        },
      },
      "> div": {
        _first: {
          "> div": {
            _first: {
              minWidth: width === "full" ? "100%" : "200px",
              maxWidth: width === "full" ? "100%" : "300px",
              borderTopWidth: "0.5px",
            },
          },
        },
      },
    },
  }),
};

export default MultiSelect;
