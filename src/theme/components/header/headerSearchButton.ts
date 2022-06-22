import { headerFocus } from "./header";

const HeaderSearchButton = {
  baseStyle: ({ isOpen }) => ({
    alignItems: "center",
    borderRadius: "0",
    backgroundColor: isOpen ? "#1B7FA7" : "transparent",
    color: isOpen ? "ui.white" : null,
    fontSize: "inherit",
    fontWeight: 500,
    minHeight: { base: "50px", md: "40px" },
    minWidth: { base: "50px", md: "80px" },
    svg: {
      marginLeft: { base: "0", md: null },
      color: {
        base: isOpen ? "ui.white" : "ui.black",
        md: isOpen ? "ui.white" : "ui.link.primary",
      },
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
    _focus: headerFocus,
  }),
};

export default HeaderSearchButton;
