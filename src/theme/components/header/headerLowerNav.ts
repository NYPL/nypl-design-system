import { headerFocus, headerRed } from "./header";

const linkFocusHoverStyles = {
  borderBottom: "3px solid",
  color: headerRed,
  paddingBottom: "2px",
  textDecoration: "none",
};

const HeaderLowerNav = {
  baseStyle: {
    ul: {
      alignItems: "center",
      fontSize: "1",
      marginBottom: "0",
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
      _hover: linkFocusHoverStyles,
      _focus: {
        ...headerFocus,
        ...linkFocusHoverStyles,
      },
    },
  },
};

export default HeaderLowerNav;
