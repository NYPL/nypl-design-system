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
  a: {
    _focus: {
      outlineColor: "#135772",
      outlineStyle: "solid",
      outlineWidth: "0.1875em",
    },
  },
};

const logo = {
  marginRight: "auto",
  _focus: {
    outlineColor: "#135772",
    outlineStyle: "solid",
    outlineWidth: "0.1875em",
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
  parts: ["container", "notification", "logo", "icons", "horizontalRule"],
  baseStyle: () => {
    return {
      container,
      notification,
      logo,
      icons,
      horizontalRule,
    };
  },
};

export default Header;
