const horizontalRule = {
  bg: "#ed1c24",
  marginTop: "0",
};

const Header = {
  parts: ["container", "horizontalRule", "logo"],
  baseStyle: ({ isWidthMobile, isWidthLarge }) => ({
    container: {
      fontFamily: "'system ui', 'Segoe UI', Tahoma, 'Helvetica', 'arial'",
      "#headerMain": {
        marginX: isWidthLarge && "50px",
      },
    },
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
