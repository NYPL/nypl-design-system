const lowerNav = {
  alignItems: "center",
  fontSize: "1",
  marginBottom: "xxs",
  marginLeft: "auto",
  whiteSpace: "nowrap",
  li: {
    letterSpacing: ".02em",
    marginLeft: "xxs",
  },
  "li > a": {
    color: "ui.black",
    fontWeight: 500,
    textDecoration: "none",
    _hover: {
      borderBottom: "2px solid",
      color: "#ed1c24",
      textDecoration: "none",
    },
    _focus: {
      outlineColor: "#135772",
      outlineStyle: "solid",
      outlineWidth: "0.1875em",
    },
  },
};

const HeaderLowerNav = {
  baseStyle: {
    lowerNav,
  },
};

export default HeaderLowerNav;
