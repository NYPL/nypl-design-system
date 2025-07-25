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
      px: responsiveMargin,
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "auto",
      columnGap: responsiveGap,
      "& > *:not(:last-child)": { mb: responsiveGap },

      /** The "content" area should span the full width of the content area from
       * a mobile-first viewpoint. Using -1 for the "last column" value ensures
       * that these elements span all columns in the grid. CSS classes were used
       * for the "content" and "sidebar" ragions in order to simplify how
       * variants are handled.
       * */
      "& .ds-template-content": {
        gridColumn: { base: "1 / -1" },
      },
    };
  }),
  /** If the sidebar is enabled, the starting positions (left or right) and
   * spans of the "content" and "sidebar" regions are adjusted based on
   * responsive column patterns established by the NYPL design standards.
   *
   * Content:
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
      "& .ds-template-content": {
        gridColumn: {
          sm: "7 / -1",
          md: "5 / -1",
          lg: "4 / -1",
        },
      },
      "& .ds-template-sidebar": {
        gridColumn: {
          base: "1 / -1",
          sm: "1 / 7",
          md: "1 / 5",
          lg: "1 / 4",
        },
      },
    },
    sidebarRight: {
      "& .ds-template-content": {
        gridColumn: {
          sm: "1 / 7",
          md: "1 / 9",
          lg: "1 / 10",
        },
      },
      "& .ds-template-sidebar": {
        gridColumn: {
          base: "1 / -1",
          sm: "7 / -1",
          md: "9 / -1",
          lg: "10 / -1",
        },
      },
    },
    narrow: {
      "& .ds-template-content": {
        gridColumn: {
          base: "1 / -1",
          md: "2 / 12",
          lg: "3 / 11",
        },
      },
    },
  },
});

const TemplateMain = defineStyleConfig({
  baseStyle: defineStyle(() => {
    const { responsiveGap } = useResponsiveSpacing();
    return {
      display: "grid",
      columnGap: responsiveGap,
      gridColumn: "1 / -1",
      gridTemplateColumns: "subgrid",
      gridTemplateRows: "auto",
      "& > *:not(:last-child)": { mb: responsiveGap },
    };
  }),
});

const TemplateBreakout = defineStyleConfig({
  baseStyle: defineStyle(() => {
    return {
      gridColumn: "1 / -1",
      ml: "calc(-50vw + 50%)",
      width: "100vw",
    };
  }),
});

const TemplateFull = defineStyleConfig({
  baseStyle: defineStyle(() => {
    return {
      gridColumn: "1 / -1",
    };
  }),
});

export default {
  Template,
  TemplateBreakout,
  TemplateFull,
  TemplateMain,
};
