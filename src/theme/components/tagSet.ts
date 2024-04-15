import { defineStyleConfig } from "@chakra-ui/react";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { defineStyle, StyleFunctionProps } from "@chakra-ui/system";

import { activeFocus } from "./global";
import { linkUnderlineStyles } from "./link";

// This function creates a set of function that helps us
// create multipart component styles.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["base", "clearAll"]);

interface TagSetFilterProps extends StyleFunctionProps {
  isDismissible: boolean;
}

const transitionStyles = {
  transitionDuration: "normal",
  transitionTimingFunction: "ease-out",
};

const TagSetFilter = defineMultiStyleConfig({
  baseStyle: definePartsStyle(({ isDismissible }: TagSetFilterProps) => ({
    base: {
      alignItems: "center",
      bg: "ui.bg.default",
      border: "1px solid",
      borderColor: "ui.border.default",
      borderRadius: "pill",
      color: "ui.typography.body",
      cursor: isDismissible ? "pointer" : "auto",
      display: "flex",
      fontSize: "desktop.caption",
      height: { base: "32px", md: "22px" },
      justifyContent: "center",
      minHeight: "22px",
      maxWidth: "200px",
      py: "xxxs",
      paddingLeft: "s",
      paddingRight: isDismissible ? { base: "8px", md: "6px" } : "s",
      ...transitionStyles,
      "> span": {
        display: "inline-block",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      _hover: {
        bg: isDismissible ? "ui.bg.hover" : "ui.bg.default",
        borderColor: isDismissible ? "ui.border.hover" : "ui.border.default",
      },
      _dark: {
        bg: "dark.ui.bg.default",
        borderColor: "dark.ui.border.default",
        color: "dark.ui.typography.body",
        _hover: {
          bg: isDismissible ? "dark.ui.bg.hover" : "dark.ui.bg.default",
          borderColor: isDismissible
            ? "dark.ui.border.active"
            : "dark.ui.border.default",
          color: isDismissible
            ? "dark.ui.typography.heading"
            : "dark.ui.typography.body",
        },
      },
    },
  })),
});

const TagSetExplore = defineStyleConfig({
  baseStyle: defineStyle({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bg: "ui.link.primary-05",
    border: "1px solid",
    borderColor: "ui.link.primary",
    borderRadius: "pill",
    color: "ui.link.primary",
    cursor: "pointer",
    fontSize: "desktop.caption",
    height: { base: "32px", md: "22px" },
    minHeight: "22px",
    maxWidth: "200px",
    py: "xxxs",
    px: "s",
    textUnderlineOffset: "2px",
    ...linkUnderlineStyles,
    ...transitionStyles,
    _focusWithin: activeFocus(),
    a: {
      border: "0",
      _focus: {
        outline: "none",
      },
    },
    "> span": {
      display: "inline-block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    svg: {
      fill: "ui.link.primary",
    },
    _hover: {
      bg: "ui.link.primary-10",
      a: {
        color: "ui.link.secondary",
      },
      svg: {
        fill: "ui.link.secondary",
      },
      "> span": {
        color: "ui.link.secondary",
      },
    },
    _dark: {
      bg: "dark.ui.link.primary-05",
      borderColor: "dark.ui.link.primary",
      color: "dark.ui.link.primary",
      a: {
        color: "dark.ui.link.primary",
      },
      svg: {
        fill: "dark.ui.link.primary",
      },
      _hover: {
        bg: "dark.ui.link.primary-10",
        a: {
          color: "dark.ui.link.secondary",
        },
        svg: {
          fill: "dark.ui.link.secondary",
        },
        "> span": {
          color: "dark.ui.link.secondary",
        },
      },
    },
  }),
});

const TagSet = defineStyleConfig({
  baseStyle: defineStyle({
    alignItems: "center",
    display: "inline-flex",
    flexWrap: "wrap",
    gap: "xs",
  }),
});

export default {
  TagSet,
  TagSetExplore,
  TagSetFilter,
};
