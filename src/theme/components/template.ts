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
/** Elements that need to breakout will span outside the center 1280px grid
 * column. */
const TemplateBreakout = defineStyleConfig({
  baseStyle: defineStyle({
    width: "100%",
    /** This could be "1 / 4" and it would mean the same. This is "future-proof"
     * the grid column assignment to the last column. */
    gridColumn: "1 / -1",
  }),
});
const TemplateContent = defineStyleConfig({
  baseStyle: defineStyle(({ useLegacyGrid = true }) => ({
    /** Set this element to start on the second 1280px grid column. */
    gridColumn: "2",
    /** But this element also contains its own grid system within. */
    display: "grid",
    /** Set the underlying grid for the template's content area.
     * - The legacy grid is in fact not a grid.
     * - The current grid (non-legacy) establishes a responsive 12-column grid. */
    gridTemplateColumns: useLegacyGrid
      ? "1fr"
      : "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    /** Set the spacing values based on the current breakpoint. */
    gap: responsiveSpacing,
    paddingX: responsiveGutters,
    paddingY: 0,
  })),
  /** If the sidebar is enabled, set two grid columns with the width of the
   * sidebar column fixed at 255px. */
  variants: {
    left: ({ useLegacyGrid = true }) => ({
      gridTemplateColumns: useLegacyGrid ? { md: "255px 1fr" } : undefined,
    }),
    right: ({ useLegacyGrid = true }) => ({
      gridTemplateColumns: useLegacyGrid ? { md: "1fr 255px" } : undefined,
    }),
  },
});

const TemplateContentTopBottom = defineStyleConfig({
  baseStyle: defineStyle({
    /** The top and bottom content areas should span the full width of the
     * content area regardless of the underlying grid system. Using -1 for the
     * "last column" value ensures that. */
    gridColumn: "1 / -1",
    height: "100%",
  }),
});

const TemplateContentPrimary = defineStyleConfig({
  baseStyle: defineStyle({
    /** By default, the main content area should span the full width of the
     * content area regardless of the underlying grid system. Using -1 for the
     * "last column" value ensures that. */
    gridColumn: "1 / -1",
  }),
  variants: {
    /** If the sidebar is enabled, the starting position (left or right) and
     * span of the main content area is adjusted based on responsive column
     * patterns established by the NYPL Design Team.
     * - Small mobile:            1/1 width
     * - Large mobile:            1/2 width
     * - Small tablet:            2/3 width
     * - Large tablet & desktop:  3/4 width
     * */
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
    /** If the sidebar is enabled, the starting position (left or right) and
     * span of the sidebar is adjusted based on responsive column patterns
     * established by the NYPL Design Team.
     * - Small mobile:            1/1 width
     * - Large mobile:            1/2 width
     * - Small tablet:            1/3 width
     * - Large tablet & desktop:  1/4 width
     * */
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
