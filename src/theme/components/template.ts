import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";
/**
 * Grid layout based on https://www.joshwcomeau.com/css/full-bleed/
 */

const Template = defineStyleConfig({
  baseStyle: defineStyle({
    boxSizing: "border-box",
    color: "ui.typography.body",
    display: "grid",
    gridTemplateColumns: `
      1fr
      min(1280px, 100%)
      1fr`,
    rowGap: "grid.l",
    _dark: {
      color: "dark.ui.typography.body",
    },
  }),
  sizes: {},
  defaultProps: {},
});
// Elements that need to breakout will span outside
// the center 1280px grid column.
const TemplateBreakout = defineStyleConfig({
  baseStyle: defineStyle({
    width: "100%",
    // This could be "1 / 4" and it would mean the same. This is
    // "future-proof" the grid column assignment to the last column.
    gridColumn: "1 / -1",
  }),
});
const TemplateContent = defineStyleConfig({
  baseStyle: defineStyle({
    // Set this element to start on the second 1280px grid column.
    gridColumn: "2",
    // But this element also contains its own grid system within.
    // display: "grid",
    display: { base: "flex", md: "grid" },
    flexDirection: { base: "column", md: null },
    gridTemplateColumns: "1fr",
    paddingY: 0,
    paddingX: "s",
    gap: "grid.l",
  }),
  // With left or right sidebars, we need to set two grid columns and
  // the column for the sidebar is max 255px width.
  variants: {
    left: {
      gridTemplateColumns: { md: "255px 1fr" },
    },
    right: {
      gridTemplateColumns: { md: "1fr 255px" },
    },
  },
});

const TemplateContentTopBottom = defineStyleConfig({
  baseStyle: defineStyle({
    gridColumn: { base: "1", md: "1 / span 2" },
    height: "100%",
  }),
});

/** The overflow styles were added to deal with overflow issues related to the
 * Table component. */
const TemplateContentPrimary = defineStyleConfig({
  baseStyle: defineStyle({
    gridColumn: { base: "1", md: "1 / span 2" },
  }),
  variants: {
    left: {
      gridColumn: { base: "1", md: "2" },
      marginEnd: { md: 0 },
      minWidth: { md: 0 },
      overflow: { base: "unset", md: "hidden" },
    },
    right: {
      gridColumn: { base: "1", md: "1" },
      overflow: { base: "unset", md: "hidden" },
    },
  },
});
const TemplateContentSidebar = defineStyleConfig({
  variants: {
    left: {
      gridColumn: "1",
    },
    right: {
      gridColumn: { base: "1", md: "2" },
    },
  },
});

export default {
  Template,
  TemplateBreakout,
  TemplateContent,
  TemplateContentTopBottom,
  TemplateContentPrimary,
  TemplateContentSidebar,
};
