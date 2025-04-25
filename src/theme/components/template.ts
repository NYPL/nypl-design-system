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
      gridTemplateAreas: `
        "breakout"
        "top"
        "main"
        "bottom"
      `,
      gridTemplateColumns: "100%",
      gridTemplateRows: "auto",
      columnGap: responsiveGap,
      "& > *:not(:last-child)": { mb: responsiveGap },
    };
  }),
  variants: {
    left: {
      gridTemplateAreas: {
        base: `
          "breakout"
          "top"
          "sidebar"
          "main"
          "bottom"
        `,
        sm: `
          "breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout" 
          "top top top top top top top top top top top top" 
          "sidebar sidebar sidebar sidebar sidebar sidebar main main main main main main" 
          "bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom"
        `,
        md: `
          "breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout" 
          "top top top top top top top top top top top top" 
          "sidebar sidebar sidebar sidebar main main main main main main main main" 
          "bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom"
        `,
        lg: `
          "breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout" 
          "top top top top top top top top top top top top" 
          "sidebar sidebar sidebar main main main main main main main main main" 
          "bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom"
        `,
      },
      gridTemplateColumns: { sm: "repeat(12, 1fr)" },
    },
    right: {
      gridTemplateAreas: {
        base: `
          "breakout"
          "top"
          "sidebar"
          "main"
          "bottom"
        `,
        sm: `
          "breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout" 
          "top top top top top top top top top top top top" 
          "main main main main main main sidebar sidebar sidebar sidebar sidebar sidebar" 
          "bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom"
        `,
        md: `
          "breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout" 
          "top top top top top top top top top top top top" 
          "main main main main main main main main sidebar sidebar sidebar sidebar" 
          "bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom"
        `,
        lg: `
          "breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout breakout" 
          "top top top top top top top top top top top top" 
          "main main main main main main main main main sidebar sidebar sidebar" 
          "bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom"
        `,
      },
      gridTemplateColumns: { sm: "repeat(12, 1fr)" },
      gridTemplateRows: "auto",
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
      gridTemplateAreas: {
        base: `"mainNarrow"`,
        md: `". mainNarrow mainNarrow mainNarrow mainNarrow mainNarrow mainNarrow mainNarrow mainNarrow mainNarrow mainNarrow ."`,
        lg: `". . mainNarrow mainNarrow mainNarrow mainNarrow mainNarrow mainNarrow mainNarrow mainNarrow . ."`,
      },
      gridTemplateColumns: { base: "100%", md: "repeat(12, 1fr)" },
      // maxWidth: "720px",
      // m: "0 auto",
    };
  }),
});

export default {
  Template,
  TemplateBreakout,
  TemplateMainNarrow,
};
