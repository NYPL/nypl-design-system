import { headerBlue, headerFocus } from "./header";

const HeaderSearchButton = {
  baseStyle: ({ isOpen }) => ({
    alignItems: "center",
    borderRadius: "0",
    backgroundColor: isOpen ? headerBlue : "transparent",
    color: isOpen ? "ui.white" : null,
    fontSize: "inherit",
    fontWeight: "medium",
    minHeight: { md: "40px" },
    minWidth: { md: "80px" },
    textDecoration: isOpen ? "none" : "underline",
    svg: {
      marginLeft: { base: "0", md: "xxs" },
      color: {
        base: isOpen ? "ui.white" : "ui.black",
        md: isOpen ? "ui.white" : "ui.link.primary",
      },
    },
    _hover: {
      backgroundColor: isOpen ? headerBlue : "transparent",
      color: isOpen ? "ui.white" : "ui.link.primary",
      textDecoration: isOpen ? "none" : "underline",
      svg: {
        fill: {
          base: isOpen ? "ui.white" : "ui.black",
          md: isOpen ? "ui.white" : "ui.link.primary",
        },
      },
    },
    _focus: headerFocus,
  }),
};

export default HeaderSearchButton;
