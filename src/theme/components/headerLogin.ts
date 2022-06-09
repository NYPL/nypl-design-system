const HeaderLogin = {
  baseStyle: ({ isMobile, patronName }) => ({
    bg: isMobile ? "ui.black" : "#1B7FA7",
    flexDirection: "column",
    left: isMobile ? "0" : null,
    marginTop: isMobile ? null : "1px",
    minHeight: "185px",
    minWidth: isMobile ? "100%" : "350px",
    position: "absolute",
    padding: isMobile ? "0" : "30px",
    zIndex: "9999",
    ul: isMobile
      ? {
          marginBottom: "0",
          marginTop: !patronName ? "40px" : null,
          display: "grid",
          li: {
            _first: {
              gridColumn: "1 / span 1",
            },
            _last: {
              gridColumn: "2 / span 1",
            },
          },
        }
      : {},
    li: {
      _notFirst: {
        marginTop: "0",
        borderLeft: isMobile ? "2px solid black" : null,
      },
    },
    "li a": {
      border: isMobile ? "none" : "2px",
      borderColor: "var(--nypl-colors-ui-white)",
      borderRadius: isMobile ? "0" : "28px",
      bg: isMobile ? "#ed1c24" : "inherit",
      display: isMobile ? "flex" : "inline-block",
      alignItems: "center",
      color: "ui.white",
      fontSize: "14px",
      fontWeight: "regular",
      letterSpacing: ".03em",
      marginTop: isMobile ? "0" : "14px",
      minHeight: isMobile ? "100px" : null,
      padding: isMobile ? "10px 15px" : "10px 20px",
      textAlign: "left",
      textTransform: "uppercase",
      whiteSpace: "normal",
      width: "fit-content",
      svg: {
        verticalAlign: "middle",
        marginRight: isMobile ? "15px" : null,
      },
      _hover: {
        bg: isMobile ? "#ed1c24" : "transparent",
        color: "ui.white",
      },
      _focus: {
        boxShadow: isMobile ? null : "1px 1px 2px 2px #0f465c",
        outline: isMobile ? "inset" : "none",
        outlineStyle: isMobile ? "solid" : null,
        outlineWidth: isMobile ? "0.1875em" : null,
      },
    },
    "#patronGreeting": {
      alignSelf: "flex-start",
      color: "ui.white",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "1.5em",
      margin: isMobile ? "10px" : null,
      textAlign: "left",
      textTransform: "none",
      _focus: {
        boxShadow: isMobile ? null : "1px 1px 2px 2px #0f465c",
        outline: isMobile ? "inset" : "none",
        outlineStyle: isMobile ? "solid" : null,
        outlineWidth: isMobile ? "0.1875em" : null,
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
      bg: isMobile ? "ui.black" : "ui.white",
      borderRadius: isMobile ? "0" : "28px",
      color: isMobile ? "ui.white" : "#1B7FA7",
      fontSize: isMobile ? "18px" : null,
      padding: isMobile ? "30px" : null,
      textDecoration: isMobile ? "underline" : null,
      textTransform: isMobile ? "uppercase" : null,
      width: isMobile ? "100%" : "140px",
      _focus: {
        boxShadow: isMobile ? null : "1px 1px 2px 2px #0f465c",
        outline: isMobile ? "inset" : "none",
        outlineStyle: isMobile ? "solid" : null,
        outlineWidth: isMobile ? "0.1875em" : null,
      },
    },
  }),
};

export default HeaderLogin;
