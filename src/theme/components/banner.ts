import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";

import { BannerTypes } from "../../components/Banner/Banner";

interface BannerStyleProps extends Partial<StyleFunctionProps> {
  type?: BannerTypes;
}

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["base", "dismissibleButton"]);

// For now, this semantic mapping is specific to the Banner component.
const colorTypes = {
  neutral: {
    bg: "ui.bg.default",
    border: "ui.border.hover",
    dark: {
      bg: "dark.ui.bg.default",
      border: "dark.ui.border.hover",
    },
  },
  informative: {
    bg: "ui.link.primary-05",
    border: "ui.link.primary",
    dark: {
      bg: "dark.ui.bg.default",
      border: "dark.ui.link.primary",
    },
  },
  positive: {
    bg: "ui.success.primary-05",
    border: "ui.success.primary",
    dark: {
      bg: "dark.ui.bg.default",
      border: "dark.ui.success.primary",
    },
  },
  negative: {
    bg: "ui.error.primary-05",
    border: "ui.error.primary",
    dark: {
      bg: "dark.ui.bg.default",
      border: "dark.ui.error.primary",
    },
  },
  warning: {
    bg: "ui.warning.primary-05",
    border: "ui.warning.primary",
    dark: {
      bg: "dark.ui.bg.default",
      border: "dark.ui.warning.primary",
    },
  },
  recommendation: {
    bg: "ui.link.tertiary-05",
    border: "ui.link.tertiary",
    dark: {
      bg: "dark.ui.bg.default",
      border: "dark.ui.tertiary.primary",
    },
  },
};

const Banner = defineMultiStyleConfig({
  baseStyle: definePartsStyle(({ type = "informative" }: BannerStyleProps) => ({
    base: {
      alignItems: "flex-start",
      bg: colorTypes[type].bg,
      borderLeft: "4px",
      borderColor: colorTypes[type].border,
      color:
        type === "negative"
          ? "var(--nypl-colors-ui-error-primary)"
          : "ui.typography.heading",
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
        color:
          type === "negative"
            ? "var(--nypl-colors-ui-error-primary)"
            : "ui.typography.heading",
      },
      svg: {
        fill: colorTypes[type].border,
        _dark: {
          fill: colorTypes[type].dark.border,
        },
      },
      _dark: {
        a: {
          color:
            type === "negative"
              ? "dark.ui.error.primary"
              : "dark.ui.typography.heading",
        },
        bg: colorTypes[type].dark.bg,
        borderLeftColor: colorTypes[type].dark.border,
        color:
          type === "negative"
            ? "dark.ui.error.primary"
            : "dark.ui.typography.heading",
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
});

export default Banner;
