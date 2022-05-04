const container = {
  fontFamily: "'system ui', 'Segoe UI', Tahoma, 'Helvetica', 'arial'",
};

const notification = {
  bg: "#fee249",
  width: "100%",
  "div > .css-1jloxoz": {
    fontSize: "var(--nypl-fontSizes-text-tag)",
    letterSpacing: ".01em",
    lineHeight: "1.25em",
    margin: "0.5em 1.2em 0.5em 1.2em",
  },
};

const logo = {
  marginRight: "auto",
};

const upperLinksList = {
  display: "flex",
  marginTop: "var(--nypl-space-s)",
  whiteSpace: "nowrap",
  li: {
    fontSize: "var(--nypl-fontSizes-text-mini)",
    fontWeight: 600,
    letterSpacing: ".05em",
    marginLeft: "var(--nypl-space-xs)",
    position: "relative",
    textTransform: "uppercase",
  },
  "li > a": {
    color: "ui.black",
    position: "relative",
    top: "9px",
    textDecoration: "none",
    _hover: {
      color: "ui.black",
      textDecoration: "none",
    },
  },
  "li > button": {
    display: "flex",
    fontSize: "inherit",
    fontWeight: "inherit",
    letterSpacing: "inherit",
    paddingY: "var(--nypl-space-xxs)",
    textDecoration: "none",
    textTransform: "inherit",
    _hover: {
      color: "ui.black",
      textDecoration: "none",
    },
  },
  ".buttonWithIcon": {
    alignItems: "baseline",
    color: "ui.black",
    svg: {
      height: "5px",
    },
  },
  "#logInMenuClosed": {
    display: "none",
  },
  "#logInMenuOpen": {
    bg: "#1B7FA7",
    display: "flex",
    flexDirection: "column",
    minWidth: "275px",
    position: "absolute",
    padding: "25px 30px",
    zIndex: "1000",
    button: {
      bg: "inherit",
      color: "ui.white",
      fontSize: "var(--nypl-fontSizes-text-mini)",
      fontWeight: 500,
      letterSpacing: ".05em",
      marginTop: "20px",
      textTransform: "uppercase",
      whiteSpace: "normal",
    },
  },
  "#closeLogInButton": {
    bg: "#135772",
    border: "2px solid ui.white",
    color: "ui.white",
    paddingX: "var(--nypl-space-xs)",
    maxHeight: "1.85rem",
    svg: {
      position: "relative",
      height: "8px",
      top: "1px",
    },
  },
  "#donateButton": {
    alignItems: "center",
    bg: "#ed1c24",
    borderRadius: "var(--nypl-space-xxs)",
    maxHeight: "1.8rem",
    paddingX: "13px",
  },
};

const lowerLinks = {
  alignItems: "center",
  fontSize: "var(--nypl-fontSizes-text-tag)",
  marginLeft: "auto",
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
  },
  "li > #searchButton": {
    alignItems: "center",
    fontSize: "var(--nypl-fontSizes-text-tag)",
    fontWeight: 500,
    color: "#1b7fa7",
    svg: {
      position: "relative",
      height: "10px",
      top: -0.5,
    },
  },
};

const icons = {
  marginTop: "var(--nypl-space-xs)",
  svg: {
    marginLeft: "var(--nypl-space-m)",
  },
};

const horizontalRule = {
  bg: "#ed1c24",
  position: "relative",
  top: -4,
};

const Header = {
  parts: [
    "container",
    "notification",
    "logo",
    "upperLinksList",
    "lowerLinks",
    "icons",
    "horizontalRule",
  ],
  baseStyle: () => {
    return {
      container,
      notification,
      logo,
      upperLinksList,
      lowerLinks,
      icons,
      horizontalRule,
    };
  },
};

export default Header;
