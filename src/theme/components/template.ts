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
      // Using named grid lines to implicitly define grid template areas
      gridTemplateColumns:
        "[breakout-start top-start sidebar-start main-start bottom-start] 1fr [breakout-end top-end sidebar-end main-end bottom-end]",
      gridTemplateRows:
        "[breakout-start] auto [breakout-end top-start] auto [top-end main-start] auto [main-end sidebar-start] auto [sidebar-end bottom-start] auto [botom-end]",
      columnGap: responsiveGap,
      "& > *:not(:last-child)": { mb: responsiveGap },
    };
  }),
  variants: {
    left: {
      // Using named grid lines to implicitly define grid template areas
      gridTemplateColumns: {
        base: "[breakout-start top-start sidebar-start main-start bottom-start] 1fr [breakout-end top-end sidebar-end main-end bottom-end]",
        sm: "[breakout-start top-start sidebar-start bottom-start] repeat(6, 1fr) [sidebar-end main-start] repeat(6, 1fr) [breakout-end top-end main-end bottom-end]",
        md: "[breakout-start top-start sidebar-start bottom-start] repeat(4, 1fr) [sidebar-end main-start] repeat(8, 1fr) [breakout-end top-end main-end bottom-end]",
        lg: "[breakout-start top-start sidebar-start bottom-start] repeat(3, 1fr) [sidebar-end main-start] repeat(9, 1fr) [breakout-end top-end main-end bottom-end]",
      },
      gridTemplateRows: {
        base: "[breakout-start] auto [breakout-end top-start] auto [top-end sidebar-start] auto [sidebar-end main-start] auto [main-end bottom-start] auto [botom-end]",
        sm: "[breakout-start] auto [breakout-end top-start] auto [top-end main-start sidebar-start] auto [main-end sidebar-end botton-start] auto [botom-end]",
      },
    },
    right: {
      // Using named grid lines to implicitly define grid template areas
      gridTemplateColumns: {
        base: "[breakout-start top-start sidebar-start main-start bottom-start] 1fr [breakout-end top-end sidebar-end main-end bottom-end]",
        sm: "[breakout-start top-start main-start bottom-start] repeat(6, 1fr) [main-end sidebar-start] repeat(6, 1fr) [breakout-end top-end sidebar-end bottom-end]",
        md: "[breakout-start top-start main-start bottom-start] repeat(8, 1fr) [main-end sidebar-start] repeat(4, 1fr) [breakout-end top-end sidebar-end bottom-end]",
        lg: "[breakout-start top-start main-start bottom-start] repeat(9, 1fr) [main-end sidebar-start] repeat(3, 1fr) [breakout-end top-end sidebar-end bottom-end]",
      },
      gridTemplateRows: {
        base: "[breakout-start] auto [breakout-end top-start] auto [top-end main-start] auto [main-end sidebar-start] auto [sidebar-end bottom-start] auto [botom-end]",
        sm: "[breakout-start] auto [breakout-end top-start] auto [top-end main-start sidebar-start] auto [main-end sidebar-end botton-start] auto [botom-end]",
      },
    },
  },
});

const TemplateBreakout = defineStyleConfig({
  baseStyle: defineStyle(() => {
    const { responsiveMargin } = useResponsiveSpacing();
    return {
      width: "100vw",
      ml: "calc(-50vw + 50%)",
      px: responsiveMargin,
    };
  }),
});

const TemplateMainNarrow = defineStyleConfig({
  baseStyle: defineStyle(() => {
    const { responsiveGap } = useResponsiveSpacing();
    return {
      columnGap: responsiveGap,
      display: "grid",
      // Using named grid lines to implicitly define grid template areas
      gridTemplateColumns: {
        base: "[mainNarrow-start] 1fr [mainNarrow-end]",
        md: "1fr [mainNarrow-start] repeat(10, 1fr) [mainNarrow-end] 1fr",
        lg: "1fr 1fr [mainNarrow-start] repeat(8, 1fr) [mainNarrow-end] 1fr 1fr",
      },
    };
  }),
});

export default {
  Template,
  TemplateBreakout,
  TemplateMainNarrow,
};
