export const headerFocus = {
  borderRadius: "none",
  outlineColor: "#135772 !important",
  outlineOffset: "0 !important",
  outlineStyle: "solid !important",
  outlineWidth: "0.1875em !important",
};
export const headerRed = "#ed1c24";

const Header = {
  parts: ["container", "horizontalRule", "logo"],
  baseStyle: {
    fontFamily: "'system ui', 'Segoe UI', Tahoma, 'Helvetica', 'arial'",
    container: {
      marginX: { lg: "50px" },
    },
    horizontalRule: {
      bg: headerRed,
      marginTop: "0",
    },
    logo: {
      marginTop: { base: "10px", md: null },
      marginRight: "auto",
      svg: {
        height: { base: "25px", lg: "auto" },
      },
      _focus: headerFocus,
    },
  },
};

export default Header;
