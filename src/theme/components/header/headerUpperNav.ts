import { headerFocus, headerRed } from "./header";

const HeaderUpperNav = {
  parts: ["donateLink", "emailUpdatesLink"],
  baseStyle: {
    ul: {
      alignItems: "center",
      display: "flex",
      marginTop: "s",
      whiteSpace: "nowrap",
    },
    li: {
      fontSize: "13px",
      fontWeight: 600,
      letterSpacing: ".05em",
      position: "relative",
      textTransform: "uppercase",
    },
    a: {
      color: "ui.black",
      padding: "12px",
      position: "relative",
      textDecoration: "none",
      _hover: {
        color: "ui.black",
        textDecoration: "none",
      },
      _focus: headerFocus,
    },
    svg: {
      marginTop: "0",
    },
    emailUpdatesLink: {
      display: "flex",
      alignItems: "center",
    },
    donateLink: {
      alignItems: "center",
      bg: headerRed,
      borderRadius: "headerDonate",
      color: "var(--nypl-colors-ui-white) !important",
      fontWeight: "bold",
      maxHeight: "2rem",
      paddingX: "5px",
      width: "85px",
      _hover: {
        bg: headerRed,
      },
    },
  },
};

export default HeaderUpperNav;
