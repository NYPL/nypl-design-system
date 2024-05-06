import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";
/**
 * Grid layout based on https://www.joshwcomeau.com/css/full-bleed/
 */

const responsiveGutters = { base: "1rem", md: "1.5rem", xl: "1rem" };
const responsiveSpacing = { base: "1rem", md: "1.5rem", xl: "2rem" };

const Template = defineStyleConfig({
  baseStyle: defineStyle({
    boxSizing: "border-box",
    color: "ui.typography.body",
    display: "grid",
    gridTemplateColumns: `
      1fr
      min(1280px, 100%)
      1fr`,
    rowGap: responsiveSpacing,
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
  baseStyle: defineStyle(({ useLegacyGrid = true }) => ({
    // Set this element to start on the second 1280px grid column.
    gridColumn: "2",
    // But this element also contains its own grid system within.
    display: "grid",
    // gridTemplateColumns: "1fr",
    // gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateColumns: useLegacyGrid
      ? "1fr"
      : "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    paddingY: 0,
    paddingX: responsiveGutters,
    gap: responsiveSpacing,
  })),
  // With left or right sidebars, we need to set two grid columns and
  // the column for the sidebar is max 255px width.
  variants: {
    // left: {
    //   gridTemplateColumns: { md: "255px 1fr" },
    // },
    // right: {
    //   gridTemplateColumns: { md: "1fr 255px" },
    // },
    left: ({ useLegacyGrid = true }) => ({
      gridTemplateColumns: useLegacyGrid ? { md: "255px 1fr" } : undefined,
    }),
    right: ({ useLegacyGrid = true }) => ({
      gridTemplateColumns: useLegacyGrid ? { md: "1fr 255px" } : undefined,
    }),
  },
});

const TemplateContentTopBottom = defineStyleConfig({
  baseStyle: defineStyle(({ useLegacyGrid = true }) => ({
    // gridColumn: { base: "1", md: "1 / span 2" },
    // gridColumn: "1 / -1",
    gridColumn: useLegacyGrid ? { base: "1", md: "1 / span 2" } : "1 / -1",
    height: "100%",
  })),
});

const TemplateContentPrimary = defineStyleConfig({
  baseStyle: defineStyle(({ useLegacyGrid = true }) => ({
    // gridColumn: { base: "1", md: "1 / span 2" },
    // gridColumn: "1 / -1",
    gridColumn: useLegacyGrid ? { base: "1", md: "1 / span 2" } : "1 / -1",
  })),
  variants: {
    // left: {
    //   gridColumn: { base: "1", md: "2" },
    //   marginEnd: { md: 0 },
    //   minWidth: { md: 0 },
    // },
    // right: {
    //   gridColumn: { base: "1", md: "1" },
    // },
    left: ({ useLegacyGrid = true }) => ({
      gridColumn: useLegacyGrid
        ? { base: "1", md: "2" }
        : { base: "1 / -1", sm: "7 / -1", md: "5 / -1", lg: "4 / -1" },
      marginEnd: { md: 0 },
      minWidth: { md: 0 },
    }),
    right: ({ useLegacyGrid = true }) => ({
      gridColumn: useLegacyGrid
        ? { base: "1", md: "1" }
        : { base: "1 / -1", sm: "1 / 7", md: "1 / 9", lg: "1 / 10" },
    }),
  },
});
const TemplateContentSidebar = defineStyleConfig({
  variants: {
    // left: {
    //   gridColumn: "1",
    //   bgColor: "lightgreen",
    // },
    // right: {
    //   gridColumn: { base: "1", md: "2" },
    //   bgColor: "powderblue",
    // },
    left: ({ useLegacyGrid = true }) => ({
      gridColumn: useLegacyGrid
        ? "1"
        : { base: "1 / -1", sm: "1 / 7", md: "1 / 5", lg: "1 / 4" },
    }),
    right: ({ useLegacyGrid = true }) => ({
      gridColumn: useLegacyGrid
        ? { base: "1", md: "2" }
        : { base: "1 / -1", sm: "7 / -1", md: "9 / -1", lg: "10 / -1" },
    }),
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
