import { baseLinkStyles } from "./link";

const margins = {
  marginTop: "0",
  marginLeft: "0",
  marginRight: "0",
};

// Heading Styles
export const headings = {
  h1: {
    fontSize: "heading.primary", // var(--nypl-fontSizes-4);
    fontWeight: "heading.primary",
    letterSpacing: "0",
    lineHeight: "1.1",
    ...margins,
    width: "auto",
  },
  h2: {
    fontSize: "heading.secondary", // var(--nypl-fontSizes-3);
    fontWeight: "heading.secondary",
    lineHeight: "1.25",
    ...margins,
    width: "auto",
  },
  h3: {
    fontSize: "heading.tertiary", // var(--nypl-fontSizes-2);
    fontWeight: "heading.tertiary",
    lineHeight: "1.25",
    ...margins,
    width: "auto",
  },
  h4: {
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
};

// Styles for different visual variants
const variants = {
  h1: headings.h1,
  h2: headings.h2,
  h3: headings.h3,
  h4: headings.h4,
  h5: headings.fallback,
  h6: headings.fallback,
  primary: headings.h1,
  secondary: headings.h2,
  tertiary: headings.h3,
  callout: headings.h4,
};

const Heading = {
  baseStyle: ({ noSpace }) => ({
    // This is to help target custom anchor elements
    // passed as children to the Heading component.
    a: baseLinkStyles,
    marginBottom: noSpace ? "0" : "s",
  }),
  // Available variants:
  // h1, h2, h3, h4, h5, h6,
  // primary, secondary, tertiary, callout
  variants,
  defaultProps: {
    variant: "secondary",
  },
};

export default Heading;
