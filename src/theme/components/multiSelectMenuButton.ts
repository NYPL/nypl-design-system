const MultiSelectMenuButton = {
  parts: ["menuButton", "selectedItemsCountButton"],
  baseStyle: {
    menuButton: {
      width: "100%",
      justifyContent: "space-between",
      borderColor: "ui.gray.medium",
      _hover: {
        backgroundColor: "ui.white",
        borderColor: "ui.gray.dark",
      },
    },
    selectedItemsCountButton: {
      width: "46px",
      backgroundColor: "ui.gray.x-light-cool",
      border: "1px",
      borderRadius: "20px",
      borderColor: "ui.gray.light-cool",
      fontSize: -2,
    },
  },
};

export default MultiSelectMenuButton;
