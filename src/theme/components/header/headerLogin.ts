import { headerBlack, headerBlue, headerFocusColor, headerRed } from "./header";

const loginFocus = () => ({
  boxShadow: { base: null, md: `1px 1px 2px 2px ${headerFocusColor}` },
  outline: { base: "inset", md: "none" },
  outlineStyle: { base: "solid", md: null },
  outlineWidth: { base: "0.1875em", md: null },
});

const HeaderLogin = {
  parts: ["logoutButton", "patronGreeting"],
  baseStyle: ({ patronName }) => ({
    bg: { base: headerBlack, md: headerBlue },
    boxShadow: { base: "2px 2px 3px 4px rgb(100 100 100 / 25%)", md: "none" },
    display: { base: "block", md: "flex" },
    flexDirection: "column",
    left: { base: "0", md: null },
    marginTop: { md: "1px" },
    minHeight: { base: "215px", md: "175px" },
    minWidth: { base: "100%", md: "360px" },
    position: "absolute",
    padding: { base: "0", md: "20px 10px 20px 30px" },
    zIndex: "9999",
    ul: {
      display: { base: "grid", md: "block" },
      marginBottom: "0",
      marginTop: {
        base: !patronName ? "60px" : "0",
        md: !patronName ? "10px" : "0",
      },
      width: "100%",
      li: {
        _first: {
          gridColumn: { base: "1 / span 1", md: null },
        },
        _last: {
          gridColumn: { base: "2 / span 1", md: null },
        },
      },
    },
    li: {
      _notFirst: {
        marginLeft: { base: "5px", md: "0" },
        marginTop: { base: "0", md: "s" },
      },
    },
    "li a": {
      alignItems: "center",
      border: { base: "none", md: "2px" },
      borderColor: "ui.white",
      borderRadius: { base: "0", md: "28px" },
      bg: { base: headerRed, md: "inherit" },
      color: "ui.white",
      display: "flex",
      fontSize: "14px",
      fontWeight: "medium",
      justifyContent: { md: "center" },
      lineHeight: { base: "normal", md: "1.5" },
      marginTop: { base: "0" },
      minHeight: { base: "105px", md: "45px" },
      padding: { base: "10px", md: "10px 20px" },
      textTransform: "uppercase",
      whiteSpace: "normal",
      width: "100%",
      svg: {
        marginRight: { base: "10px", md: null },
      },
      span: {
        width: { base: "100px", md: "auto" },
      },
      _hover: {
        bg: { base: headerRed, md: "transparent" },
        color: "ui.white",
      },
      _focus: {
        ...loginFocus(),
        borderRadius: { base: "0", md: "28px" },
      },
      _dark: {
        bgColor: { base: "brand.secondary", md: "dark.ui.link.primary" },
        color: { base: "ui.white", md: "ui.gray.xx-dark" },
        svg: {
          fill: { base: "ui.white", md: "ui.gray.xx-dark" },
        },
        _hover: {
          bgColor: { base: "brand.primary", md: "dark.ui.link.secondary" },
          color: { base: "ui.white", md: "ui.gray.xx-dark" },
        },
      },
    },
    patronGreeting: {
      alignSelf: "flex-start",
      color: "ui.white",
      fontSize: { base: "16px", md: "14px" },
      fontWeight: "medium",
      lineHeight: "1.5em",
      margin: { base: "10px", md: "0 0 10px" },
      minHeight: { base: "100px", md: "55px" },
      textAlign: "left",
      textTransform: "none",
      width: { md: "100%" },
      _focus: loginFocus(),
      ".greeting": {
        fontStyle: "italic",
        margin: { base: "10px 0 25px 0", md: "0 0 5px" },
      },
      ".name": {
        margin: 0,
      },
    },
    logoutButton: {
      alignSelf: "flex-start",
      bg: { base: "ui.black", md: "ui.white" },
      borderRadius: { base: "0", md: "28px" },
      color: { base: "ui.white", md: `${headerBlue} !important` },
      fontSize: { base: "18px", md: "14px" },
      marginTop: { base: "5px", md: "25px" },
      marginBottom: { base: "0", md: "10px" },
      padding: { base: "30px", md: null },
      textDecoration: { base: "underline", md: null },
      textTransform: "uppercase",
      width: { base: "100%", md: "140px" },
      svg: {
        fill: headerBlue,
      },
      _hover: {
        bg: { base: "ui.black", md: "ui.white" },
        color: { base: "ui.white", md: headerBlue },
        textDecoration: { base: "underline", md: null },
      },
      _focus: {
        ...loginFocus(),
        borderRadius: { base: "0", md: "28px !important" },
      },
      _dark: {
        color: "ui.gray.xx-dark",
        svg: {
          fill: "ui.gray.xx-dark",
        },
        _hover: {
          color: "ui.gray.xx-dark",
        },
      },
    },
  }),
};

export default HeaderLogin;
