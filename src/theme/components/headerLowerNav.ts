const lowerNav = {
  alignItems: "center",
  fontSize: "18px",
  marginLeft: "auto",
  whiteSpace: "nowrap",
  li: {
    letterSpacing: ".02em",
    marginLeft: "var(--nypl-space-xxs)",
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
  "#searchButton": {
    alignItems: "center",
    fontSize: "inherit",
    fontWeight: 500,
    color: "#1b7fa7",
    _focus: {
      borderRadius: "none",
      outlineColor: "#135772",
      outlineStyle: "solid",
      outlineWidth: "0.1875em",
    },
  },
  // Commenting out the following styling for this PR.
  // "#closeSearchButton": {
  //   bg: "#1b7fa7",
  //   border: "2px solid ui.white",
  //   color: "ui.white",
  //   paddingX: "var(--nypl-space-xs)",
  //   maxHeight: "1.85rem",
  //   svg: {
  //     position: "relative",
  //     height: "8px",
  //     top: "1px",
  //   },
  // },
  // "#searchOpen": {
  //   bg: "#1b7fa7",
  //   color: "ui.white",
  //   width: "100%",
  //   padding: "10",
  //   display: "flex",
  //   flexDirection: "column",
  //   minWidth: "275px",
  //   position: "absolute",
  //   zIndex: "1000",
  // },
  // The following styling is temporary for this PR.
  "#searchOpen": {
    display: "none",
  },
  "#searchClosed": {
    display: "none",
  },
};

const HeaderLowerNav = {
  baseStyle: {
    lowerNav,
  },
};

export default HeaderLowerNav;
