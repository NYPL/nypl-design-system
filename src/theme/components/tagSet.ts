import { defineStyleConfig } from "@chakra-ui/react";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { defineStyle, StyleFunctionProps } from "@chakra-ui/system";

import { activeFocus } from "./global";

// This function creates a set of function that helps us
// create multipart component styles.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["base", "clearAll"]);

interface TagSetFilterProps extends StyleFunctionProps {
  isDismissible: boolean;
}

const TagSetFilter = defineMultiStyleConfig({
  baseStyle: definePartsStyle(({ isDismissible }: TagSetFilterProps) => ({
    base: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bg: "ui.bg.default",
      border: "1px solid",
      borderColor: "ui.border.default",
      borderRadius: "pill",
      color: "ui.typography.body",
      cursor: isDismissible ? "pointer" : "auto",
      height: { base: "32px", md: "22px" },
      minHeight: "22px",
      maxWidth: "200px",
      py: "xxxs",
      paddingLeft: "s",
      paddingRight: isDismissible ? { base: "8px", md: "6px" } : "s",
      fontSize: "desktop.caption",
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
            ? "dark.ui.border.hover"
            : "dark.ui.border.default",
        },
      },
    },
    clearAll: {
      color: "ui.typography.body",
      height: { base: "32px", md: "22px" },
      fontSize: "desktop.caption",
      minHeight: "22px",
      _dark: {
        color: "dark.ui.typography.heading",
      },
    },
  })),
});

const TagSetExplore = defineStyleConfig({
  baseStyle: defineStyle({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bg: "ui.white",
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
    textDecoration: "underline",
    transition: "0.3s ease",
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
      bg: "ui.link.primary",
      a: {
        color: "ui.white",
      },
      svg: {
        fill: "ui.white",
      },
      "> span": {
        color: "ui.white",
      },
    },
    _dark: {
      bg: "dark.ui.bg.default",
      borderColor: "dark.ui.link.primary",
      color: "dark.ui.link.primary",
      a: {
        color: "dark.ui.link.primary",
      },
      svg: {
        fill: "dark.ui.link.primary",
      },
      _hover: {
        bg: "dark.ui.link.primary",
        a: {
          color: "ui.gray.xxx-dark",
        },
        svg: {
          fill: "ui.gray.xxx-dark",
        },
        "> span": {
          color: "ui.gray.xxx-dark",
        },
      },
    },
  }),
});

const TagSet = defineStyleConfig({
  baseStyle: defineStyle({
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
