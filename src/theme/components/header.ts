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
  baseStyle: ({ isWidthMobile, isWidthLarge }) => ({
    container: {
      fontFamily: "'system ui', 'Segoe UI', Tahoma, 'Helvetica', 'arial'",
      "#headerMain": {
        marginX: isWidthLarge && "50px",
      },
    },
    notification,
    logo: {
      marginTop: isWidthMobile && "10px",
      marginRight: "auto",
      svg: {
        height: isWidthMobile && "25px",
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
