import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";

export const responsiveGap = { base: "1rem", md: "1.5rem", xl: "1rem" };
export const responsivePadding = { base: "1rem", md: "1.5rem", xl: "2rem" };

const Template = defineStyleConfig({
  baseStyle: defineStyle({
    boxSizing: "border-box",
    color: "ui.typography.body",
    _dark: {
      color: "dark.ui.typography.body",
    },
  }),
  sizes: {},
  defaultProps: {},
});

const TemplateContent = defineStyleConfig({
  baseStyle: defineStyle({
    display: "grid",
    gridTemplateColumns: {
      base: "repeat(1, minmax(100px, 1fr))",
    },
    gap: responsiveGap,
    padding: responsivePadding,
  }),

  variants: {
    left: {
      gridTemplateColumns: {
        md: "repeat(2, minmax(100px, 1fr))",
        lg: "1fr 2fr",
        xl: "1fr 3fr",
      },
    },
    right: {
      gridTemplateColumns: {
        md: "repeat(2, minmax(100px, 1fr))",
        lg: "2fr 1fr",
        xl: "3fr 1fr",
      },
    },
  },
});

const TemplateContentTopBottom = defineStyleConfig({
  baseStyle: defineStyle({
    /** 1 / -1 ensures the item spans all columns,
     * no matter how many there are. */
    gridColumn: "1 / -1",
  }),
});

const TemplateContentPrimary = defineStyleConfig({
  baseStyle: defineStyle({
    overflow: "hidden",
    // We need `overflow: hidden` to ensure larger elements passed to the template
    // appear correctly, but it also cuts off the default focus ring. The following
    // offset property ensures the focus ring is fully visible.
    "*": {
      _focus: {
        outlineOffset: "-2px !important",
      },
    },
  }),
});

export default {
  Template,
  TemplateContent,
  TemplateContentTopBottom,
  TemplateContentPrimary,
};
