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
      color: "ui.black",
      textDecoration: "none",
    },
    _focus: {
      outlineColor: "#135772",
      outlineStyle: "solid",
      outlineWidth: "0.1875em",
    },
  },
  ".withIcon": {
    alignItems: "baseline",
    color: "ui.black",
    width: "75px",
    svg: {
      height: "10px",
    },
    _focus: {
      borderRadius: "none",
    },
  },
  ".accountButton": {
    width: "120px",
  },
  // ".closeLoginButton": {
  //   bg: "#135772",
  //   color: "ui.white",
  //   width: "75px",
  //   _hover: {
  //     bg: "#135772",
  //     color: "ui.white",
  //   },
  //   svg: {
  //     position: "relative",
  //     height: "11px",
  //     top: "1px",
  //   },
  // },
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
