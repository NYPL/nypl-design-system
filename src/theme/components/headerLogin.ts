const HeaderLogin = {
  baseStyle: ({ isMobile, loginOpen }) => ({
    // alignItems: "center",
    // borderRadius: "0",
    // backgroundColor: loginOpen ? "#1B7FA7" : "transparent",
    // color: loginOpen ? "ui.white" : null,
    // fontSize: "inherit",
    // fontWeight: 500,
    // minHeight: isMobile ? "50px" : null,
    // minWidth: isMobile ? "50px" : "80px",
    loginBtn: {
      svg: {
        marginLeft: isMobile ? "0" : null,
        fill: isMobile && loginOpen ? "ui.white" : null,
      },
      // _hover: {
      //   backgroundColor: loginOpen ? "#1B7FA7" : "transparent",
      //   color: loginOpen ? "ui.white" : "initial",
      //   textDecoration: loginOpen ? "none" : "underline",
      //   svg: {
      //     fill: loginOpen ? "ui.white" : "ui.black",
      //   },
      // },
      _focus: {
        borderRadius: "none",
        outlineColor: "#135772 !important",
        outlineOffset: "0 !important",
        outlineStyle: "solid !important",
        outlineWidth: "0.1875em !important",
      },
    },
    loginMenu: {
      bg: "#1B7FA7",
      display: "flex",
      flexDirection: "column",
      minHeight: "185px",
      minWidth: "350px",
      position: "absolute",
      padding: "30px",
      zIndex: "1000",
      a: {
        border: "2px solid var(--nypl-colors-ui-white)",
        borderRadius: "28px",
        bg: "inherit",
        display: "inline-block",
        color: "ui.white",
        fontSize: "14px",
        fontWeight: "regular",
        letterSpacing: ".03em",
        marginTop: "14px",
        padding: "10px 20px",
        textAlign: "left",
        textTransform: "uppercase",
        whiteSpace: "normal",
        width: "fit-content",
        _focus: {
          boxShadow: "1px 1px 2px 2px #0f465c",
          outline: "none",
        },
      },
      "#patronGreeting": {
        alignSelf: "flex-start",
        color: "ui.white",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "1.2em",
        textAlign: "left",
        textTransform: "none",
        _focus: {
          boxShadow: "1px 1px 2px 2px #0f465c",
          outline: "none",
        },
        ".greeting": {
          fontStyle: "italic",
          margin: "0 0 6px 0",
        },
        ".name": {
          margin: 0,
        },
      },
      "#logoutButton": {
        alignSelf: "flex-start",
        bg: "ui.white",
        color: "#1B7FA7",
      },
    },
  }),
};

export default HeaderLogin;
