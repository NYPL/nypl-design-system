// From @mixin breakout:
// Used for elements that should be edge-to-edge.
const breakout = {
  marginLeft: "calc(-50vw + 50%)",
  marginRight: "calc(-50vw + 50%)",
};
// From the `wrapper` SCSS mixin.
// TODO: Eventually we may be able to put shared JS style objects
// into a utils file for other mixins that are shared.
const wrapperStyles = {
  marginY: 0,
  marginX: "auto",
  maxWidth: "1280px",
  paddingTop: 0,
  paddingBottom: 0,
  paddingRight: "s",
  paddingLeft: "s",
  width: "100%",
};

const Template = {
  baseStyle: {
    boxSizing: "border-box",
    color: "ui.black",
    // Users with non-overlay scrollbars have a small horizontal scrollbar from
    // our breakout mixin. Fix identified here: https://cloudfour.com/thinks/breaking-out-with-viewport-units-and-calc/#one-big-dumb-caveat
    overflowX: "hidden",
    "*": { boxSizing: "inherit" },
    "*::after": { boxSizing: "inherit" },
    "*::before": { boxSizing: "inherit" },
  },
  sizes: {},
  defaultProps: {},
};
const TemplateHeader = {
  baseStyle: {
    marginBottom: "page.hstack", // --nypl-space-l
  },
};
const TemplateBreakout = {
  baseStyle: {
    ...breakout,
    width: "100vw",
    marginBottom: "page.hstack", // --nypl-space-l
  },
};
const TemplateContent = {
  baseStyle: {
    ...wrapperStyles,
    display: "block",
    marginBottom: "page.hstack", // --nypl-space-l
  },
  variants: {
    sidebar: {
      display: "flex",
      flexFlow: {
        base: "column nowrap",
        md: "row wrap",
      },
    },
  },
};
const TemplateContentTop = {
  baseStyle: {
    flex: "1 0 100%",
    marginBottom: "page.hstack", // --nypl-space-l
  },
};
const TemplateContentPrimary = {
  baseStyle: {
    flex: "1 1",
    marginBottom: "page.hstack", // --nypl-space-l
  },
  variants: {
    left: {
      display: "flex",
      flexFlow: "column nowrap",
      order: "1",
      marginRight: { md: 0 },
      minWidth: { md: 0 },
    },
  },
};
const TemplateContentSidebar = {
  baseStyle: {
    flex: { base: "0 0 auto", md: "0 0 255px" },
    order: { md: "page.vstack" },
    marginBottom: "page.hstack", // --nypl-space-l
  },
  variants: {
    left: {
      marginRight: {
        base: 0,
        md: "page.vstack", // --nypl-space-xl
      },
    },
    right: {
      marginLeft: {
        base: 0,
        md: "page.vstack", // --nypl-space-xl
      },
    },
  },
};

export default {
  Template,
  TemplateHeader,
  TemplateBreakout,
  TemplateContent,
  TemplateContentTop,
  TemplateContentPrimary,
  TemplateContentSidebar,
};
