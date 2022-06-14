const HeaderSearchButton = {
  baseStyle: ({ isMobile, isOpen }) => ({
    alignItems: "center",
    borderRadius: "0",
    backgroundColor: isOpen ? "#1B7FA7" : "transparent",
    color: isOpen ? "ui.white" : null,
    fontSize: "inherit",
    fontWeight: 500,
    minHeight: isMobile ? "50px" : null,
    minWidth: isMobile ? "50px" : "80px",
    svg: {
      marginLeft: isMobile ? "0" : null,
      color: isOpen ? "ui.white" : isMobile ? "ui.black" : "ui.link.primary",
    },
    textDecoration: isOpen ? "none" : "underline",
    _hover: {
      backgroundColor: isOpen ? "#1B7FA7" : "transparent",
      color: isOpen ? "ui.white" : "initial",
      textDecoration: isOpen ? "none" : "underline",
      svg: {
        fill: isOpen ? "ui.white" : "ui.black",
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

export default HeaderSearchButton;
