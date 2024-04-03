import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
// import { StyleFunctionProps } from "@chakra-ui/system";
import { wrapperStyles } from "./global";
import { screenreaderOnly } from "./globalMixins";

// This function creates a set of function that helps us
// create multipart component styles.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    "base",
    "bodyText",
    "content",
    "heading",
    "imgWrapper",
    "interior",
  ]);

// Used for all "secondary" variants.
const secondaryBase = definePartsStyle({
  base: {
    overflowX: "hidden",
    bgColor: "ui.bg.default",
    _dark: {
      bgColor: "dark.ui.bg.default",
    },
  },
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
});
// Used for all "secondary" variants' heading component.
const secondaryHeadingBase = {
  marginBottom: "0",
  color: "ui.typography.inverse.heading",
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
  _dark: {
    color: "dark.ui.typography.heading",
  },
};

// Get all the styles for the specific Secondary variant but
// update the background color.
const getSecondaryVariantStyles = (bgColor: string = "") => {
  const finalBgColor = {
    light: bgColor ? bgColor : "ui.black",
    dark: bgColor ? `dark.${bgColor}` : "dark.ui.bg.active",
  };
  return {
    ...secondaryBase,
    heading: {
      ...secondaryHeadingBase,
      color: bgColor ? "ui.white" : "ui.typography.inverse.heading",
      _before: {
        ...secondaryHeadingBase["_before"],
        bg: finalBgColor.light,
      },
      _dark: {
        color: "dark.ui.typography.heading",
        _before: {
          bg: finalBgColor.dark,
        },
      },
    },
  };
};
// Variant styling
const primary = definePartsStyle({
  base: {
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
  },
  content: {
    bg: "ui.black",
    color: "ui.typography.inverse.body",
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
    bodyText: {
      marginBottom: "0",
    },
    // h1: { color: "ui.typography.inverse.heading" },
    _dark: {
      bgColor: "dark.ui.bg.default",
      color: "dark.ui.typography.body",
    },
  },
  heading: {
    color: "dark.ui.typography.heading",
  },
});
const secondary = getSecondaryVariantStyles();
const secondaryBooksAndMore = getSecondaryVariantStyles(
  "section.books-and-more.primary"
);
const secondaryLocations = definePartsStyle(
  getSecondaryVariantStyles("section.locations.primary")
);
const secondaryResearch = definePartsStyle(
  getSecondaryVariantStyles("section.research.primary")
);
const secondaryWhatsOn = definePartsStyle(
  getSecondaryVariantStyles("section.whats-on.primary")
);
const tertiary = definePartsStyle({
  base: {
    p: {
      marginBottom: "0",
    },
  },
  content: {
    ...wrapperStyles,
    color: "ui.typography.inverse.body",
    display: "flex",
    flexFlow: "column nowrap",
    px: "inset.default",
    py: { base: "inset.default", xl: "inset.wide" },
    p: {
      marginBottom: "0",
      marginTop: { base: "xxs", xl: "xs" },
    },
    _dark: {
      p: { color: "dark.ui.typography.body" },
    },
  },
  heading: {
    color: "ui.typography.inverse.heading",
    marginBottom: "0",
    _lastChild: {
      marginBottom: "0",
    },
  },
});
const campaign = definePartsStyle({
  base: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    padding: {
      base: "inset.wide",
      md: "calc(var(--nypl-space-xxl) + var(--nypl-space-s)) var(--nypl-space-s) 0",
    },
    position: "relative",
    a: {
      color: "inherit",
      display: "inline-block",
    },
    img: screenreaderOnly(),
  },
  content: {
    alignItems: "stretch",
    bg: "ui.black",
    color: "ui.typography.inverse.body",
    display: "flex",
    flexFlow: {
      base: "column nowrap",
      lg: "row nowrap",
    },
    minHeight: "320px",
    flex: { md: "0 100%" },
    maxWidth: { md: "1248px" },
    position: { md: "relative" },
    zIndex: 2,
    _dark: {
      color: "dark.ui.typography.body",
    },
  },
  heading: {
    color: "dark.ui.typography.heading",
  },
  imgWrapper: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "230px",
    width: {
      base: "100%",
      lg: "50%",
    },
  },
  interior: {
    alignSelf: "center",
    maxWidth: { md: "960px" },
    padding: {
      base: "inset.default",
      md: "inset.wide",
    },
    width: {
      base: "100%",
      lg: "50%",
    },
  },
});
const fiftyFifty = definePartsStyle({
  base: {
    img: screenreaderOnly(),
  },
  content: {
    ...wrapperStyles,
    alignItems: "stretch",
    display: "flex",
    flexFlow: {
      base: "column nowrap",
      lg: "row nowrap",
    },
  },
  imgWrapper: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "160px",
    width: {
      base: "100%",
      lg: "50%",
    },
  },
  bodyText: {
    alignSelf: "center",
    maxWidth: { md: "960px" },
    padding: {
      base: "inset.default",
      md: "inset.wide",
    },
    width: {
      base: "100%",
      lg: "50%",
    },
  },
});
const Hero = defineMultiStyleConfig({
  baseStyle: {},
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
});

export default Hero;