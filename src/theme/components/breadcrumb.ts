// Variant styling
const blogs = {
  bg: "section.blogs.secondary",
  color: "ui.black",
  _dark: {
    bg: "dark.section.blogs.secondary",
  },
  a: {
    _hover: {
      color: "ui.gray.xx-dark",
    },
    _dark: {
      _hover: {
        color: "dark.ui.typography.heading",
      },
    },
  },
  "li:last-child": {
    ".chakra-breadcrumb__link": {
      _hover: {
        // Override the default hover color.
        color: "ui.black",
      },
    },
  },
  svg: {
    fill: "ui.black",
  },
};
const booksAndMore = {
  bg: "section.books-and-more.secondary",
  _dark: {
    bg: "dark.section.books-and-more.secondary",
  },
};
const brand = {
  bg: "brand.secondary",
  _dark: {
    bg: "dark.brand.secondary",
  },
};
const education = {
  bg: "section.education.secondary",
  _dark: {
    bg: "dark.section.education.secondary",
  },
};
const locations = {
  bg: "section.locations.primary",
  _dark: {
    bg: "dark.section.locations.primary",
  },
};
const research = {
  bg: "section.research.secondary",
  _dark: {
    bg: "dark.section.research.secondary",
  },
};
const whatsOn = {
  bg: "section.whats-on.secondary",
  _dark: {
    bg: "dark.section.whats-on.secondary",
  },
};

const Breadcrumb = {
  baseStyle: {
    bg: "ui.black",
    color: "ui.white",
    fontSize: "breadcrumbs.default",
    fontWeight: "breadcrumbs.default",
    paddingBottom: "xs",
    paddingTop: "xs",
    _dark: {
      bg: "dark.ui.bg.hover",
      color: "dark.ui.typography.heading",
    },
    ol: {
      alignItems: { base: "center", md: "unset" },
      display: { base: "flex", md: "block" },
      margin: "auto",
      maxWidth: "1280px",
      paddingStart: "s",
      paddingEnd: "s",
    },
    a: {
      _hover: {
        color: "ui.gray.light-cool",
      },
    },
    "li:last-child": {
      fontWeight: { base: "breadcrumbs.default", md: "breadcrumbs.lastChild" },
      ".chakra-breadcrumb__link": {
        _hover: {
          // Override the default hover color.
          color: "ui.white",
          cursor: "default",
          textDecoration: "none",
        },
        _dark: {
          _hover: {
            color: "dark.ui.typography.heading",
          },
        },
      },
      ".icon": {
        display: "none",
      },
    },
    "li:not(:last-child)": {
      display: { base: "none", md: "inline-block" },
      a: {
        marginEnd: { base: "xs", md: "0" },
      },
      ".icon": {
        display: { base: "inline", md: "none" },
      },
      "span:not(.breadcrumb-label)": {
        marginInlineEnd: "xxs",
        marginInlineStart: "xxs",
      },
    },
    "li:nth-last-of-type(2)": {
      display: "inline-block",
      span: {
        display: { base: "none", md: "inline" },
      },
    },
  },
  // Available variants:
  variants: {
    blogs,
    booksAndMore,
    brand,
    education,
    locations,
    research,
    whatsOn,
  },
};

export default Breadcrumb;
