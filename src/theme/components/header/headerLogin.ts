import { headerRed } from "./header";

const loginFocus = () => ({
  boxShadow: { base: null, md: "1px 1px 2px 2px #0f465c" },
  outline: { base: "inset", md: "none" },
  outlineStyle: { base: "solid", md: null },
  outlineWidth: { base: "0.1875em", md: null },
});

const HeaderLogin = {
  parts: ["logoutButton", "patronGreeting"],
  baseStyle: ({ patronName }) => ({
    bg: { base: "ui.black", md: "#1B7FA7" },
    boxShadow: "2px 2px 3px 4px rgb(100 100 100 / 25%)",
    display: { base: "block", md: "flex" },
    flexDirection: "column",
    left: { base: "0", md: null },
    marginTop: { base: null, md: "1px" },
    minHeight: "185px",
    minWidth: { base: "100%", md: "350px" },
    position: "absolute",
    padding: { base: "0", md: "30px" },
    zIndex: "9999",
    ul: {
      display: { base: "grid", md: "block" },
      marginBottom: { base: "0", md: "s" },
      marginTop: { base: !patronName ? "40px" : "0" },
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
        marginTop: "0",
        borderLeft: { base: "2px solid black", md: "none" },
      },
    },
    "li a": {
      border: { base: "none", md: "2px" },
      borderColor: "var(--nypl-colors-ui-white)",
      borderRadius: { base: "0", md: "28px" },
      bg: { base: headerRed, md: "inherit" },
      display: { base: "flex", md: "inline-block" },
      alignItems: "center",
      color: "ui.white",
      fontSize: "14px",
      fontWeight: "regular",
      letterSpacing: ".03em",
      marginTop: { base: "0", md: "14px" },
      minHeight: { base: "100px", md: "50px" },
      padding: { base: "10px 15px", md: "10px 20px" },
      textAlign: "left",
      textTransform: "uppercase",
      whiteSpace: "normal",
      width: "fit-content",
      svg: {
        verticalAlign: "middle",
        marginRight: { base: "15px", md: null },
      },
      _hover: {
        bg: { base: headerRed, md: "transparent" },
        color: "ui.white",
      },
      _focus: {
        ...loginFocus(),
        borderRadius: { base: "0", md: "28px" },
      },
    },
    patronGreeting: {
      alignSelf: "flex-start",
      color: "ui.white",
      fontSize: "14px",
      fontWeight: "medium",
      lineHeight: "1.5em",
      margin: { base: "10px", md: null },
      textAlign: "left",
      textTransform: "none",
      _focus: loginFocus(),
      ".greeting": {
        margin: "0 0 6px 0",
      },
      ".name": {
        margin: 0,
      },
    },
    logoutButton: {
      alignSelf: "flex-start",
      bg: { base: "ui.black", md: "ui.white" },
      borderRadius: { base: "0", md: "28px" },
      color: { base: "ui.white", md: "#1B7FA7 !important" },
      fontSize: { base: "18px", md: "14px" },
      marginTop: { base: "5px", md: "0px" },
      marginBottom: { base: "5px", md: "0px" },
      padding: { base: "30px", md: null },
      textDecoration: { base: "underline", md: null },
      textTransform: "uppercase",
      width: { base: "100%", md: "140px" },
      _hover: {
        bg: { base: "ui.black", md: "ui.white" },
        color: { base: "ui.white", md: "#1B7FA7" },
        textDecoration: { base: "underline", md: null },
      },
      _focus: {
        ...loginFocus(),
        borderRadius: { base: "0", md: "28px !important" },
      },
    },
  }),
};

export default HeaderLogin;
