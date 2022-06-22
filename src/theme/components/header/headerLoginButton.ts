import { headerFocus } from "./header";

const HeaderLoginButton = {
  baseStyle: ({ isLoginOpen }) => ({
    alignItems: { base: "baseline", md: "center" },
    // bg: isLoginOpen ? (isMobile ? "ui.black" : "#135772") : "ui.white",
    bg: {
      base: isLoginOpen ? "ui.black" : "ui.white",
      md: isLoginOpen ? "#135772" : "ui.white",
    },
    borderRadius: "none",
    color: isLoginOpen ? "ui.white" : "ui.black",
    fontSize: "13px",
    fontWeight: 600,
    minHeight: { base: "50px", md: "auto" },
    minWidth: "50px",
    padding: "0 10px",
    paddingTop: { base: "10px", md: null },
    svg: {
      marginTop: { md: "0" },
      fill: isLoginOpen ? "ui.white" : null,
    },
    textDecoration: "none",
    textTransform: "inherit",
    _hover: {
      backgroundColor: {
        base: isLoginOpen ? "ui.black" : "transparent",
        md: isLoginOpen ? "#135772" : "transparent",
      },
      color: isLoginOpen ? "ui.white" : "initial",
      svg: {
        fill: isLoginOpen ? "ui.white" : "ui.black",
      },
      textDecoration: "none",
    },
    _focus: headerFocus,
  }),
};

export default HeaderLoginButton;
