import { displayScreenreaderOnly, screenreaderOnly } from "./globalMixins";

export const footerGray = "#54514A";

const Footer = {
  baseStyle: {
    backgroundColor: footerGray,
    minHeight: { base: "360px", lg: "420px" },
    padding: { base: "15px 20px 100px", md: "15px 0", lg: "30px 0" },
    position: "relative",
    _dark: {
      backgroundColor: "dark.ui.bg.default",
    },
    // The two main lists.
    listsContainer: {
      display: "flex",
      flexDirection: { base: "column", xl: "row-reverse" },
      alignItems: { base: "flex-end", xl: "flex-start" },
      marginTop: "75px",
      margin: { md: "0" },
      right: { md: "6%" },
      position: { md: "absolute" },
    },
    // The first list which contains the three lists of text links.
    footerLinksList: {
      fontSize: { base: "14px", md: "13px", lg: "14px" },
      fontWeight: { lg: "400" },
      lineHeight: { base: "18px", md: "23px", lg: "30px" },
      marginRight: { xl: "100px" },
      order: { base: "2", md: "1", xl: "2" },
      textAlign: { base: "right", md: "left" },
      width: { base: "100%", md: "auto" },
      li: {
        float: { md: "left" },
        marginTop: "0 !important",
        width: { md: "135px", lg: "155px" },
        _first: {
          width: { md: "110px" },
          marginRight: { lg: "110px", xl: "50px" },
        },
        ":nth-child(2)": {
          marginRight: { lg: "60px", xl: "0" },
        },
      },
    },
    // First link in every list displays in mobile only.
    footerLinksInner: {
      li: {
        ...screenreaderOnly(true),
        _first: {
          ...displayScreenreaderOnly,
        },
      },
    },
    // List of social media icon links.
    socialMediaList: {
      order: "1",
      margin: "20px 0 15px 0",
      marginTop: { md: "30px", xl: "0" },
      textAlign: { xl: "right" },
      width: { xl: "280px" },
      li: {
        display: "inline-block",
        width: "45px",
        a: {
          display: "block",
          color: "#FFF",
          fontSize: { base: "40px", md: "50px" },
          lineHeight: "45px",
          textDecoration: "none",
          svg: {
            width: "36px",
            height: "36px",
            _dark: {
              fill: "dark.ui.typography.body",
            },
          },
        },
      },
    },
    // For all links in the footer.
    a: {
      color: "ui.white",
      fontWeight: "400",
      margin: "0 0.2rem",
      textDecoration: "none",
      _hover: {
        color: "ui.white",
        textDecoration: "underline",
      },
      _focus: {
        backgroundColor: footerGray,
        outline: "solid 2px",
        outlineColor: "ui.white",
      },
      _dark: {
        color: "dark.ui.typography.body",
      },
    },
    // All SVGs in the footer.
    svg: {
      fill: "ui.white",
      _dark: {
        color: "dark.ui.typography.body",
      },
    },
    // For the floating NYPL logo.
    logoContainer: {
      position: "absolute",
      top: {
        base: "20px",
        lg: "35px",
      },
      left: { md: "6%" },
      svg: {
        height: { base: "80px", md: "94px" },
        width: { base: "95px", md: "115px" },
      },
    },
    // For the facade image and copyright text.
    nyplInfoContainer: {
      color: "ui.white",
      position: { md: "absolute" },
      left: { md: "6%" },
      top: { md: "140px", lg: "170px", xl: "140px" },
      width: { md: "400px" },
      _dark: {
        color: "dark.ui.typography.body",
      },
      img: {
        bg: "transparent",
        height: "auto",
        width: "100%",
        _dark: {
          opacity: "0.8",
        },
      },
    },
    copyright: {
      margin: "35px 0 0 0",
      fontSize: { base: "12px", md: "11px", lg: "13px" },
      fontWeight: "regular",
      textAlign: "right",
      p: {
        margin: "0 0 var(--nypl-space-xxs)",
      },
    },
  },
};

export default Footer;
