import { wrapperStyles } from "./global";

// Used for all "secondary" variants.
const secondaryBase = {
  overflowX: "hidden",
  content: {
    ...wrapperStyles,
    paddingRight: "inset.default",
    paddingLeft: "inset.default",
    display: "flex",
    flexFlow: {
      base: "column nowrap",
      md: "row wrap",
    },
    img: {
      flex: {
        base: "1 1 100%",
        md: "0 0 250px",
      },
      order: { md: "3" },
      height: "150px",
      minWidth: "0", // https://github.com/philipwalton/flexbugs/issues/41
      objectFit: "cover",
      width: "100%",
    },
  },
  bodyText: {
    paddingBottom: "inset.default",
    paddingTop: "inset.default",
    paddingRight: { md: "inset.default" },
    flex: { md: "1 1 50%" },
    order: { md: "2" },
  },
};
// Used for all "secondary" variants' heading component.
const secondaryHeadingBase = {
  marginBottom: "0",
  bg: "ui.black",
  color: "ui.white",
  flex: "1 1 100%",
  marginTop: "0",
  paddingBottom: "xxs",
  position: "relative",
  zIndex: "0",
  order: { md: "1" },
  _before: {
    bg: "ui.black",
    content: `""`,
    height: "100%",
    left: "-2000px",
    position: "absolute",
    width: "4000px",
    zIndex: "-1",
  },
};
// Get all the styles for the specific Secondary variant but
// update the background color.
const getSecondaryVariantStyles = (bgColor: string) => ({
  ...secondaryBase,
  heading: {
    ...secondaryHeadingBase,
    bg: bgColor,
    _before: {
      ...secondaryHeadingBase["_before"],
      bg: bgColor,
    },
  },
});
// Variant styling
const primary = {
  alignItems: "center",
  display: "flex",
  flexFlow: {
    base: "column nowrap",
    md: "row nowrap",
  },
  justifyContent: "center",
  minHeight: "350px",
  content: {
    bg: "ui.black",
    color: "ui.white",
    flex: {
      base: "0 0 100%",
      md: "0 0 60%",
    },
    maxWidth: { md: "960px" },
    paddingTop: "inset.extrawide",
    paddingBottom: "inset.extrawide",
    paddingRight: "inset.wide",
    paddingLeft: "inset.wide",
    a: {
      color: "inherit",
      display: "inline-block",
    },
    heading: {
      marginBottom: "0",
    },
    bodyText: {
      marginBottom: "0",
    },
  },
};
const secondary = {
  ...secondaryBase,
  heading: {
    ...secondaryHeadingBase,
  },
};
const secondaryBooksAndMore = getSecondaryVariantStyles(
  "section.books-and-more.primary"
);
const secondaryLocations = getSecondaryVariantStyles(
  "section.locations.primary"
);
const secondaryResearch = getSecondaryVariantStyles("section.research.primary");
const secondaryWhatsOn = getSecondaryVariantStyles("section.whats-on.primary");
const tertiary = {
  bg: "ui.gray.xdark",
  content: {
    ...wrapperStyles,
    color: "ui.white",
    display: "flex",
    flexFlow: "column nowrap",
    padding: "inset.default",
    p: {
      marginBottom: "0",
      marginTop: "s",
    },
  },
  heading: {
    marginBottom: "0",
    _lastChild: {
      marginBottom: "0",
    },
  },
  p: {
    marginBottom: "0",
  },
};
const campaign = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  marginBottom: ["0", "0", "xxl"],
  minHeight: "300px",
  overflow: "visible",
  padding: {
    base: "inset.wide",
    md: "0",
  },
  position: "relative",
  content: {
    alignItems: "center",
    bg: "ui.black",
    color: "ui.white",
    display: "flex",
    flexFlow: {
      base: "column nowrap",
      md: "row nowrap",
    },
    minHeight: "320px",
    flex: { md: "0 0 90%" },
    maxWidth: { md: "1280px" },
    position: { md: "relative" },
    top: { md: "xxl" },
  },
  a: {
    color: "inherit",
    display: "inline-block",
  },
  img: {
    flex: {
      base: "1 1 100%",
      md: "0 0 50%",
    },
    minWidth: "0", // https://github.com/philipwalton/flexbugs/issues/41
    objectFit: "cover",
    width: "100%",
    height: { md: "320px" },
  },
  interior: {
    flex: {
      base: "0 0 100%",
      md: "0 0 50%",
    },
    padding: "inset.wide",
    maxWidth: { md: "960px" },
  },
};
const fiftyFifty = {
  content: {
    ...wrapperStyles,
    alignItems: "center",
    display: "flex",
    flexFlow: {
      base: "column nowrap",
      lg: "row nowrap",
    },
    paddingBottom: "s",
    paddingRight: "s",
    paddingLeft: "s",
    padding: {
      lg: "unset",
    },
  },
  img: {
    marginBottom: {
      base: "s",
      lg: "unset",
    },
    marginRight: {
      lg: "s",
    },
    maxWidth: {
      base: "fit-content",
      lg: "50%",
    },
  },
};
const Hero = {
  baseStyle: {
    bg: "ui.gray.x-light-cool",
  },
  // Available variants:
  variants: {
    primary,
    secondary,
    secondaryBooksAndMore,
    secondaryLocations,
    secondaryResearch,
    secondaryWhatsOn,
    tertiary,
    campaign,
    fiftyFifty,
  },
};

export default Hero;
