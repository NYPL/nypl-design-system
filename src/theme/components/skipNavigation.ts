import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";

const SkipNavigation = defineStyleConfig({
  baseStyle: defineStyle({
    ul: {
      margin: "0",
    },
    // Don't display links by default...
    a: {
      backgroundColor: "v5.surface.page",
      height: "1px",
      left: "-10000px",
      overflow: "hidden",
      position: "absolute",
      top: "auto",
      width: "1px",

      // Only display when the user focuses on the links.
      _focus: {
        borderRadius: "v5.soft",
        boxShadow: "0 0 0 8px var(--nypl-colors-v5-surface-page) ",
        height: "auto",
        left: "1rem",
        paddingX: "v5.skipNavigation.paddingX",
        paddingY: "v5.skipNavigation.paddingY",
        top: "1rem",
        width: "auto",
        // Remove default outline offset for activeFocus state.
        outlineOffset: "0px",
      },
    },
  }),
});

export default SkipNavigation;
