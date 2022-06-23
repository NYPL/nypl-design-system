export const headerBlue = "#1B7FA7";
export const headerDarkBlue = "#135772";
export const headerFocusColor = "#0F465C";
export const headerLightBlue = "#78CCED";
export const headerLightBlueIcon = "#1DA1D4";
export const headerRed = "#ED1C24";
export const headerRedDonate = "#E32B31";
export const headerYellow = "#FEE34A";
export const headerFocus = {
  borderRadius: "none",
  outlineColor: `${headerDarkBlue} !important`,
  outlineOffset: "0 !important",
  outlineStyle: "solid !important",
  outlineWidth: "0.1875em !important",
};

const Header = {
  parts: ["container", "horizontalRule", "logo"],
  baseStyle: {
    fontFamily: "'system ui', 'Segoe UI', Tahoma, 'Helvetica', 'arial'",
    container: {
      marginX: { md: "20px", xl: "auto" },
      maxWidth: "1300px",
      minHeight: { base: "60px", md: "160px", lg: "205px" },
    },
    horizontalRule: {
      bg: headerRed,
      marginTop: "0",
    },
    logo: {
      padding: "0 10px",
      svg: {
        height: { base: "40px", lg: "auto" },
        marginTop: { base: "10px", md: null },
      },
      _focus: headerFocus,
    },
  },
};

export default Header;
