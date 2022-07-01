const MultiSelectMenuButton = {
  parts: [
    "buttonLabel",
    "menuButton",
    "selectedItemsCountButton",
    "toggleIcon",
  ],
  // baseStyle: {
  baseStyle: ({ isOpen = false }) => ({
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
      backgroundColor: isOpen ? "ui.gray.x-light-cool" : "ui.white",
      borderBottomLeftRadius: isOpen ? "0" : "button.default",
      borderBottomRightRadius: isOpen ? "0" : "button.default",
      borderColor: isOpen ? "ui.gray.dark" : "ui.gray.medium",
      justifyContent: "flex-start",
      width: "100%",
      _hover: {
        backgroundColor: isOpen ? "ui.gray.x-light-cool" : "ui.white",
        borderColor: "ui.gray.dark",
      },
      svg: {
        marginTop: "0",
      },
    },
    selectedItemsCountButton: {
      alignItems: "center",
      backgroundColor: "ui.gray.light-cool",
      border: "1px",
      borderRadius: "20px",
      borderColor: "ui.gray.medium",
      display: "flex",
      flexShrink: 0,
      fontSize: "text.tag",
      justifyContent: "flex-end",
      marginRight: "xs",
      width: "46px",
      _hover: {
        borderColor: "ui.gray.dark",
      },
      svg: {
        marginLeft: "xxs",
        marginRight: "6px",
        marginTop: "0",
      },
    },
    toggleIcon: { position: "absolute", right: "s" },
  }),
};

export default MultiSelectMenuButton;
