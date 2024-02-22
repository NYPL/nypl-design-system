import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";

import { BannerTypes } from "../../components/Banner/Banner";

interface BannerStyleProps extends Partial<StyleFunctionProps> {
  type?: BannerTypes;
}

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["base", "content", "dismissibleButton"]);

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
      border: "dark.ui.border.hover",
    },
  },
  positive: {
    bg: "ui.success.primary-05",
    border: "ui.success.primary",
    dark: {
      bg: "dark.ui.bg.default",
      border: "dark.ui.border.hover",
    },
  },
  negative: {
    bg: "ui.error.primary-05",
    border: "ui.error.primary",
    dark: {
      bg: "dark.ui.bg.default",
      border: "dark.ui.border.hover",
    },
  },
  warning: {
    bg: "ui.warning.primary-05",
    border: "ui.warning.primary",
    dark: {
      bg: "dark.ui.bg.default",
      border: "dark.ui.border.hover",
    },
  },
  recommendation: {
    bg: "ui.link.tertiary-05",
    border: "ui.link.tertiary",
    dark: {
      bg: "dark.ui.bg.default",
      border: "dark.ui.border.hover",
    },
  },
};

const Banner = defineMultiStyleConfig({
  baseStyle: definePartsStyle(({ type = "informative" }: BannerStyleProps) => ({
    base: {
      width: "100%",
    },
    content: {
      alignItems: "flex-start",
      bg: colorTypes[type].bg,
      borderLeft: "4px",
      borderColor: colorTypes[type].border,
      gap: "xs",
      justifyContent: "flex-start",
      position: "relative",
      width: "100%",
      _dark: {
        bg: colorTypes[type].dark.bg,
        borderLeftColor: colorTypes[type].dark.border,
      },
      padding: {
        base: "var(--nypl-space-s) var(--nypl-space-l) var(--nypl-space-s) var(--nypl-space-l)",
      },
      svg: {
        fill: colorTypes[type].border,
        _dark: {
          fill: colorTypes[type].dark.border,
        },
      },
    },
    dismissibleButton: {
      border: "none",
      bgColor: "inherit",
      alignItems: "center",
      color: "ui.typography.heading",
      display: "flex",
      minWidth: "0",
      position: "absolute",
      margin: "xs",
      right: "0",
      top: "0",
      _dark: {
        color: "dark.ui.typography.heading",
      },
      _hover: {
        bg: "inherit",
      },
      svg: {
        fill: "ui.black",
        _dark: {
          fill: "dark.ui.typography.heading",
        },
      },
    },
  })),
});

export default Banner;
