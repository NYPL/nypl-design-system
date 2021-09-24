// From the `wrapper` SCSS mixin.
// TODO: Eventually we may be able to put shared JS style objects
// into a utils file for other mixins that are shared.
const wrapperStyles = {
  marginY: 0,
  marginX: "auto",
  maxWidth: "1280px",
  paddingTop: 0,
  paddingBottom: 0,
  paddingRight: 0,
  paddingLeft: 0,
  width: "100%",
};
// Used for all "secondary" variants.
const secondaryBase = {
  overflowX: "hidden",
  content: {
    ...wrapperStyles,
    paddingRight: "s",
    paddingLeft: "s",
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
    marginTop: "xs",
    marginRight: { md: "xs" },
    flex: { md: "1 1 50%" },
    order: { md: "2" },
  },
};
// Used for all "secondary" variants' heading component.
const secondaryHeadingBase = {
  marginBottom: 0,
  bg: "ui.black",
  color: "ui.white",
  flex: "1 1 100%",
  marginTop: 0,
  paddingBottom: "xxs",
  position: "relative",
  zIndex: 0,
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

const variants = {
  primary: {
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
      paddingTop: "xxl",
      paddingBottom: "xxl",
      paddingRight: "l",
      paddingLeft: "l",
      a: {
        color: "inherit",
        display: "inline-block",
      },
      heading: {
        marginBottom: 0,
      },
      bodyText: {
        marginBottom: 0,
      },
    },
  },
  secondary: {
    ...secondaryBase,
    heading: {
      ...secondaryHeadingBase,
    },
  },
  secondaryBooksAndMore: getSecondaryVariantStyles(
    "section.books-and-more.primary"
  ),
  secondaryLocations: getSecondaryVariantStyles("section.locations.primary"),
  secondaryResearch: getSecondaryVariantStyles("section.research.primary"),
  secondaryWhatsOn: getSecondaryVariantStyles("section.whats-on.primary"),
  tertiary: {
    bg: "ui.gray.xdark",
    content: {
      ...wrapperStyles,
      color: "ui.white",
      display: "flex",
      flexFlow: "column nowrap",
      paddingTop: "l",
      paddingBottom: "l",
      paddingRight: "s",
      paddingLeft: "s",
      p: {
        marginBottom: "0",
      },
    },
    heading: {
      marginBottom: "s",
      _lastChild: {
        marginBottom: "0",
      },
    },
    p: {
      marginBottom: "0",
    },
  },
  campaign: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: "xxl",
    minHeight: "300px",
    overflow: "visible",
    padding: {
      base: "l",
      md: 0,
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
      padding: "l",
      maxWidth: { md: "960px" },
    },
  },
  fiftyfifty: {
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
  },
};
const Hero = {
  baseStyle: {
    bg: "ui.gray.warm-xlight",
  },
  // Available variants:
  // primary, secondary, secondaryBooksAndMore, secondaryLocations,
  // secondaryResearch, secondaryWhatsOn, tertiary, campaign, fiftyfifty
  variants,
};

export default Hero;
