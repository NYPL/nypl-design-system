export const headerBlack = "#2b2b2b";
export const headerBlue = "#1B7FA7";
export const headerDarkBlue = "#135772";
export const headerFocusColor = "#0F465C";
export const headerLightBlue = "#78CCED";
export const headerLightBlueIcon = "#1DA1D4";
export const headerRed = "#ED1C24";
export const headerRedDarkMode = "#DC6F73";
export const headerRedDonate = "#E32B31";
export const headerYellow = "#FEE34A";
export const headerFocus = {
  borderRadius: "none",
  outlineColor: `${headerDarkBlue} !important`,
  outlineOffset: "0 !important",
  outlineStyle: "solid !important",
  outlineWidth: "0.25em !important",
};

const Header = {
  parts: ["container", "horizontalRule", "logo"],
  baseStyle: {
    fontFamily: "'system-ui', 'Segoe UI', Tahoma, 'Helvetica', 'arial'",
    _dark: {
      backgroundColor: "dark.ui.bg.default",
    },
    container: {
      marginX: { md: "20px", xl: "auto" },
      maxWidth: "1300px",
      minHeight: { base: "60px", md: "160px", lg: "205px" },
    },
    horizontalRule: {
      bg: headerRed,
      marginTop: "0",
      marginBottom: "0",
      _dark: {
        backgroundColor: "dark.brand.primary",
      },
    },
    logo: {
      padding: { base: "0 10px", md: "0" },
      svg: {
        height: { base: "40px", md: "auto" },
        width: { md: "80px", lg: "220px" },
        marginTop: { base: "10px", md: "-30px" },
      },
      _focus: headerFocus,
    },
  },
};

export default Header;
