import { baseLinkStyles } from "./link";

const margins = {
  marginTop: "0",
  marginStart: "0",
  marginEnd: "0",
};

/**
 * Heading Styles
 *
 * Chakra's standard responsive style method is not working for the fontSize
 * attribute. Because of the, we are including our own @media queries to set
 * fontSize.
 *
 * For the deprecated variants, the base and 600px breakpoints use the same
 * values. This was needed for consistency and necessary to override the styles
 * set later in the file for the new heading variants.
 */
export const headings = {
  one: {
    fontWeight: "heading.primary",
    letterSpacing: "0",
    lineHeight: "1.1",
    ...margins,
    width: "auto",
    a: { textUnderlineOffset: "4px" },
    "@media (min-width: 0px)": {
      fontSize: "heading.primary", // var(--nypl-fontSizes-4);
    },
    "@media (min-width: 600px)": {
      fontSize: "heading.primary", // var(--nypl-fontSizes-4);
    },
  },
  two: {
    fontWeight: "heading.secondary",
    lineHeight: "1.25",
    ...margins,
    width: "auto",
    a: { textUnderlineOffset: "3px" },
    "@media (min-width: 0px)": {
      fontSize: "heading.secondary", // var(--nypl-fontSizes-3);
    },
    "@media (min-width: 600px)": {
      fontSize: "heading.secondary", // var(--nypl-fontSizes-3);
    },
  },
  three: {
    fontWeight: "heading.tertiary",
    lineHeight: "1.25",
    ...margins,
    width: "auto",
    "@media (min-width: 0px)": {
      fontSize: "heading.tertiary", // var(--nypl-fontSizes-2);
    },
    "@media (min-width: 600px)": {
      fontSize: "heading.tertiary", // var(--nypl-fontSizes-2);
    },
  },
  four: {
    fontWeight: "heading.callout",
    lineHeight: "1.15",
    ...margins,
    width: "auto",
    "@media (min-width: 0px)": {
      fontSize: "heading.callout", // var(--nypl-fontSizes-1);
    },
    "@media (min-width: 600px)": {
      fontSize: "heading.callout", // var(--nypl-fontSizes-1);
    },
  },
  fallback: {
    fontWeight: "regular",
    lineHeight: "1.15",
    ...margins,
    width: "auto",
    "@media (min-width: 0px)": {
      fontSize: "1", // var(--nypl-fontSizes-1);
    },
    "@media (min-width: 600px)": {
      fontSize: "1", // var(--nypl-fontSizes-1);
    },
  },
  display1: {
    fontWeight: "heading.display1",
    letterSpacing: "0.0625rem",
    lineHeight: "1.10",
    width: "auto",
    a: { textUnderlineOffset: "7px" },
    "@media (min-width: 0px)": {
      fontSize: "mobile.heading.display1",
    },
    "@media (min-width: 600px)": {
      fontSize: "desktop.heading.display1",
    },
  },
  heading1: {
    fontWeight: "heading.heading1",
    letterSpacing: "0.0625rem",
    lineHeight: "1.15",
    width: "auto",
    a: { textUnderlineOffset: "6px" },
    "@media (min-width: 0px)": {
      fontSize: "mobile.heading.heading1",
    },
    "@media (min-width: 600px)": {
      fontSize: "desktop.heading.heading1",
    },
  },
  heading2: {
    fontWeight: "heading.heading2",
    letterSpacing: "0.0625rem",
    lineHeight: "1.20",
    width: "auto",
    a: { textUnderlineOffset: "5px" },
    "@media (min-width: 0px)": {
      fontSize: "mobile.heading.heading2",
    },
    "@media (min-width: 600px)": {
      fontSize: "desktop.heading.heading2",
    },
  },
  heading3: {
    fontWeight: "heading.heading3",
    letterSpacing: "0",
    lineHeight: "1.25",
    width: "auto",
    a: { textUnderlineOffset: "4px" },
    "@media (min-width: 0px)": {
      fontSize: "mobile.heading.heading3",
    },
    "@media (min-width: 600px)": {
      fontSize: "desktop.heading.heading3",
    },
  },
  heading4: {
    fontWeight: "heading.heading4",
    letterSpacing: "0",
    lineHeight: "1.30",
    width: "auto",
    a: { textUnderlineOffset: "3px" },
    "@media (min-width: 0px)": {
      fontSize: "mobile.heading.heading4",
    },
    "@media (min-width: 600px)": {
      fontSize: "desktop.heading.heading4",
    },
  },
  heading5: {
    fontWeight: "heading.heading5",
    letterSpacing: "0",
    lineHeight: "1.35",
    width: "auto",
    "@media (min-width: 0px)": {
      fontSize: "mobile.heading.heading5",
    },
    "@media (min-width: 600px)": {
      fontSize: "desktop.heading.heading4",
    },
  },
  heading6: {
    fontWeight: "heading.heading6",
    letterSpacing: "0",
    lineHeight: "1.40",
    width: "auto",
    "@media (min-width: 0px)": {
      fontSize: "mobile.heading.heading6",
    },
    "@media (min-width: 600px)": {
      fontSize: "desktop.heading.heading6",
    },
  },
};

// Styles for different visual variants
const variants = {
  // RECOMMENDED options for native heading element variants
  h1: headings.heading1,
  h2: headings.heading2,
  h3: headings.heading3,
  h4: headings.heading4,
  h5: headings.heading5,
  h6: headings.heading6,
  // DEPRECATED options for native heading elements variants
  one: headings.one,
  two: headings.two,
  three: headings.three,
  four: headings.four,
  five: headings.fallback,
  six: headings.fallback,
  // RECOMMENDED options for size variants
  display1: headings.display1,
  heading1: headings.heading1,
  heading2: headings.heading2,
  heading3: headings.heading3,
  heading4: headings.heading4,
  heading5: headings.heading5,
  heading6: headings.heading6,
  // DEPRECATED options for size variants
  primary: headings.one,
  secondary: headings.two,
  tertiary: headings.three,
  callout: headings.four,
};

const Heading = {
  parts: ["headingWrapper"],
  baseStyle: ({ isCapitalized, isUppercase, isLowercase, noSpace, url }) => ({
    // This is to help target custom anchor elements
    // passed as children to the Heading component.
    a: {
      ...baseLinkStyles,
      textDecoration: url ? "none" : "underline",
    },
    color: "ui.typography.heading",
    textTransform: isCapitalized
      ? "capitalize"
      : isUppercase
      ? "uppercase"
      : isLowercase
      ? "lowercase"
      : null,
    _dark: {
      color: "dark.ui.typography.heading",
    },
    headingWrapper: {
      marginBottom: noSpace ? "0" : "s",
      ...margins,
    },
  }),
  // Available variants:
  // h1, h2, h3, h4, h5, h6
  // display1, heading1, heading2, heading3, heading4, heading5, heading6
  // DEPRECATED: one, two, three, four, five, six
  // DEPRECATED: primary, secondary, tertiary, callout
  variants,
  defaultProps: {
    variant: "h2",
  },
};

export default Heading;
