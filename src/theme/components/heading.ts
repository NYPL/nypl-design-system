const margins = {
  marginTop: "0",
  marginLeft: "0",
  marginRight: "0",
  marginBottom: "s",
};

// Heading Styles
const headings = {
  h1: {
    fontSize: "4", // var(--nypl-fontSizes-4);
    fontWeight: "light",
    letterSpacing: "0",
    lineHeight: "1.1",
    ...margins,
    width: "auto",
  },
  h2: {
    fontSize: "3", // var(--nypl-fontSizes-3);
    fontWeight: "medium",
    lineHeight: "1.25",
    ...margins,
    width: "auto",
  },
  h3: {
    fontSize: "2", // var(--nypl-fontSizes-2);
    fontWeight: "medium",
    lineHeight: "1.25",
    ...margins,
    width: "auto",
  },
  h4: {
    fontSize: "1", // var(--nypl-fontSizes-1);
    fontWeight: "medium",
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
  // Available variants:
  // h1, h2, h3, h4, h5, h6,
  // primary, secondary, tertiary, callout
  variants,
  defaultProps: {
    variant: "secondary",
  },
};

export default Heading;
