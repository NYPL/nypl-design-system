/**
 * Grid layout based on https://www.joshwcomeau.com/css/full-bleed/
 */

const breakout = {
  width: "100%",
  // This could be "1 / 4" and it would mean the same. This is
  // "future-proof" the grid column assignment to the last column.
  gridColumn: "1 / -1",
};

const Template = {
  baseStyle: {
    boxSizing: "border-box",
    color: "ui.black",
    display: "grid",
    gridTemplateColumns: `
      1fr
      min(1280px, 100%)
      1fr`,
    // Set all elements to start on the second 1280px grid column.
    "> *": {
      gridColumn: "2",
    },
  },
  sizes: {},
  defaultProps: {},
};
// Elements that need to breakout will span outside
// the center 1280px grid column.
const TemplateBreakout = {
  baseStyle: breakout,
};
const TemplateContent = {
  baseStyle: {
    display: "grid",
    gridTemplateColumns: "1fr",
    marginY: "page.hstack",
    paddingY: 0,
    paddingX: "s",
  },
  // With left or right sidebars, we need to set two grid columns and
  // the column for the sidebar is max 288px width.
  variants: {
    left: {
      gridTemplateColumns: { md: "288px 1fr" },
    },
    right: {
      gridTemplateColumns: { md: "1fr 288px" },
    },
  },
};
const TemplateContentTop = {
  baseStyle: {
    gridColumn: { base: "1", md: "1 / span 2" },
    height: "100%",
    marginBottom: "page.hstack",
  },
};
const TemplateContentPrimary = {
  baseStyle: {
    marginBottom: "page.hstack",
  },
  variants: {
    left: {
      gridColumn: { base: "1", md: "2" },
      marginEnd: { md: 0 },
      minWidth: { md: 0 },
    },
  },
};
const TemplateContentSidebar = {
  baseStyle: {
    marginBottom: "page.hstack",
  },
  variants: {
    left: {
      gridColumn: "1",
      marginEnd: {
        base: 0,
        md: "page.vstack",
      },
    },
    right: {
      gridColumn: { base: "1", md: "2" },
      marginStart: {
        base: 0,
        md: "page.vstack",
      },
    },
  },
};

export default {
  Template,
  TemplateBreakout,
  TemplateContent,
  TemplateContentTop,
  TemplateContentPrimary,
  TemplateContentSidebar,
};
