import { defineStyleConfig } from "@chakra-ui/react";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { defineStyle, StyleFunctionProps } from "@chakra-ui/system";

import { activeFocus } from "./global";
import { linkUnderlineStyles } from "./link";
import { primitives } from "../foundations/colors";

// This function creates a set of function that helps us
// create multipart component styles.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["base", "clearAll"]);

interface TagSetFilterProps extends StyleFunctionProps {
  isDismissible: boolean;
  semanticVariant: string;
}

interface TagSetExploreProps extends StyleFunctionProps {
  semanticVariant: string;
}

const transitionStyles = {
  transitionDuration: "normal",
  transitionTimingFunction: "ease-out",
};

const getSemanticColorStyles = ({
  isDismissible = false,
  semanticVariant,
  variant = "explore",
}) => {
  const semanticColorStyles = {
    default: {
      bg: variant === "explore" ? "ui.link.primary-05" : "ui.bg.default",
      borderColor:
        variant === "explore" ? "ui.link.primary" : "ui.border.default",
      color: variant === "explore" ? "ui.link.primary" : "ui.typography.body",
      svg: {
        fill: variant === "explore" ? "ui.link.primary" : "ui.typography.body",
      },
      _hover: {
        a: {
          color: variant === "explore" ? "ui.link.secondary" : null,
        },
        bg:
          variant === "explore"
            ? "ui.link.primary-10"
            : isDismissible
            ? "ui.bg.hover"
            : "ui.bg.default",
        borderColor:
          variant === "explore"
            ? "ui.link.secondary"
            : isDismissible
            ? "ui.border.hover"
            : "ui.border.default",
        color:
          variant === "explore"
            ? "ui.link.secondary"
            : isDismissible
            ? "ui.typography.heading"
            : "ui.typography.body",
        svg: {
          fill:
            variant === "explore"
              ? "ui.link.secondary"
              : isDismissible
              ? "ui.typography.heading"
              : "ui.typography.body",
        },
      },
      _dark: {
        a: {
          color: variant === "explore" ? "dark.ui.link.primary" : null,
        },
        bg:
          variant === "explore"
            ? "dark.ui.link.primary-05"
            : "dark.ui.bg.default",
        borderColor:
          variant === "explore"
            ? "dark.ui.link.primary"
            : "dark.ui.border.default",
        color:
          variant === "explore"
            ? "dark.ui.link.primary"
            : "dark.ui.typography.body",
        svg: {
          fill:
            variant === "explore"
              ? "dark.ui.link.primary"
              : isDismissible
              ? "dark.ui.typography.heading"
              : "dark.ui.typography.body",
        },
        _hover: {
          a: {
            color: variant === "explore" ? "dark.ui.link.secondary" : null,
          },
          bg:
            variant === "explore"
              ? "dark.ui.link.primary-10"
              : isDismissible
              ? "dark.ui.bg.hover"
              : "dark.ui.bg.default",
          borderColor:
            variant === "explore"
              ? "dark.ui.link.secondary"
              : isDismissible
              ? "dark.ui.border.hover"
              : "dark.ui.border.default",
          color:
            variant === "explore"
              ? "dark.ui.link.secondary"
              : isDismissible
              ? "dark.ui.typography.heading"
              : "dark.ui.typography.body",
          svg: {
            fill:
              variant === "explore"
                ? "dark.ui.link.secondary"
                : isDismissible
                ? "dark.ui.typography.heading"
                : "dark.ui.typography.body",
          },
        },
      },
    },
    informative: {
      a: {
        color: variant === "explore" ? "ui.link.primary" : null,
      },
      bg: "ui.link.primary-05",
      borderColor: "ui.link.primary",
      color: "ui.link.primary",
      svg: {
        fill: "ui.link.primary",
      },
      _hover: {
        a: {
          color: variant === "explore" ? "ui.link.secondary" : null,
        },
        bg:
          variant === "explore" || isDismissible
            ? "ui.link.primary-10"
            : "ui.link.primary-05",
        borderColor:
          variant === "explore" || isDismissible
            ? "ui.link.secondary"
            : "ui.link.primary",
        color:
          variant === "explore" || isDismissible
            ? "ui.link.secondary"
            : "ui.link.primary",
        svg: {
          fill:
            variant === "explore" || isDismissible
              ? "ui.link.secondary"
              : "ui.link.primary",
        },
      },
      _dark: {
        a: {
          color: variant === "explore" ? "dark.ui.link.primary" : null,
        },
        bg: "dark.ui.link.primary-05",
        borderColor: "dark.ui.link.primary",
        color: "dark.ui.link.primary",
        svg: {
          fill: "dark.ui.link.primary",
        },
        _hover: {
          a: {
            color: variant === "explore" ? "dark.ui.link.secondary" : null,
          },
          bg:
            variant === "explore" || isDismissible
              ? "dark.ui.link.primary-10"
              : "dark.ui.link.primary-05",
          borderColor:
            variant === "explore" || isDismissible
              ? "dark.ui.link.secondary"
              : "dark.ui.link.primary",
          color:
            variant === "explore" || isDismissible
              ? "dark.ui.link.secondary"
              : "dark.ui.link.primary",
          svg: {
            fill:
              variant === "explore" || isDismissible
                ? "dark.ui.link.secondary"
                : "dark.ui.link.primary",
          },
        },
      },
    },
    negative: {
      a: {
        color: variant === "explore" ? "ui.error.primary" : null,
      },
      bg: "ui.error.primary-05",
      borderColor: "ui.error.primary",
      color: "ui.error.primary",
      svg: {
        fill: "ui.error.primary",
      },
      _hover: {
        a: {
          color: variant === "explore" ? "ui.error.secondary" : null,
        },
        bg:
          variant === "explore" || isDismissible
            ? "ui.error.primary-10"
            : "ui.error.primary-05",
        borderColor:
          variant === "explore" || isDismissible
            ? "ui.error.secondary"
            : "ui.error.primary",
        color:
          variant === "explore" || isDismissible
            ? "ui.error.secondary"
            : "ui.error.primary",
        svg: {
          fill:
            variant === "explore" || isDismissible
              ? "ui.error.secondary"
              : "ui.error.primary",
        },
      },
      _dark: {
        a: {
          color: variant === "explore" ? "dark.ui.error.primary" : null,
        },
        bg: "dark.ui.error.primary-05",
        borderColor: "dark.ui.error.primary",
        color: "dark.ui.error.primary",
        svg: {
          fill: "dark.ui.error.primary",
        },
        _hover: {
          a: {
            color: variant === "explore" ? "dark.ui.error.secondary" : null,
          },
          bg:
            variant === "explore" || isDismissible
              ? "dark.ui.error.primary-10"
              : "dark.ui.error.primary-05",
          borderColor:
            variant === "explore" || isDismissible
              ? "dark.ui.error.secondary"
              : "dark.ui.error.primary",
          color:
            variant === "explore" || isDismissible
              ? "dark.ui.error.secondary"
              : "dark.ui.error.primary",
          svg: {
            fill:
              variant === "explore" || isDismissible
                ? "dark.ui.error.secondary"
                : "dark.ui.error.primary",
          },
        },
      },
    },
    neutral: {
      a: {
        color: variant === "explore" ? "ui.typography.body" : null,
      },
      bg: "ui.bg.default",
      borderColor: "ui.gray.dark",
      color: "ui.typography.body",
      svg: {
        fill: "ui.typography.body",
      },
      _hover: {
        a: {
          color: variant === "explore" ? "ui.typography.heading" : null,
        },
        bg:
          variant === "explore" || isDismissible
            ? "ui.bg.hover"
            : "ui.bg.default",
        borderColor:
          variant === "explore" || isDismissible
            ? "ui.gray.xx-dark"
            : "ui.gray.dark",
        color:
          variant === "explore" || isDismissible
            ? "ui.typography.heading"
            : "ui.typography.body",
        svg: {
          fill:
            variant === "explore" || isDismissible
              ? "ui.typography.heading"
              : "ui.typography.body",
        },
      },
      _dark: {
        a: {
          color: variant === "explore" ? "dark.ui.typography.body" : null,
        },
        bg: "dark.ui.bg.default",
        borderColor: "ui.gray.medium",
        color: "dark.ui.typography.body",
        svg: {
          fill: "dark.ui.typography.body",
        },
        _hover: {
          a: {
            color: variant === "explore" ? "dark.ui.typography.heading" : null,
          },
          bg:
            variant === "explore" || isDismissible
              ? "dark.ui.bg.hover"
              : "dark.ui.bg.default",
          borderColor:
            variant === "explore" || isDismissible
              ? "ui.gray.light-cool"
              : "ui.gray.medium",
          color:
            variant === "explore" || isDismissible
              ? "dark.ui.typography.heading"
              : "dark.ui.typography.body",
          svg: {
            fill:
              variant === "explore" || isDismissible
                ? "dark.ui.typography.heading"
                : "dark.ui.typography.body",
          },
        },
      },
    },
    positive: {
      a: {
        color: variant === "explore" ? "ui.success.primary" : null,
      },
      bg: "ui.success.primary-05",
      borderColor: "ui.success.primary",
      color: "ui.success.primary",
      svg: {
        fill: "ui.success.primary",
      },
      _hover: {
        a: {
          color: variant === "explore" ? "ui.success.secondary" : null,
        },
        bg:
          variant === "explore" || isDismissible
            ? "ui.success.primary-10"
            : "ui.success.primary-05",
        borderColor:
          variant === "explore" || isDismissible
            ? "ui.success.secondary"
            : "ui.success.primary",
        color:
          variant === "explore" || isDismissible
            ? "ui.success.secondary"
            : "ui.success.primary",
        svg: {
          fill:
            variant === "explore" || isDismissible
              ? "ui.success.secondary"
              : "ui.success.primary",
        },
      },
      _dark: {
        a: {
          color: variant === "explore" ? "dark.ui.success.primary" : null,
        },
        bg: "dark.ui.success.primary-05",
        borderColor: "dark.ui.success.primary",
        color: "dark.ui.success.primary",
        svg: {
          fill: "dark.ui.success.primary",
        },
        _hover: {
          a: {
            color: variant === "explore" ? "dark.ui.success.secondary" : null,
          },
          bg:
            variant === "explore" || isDismissible
              ? "dark.ui.success.primary-10"
              : "dark.ui.success.primary-05",
          borderColor:
            variant === "explore" || isDismissible
              ? "dark.ui.success.secondary"
              : "dark.ui.success.primary",
          color:
            variant === "explore" || isDismissible
              ? "dark.ui.success.secondary"
              : "dark.ui.success.primary",
          svg: {
            fill:
              variant === "explore" || isDismissible
                ? "dark.ui.success.secondary"
                : "dark.ui.success.primary",
          },
        },
      },
    },
    recommendation: {
      a: {
        color: variant === "explore" ? "ui.link.tertiary" : null,
      },
      bg: "ui.link.tertiary-05",
      borderColor: "ui.link.tertiary",
      color: "ui.link.tertiary",
      svg: {
        fill: "ui.link.tertiary",
      },
      _hover: {
        a: {
          color: variant === "explore" ? primitives.irisPurple[700] : null,
        },
        bg:
          variant === "explore" || isDismissible
            ? "ui.link.tertiary-10"
            : "ui.link.tertiary-05",
        borderColor:
          variant === "explore" || isDismissible
            ? primitives.irisPurple[700]
            : "ui.link.tertiary",
        color:
          variant === "explore" || isDismissible
            ? primitives.irisPurple[700]
            : "ui.link.tertiary",
        svg: {
          fill:
            variant === "explore" || isDismissible
              ? primitives.irisPurple[700]
              : "ui.link.tertiary",
        },
      },
      _dark: {
        a: {
          color: variant === "explore" ? "dark.ui.link.tertiary" : null,
        },
        bg: "dark.ui.link.tertiary-05",
        borderColor: "dark.ui.link.tertiary",
        color: "dark.ui.link.tertiary",
        svg: {
          fill: "dark.ui.link.tertiary",
        },
        _hover: {
          a: {
            color: variant === "explore" ? primitives.irisPurple[200] : null,
          },
          bg:
            variant === "explore" || isDismissible
              ? "dark.ui.link.tertiary-10"
              : "dark.ui.link.tertiary-05",
          borderColor:
            variant === "explore" || isDismissible
              ? primitives.irisPurple[200]
              : "dark.ui.link.tertiary",
          color:
            variant === "explore" || isDismissible
              ? primitives.irisPurple[200]
              : "dark.ui.link.tertiary",
          svg: {
            fill:
              variant === "explore" || isDismissible
                ? primitives.irisPurple[200]
                : "dark.ui.link.tertiary",
          },
        },
      },
    },
    warning: {
      a: {
        color: variant === "explore" ? "ui.warning.tertiary" : null,
      },
      bg: "ui.warning.primary-05",
      borderColor: "ui.warning.tertiary",
      color: "ui.warning.tertiary",
      svg: {
        fill: "ui.warning.tertiary",
      },
      _hover: {
        a: {
          color: variant === "explore" ? primitives.carrotOrange[700] : null,
        },
        bg:
          variant === "explore" || isDismissible
            ? "ui.warning.tertiary-10"
            : "ui.warning.tertiary-05",
        borderColor:
          variant === "explore" || isDismissible
            ? primitives.carrotOrange[700]
            : "ui.warning.tertiary",
        color:
          variant === "explore" || isDismissible
            ? primitives.carrotOrange[700]
            : "ui.warning.tertiary",
        svg: {
          fill:
            variant === "explore" || isDismissible
              ? primitives.carrotOrange[700]
              : "ui.warning.tertiary",
        },
      },
      _dark: {
        a: {
          color: variant === "explore" ? "dark.ui.warning.primary" : null,
        },
        bg: "dark.ui.warning.tertiary-05",
        borderColor: "dark.ui.warning.primary",
        color: "dark.ui.warning.primary",
        svg: {
          fill: "dark.ui.warning.primary",
        },
        _hover: {
          a: {
            color: variant === "explore" ? "dark.ui.warning.secondary" : null,
          },
          bg:
            variant === "explore" || isDismissible
              ? "dark.ui.warning.tertiary-10"
              : "dark.ui.warning.tertiary-05",
          borderColor:
            variant === "explore" || isDismissible
              ? "dark.ui.warning.secondary"
              : "dark.ui.warning.primary",
          color:
            variant === "explore" || isDismissible
              ? "dark.ui.warning.secondary"
              : "dark.ui.warning.primary",
          svg: {
            fill:
              variant === "explore" || isDismissible
                ? "dark.ui.warning.secondary"
                : "dark.ui.warning.primary",
          },
        },
      },
    },
  };

  return semanticColorStyles[semanticVariant];
};

const TagSetFilter = defineMultiStyleConfig({
  baseStyle: definePartsStyle(
    ({ isDismissible, semanticVariant }: TagSetFilterProps) => ({
      base: {
        alignItems: "center",
        border: "1px solid",
        borderRadius: "pill",
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

        // Set the bg, borderColor, colo, & fill attributes (light and dark)
        ...getSemanticColorStyles({
          isDismissible,
          semanticVariant,
          variant: "filter",
        }),
      },
    })
  ),
});

const TagSetExplore = defineStyleConfig({
  baseStyle: defineStyle(({ semanticVariant }: TagSetExploreProps) => {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // bg: "ui.link.primary-05",
      border: "1px solid",
      // borderColor: "ui.link.primary",
      borderRadius: "pill",
      // color: "ui.link.primary",
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
      // svg: {
      //   fill: "ui.link.primary",
      // },
      _hover: {
        // bg: "ui.link.primary-10",
        // borderColor: "ui.link.secondary",
        a: {
          color: "ui.link.secondary",
        },
        // svg: {
        //   fill: "ui.link.secondary",
        // },
        "> span": {
          color: "ui.link.secondary",
        },
      },
      _dark: {
        // bg: "dark.ui.link.primary-05",
        // borderColor: "dark.ui.link.primary",
        // color: "dark.ui.link.primary",
        a: {
          color: "dark.ui.link.primary",
        },
        // svg: {
        //   fill: "dark.ui.link.primary",
        // },
        _hover: {
          // bg: "dark.ui.link.primary-10",
          // borderColor: "dark.ui.link.secondary",
          a: {
            color: "dark.ui.link.secondary",
          },
          // svg: {
          //   fill: "dark.ui.link.secondary",
          // },
          "> span": {
            color: "dark.ui.link.secondary",
          },
        },
      },

      // Set the bg, borderColor, colo, & fill attributes (light and dark)
      ...getSemanticColorStyles({ semanticVariant }),
    };
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
