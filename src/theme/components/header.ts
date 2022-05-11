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

const horizontalRule = {
  bg: "#ed1c24",
  position: "relative",
  top: -4,
};

const Header = {
  parts: ["container", "notification", "logo", "horizontalRule"],
  baseStyle: ({ width, breakpointMedium }) => ({
    container,
    notification,
    logo: {
      marginTop: width < breakpointMedium && "10px",
      marginRight: "auto",
      svg: {
        height: width < breakpointMedium && "25px",
      },
      _focus: {
        outlineColor: "#135772",
        outlineStyle: "solid",
        outlineWidth: "0.1875em",
      },
    },
    horizontalRule,
  }),
};

export default Header;
