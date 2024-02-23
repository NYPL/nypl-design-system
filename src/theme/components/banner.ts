import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

import {
  neutral as baseNeutral,
  informative as baseInformative,
  positive as basePositive,
  negative as baseNegative,
  warning as baseWarning,
  recommendation as baseRecommendation,
} from "./statusBadge";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["base", "dismissibleButton"]);

// For now, this semantic mapping is specific to the Banner component.
const neutral = definePartsStyle({
  base: {
    ...baseNeutral,
    bgColor: "ui.bg.default",
    svg: {
      fill: "ui.border.hover",
      _dark: {
        fill: "dark.ui.border.hover",
      },
    },
    _dark: {
      bgColor: "dark.ui.bg.default",
    },
  },
});
const informative = definePartsStyle({
  base: {
    ...baseInformative,
    svg: {
      fill: "ui.link.primary",
      _dark: {
        fill: "dark.ui.link.primary",
      },
    },
  },
});
const positive = definePartsStyle({
  base: {
    ...basePositive,
    svg: {
      fill: "ui.success.primary",
      _dark: {
        fill: "dark.ui.success.primary",
      },
    },
  },
});
const negative = definePartsStyle({
  base: {
    ...baseNegative,
    color: "ui.error.primary",
    a: {
      color: "ui.error.primary",
    },
    svg: {
      fill: "ui.error.primary",
      _dark: {
        fill: "dark.ui.error.primary",
      },
    },
    _dark: {
      a: {
        color: "dark.ui.error.primary",
      },
      color: "dark.ui.error.primary",
    },
  },
});
const warning = definePartsStyle({
  base: {
    ...baseWarning,
    svg: {
      fill: "ui.warning.primary",
      _dark: {
        fill: "dark.ui.warning.primary",
      },
    },
  },
});
const recommendation = definePartsStyle({
  base: {
    ...baseRecommendation,
    svg: {
      fill: "ui.link.tertiary",
      _dark: {
        fill: "dark.ui.link.tertiary",
      },
    },
  },
});

const Banner = defineMultiStyleConfig({
  baseStyle: definePartsStyle(() => ({
    base: {
      alignItems: "flex-start",
      borderLeft: "4px",
      display: "flex",
      flexDirection: "row",
      gap: "xs",
      justifyContent: "flex-start",
      py: "s",
      paddingEnd: "l",
      paddingStart: {
        base: "s",
        md: "l",
      },
      position: "relative",
      width: "100%",
      a: {
        color: "ui.typography.heading",
        textDecoration: "underline",
      },
      _dark: {
        a: {
          color: "dark.ui.typography.heading",
        },
      },
    },
    dismissibleButton: {
      alignItems: "center",
      border: "none",
      bgColor: "inherit",
      color: "ui.typography.heading",
      display: "flex",
      margin: "xs",
      minWidth: "0",
      position: "absolute",
      right: "0",
      top: "0",
      svg: {
        fill: "ui.black",
        _dark: {
          fill: "dark.ui.typography.heading",
        },
      },
      _hover: {
        bg: "inherit",
      },
      _dark: {
        color: "dark.ui.typography.heading",
      },
    },
  })),
  variants: {
    neutral,
    informative,
    positive,
    negative,
    warning,
    recommendation,
  },
});

export default Banner;
