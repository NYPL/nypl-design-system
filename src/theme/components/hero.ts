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
// TODO: Is this being used?
const placeholder = {
  "+ .placeholder": {
    flex: "0 1 200px",
    marginLeft: 12, // --space-xl
  },
};

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
      paddingTop: 16, // --space-xxl
      paddingBottom: 16, // --space-xxl
      paddingRight: 8, // --space-l
      paddingLeft: 8, // --space-l
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
      ...placeholder,
    },
  },
  secondary: {
    overflowX: "hidden",
    content: {
      ...wrapperStyles,
      paddingRight: 4, // --space-s
      paddingLeft: 4, // --space-s
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
    heading: {
      marginBottom: 0,
      bg: "ui.black",
      color: "ui.white",
      flex: "1 1 100%",
      marginTop: 0,
      paddingBottom: 1, // --space-xxs
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
      ".nypl--books-and-more &": {
        bg: "section.books-and-more.primary",
        _before: {
          bg: "section.books-and-more.primary",
        },
      },
      ".nypl--locations &": {
        bg: "section.locations.primary",
        _before: {
          bg: "section.locations.primary",
        },
      },
      ".nypl--research &": {
        bg: "section.research.primary",
        _before: {
          bg: "section.research.primary",
        },
      },
      ".nypl--whats-on &": {
        bg: "section.whats-on.primary",
        _before: {
          bg: "section.whats-on.primary",
        },
      },
    },
    bodyText: {
      marginTop: 2, // --space-xs
      marginRight: { md: 2 },
      flex: { md: "1 1 50%" },
      order: { md: "2" },
    },
  },
  tertiary: {
    bg: "ui.gray.xdark",
    content: {
      ...wrapperStyles,
      color: "ui.white",
      display: "flex",
      flexFlow: "column nowrap",
      paddingTop: 8, // --space-l
      paddingBottom: 8, // --space-l
      paddingRight: 4, // --space-s
      paddingLeft: 4, // --space-s
      p: {
        marginBottom: "0",
      },
    },
    heading: {
      marginBottom: 2, // --space-s
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
    marginBottom: 16, // --space-xxl
    minHeight: "300px",
    overflow: "visible",
    padding: {
      base: 18, // --space-l,
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
      top: { md: 16 },
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
      padding: 18, // --space-l,
      maxWidth: { md: "960px" },
    },
    ...placeholder,
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
      paddingBottom: 4, // --space-s
      paddingRight: 4, // --space-s
      paddingLeft: 4, // --space-s
      padding: {
        lg: "unset",
      },
    },
    img: {
      marginBottom: {
        base: 4, // --space-s
        lg: "unset",
      },
      marginRight: {
        lg: 4, // --space-s
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
  // primary, secondary, tertiary, campaign, fiftyfifty
  variants,
};

export default Hero;
