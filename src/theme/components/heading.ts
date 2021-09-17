// Heading Styles
const headings = {
  h1: {
    fontSize: "4", // var(--font-size-4);
    fontWeight: "light",
    letterSpacing: "0",
    lineHeight: "1.1",
    margin: "0 0 0.5em",
    width: "auto",
  },
  h2: {
    fontSize: "3", // var(--font-size-3);
    fontWeight: "medium",
    lineHeight: "1.25",
    margin: "0 0 0.5em",
    width: "auto",
  },
  h3: {
    fontSize: "2", // var(--font-size-2);
    fontWeight: "medium",
    lineHeight: "1.25",
    margin: "0 0 0.5em",
    width: "auto",
  },
  h4: {
    fontSize: "1", // var(--font-size-1);
    fontWeight: "medium",
    lineHeight: "1.15",
    margin: "0 0 0.5em",
    width: "auto",
  },
  fallback: {
    fontSize: "1", // var(--font-size-1);
    fontWeight: "regular",
    lineHeight: "1.15",
    margin: "0 0 0.5em",
    width: "auto",
  },
};

// styles for different visual variants:
// primary, secondary, tertiary, callout
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
  //   primary, secondary, tertiary, callout
  variants,
  defaultProps: {
    variant: "secondary",
  },
};

export default Heading;
