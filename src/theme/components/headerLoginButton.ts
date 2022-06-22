const HeaderLoginButton = {
  baseStyle: ({ isMobile, isLoginOpen }) => ({
    alignItems: "baseline",
    bg: isLoginOpen ? (isMobile ? "ui.black" : "#135772") : "ui.white",
    borderRadius: "none",
    color: isLoginOpen ? "ui.white" : "ui.black",
    minHeight: isMobile ? "50px" : "auto",
    minWidth: "50px",
    padding: "0 10px",
    paddingTop: isMobile ? "10px" : null,
    svg: {
      marginLeft: isMobile ? "0" : null,
      fill: isLoginOpen ? "ui.white" : null,
    },
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
    },
    _focus: {
      borderRadius: "none",
      outlineColor: "#135772 !important",
      outlineOffset: "0 !important",
      outlineStyle: "solid !important",
      outlineWidth: "0.1875em !important",
    },
  }),
};

export default HeaderLoginButton;
