import { headerFocus } from "./header";

const HeaderMobileNavButton = {
  baseStyle: ({ isOpen }) => ({
    alignItems: "center",
    backgroundColor: isOpen ? "ui.black" : "transparent",
    border: "none",
    fontSize: "inherit",
    fontWeight: 500,
    minHeight: "50px",
    minWidth: "50px",
    svg: {
      fill: isOpen ? "ui.white" : "ui.black",
      marginLeft: "0",
    },
    _hover: {
      backgroundColor: isOpen ? "ui.black" : "transparent",
      svg: {
        fill: isOpen ? "ui.white" : "ui.black",
      },
    },
    _focus: headerFocus,
  }),
};

export default HeaderMobileNavButton;
