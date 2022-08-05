import { headerBlack, headerDarkBlue, headerFocus } from "./header";

const HeaderLoginButton = {
  baseStyle: ({ isOpen }) => ({
    alignItems: { base: "center" },
    bg: {
      base: isOpen ? headerBlack : "ui.white",
      md: isOpen ? headerDarkBlue : "ui.white",
    },
    borderRadius: "none",
    color: isOpen ? "ui.white" : "ui.black",
    fontSize: "13px",
    fontWeight: 700,
    minHeight: { md: "auto" },
    padding: { md: "4px 10px" },
    svg: {
      fill: isOpen ? "ui.white" : null,
      marginLeft: { base: "0px", md: "5px" },
      marginTop: { base: "0" },
    },
    textDecoration: "none",
    textTransform: "inherit",
    _hover: {
      backgroundColor: {
        base: isOpen ? headerBlack : "transparent",
        md: isOpen ? headerDarkBlue : "transparent",
      },
      color: isOpen ? "ui.white" : "initial",
      svg: {
        fill: isOpen ? "ui.white" : "ui.black",
      },
      textDecoration: "none",
    },
    _focus: headerFocus,
  }),
};

export default HeaderLoginButton;
