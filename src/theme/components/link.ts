import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";
import {
  buttonBaseStyle,
  callout,
  noBrand,
  pill,
  primary,
  secondary,
} from "./button";
import { screenreaderOnly } from "./globalMixins";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["base", "screenreaderOnly"]);

interface CustomLinkStyleProps extends StyleFunctionProps {
  finalIsUnderlined: boolean;
  hasVisitedState: boolean;
}

export const baseLinkStyles = definePartsStyle({
  base: {
    color: "ui.link.primary",
    textDecoration: "underline",
    textDecorationStyle: "dotted",
    textDecorationThickness: "1px",
    textUnderlineOffset: "2px",
    _dark: {
      color: "dark.ui.link.primary",
    },
    _hover: {
      color: "ui.link.secondary",
      textDecorationStyle: "dotted",
      textDecorationThickness: "1px",
      _dark: {
        color: "dark.ui.link.secondary",
      },
    },
  },
  screenreaderOnly: {},
});

const baseButtonLinkStyles = definePartsStyle({
  base: {
    ...buttonBaseStyle.base,
    display: "inline-flex",
  },
});

const moreLink = definePartsStyle(
  ({ hasVisitedState }: CustomLinkStyleProps) => ({
    base: {
      alignItems: "center",
      display: "inline-flex",
      svg: {
        height: "s",
        width: "s",
        textDecoration: "none",
        fill: "currentColor",
      },
      _hover: {
        color: "ui.link.secondary",
        textDecoration: "underline",
      },
      _visited: hasVisitedState
        ? {
            svg: {
              fill: "ui.link.tertiary",
            },
            _dark: {
              svg: {
                fill: "dark.ui.link.tertiary",
              },
            },
          }
        : {},
    },
  })
);

// The "button" variant is deprecated.
const button = definePartsStyle({
  base: {
    width: "100px",
    borderRadius: "sm",
    lineHeight: "1.5",
    display: "flex",
    cursor: "pointer",
    color: "ui.white",
    justifyContent: "center",
    py: "xs",
    px: "xs",
    textDecoration: "none",
    fontWeight: "button.default",
    bg: "ui.link.primary",
    _dark: {
      color: "ui.gray.xxx-dark",
      bg: "dark.ui.link.primary",
    },
    _hover: {
      color: "ui.white",
      bg: "ui.link.secondary",
      textDecoration: "underline",
      _dark: {
        color: "ui.gray.xxx-dark",
        bg: "dark.ui.link.secondary",
      },
    },
    _visited: {
      color: "ui.white",
      _dark: {
        _visited: {
          color: "ui.gray.xxx-dark",
        },
      },
    },
  },
});

const buttonPrimary = definePartsStyle(
  ({ hasVisitedState }: CustomLinkStyleProps) => ({
    ...baseButtonLinkStyles.base,
    ...primary({}),
    _hover: {
      backgroundColor: "ui.link.secondary",
      color: "ui.white",
    },
    _visited: hasVisitedState
      ? {
          color: "ui.white",
          _dark: {
            color: "ui.gray.xxx-dark",
          },
        }
      : {},
  })
);

const buttonSecondary = definePartsStyle(
  ({ hasVisitedState }: CustomLinkStyleProps) => ({
    ...baseButtonLinkStyles.base,
    ...secondary({}),
    _visited: hasVisitedState
      ? {
          color: "ui.link.primary",
          _dark: {
            color: "dark.ui.link.primary",
          },
        }
      : {},
  })
);

const buttonPill = definePartsStyle(
  ({ hasVisitedState }: CustomLinkStyleProps) => ({
    ...baseButtonLinkStyles.base,
    ...pill({}),
    _hover: {
      color: "ui.black",
    },
    _visited: hasVisitedState
      ? {
          color: "ui.black",
          _dark: {
            color: "ui.white",
          },
        }
      : {},
  })
);

const buttonCallout = definePartsStyle(
  ({ hasVisitedState }: CustomLinkStyleProps) => ({
    base: {
      ...baseButtonLinkStyles.base,
      ...callout({}),
      _hover: {
        color: "ui.white",
      },
      _visited: hasVisitedState
        ? {
            color: "ui.white",
            _dark: {
              color: "ui.white",
            },
          }
        : {},
    },
  })
);

const buttonNoBrand = definePartsStyle(
  ({ hasVisitedState }: CustomLinkStyleProps) => ({
    ...baseButtonLinkStyles.base,
    ...noBrand({}),
    _hover: {
      color: "ui.white",
    },
    _visited: hasVisitedState
      ? {
          color: "ui.white",
          _dark: {
            color: "ui.white",
          },
        }
      : {},
  })
);

const buttonDisabled = definePartsStyle(
  ({ hasVisitedState }: CustomLinkStyleProps) => ({
    ...baseButtonLinkStyles.base,
    ...primary({}),
    bg: "ui.gray.light-cool",
    color: "ui.gray.dark",
    opacity: "1",
    pointerEvents: "none",
    _visited: hasVisitedState
      ? {
          color: "ui.gray.dark",
          _dark: {
            color: "dark.ui.disabled.primary",
          },
        }
      : {},
    _dark: {
      bg: "dark.ui.disabled.secondary",
      color: "dark.ui.disabled.primary",
    },
  })
);

const Link = defineMultiStyleConfig({
  baseStyle: definePartsStyle(
    ({ finalIsUnderlined = true, hasVisitedState }: CustomLinkStyleProps) => ({
      base: {
        ...baseLinkStyles.base,
        _visited: hasVisitedState
          ? {
              color: "ui.link.tertiary",
              _dark: {
                color: "dark.ui.link.tertiary",
              },
            }
          : {},
        textDecoration: finalIsUnderlined ? "underline" : "none",
        /** This is needed for custom anchor elements or link components
         * that are passed as children to the `Link` component. */
        a: {
          _hover: {
            color: "ui.link.secondary",
          },
        },
      },
      /** The element will handle descriptive text added to aid
       * screen readers. */
      screenreaderOnly: screenreaderOnly(),
    })
  ),
  variants: {
    button,
    buttonCallout,
    buttonDisabled,
    buttonNoBrand,
    buttonPill,
    buttonPrimary,
    buttonSecondary,
    moreLink,
  },
});

export default Link;
