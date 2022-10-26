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
    padding: { md: "10px 12px" },
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

    _dark: {
      bg: {
        base: isOpen ? headerBlack : "dark.ui.bg.default",
        md: isOpen ? headerDarkBlue : "dark.ui.bg.default",
      },
      color: "dark.ui.typography.heading",
      svg: {
        fill: isOpen ? "dark.ui.typography.heading" : null,
      },
      _hover: {
        svg: {
          fill: "dark.ui.typography.heading",
        },
      },
    },
  }),
};

export default HeaderLoginButton;
