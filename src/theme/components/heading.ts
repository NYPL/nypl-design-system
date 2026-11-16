import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

import { baseLinkStyles } from "./link";

// This function creates a set of function that helps us
// create multipart component styles.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["base", "defaultColorStyle"]);

// Heading Styles
export const headings = {
  display1: definePartsStyle({
    base: {
      fontSize: {
        base: "v5.heading.display.mobile",
        md: "v5.heading.display.tablet",
      },
      fontWeight: "v5.heading",
      letterSpacing: "0",
      lineHeight: {
        base: "v5.heading.display.mobile",
        md: "v5.heading.display.tablet",
      },
      width: "auto",
      a: { textUnderlineOffset: "7px" },
    },
  }),
  heading1: definePartsStyle({
    base: {
      fontSize: {
        base: "v5.heading.giant.mobile",
        md: "v5.heading.giant.tablet",
      },
      fontWeight: "v5.heading",
      letterSpacing: "0",
      lineHeight: {
        base: "v5.heading.giant.mobile",
        md: "v5.heading.giant.tablet",
      },
      width: "auto",
      a: { textUnderlineOffset: "6px" },
    },
  }),
  heading2: definePartsStyle({
    base: {
      fontSize: {
        base: "v5.heading.large.mobile",
        md: "v5.heading.large.tablet",
      },
      fontWeight: "v5.heading",
      letterSpacing: "0",
      lineHeight: {
        base: "v5.heading.large.mobile",
        md: "v5.heading.large.tablet",
      },
      width: "auto",
      a: { textUnderlineOffset: "5px" },
    },
  }),
  heading3: definePartsStyle({
    base: {
      fontSize: {
        base: "v5.heading.moderate.mobile",
        md: "v5.heading.moderate.tablet",
      },
      fontWeight: "v5.heading",
      letterSpacing: "0",
      lineHeight: {
        base: "v5.heading.moderate.mobile",
        md: "v5.heading.moderate.tablet",
      },
      width: "auto",
      a: { textUnderlineOffset: "4px" },
    },
  }),
  heading4: definePartsStyle({
    base: {
      fontSize: {
        base: "v5.heading.medium.mobile",
        md: "v5.heading.medium.tablet",
      },
      fontWeight: "v5.heading",
      letterSpacing: "0",
      lineHeight: {
        base: "v5.heading.medium.mobile",
        md: "v5.heading.medium.tablet",
      },
      width: "auto",
      a: { textUnderlineOffset: "3px" },
    },
  }),
  heading5: definePartsStyle({
    base: {
      fontSize: {
        base: "v5.heading.modest.mobile",
        md: "v5.heading.modest.tablet",
      },
      fontWeight: "v5.heading",
      letterSpacing: "0",
      lineHeight: {
        base: "v5.heading.modest.mobile",
        md: "v5.heading.modest.tablet",
      },
      width: "auto",
    },
  }),
  heading6: definePartsStyle({
    base: {
      fontSize: {
        base: "v5.heading.small.mobile",
        md: "v5.heading.small.tablet",
      },
      fontWeight: "v5.heading",
      letterSpacing: "0",
      lineHeight: {
        base: "v5.heading.small.mobile",
        md: "v5.heading.small.tablet",
      },
      width: "auto",
    },
  }),
  heading7: definePartsStyle({
    base: {
      fontSize: {
        base: "v5.heading.small.mobile",
        md: "v5.heading.small.tablet",
      },
      fontWeight: "v5.heading",
      letterSpacing: "0",
      lineHeight: {
        base: "v5.heading.small.mobile",
        md: "v5.heading.small.tablet",
      },
      width: "auto",
    },
  }),
  heading8: definePartsStyle({
    base: {
      fontSize: {
        base: "v5.heading.small.mobile",
        md: "v5.heading.small.tablet",
      },
      fontWeight: "v5.heading",
      letterSpacing: "0",
      lineHeight: {
        base: "v5.heading.small.mobile",
        md: "v5.heading.small.tablet",
      },
      width: "auto",
    },
  }),
};

// Styles for different visual variants
const variants = {
  // Options for native heading element variants
  h1: headings.heading1,
  h2: headings.heading2,
  h3: headings.heading3,
  h4: headings.heading4,
  h5: headings.heading5,
  h6: headings.heading6,
  // Options for size variants
  display1: headings.display1,
  heading1: headings.heading1,
  heading2: headings.heading2,
  heading3: headings.heading3,
  heading4: headings.heading4,
  heading5: headings.heading5,
  heading6: headings.heading6,
  heading7: headings.heading7,
  heading8: headings.heading8,
};

const Heading = defineMultiStyleConfig({
  baseStyle: definePartsStyle(
    ({ isCapitalized, isUppercase, isLowercase }) => ({
      base: {
        "a:only-child": {
          ...baseLinkStyles,
          textDecoration: "none",
        },
        margin: "0",
        textTransform: isCapitalized
          ? "capitalize"
          : isUppercase
            ? "uppercase"
            : isLowercase
              ? "lowercase"
              : null,
      },
      defaultColorStyle: {
        color: "ui.typography.heading",
        _dark: {
          color: "dark.ui.typography.heading",
        },
      },
    })
  ),
  // Available variants:
  // h1, h2, h3, h4, h5, h6
  // display1, heading1, heading2, heading3, heading4, heading5, heading6
  variants,
  defaultProps: {
    variant: "h2",
  },
});

export default Heading;
