import { headerBlue, headerFocus } from "./header";

const HeaderSearchButton = {
  baseStyle: ({ isOpen }) => ({
    alignItems: "center",
    borderRadius: "0",
    backgroundColor: isOpen ? headerBlue : "transparent",
    color: isOpen ? "ui.white" : "#1B7FA7",
    fontSize: "inherit",
    fontWeight: "medium",
    minHeight: { md: "40px" },
    minWidth: { md: "80px" },
    textDecoration: "none",
    span: {
      alignItems: "center",
      borderBottom: { md: "3px solid #1B7FA7" },
      display: "flex",
      lineHeight: "1.3",
    },
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
      textDecoration: "none",
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
