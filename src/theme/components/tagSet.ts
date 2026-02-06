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
  const filterColorStyles = {
    default: {
      bg: "ui.bg.default",
      borderColor: "ui.border.default",
      color: "ui.typography.body",
      svg: {
        fill: "ui.typography.body",
      },
      _hover: {
        a: {
          color: null,
        },
        bg: isDismissible ? "ui.bg.hover" : "ui.bg.default",
        borderColor: isDismissible ? "ui.border.hover" : "ui.border.default",
        color: isDismissible ? "ui.typography.heading" : "ui.typography.body",
        svg: {
          fill: isDismissible ? "ui.typography.heading" : "ui.typography.body",
        },
      },
      _dark: {
        a: {
          color: null,
        },
        bg: "dark.ui.bg.default",
        borderColor: "dark.ui.border.default",
        color: "dark.ui.typography.body",
        svg: {
          fill: isDismissible
            ? "dark.ui.typography.heading"
            : "dark.ui.typography.body",
        },
        _hover: {
          a: {
            color: null,
          },
          bg: isDismissible ? "dark.ui.bg.hover" : "dark.ui.bg.default",
          borderColor: isDismissible
            ? "dark.ui.border.hover"
            : "dark.ui.border.default",
          color: isDismissible
            ? "dark.ui.typography.heading"
            : "dark.ui.typography.body",
          svg: {
            fill: isDismissible
              ? "dark.ui.typography.heading"
              : "dark.ui.typography.body",
          },
        },
      },
    },
    informative: {
      a: {
        color: null,
      },
      bg: "ui.link.primary-05",
      borderColor: "ui.link.primary",
      color: "ui.link.primary",
      svg: {
        fill: "ui.link.primary",
      },
      _hover: {
        a: {
          color: null,
        },
        bg: isDismissible ? "ui.link.primary-10" : "ui.link.primary-05",
        borderColor: isDismissible ? "ui.link.secondary" : "ui.link.primary",
        color: isDismissible ? "ui.link.secondary" : "ui.link.primary",
        svg: {
          fill: isDismissible ? "ui.link.secondary" : "ui.link.primary",
        },
      },
      _dark: {
        a: {
          color: null,
        },
        bg: "dark.ui.link.primary-05",
        borderColor: "dark.ui.link.primary",
        color: "dark.ui.link.primary",
        svg: {
          fill: "dark.ui.link.primary",
        },
        _hover: {
          a: {
            color: null,
          },
          bg: isDismissible
            ? "dark.ui.link.primary-10"
            : "dark.ui.link.primary-05",
          borderColor: isDismissible
            ? "dark.ui.link.secondary"
            : "dark.ui.link.primary",
          color: isDismissible
            ? "dark.ui.link.secondary"
            : "dark.ui.link.primary",
          svg: {
            fill: isDismissible
              ? "dark.ui.link.secondary"
              : "dark.ui.link.primary",
          },
        },
      },
    },
    negative: {
      a: {
        color: null,
      },
      bg: "ui.error.primary-05",
      borderColor: "ui.error.primary",
      color: "ui.error.primary",
      svg: {
        fill: "ui.error.primary",
      },
      _hover: {
        a: {
          color: null,
        },
        bg: isDismissible ? "ui.error.primary-10" : "ui.error.primary-05",
        borderColor: isDismissible ? "ui.error.secondary" : "ui.error.primary",
        color: isDismissible ? "ui.error.secondary" : "ui.error.primary",
        svg: {
          fill: isDismissible ? "ui.error.secondary" : "ui.error.primary",
        },
      },
      _dark: {
        a: {
          color: null,
        },
        bg: "dark.ui.error.primary-05",
        borderColor: "dark.ui.error.primary",
        color: "dark.ui.error.primary",
        svg: {
          fill: "dark.ui.error.primary",
        },
        _hover: {
          a: {
            color: null,
          },
          bg: isDismissible
            ? "dark.ui.error.primary-10"
            : "dark.ui.error.primary-05",
          borderColor: isDismissible
            ? "dark.ui.error.secondary"
            : "dark.ui.error.primary",
          color: isDismissible
            ? "dark.ui.error.secondary"
            : "dark.ui.error.primary",
          svg: {
            fill: isDismissible
              ? "dark.ui.error.secondary"
              : "dark.ui.error.primary",
          },
        },
      },
    },
    neutral: {
      a: {
        color: null,
      },
      bg: "ui.bg.default",
      borderColor: "ui.gray.dark",
      color: "ui.typography.body",
      svg: {
        fill: "ui.typography.body",
      },
      _hover: {
        a: {
          color: null,
        },
        bg: isDismissible ? "ui.bg.hover" : "ui.bg.default",
        borderColor: isDismissible ? "ui.gray.xx-dark" : "ui.gray.dark",
        color: isDismissible ? "ui.typography.heading" : "ui.typography.body",
        svg: {
          fill: isDismissible ? "ui.typography.heading" : "ui.typography.body",
        },
      },
      _dark: {
        a: {
          color: null,
        },
        bg: "dark.ui.bg.default",
        borderColor: "ui.gray.medium",
        color: "dark.ui.typography.body",
        svg: {
          fill: "dark.ui.typography.body",
        },
        _hover: {
          a: {
            color: null,
          },
          bg: isDismissible ? "dark.ui.bg.hover" : "dark.ui.bg.default",
          borderColor: isDismissible ? "ui.gray.light-cool" : "ui.gray.medium",
          color: isDismissible
            ? "dark.ui.typography.heading"
            : "dark.ui.typography.body",
          svg: {
            fill: isDismissible
              ? "dark.ui.typography.heading"
              : "dark.ui.typography.body",
          },
        },
      },
    },
    positive: {
      a: {
        color: null,
      },
      bg: "ui.success.primary-05",
      borderColor: "ui.success.primary",
      color: "ui.success.primary",
      svg: {
        fill: "ui.success.primary",
      },
      _hover: {
        a: {
          color: null,
        },
        bg: isDismissible ? "ui.success.primary-10" : "ui.success.primary-05",
        borderColor: isDismissible
          ? "ui.success.secondary"
          : "ui.success.primary",
        color: isDismissible ? "ui.success.secondary" : "ui.success.primary",
        svg: {
          fill: isDismissible ? "ui.success.secondary" : "ui.success.primary",
        },
      },
      _dark: {
        a: {
          color: null,
        },
        bg: "dark.ui.success.primary-05",
        borderColor: "dark.ui.success.primary",
        color: "dark.ui.success.primary",
        svg: {
          fill: "dark.ui.success.primary",
        },
        _hover: {
          a: {
            color: null,
          },
          bg: isDismissible
            ? "dark.ui.success.primary-10"
            : "dark.ui.success.primary-05",
          borderColor: isDismissible
            ? "dark.ui.success.secondary"
            : "dark.ui.success.primary",
          color: isDismissible
            ? "dark.ui.success.secondary"
            : "dark.ui.success.primary",
          svg: {
            fill: isDismissible
              ? "dark.ui.success.secondary"
              : "dark.ui.success.primary",
          },
        },
      },
    },
    recommendation: {
      a: {
        color: null,
      },
      bg: "ui.link.tertiary-05",
      borderColor: "ui.link.tertiary",
      color: "ui.link.tertiary",
      svg: {
        fill: "ui.link.tertiary",
      },
      _hover: {
        a: {
          color: null,
        },
        bg: isDismissible ? "ui.link.tertiary-10" : "ui.link.tertiary-05",
        borderColor: isDismissible
          ? primitives.irisPurple[700]
          : "ui.link.tertiary",
        color: isDismissible ? primitives.irisPurple[700] : "ui.link.tertiary",
        svg: {
          fill: isDismissible ? primitives.irisPurple[700] : "ui.link.tertiary",
        },
      },
      _dark: {
        a: {
          color: null,
        },
        bg: "dark.ui.link.tertiary-05",
        borderColor: "dark.ui.link.tertiary",
        color: "dark.ui.link.tertiary",
        svg: {
          fill: "dark.ui.link.tertiary",
        },
        _hover: {
          a: {
            color: null,
          },
          bg: isDismissible
            ? "dark.ui.link.tertiary-10"
            : "dark.ui.link.tertiary-05",
          borderColor: isDismissible
            ? primitives.irisPurple[200]
            : "dark.ui.link.tertiary",
          color: isDismissible
            ? primitives.irisPurple[200]
            : "dark.ui.link.tertiary",
          svg: {
            fill: isDismissible
              ? primitives.irisPurple[200]
              : "dark.ui.link.tertiary",
          },
        },
      },
    },
    warning: {
      a: {
        color: null,
      },
      bg: "ui.warning.primary-05",
      borderColor: "ui.warning.tertiary",
      color: "ui.warning.tertiary",
      svg: {
        fill: "ui.warning.tertiary",
      },
      _hover: {
        a: {
          color: null,
        },
        bg: isDismissible ? "ui.warning.tertiary-10" : "ui.warning.tertiary-05",
        borderColor: isDismissible
          ? primitives.carrotOrange[700]
          : "ui.warning.tertiary",
        color: isDismissible
          ? primitives.carrotOrange[700]
          : "ui.warning.tertiary",
        svg: {
          fill: isDismissible
            ? primitives.carrotOrange[700]
            : "ui.warning.tertiary",
        },
      },
      _dark: {
        a: {
          color: null,
        },
        bg: "dark.ui.warning.tertiary-05",
        borderColor: "dark.ui.warning.primary",
        color: "dark.ui.warning.primary",
        svg: {
          fill: "dark.ui.warning.primary",
        },
        _hover: {
          a: {
            color: null,
          },
          bg: isDismissible
            ? "dark.ui.warning.tertiary-10"
            : "dark.ui.warning.tertiary-05",
          borderColor: isDismissible
            ? "dark.ui.warning.secondary"
            : "dark.ui.warning.primary",
          color: isDismissible
            ? "dark.ui.warning.secondary"
            : "dark.ui.warning.primary",
          svg: {
            fill: isDismissible
              ? "dark.ui.warning.secondary"
              : "dark.ui.warning.primary",
          },
        },
      },
    },
  };
  const exploreColorStyles = {
    default: {
      bg: "ui.link.primary-05",
      borderColor: "ui.link.primary",
      color: "ui.link.primary",
      svg: {
        fill: "ui.link.primary",
      },
      _hover: {
        a: {
          color: "ui.link.secondary",
        },
        bg: "ui.link.primary-10",
        borderColor: "ui.link.secondary",
        color: "ui.link.secondary",
        svg: {
          fill: "ui.link.secondary",
        },
      },
      _dark: {
        a: {
          color: "dark.ui.link.primary",
        },
        bg: "dark.ui.link.primary-05",
        borderColor: "dark.ui.link.primary",
        color: "dark.ui.link.primary",
        svg: {
          fill: "dark.ui.link.primary",
        },
        _hover: {
          a: {
            color: "dark.ui.link.secondary",
          },
          bg: "dark.ui.link.primary-10",
          borderColor: "dark.ui.link.secondary",
          color: "dark.ui.link.secondary",
          svg: {
            fill: "dark.ui.link.secondary",
          },
        },
      },
    },
    informative: {
      a: {
        color: "ui.link.primary",
      },
      bg: "ui.link.primary-05",
      borderColor: "ui.link.primary",
      color: "ui.link.primary",
      svg: {
        fill: "ui.link.primary",
      },
      _hover: {
        a: {
          color: "ui.link.secondary",
        },
        bg: "ui.link.primary-10",
        borderColor: "ui.link.secondary",
        color: "ui.link.secondary",
        svg: {
          fill: "ui.link.secondary",
        },
      },
      _dark: {
        a: {
          color: "dark.ui.link.primary",
        },
        bg: "dark.ui.link.primary-05",
        borderColor: "dark.ui.link.primary",
        color: "dark.ui.link.primary",
        svg: {
          fill: "dark.ui.link.primary",
        },
        _hover: {
          a: {
            color: "dark.ui.link.secondary",
          },
          bg: "dark.ui.link.primary-10",
          borderColor: "dark.ui.link.secondary",
          color: "dark.ui.link.secondary",
          svg: {
            fill: "dark.ui.link.secondary",
          },
        },
      },
    },
    negative: {
      a: {
        color: "ui.error.primary",
      },
      bg: "ui.error.primary-05",
      borderColor: "ui.error.primary",
      color: "ui.error.primary",
      svg: {
        fill: "ui.error.primary",
      },
      _hover: {
        a: {
          color: "ui.error.secondary",
        },
        bg: "ui.error.primary-10",
        borderColor: "ui.error.secondary",
        color: "ui.error.secondary",
        svg: {
          fill: "ui.error.secondary",
        },
      },
      _dark: {
        a: {
          color: "dark.ui.error.primary",
        },
        bg: "dark.ui.error.primary-05",
        borderColor: "dark.ui.error.primary",
        color: "dark.ui.error.primary",
        svg: {
          fill: "dark.ui.error.primary",
        },
        _hover: {
          a: {
            color: "dark.ui.error.secondary",
          },
          bg: "dark.ui.error.primary-10",
          borderColor: "dark.ui.error.secondary",
          color: "dark.ui.error.secondary",
          svg: {
            fill: "dark.ui.error.secondary",
          },
        },
      },
    },
    neutral: {
      a: {
        color: "ui.typography.body",
      },
      bg: "ui.bg.default",
      borderColor: "ui.gray.dark",
      color: "ui.typography.body",
      svg: {
        fill: "ui.typography.body",
      },
      _hover: {
        a: {
          color: "ui.typography.heading",
        },
        bg: "ui.bg.hover",
        borderColor: "ui.gray.xx-dark",
        color: "ui.typography.heading",
        svg: {
          fill: "ui.typography.heading",
        },
      },
      _dark: {
        a: {
          color: "dark.ui.typography.body",
        },
        bg: "dark.ui.bg.default",
        borderColor: "ui.gray.medium",
        color: "dark.ui.typography.body",
        svg: {
          fill: "dark.ui.typography.body",
        },
        _hover: {
          a: {
            color: "dark.ui.typography.heading",
          },
          bg: "dark.ui.bg.hover",
          borderColor: "ui.gray.light-cool",
          color: "dark.ui.typography.heading",
          svg: {
            fill: "dark.ui.typography.heading",
          },
        },
      },
    },
    positive: {
      a: {
        color: "ui.success.primary",
      },
      bg: "ui.success.primary-05",
      borderColor: "ui.success.primary",
      color: "ui.success.primary",
      svg: {
        fill: "ui.success.primary",
      },
      _hover: {
        a: {
          color: "ui.success.secondary",
        },
        bg: "ui.success.primary-10",
        borderColor: "ui.success.secondary",
        color: "ui.success.secondary",
        svg: {
          fill: "ui.success.secondary",
        },
      },
      _dark: {
        a: {
          color: "dark.ui.success.primary",
        },
        bg: "dark.ui.success.primary-05",
        borderColor: "dark.ui.success.primary",
        color: "dark.ui.success.primary",
        svg: {
          fill: "dark.ui.success.primary",
        },
        _hover: {
          a: {
            color: "dark.ui.success.secondary",
          },
          bg: "dark.ui.success.primary-10",
          borderColor: "dark.ui.success.secondary",
          color: "dark.ui.success.secondary",
          svg: {
            fill: "dark.ui.success.secondary",
          },
        },
      },
    },
    recommendation: {
      a: {
        color: "ui.link.tertiary",
      },
      bg: "ui.link.tertiary-05",
      borderColor: "ui.link.tertiary",
      color: "ui.link.tertiary",
      svg: {
        fill: "ui.link.tertiary",
      },
      _hover: {
        a: {
          color: primitives.irisPurple[700],
        },
        bg: "ui.link.tertiary-10",
        borderColor: primitives.irisPurple[700],
        color: primitives.irisPurple[700],
        svg: {
          fill: primitives.irisPurple[700],
        },
      },
      _dark: {
        a: {
          color: "dark.ui.link.tertiary",
        },
        bg: "dark.ui.link.tertiary-05",
        borderColor: "dark.ui.link.tertiary",
        color: "dark.ui.link.tertiary",
        svg: {
          fill: "dark.ui.link.tertiary",
        },
        _hover: {
          a: {
            color: primitives.irisPurple[200],
          },
          bg: "dark.ui.link.tertiary-10",
          borderColor: primitives.irisPurple[200],
          color: primitives.irisPurple[200],
          svg: {
            fill: primitives.irisPurple[200],
          },
        },
      },
    },
    warning: {
      a: {
        color: "ui.warning.tertiary",
      },
      bg: "ui.warning.primary-05",
      borderColor: "ui.warning.tertiary",
      color: "ui.warning.tertiary",
      svg: {
        fill: "ui.warning.tertiary",
      },
      _hover: {
        a: {
          color: primitives.carrotOrange[700],
        },
        bg: "ui.warning.tertiary-10",
        borderColor: primitives.carrotOrange[700],
        color: primitives.carrotOrange[700],
        svg: {
          fill: primitives.carrotOrange[700],
        },
      },
      _dark: {
        a: {
          color: "dark.ui.warning.primary",
        },
        bg: "dark.ui.warning.tertiary-05",
        borderColor: "dark.ui.warning.primary",
        color: "dark.ui.warning.primary",
        svg: {
          fill: "dark.ui.warning.primary",
        },
        _hover: {
          a: {
            color: "dark.ui.warning.secondary",
          },
          bg: "dark.ui.warning.tertiary-10",
          borderColor: "dark.ui.warning.secondary",
          color: "dark.ui.warning.secondary",
          svg: {
            fill: "dark.ui.warning.secondary",
          },
        },
      },
    },
  };
  const semanticColorStyles = {
    default:
      variant === "explore"
        ? exploreColorStyles.default
        : filterColorStyles.default,
    informative:
      variant === "explore"
        ? exploreColorStyles.informative
        : filterColorStyles.informative,
    negative:
      variant === "explore"
        ? exploreColorStyles.negative
        : filterColorStyles.negative,
    neutral:
      variant === "explore"
        ? exploreColorStyles.neutral
        : filterColorStyles.neutral,
    positive:
      variant === "explore"
        ? exploreColorStyles.positive
        : filterColorStyles.positive,
    recommendation:
      variant === "explore"
        ? exploreColorStyles.recommendation
        : filterColorStyles.recommendation,
    warning:
      variant === "explore"
        ? exploreColorStyles.warning
        : filterColorStyles.warning,
  };
  const _semanticColorStyles = {
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
      border: "1px solid",
      borderRadius: "pill",
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
      _hover: {
        a: {
          color: "ui.link.secondary",
        },
        "> span": {
          color: "ui.link.secondary",
        },
      },
      _dark: {
        a: {
          color: "dark.ui.link.primary",
        },
        _hover: {
          a: {
            color: "dark.ui.link.secondary",
          },
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
