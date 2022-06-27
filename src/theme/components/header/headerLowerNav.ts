import { headerFocus, headerRed } from "./header";

const HeaderLowerNav = {
  baseStyle: {
    ul: {
      alignItems: "center",
      fontSize: "1",
      marginBottom: "xxs",
      marginLeft: "auto",
      whiteSpace: "nowrap",
    },
    li: {
      letterSpacing: ".02em",
      marginLeft: "xxs",
    },
    "li > a": {
      color: "ui.black",
      fontWeight: "medium",
      textDecoration: "none",
      _hover: {
        borderBottom: "2px solid",
        color: headerRed,
        textDecoration: "none",
      },
      _focus: headerFocus,
    },
  },
};

export default HeaderLowerNav;
