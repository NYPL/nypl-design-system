import { baseLinkStyles } from "./link";

const margins = {
  marginTop: "0",
  marginStart: "0",
  marginEnd: "0",
};

// Heading Styles
export const headings = {
  one: {
    fontSize: "heading.primary", // var(--nypl-fontSizes-4);
    fontWeight: "heading.primary",
    letterSpacing: "0",
    lineHeight: "1.1",
    ...margins,
    width: "auto",
  },
  two: {
    fontSize: "heading.secondary", // var(--nypl-fontSizes-3);
    fontWeight: "heading.secondary",
    lineHeight: "1.25",
    ...margins,
    width: "auto",
  },
  three: {
    fontSize: "heading.tertiary", // var(--nypl-fontSizes-2);
    fontWeight: "heading.tertiary",
    lineHeight: "1.25",
    ...margins,
    width: "auto",
  },
  four: {
    fontSize: "heading.callout", // var(--nypl-fontSizes-1);
    fontWeight: "heading.callout",
    lineHeight: "1.15",
    ...margins,
    width: "auto",
  },
  fallback: {
    fontSize: "1", // var(--nypl-fontSizes-1);
    fontWeight: "regular",
    lineHeight: "1.15",
    ...margins,
    width: "auto",
  },
  display1: {
    fontWeight: "heading.display1",
    letterSpacing: "1px",
    lineHeight: "1.05",
    width: "auto",
  },
  heading1: {
    fontWeight: "heading.heading1",
    letterSpacing: "1px",
    lineHeight: "1.05",
    width: "auto",
  },
  heading2: {
    fontWeight: "heading.heading2",
    letterSpacing: "1px",
    lineHeight: "1.15",
    width: "auto",
  },
  heading3: {
    fontWeight: "heading.heading3",
    letterSpacing: "1px",
    lineHeight: "1.15",
    width: "auto",
  },
  heading4: {
    fontWeight: "heading.heading4",
    lineHeight: "1.2",
    width: "auto",
  },
  heading5: {
    fontWeight: "heading.heading5",
    lineHeight: "1.2",
    width: "auto",
  },
  heading6: {
    fontWeight: "heading.heading6",
    lineHeight: "1.2",
    width: "auto",
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
  baseStyle: ({ isCapitalized, isUppercase, isLowercase, noSpace }) => ({
    // This is to help target custom anchor elements
    // passed as children to the Heading component.
    a: baseLinkStyles,
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
  // one, two, three, four, five, six
  // primary, secondary, tertiary, callout
  // h1, h2, h3, h4, h5, h6
  // heading1, heading2, heading3, heading4, heading5, heading6
  variants,
  defaultProps: {
    variant: "secondary",
  },
};

export default Heading;
