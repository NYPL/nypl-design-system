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

const upperLinks = {
  alignItems: "center",
  marginTop: "var(--nypl-space-s)",
  marginLeft: "auto",
  whiteSpace: "nowrap",
  li: {
    bgColor: "ui.white",
    fontSize: "var(--nypl-fontSizes-text-mini)",
    fontWeight: 600,
    letterSpacing: ".05em",
    marginLeft: "var(--nypl-space-xs)",
    textTransform: "uppercase",
  },
  "li > a": {
    color: "ui.black",
    textDecoration: "none",
  },
  "li > button": {
    alignItems: "center",
    fontSize: "var(--nypl-fontSizes-text-mini)",
    fontWeight: 600,
    letterSpacing: ".05em",
    textTransform: "uppercase",
  },
  "li > .withIcon": {
    color: "ui.black",
    textDecoration: "none",
    svg: {
      position: "relative",
      height: "5px",
      top: -0.5,
      right: 0.5,
    },
  },
  "li > #donateButton": {
    bg: "#ed1c24",
    borderRadius: "var(--nypl-space-xxs)",
    maxHeight: "1.65rem",
    paddingX: "11px",
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
    "upperLinks",
    "lowerLinks",
    "icons",
    "horizontalRule",
  ],
  baseStyle: {
    container,
    notification,
    logo,
    upperLinks,
    lowerLinks,
    icons,
    horizontalRule,
  },
};

export default Header;
