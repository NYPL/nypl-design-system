import { defaultElementSizes } from "./global";
import { useColorModeValue } from "@chakra-ui/react";

const GetStyles = (props) => {
  const { isOpen } = props;
  return {
    bgColor: useColorModeValue(
      isOpen ? "ui.bg.active" : "ui.white",
      isOpen ? "dark.ui.bg.active" : "dark.ui.bg.default"
    ),
    borderColor: useColorModeValue(
      isOpen ? "ui.border.hover" : "ui.border.default",
      isOpen ? "dark.ui.border.hover" : "dark.ui.border.default",
    ),
  };
};

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
      // backgroundColor: isOpen ? "ui.bg.active" : "ui.white",
      backgroundColor: GetStyles(isOpen).bgColor,
      borderBottomLeftRadius: isOpen ? "0" : "button.default",
      borderBottomRightRadius: isOpen ? "0" : "button.default",
      // borderColor: isOpen ? "ui.border.hover" : "ui.border.default",
      borderColor: GetStyles(isOpen).borderColor,
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
        backgroundColor: isOpen ? "ui.bg.active" : "ui.white",
        borderColor: "ui.gray.dark",
      },
      svg: {
        marginTop: "0",
      },
      _dark: {
        // backgroundColor: isOpen ? "dark.ui.bg.active" : "dark.ui.bg.default",
        borderBottomLeftRadius: isOpen ? "0" : "button.default",
        borderBottomRightRadius: isOpen ? "0" : "button.default",
        // borderColor: isOpen ? "dark.ui.border.hover" : "dark.ui.border.default",
        svg: {
          fill: "dark.ui.typography.heading",
        },
        _hover: {
          backgroundColor: isOpen ? "dark.ui.bg.active" : "dark.ui.bg.default",
          borderColor: "dark.ui.border.hover",
        },
      },
    },
    selectedItemsCountButton: {
      alignItems: "center",
      backgroundColor: "ui.gray.light-cool",
      border: "1px",
      borderRadius: "20px",
      borderColor: isOpen ? "ui.border.hover" : "ui.border.default",
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
        borderColor: isOpen ? "ui.gray.xx-dark" : "ui.border.hover",
      },
      svg: {
        marginLeft: "xxs",
        marginRight: "6px",
        marginTop: "0",
      },
      _dark: {
        backgroundColor: "dark.ui.bg.hover",
        borderColor: isOpen ? "dark.ui.border.hover" : "dark.ui.border.default",
        svg: {
          fill: "dark.ui.typography.heading",
        },
        _hover: {
          borderColor: isOpen ? "ui.white" : "dark.ui.border.hover",
        },
      },
    },
  }),
};

export default MultiSelectMenuButton;
