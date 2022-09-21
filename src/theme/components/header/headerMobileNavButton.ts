import { headerBlack, headerFocus } from "./header";

const HeaderMobileNavButton = {
  baseStyle: ({ isOpen }) => ({
    alignItems: "center",
    backgroundColor: isOpen ? headerBlack : "transparent",
    border: "none",
    borderRadius: "0",
    svg: {
      fill: isOpen ? "ui.white" : "ui.black",
      marginLeft: "0",
    },
    _hover: {
      backgroundColor: isOpen ? headerBlack : "transparent",
      svg: {
        fill: isOpen ? "ui.white" : "ui.black",
      },
    },
    _focus: headerFocus,
    _dark: {
      backgroundColor: isOpen ? "#2b2b2b" : "transparent",
      svg: {
        fill: "dark.ui.typography.heading",
      },
    },
  }),
};

export default HeaderMobileNavButton;
