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
      height: "5px",
    },
    _focus: {
      borderRadius: "none",
    },
  },
  ".loginMenu": {
    bg: "#1B7FA7",
    display: "flex",
    flexDirection: "column",
    marginTop: "1px",
    minHeight: "185px",
    minWidth: "275px",
    position: "absolute",
    padding: "30px",
    zIndex: "1000",
    a: {
      border: "2px solid var(--nypl-colors-ui-white)",
      borderRadius: "28px",
      bg: "inherit",
      display: "inline-block",
      color: "ui.white",
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: ".03em",
      marginTop: "10px",
      minWidth: "250px",
      padding: "9px 20px",
      textAlign: "left",
      textTransform: "uppercase",
      whiteSpace: "normal",
      _focus: {
        boxShadow: "1px 1px 2px 2px #0f465c",
        outline: "none",
      },
    },
  },
  ".closeLoginButton": {
    bg: "#135772",
    color: "ui.white",
    width: "75px",
    _hover: {
      bg: "#135772",
      color: "ui.white",
    },
    svg: {
      position: "relative",
      height: "11px",
      top: "1px",
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
