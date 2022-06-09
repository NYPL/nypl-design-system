const upperNav = {
  alignItems: "baseline",
  display: "flex",
  marginTop: "s",
  whiteSpace: "nowrap",
  li: {
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: ".05em",
    position: "relative",
    textTransform: "uppercase",
  },
  "li a": {
    color: "ui.black",
    padding: "12px",
    position: "relative",
    textDecoration: "none",
    _hover: {
      color: "ui.black",
      textDecoration: "none",
    },
    _focus: {
      outlineColor: "#135772",
      outlineStyle: "solid",
      outlineWidth: "0.1875em",
    },
  },
  "li button": {
    display: "flex",
    fontSize: "inherit",
    fontWeight: "inherit",
    letterSpacing: "inherit",
    textDecoration: "none",
    textTransform: "inherit",
    _hover: {
      textDecoration: "none",
    },
    _focus: {
      outlineColor: "#135772",
      outlineStyle: "solid",
      outlineWidth: "0.1875em",
    },
  },
  "#donateButton": {
    alignItems: "center",
    bg: "#ed1c24",
    borderRadius: "headerDonate",
    maxHeight: "1.8rem",
    paddingX: "13px",
    _hover: {
      color: "ui.white",
    },
  },
};

const HeaderUpperNav = {
  baseStyle: {
    upperNav,
  },
};

export default HeaderUpperNav;
