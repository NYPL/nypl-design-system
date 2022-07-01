const MultiSelectMenuButton = {
  parts: [
    "buttonLabel",
    "menuButton",
    "selectedItemsCountButton",
    "toggleIcon",
  ],
  baseStyle: {
    buttonLabel: {
      justifyContent: "flex-start",
      overflow: "hidden",
      marginRight: "l",
      textAlign: "left",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    menuButton: {
      alignItems: "center",
      borderColor: "ui.gray.medium",
      justifyContent: "flex-start",
      width: "100%",
      _hover: {
        backgroundColor: "ui.white",
        borderColor: "ui.gray.dark",
      },
      svg: {
        marginTop: "0",
      },
    },
    selectedItemsCountButton: {
      alignItems: "center",
      backgroundColor: "ui.gray.x-light-cool",
      border: "1px",
      borderRadius: "20px",
      borderColor: "ui.gray.light-cool",
      display: "flex",
      flexShrink: 0,
      fontSize: "text.tag",
      justifyContent: "flex-end",
      marginRight: "xs",
      width: "46px",
      _hover: {
        bg: "ui.gray.light-cool",
        borderColor: "ui.gray.medium",
      },
      svg: {
        marginLeft: "xxs",
        marginRight: "6px",
        marginTop: "0",
      },
    },
    toggleIcon: { position: "absolute", right: "s" },
  },
};

export default MultiSelectMenuButton;
