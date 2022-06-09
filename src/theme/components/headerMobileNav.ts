const HeaderMobileNav = {
  parts: ["bottomLinks", "sideNav"],
  baseStyle: () => ({
    whiteSpace: "initial",
    position: "absolute",
    left: "0px",
    backgroundColor: "ui.black",
    width: "100%",
    zIndex: "99999",
    color: "ui.white",
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
        _last: {
          backgroundColor: "brand.primary",
          _hover: {
            backgroundColor: "brand.primary",
          },
        },
        _focus: {
          borderRadius: "none",
          outlineColor: "#135772 !important",
          outlineOffset: "0 !important",
          outlineStyle: "solid !important",
          outlineWidth: "0.1875em !important",
        },
      },
    },
  }),
};

export default HeaderMobileNav;
