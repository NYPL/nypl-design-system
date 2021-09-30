// Variant styling
const booksAndMore = {
  bg: "section.books-and-more.secondary",
};
const locations = {
  bg: "section.locations.secondary",
};
const research = {
  bg: "section.research.secondary",
};
const whatsOn = {
  bg: "section.whats-on.secondary",
};

const Breadcrumb = {
  baseStyle: {
    bg: "ui.black",
    color: "ui.white",
    fontSize: "-1",
    fontWeight: "regular",
    paddingBottom: "xs",
    paddingTop: "xs",
    ol: {
      alignItems: { base: "center", md: "unset" },
      display: { base: "flex", md: "block" },
      margin: "auto",
      maxWidth: "1280px",
      paddingLeft: "s",
      paddingRight: "s",
    },
    a: {
      _hover: {
        color: "ui.gray.light-cool",
      },
    },
    "li:last-child": {
      fontWeight: { base: "regular", md: "bold" },
      ".chakra-breadcrumb__link": {
        _hover: {
          cursor: "default",
          textDecoration: "none",
        },
      },
      ".icon": {
        display: "none",
      },
    },
    "li:not(:last-child)": {
      display: { base: "none", md: "inline-block" },
      a: {
        marginRight: { base: "xs", md: "0" },
      },
      ".icon": {
        display: { base: "inline", md: "none" },
      },
      "span:not(.breadcrumb-label)": {
        marginInlineEnd: "xxs",
        marginInlineStart: "xxs",
      },
    },
    "li:nth-last-child(2)": {
      display: "inline-block",
      span: {
        display: { base: "none", md: "inline" },
      },
    },
  },
  // Available variants:
  variants: {
    booksAndMore,
    locations,
    research,
    whatsOn,
  },
};

export default Breadcrumb;
