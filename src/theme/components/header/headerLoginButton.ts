import { headerFocus } from "./header";

const HeaderLoginButton = {
  baseStyle: ({ isMobile, isLoginOpen }) => ({
    alignItems: isMobile ? "baseline" : "center",
    bg: isLoginOpen ? (isMobile ? "ui.black" : "#135772") : "ui.white",
    borderRadius: "none",
    color: isLoginOpen ? "ui.white" : "ui.black",
    fontSize: "13px",
    fontWeight: 600,
    minHeight: isMobile ? "50px" : "auto",
    minWidth: "50px",
    padding: "0 10px",
    paddingTop: isMobile ? "10px" : null,
    svg: {
      marginLeft: isMobile ? "0" : null,
      marginTop: isMobile ? null : "0",
      fill: isLoginOpen ? "ui.white" : null,
    },
    textDecoration: "none",
    textTransform: "inherit",
    _hover: {
      backgroundColor: isLoginOpen
        ? isMobile
          ? "ui.black"
          : "#135772"
        : "transparent",
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
