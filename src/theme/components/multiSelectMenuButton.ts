import { defaultElementSizes } from "./global";

const MultiSelectMenuButton = {
  parts: [
    "buttonLabel",
    "menuButton",
    "selectedItemsCountButton",
    "toggleIcon",
  ],
  baseStyle: ({ hasSelectedItems = false, isOpen = false }) => ({
    buttonLabel: {
      justifyContent: "flex-start",
      overflow: "hidden",
      marginLeft: hasSelectedItems ? "50px" : "0",
      marginRight: "l",
      textAlign: "left",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      transition: "margin 150ms ease-out",
    },
    menuButton: {
      alignItems: "center",
      backgroundColor: isOpen ? "ui.gray.x-light-cool" : "ui.white",
      borderBottomLeftRadius: isOpen ? "0" : "button.default",
      borderBottomRightRadius: isOpen ? "0" : "button.default",
      borderColor: isOpen ? "ui.gray.dark" : "ui.gray.medium",
      borderRadius: "button.default",
      borderWidth: "1px",
      fontSize: "button.default",
      minHeight: { base: defaultElementSizes.mobileFieldHeight, md: "auto" },
      px: "s",
      py: "xs",
      display: "inline-flex",
      justifyContent: "space-between",
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
      left: "15px",
      marginRight: "xs",
      position: "absolute",
      top: { base: "12px", md: "10px" },
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
  }),
};

export default MultiSelectMenuButton;
