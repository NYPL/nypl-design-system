const HeaderSearchButton = {
  baseStyle: ({ isOpen }) => ({
    minWidth: "80px",
    alignItems: "center",
    fontSize: "inherit",
    fontWeight: 500,
    backgroundColor: isOpen ? "#1B7FA7" : "transparent",
    color: isOpen ? "ui.white" : null,
    _hover: {
      backgroundColor: isOpen ? "#1B7FA7" : "transparent",
      color: isOpen ? "ui.white" : "initial",
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
