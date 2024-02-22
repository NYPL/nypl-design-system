import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";

const MultiSelectItemsCountButton = defineStyleConfig({
  baseStyle: defineStyle(({ isOpen = false }) => ({
    alignItems: "center",
    backgroundColor: "ui.gray.light-cool",
    border: "1px",
    borderRadius: "20px",
    borderColor: isOpen ? "ui.border.hover" : "ui.border.default",
    display: "flex",
    flexShrink: 0,
    fontSize: "desktop.caption",
    justifyContent: "flex-end",
    left: "15px",
    marginRight: "xs",
    position: "absolute",
    top: { base: "12px", md: "10px" },
    width: "46px",
    zIndex: 10000,
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
  })),
});

export default MultiSelectItemsCountButton;
