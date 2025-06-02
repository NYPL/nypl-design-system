import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";
import useResponsiveSpacing from "../../hooks/useResponsiveSpacing";

const Template = defineStyleConfig({
  baseStyle: defineStyle(() => {
    const { responsiveGap, responsiveMargin } = useResponsiveSpacing();
    return {
      boxSizing: "border-box",
      color: "ui.typography.body",
      display: "grid",
      maxWidth: "1280px",
      // 320px screen width - 32px padding = 288px
      minWidth: "288px",
      m: "0 auto",
      p: responsiveMargin,
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "auto",
      columnGap: responsiveGap,
      "& > *:not(:last-child)": { mb: responsiveGap },

      /** Set the full and main content areas to span the full width of the
       * content area from a mobile-first viewpoint. Using -1 for the "last
       * column" value ensures that these elements span all columns in the grid.
       * */
      "& .reservoir-template-full": {
        gridColumn: "1 / -1",
      },
      "& .reservoir-template-main": {
        gridColumn: "1 / -1",
      },
    };
  }),
  /** If the sidebar is enabled, the starting positions (left or right) and
   * spans of the main and sidebar content areas are adjusted based on
   * responsive column patterns established by the NYPL design standards.
   *
   * Main:
   * - Small mobile:            1/1 width
   * - Large mobile:            1/2 width
   * - Small tablet:            2/3 width
   * - Large tablet & desktop:  3/4 width
   *
   * Sidebar:
   * - Small mobile:            1/1 width
   * - Large mobile:            1/2 width
   * - Small tablet:            1/3 width
   * - Large tablet & desktop:  1/4 width
   * */
  variants: {
    sidebarLeft: {
      "& .reservoir-template-main": {
        gridColumn: {
          base: "1 / -1",
          sm: "7 / -1",
          md: "5 / -1",
          lg: "4 / -1",
        },
      },
      "& .reservoir-template-sidebar": {
        gridColumn: { base: "1 / -1", sm: "1 / 7", md: "1 / 5", lg: "1 / 4" },
      },
    },
    sidebarRight: {
      "& .reservoir-template-main": {
        gridColumn: { base: "1 / -1", sm: "1 / 7", md: "1 / 9", lg: "1 / 10" },
      },
      "& .reservoir-template-sidebar": {
        gridColumn: {
          base: "1 / -1",
          sm: "7 / -1",
          md: "9 / -1",
          lg: "10 / -1",
        },
      },
    },
    narrow: {
      "& .reservoir-template-main": {
        gridColumn: {
          base: "1 / -1",
          md: "2 / 12",
          lg: "3 / 11",
        },
      },
    },
  },
});

const TemplateBreakout = defineStyleConfig({
  baseStyle: defineStyle(() => {
    const { responsiveMargin } = useResponsiveSpacing();
    return {
      gridColumn: "1 / -1",
      ml: "calc(-50vw + 50%)",
      px: responsiveMargin,
      width: "100vw",
    };
  }),
});

export default {
  Template,
  TemplateBreakout,
};
