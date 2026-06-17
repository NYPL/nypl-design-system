import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { responsiveSpacing, wrapperStyles } from "./global";
import { screenreaderOnly } from "./globalMixins";

// This function creates a set of functions that help us
// create multipart component styles.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    "base",
    "bodyText",
    "content",
    "grid",
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
export const getTextColor = (props) => {
  const { type, mode, foregroundColor, isDarkText, textColor } = props;
  const prefix = mode === "dark" ? "dark.ui." : "ui.";
  const finalTextColor = textColor || foregroundColor;
  const colorLight = finalTextColor
    ? finalTextColor
    : isDarkText
    ? `${prefix}typography.${type}`
    : `${prefix}typography.inverse.${type}`;
  const colorDark = finalTextColor
    ? finalTextColor
    : isDarkText
    ? `${prefix}typography.inverse.${type}`
    : `${prefix}typography.${type}`;
  const finalColor = mode === "dark" ? colorDark : colorLight;
  return finalColor;
};
export const getLinkColor = (props) => {
  const { state, foregroundColor, isDarkText, textColor } = props;
  const finalTextColor = textColor || foregroundColor;
  let finalColor;
  switch (state) {
    case "hover": {
      finalColor = finalTextColor
        ? finalTextColor
        : isDarkText
        ? `var(--nypl-colors-ui-link-secondary) !important`
        : `dark.ui.link.secondary`; // light mode and dark mode should use the same value, so there is no need to differentiate based on color mode
      break;
    }
    case "visited": {
      finalColor = finalTextColor
        ? finalTextColor
        : isDarkText
        ? `var(--nypl-colors-ui-link-tertiary) !important`
        : `dark.ui.link.tertiary`; // light mode and dark mode should use the same value, so there is no need to differentiate based on color mode
      break;
    }
    case "default":
    default:
      finalColor = finalTextColor
        ? finalTextColor
        : isDarkText
        ? `var(--nypl-colors-ui-link-primary) !important`
        : `dark.ui.link.primary`; // light mode and dark mode should use the same value, so there is no need to differentiate based on color mode
  }
  return finalColor;
};
// Variant styling
const primary = definePartsStyle(
  ({ foregroundColor, isDarkText, textColor }) => {
    return {
      base: {
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        minHeight: "352px",
        py: "l",
      },
      grid: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: responsiveSpacing.gridGap,
        margin: "auto",
        maxWidth: "1280px",
        px: { base: "l", md: "s" },
      },
      content: {
        bg: "ui.black",
        color: getTextColor({
          type: "body",
          mode: "light",
          foregroundColor,
          isDarkText,
          textColor,
        }),
        gridColumn: { base: "1 / -1", md: "2 / 12", lg: "3 / 11" },
        p: "l",
        a: {
          color: "inherit",
          display: "inline-block",
        },
        bodyText: {
          marginBottom: "0",
        },
        ".chakra-heading": {
          color: getTextColor({
            type: "heading",
            mode: "light",
            foregroundColor,
            isDarkText,
            textColor,
          }),
        },
        _dark: {
          bgColor: "dark.ui.bg.default",
          color: getTextColor({
            type: "body",
            mode: "dark",
            foregroundColor,
            isDarkText,
            textColor,
          }),
          ".chakra-heading": {
            color: getTextColor({
              type: "heading",
              mode: "dark",
              foregroundColor,
              isDarkText,
              textColor,
            }),
          },
        },
      },
      heading: {
        color: getTextColor({
          type: "heading",
          mode: "dark",
          foregroundColor,
          isDarkText,
          textColor,
        }),
      },
    };
  }
);
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
const tertiary = definePartsStyle(
  ({ foregroundColor, isDarkText, textColor }) => ({
    base: {
      // Is this needed?
      p: {
        marginBottom: "0",
      },
    },
    content: {
      ...wrapperStyles,
      color: getTextColor({
        type: "body",
        mode: "light",
        foregroundColor,
        isDarkText,
        textColor,
      }),
      display: "flex",
      flexFlow: "column nowrap",
      px: responsiveSpacing.padding,
      py: { base: "inset.default", xl: "inset.wide" },
      a: {
        color: getLinkColor({
          stage: "default",
          foregroundColor,
          isDarkText,
          textColor,
        }),
        _hover: {
          color: getLinkColor({
            state: "hover",
            foregroundColor,
            isDarkText,
            textColor,
          }),
        },
        _visited: {
          color: getLinkColor({
            stage: "visited",
            foregroundColor,
            isDarkText,
            textColor,
          }),
          svg: {
            fill: getLinkColor({
              state: "visited",
              foregroundColor,
              isDarkText,
              textColor,
            }),
          },
        },
      },
      p: {
        marginBottom: "0",
        marginTop: { base: "xxs", xl: "xs" },
      },
      ".chakra-heading": {
        color: getTextColor({
          type: "heading",
          mode: "light",
          foregroundColor,
          isDarkText,
          textColor,
        }),
      },
      _dark: {
        a: {
          color: getLinkColor({
            state: "default",
            foregroundColor,
            isDarkText,
            textColor,
          }),
          _hover: {
            color: getLinkColor({
              state: "hover",
              foregroundColor,
              isDarkText,
              textColor,
            }),
          },
          _visited: {
            color: getLinkColor({
              state: "visited",
              foregroundColor,
              isDarkText,
              textColor,
            }),
            svg: {
              fill: getLinkColor({
                state: "visited",
                foregroundColor,
                isDarkText,
                textColor,
              }),
            },
          },
        },
        p: {
          color: getTextColor({
            type: "body",
            mode: "dark",
            foregroundColor,
            isDarkText,
            textColor,
          }),
        },
        ".chakra-heading": {
          color: getTextColor({
            type: "heading",
            mode: "dark",
            foregroundColor,
            isDarkText,
            textColor,
          }),
        },
      },
    },
    heading: {
      color: "ui.typography.inverse.heading",
      marginBottom: "0",
      _lastChild: {
        marginBottom: "0",
      },
    },
  })
);
const campaign = definePartsStyle(
  ({
    foregroundColor,
    isBlurredBackgroundImage,
    isDarkBackgroundImage,
    isDarkText,
    textColor,
  }) => ({
    base: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      paddingTop: {
        base: "inset.wide",
        md: "calc(var(--nypl-space-xxl) + var(--nypl-space-s))",
      },
      paddingBottom: {
        base: "inset.wide",
        md: 0,
      },
      paddingX: responsiveSpacing.padding,
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
      boxShadow:
        isBlurredBackgroundImage || isDarkBackgroundImage
          ? "0 0 24px 0 rgba(0,0,0,0.4)"
          : null,
      color: getTextColor({
        type: "body",
        mode: "light",
        foregroundColor,
        isDarkText,
        textColor,
      }),
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
      a: {
        color: getLinkColor({
          state: "default",
          foregroundColor,
          isDarkText,
          textColor,
        }),
        _hover: {
          color: getLinkColor({
            state: "hover",
            foregroundColor,
            isDarkText,
            textColor,
          }),
        },
        _visited: {
          color: getLinkColor({
            state: "visited",
            foregroundColor,
            isDarkText,
            textColor,
          }),
          svg: {
            fill: getLinkColor({
              state: "visited",
              foregroundColor,
              isDarkText,
              textColor,
            }),
          },
        },
      },
      ".chakra-heading": {
        color: getTextColor({
          type: "heading",
          mode: "light",
          foregroundColor,
          isDarkText,
          textColor,
        }),
      },
      _dark: {
        color: getTextColor({
          ype: "body",
          mode: "dark",
          foregroundColor,
          isDarkText,
          textColor,
        }),
        a: {
          color: getLinkColor({
            state: "default",
            foregroundColor,
            isDarkText,
            textColor,
          }),
          _hover: {
            color: getLinkColor({
              state: "hover",
              foregroundColor,
              isDarkText,
              textColor,
            }),
          },
          _visited: {
            color: getLinkColor({
              state: "visited",
              foregroundColor,
              isDarkText,
              textColor,
            }),
            svg: {
              fill: getLinkColor({
                state: "visited",
                foregroundColor,
                isDarkText,
                textColor,
              }),
            },
          },
        },
        ".chakra-heading": {
          color: getTextColor({
            type: "heading",
            mode: "dark",
            foregroundColor,
            isDarkText,
            textColor,
          }),
        },
      },
    },
    heading: {
      color: "ui.typography.inverse.heading",
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
      padding: "inset.wide",
      width: {
        base: "100%",
        lg: "50%",
      },
    },
  })
);
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
