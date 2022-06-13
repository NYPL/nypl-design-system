import { headerFocus } from "./header";

const mobileLinkFocus = {
  ...headerFocus,
  outlineColor: "var(--nypl-colors-ui-white) !important",
};

const HeaderMobileNav = {
  parts: ["bottomLinks", "sideNav"],
  baseStyle: () => ({
    backgroundColor: "ui.black",
    color: "ui.white",
    left: "0px",
    position: "absolute",
    whiteSpace: "initial",
    width: "100%",
    zIndex: "99999",
    sideNav: {
      textAlign: "right",
      padding: "15px",
      marginBottom: "0",
      "li:not(:first-child)": {
        marginTop: "10px",
      },
      a: {
        color: "ui.white",
        textDecoration: "none",
        _hover: {
          color: "ui.white",
          textDecoration: "none",
        },
        _focus: mobileLinkFocus,
      },
    },
    bottomLinks: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      a: {
        color: "white",
        display: "block",
        textDecoration: "none",
        textAlign: "center",
        padding: "20px",
        _hover: {
          color: "ui.white",
          backgroundColor: "ui.black",
          textDecoration: "none",
        },
        _focus: mobileLinkFocus,
        _last: {
          backgroundColor: "brand.primary",
          _hover: {
            backgroundColor: "brand.primary",
          },
        },
      },
    },
  }),
};

export default HeaderMobileNav;
