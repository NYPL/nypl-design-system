import { wrapperStyles } from "./global";

// Used for all "secondary" variants.
const secondaryBase = {
  overflowX: "hidden",
  content: {
    ...wrapperStyles,
    paddingEnd: "inset.default",
    paddingStart: "inset.default",
    display: "flex",
    flexFlow: {
      base: "column nowrap",
      md: "row wrap",
    },
  },
  imgWrapper: {
    marginEnd: { base: "calc(-50vw + 50%)", md: "0" },
    marginStart: { base: "calc(-50vw + 50%)", md: "0" },
    flex: {
      base: "1 1 100%",
      md: "0 0 250px",
    },
    order: { base: "2", md: "3" },
    img: {
      height: "150px",
      minWidth: "0", // https://github.com/philipwalton/flexbugs/issues/41
      objectFit: "cover",
      width: "100%",
    },
  },
  bodyText: {
    paddingBottom: "inset.default",
    paddingEnd: { md: "inset.default" },
    paddingTop: "inset.default",
    flex: { md: "1 1 50%" },
    order: { base: "3", md: "2" },
  },
};
// Used for all "secondary" variants' heading component.
const secondaryHeadingBase = {
  marginBottom: "0",
  color: "ui.white",
  flex: "1 1 100%",
  marginTop: "0",
  paddingBottom: "xxs",
  position: "relative",
  zIndex: "0",
  order: "1",
  _before: {
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
const getSecondaryVariantStyles = (bgColor: string = "ui.black") => ({
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
  backgroundSize: "cover",
  backgroundPosition: "center",
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
    paddingEnd: "inset.wide",
    paddingStart: "inset.wide",
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
const secondary = getSecondaryVariantStyles();
const secondaryBooksAndMore = getSecondaryVariantStyles(
  "section.books-and-more.primary"
);
const secondaryLocations = getSecondaryVariantStyles(
  "section.locations.primary"
);
const secondaryResearch = getSecondaryVariantStyles("section.research.primary");
const secondaryWhatsOn = getSecondaryVariantStyles("section.whats-on.primary");
const tertiary = {
  bg: "ui.gray.x-dark",
  content: {
    ...wrapperStyles,
    color: "ui.white",
    display: "flex",
    flexFlow: "column nowrap",
    px: "inset.default",
    py: { base: "inset.default", xl: "inset.wide" },
    p: {
      marginBottom: "0",
      marginTop: { base: "xxs", xl: "xs" },
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
  backgroundSize: "cover",
  backgroundPosition: "center",
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
    paddingEnd: "s",
    paddingStart: "s",
    padding: {
      lg: "unset",
    },
  },
  imgWrapper: {
    marginBottom: {
      base: "s",
      lg: "unset",
    },
    marginEnd: {
      base: "-15px",
      lg: "s",
    },
    marginStart: {
      base: "-15px",
    },
    maxWidth: {
      lg: "50%",
    },
    width: "auto",
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
