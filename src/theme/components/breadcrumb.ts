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
    ".chakra-breadcrumb__list": {
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
      fontWeight: ["regular", null, "bold"],
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
      display: ["none", null, "inline-block"],
      a: {
        marginRight: ["xs", null, "0"],
      },
      ".icon": {
        display: ["inline", null, "none"],
      },
      "span:not(.breadcrumb-label)": {
        marginInlineEnd: "xxs",
        marginInlineStart: "xxs",
      },
    },
    "li:nth-last-child(2)": {
      display: "inline-block",
      span: {
        display: ["none", null, "inline"],
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
