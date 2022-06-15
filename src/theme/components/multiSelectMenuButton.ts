const MultiSelectMenuButton = {
  parts: ["menuButton", "selectedItemsCountButton"],
  baseStyle: {
    menuButton: {
      width: "100%",
      justifyContent: "space-between",
    },
    selectedItemsCountButton: {
      marginRight: "xs",
      paddingLeft: "s",
      paddingRight: "xs",
      backgroundColor: "ui.gray.x-light-cool",
      border: "1px",
      borderRadius: "20px",
      borderColor: "ui.gray.light-cool",
      fontSize: -2,
    },
  },
};

export default MultiSelectMenuButton;
