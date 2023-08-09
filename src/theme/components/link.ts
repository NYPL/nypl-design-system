import {
  buttonBaseStyle,
  callout,
  noBrand,
  pill,
  primary,
  secondary,
} from "./button";
import { screenreaderOnly } from "./globalMixins";

export const baseLinkStyles = {
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
  _visited: {
    color: "ui.link.tertiary",
    _dark: {
      color: "dark.ui.link.tertiary",
    },
  },
};

const baseButtonLinkStyles = {
  ...buttonBaseStyle,
  display: "inline-flex",
};

const variants = {
  link: {},
  disabled: {
    color: "ui.gray.dark",
    pointerEvents: "none",
  },
  moreLink: {
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
    _visited: {
      svg: {
        fill: "ui.link.tertiary",
      },
      _dark: {
        svg: {
          fill: "dark.ui.link.tertiary",
        },
      },
    },
  },
  // The "button" variant is deprecated.
  button: {
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
  buttonPrimary: {
    ...baseButtonLinkStyles,
    ...primary({}),
    _visited: {
      color: "ui.white",
      _dark: {
        color: "ui.gray.xxx-dark",
      },
    },
  },
  buttonSecondary: {
    ...baseButtonLinkStyles,
    ...secondary({}),
    _visited: {
      color: "ui.link.primary",
      _dark: {
        color: "dark.ui.link.primary",
      },
    },
  },
  buttonPill: {
    ...baseButtonLinkStyles,
    ...pill({}),
    _visited: {
      color: "ui.black",
      _dark: {
        color: "ui.white",
      },
    },
  },
  buttonCallout: {
    ...baseButtonLinkStyles,
    ...callout({}),
    _visited: {
      color: "ui.white",
      _dark: {
        color: "ui.white",
      },
    },
  },
  buttonNoBrand: {
    ...baseButtonLinkStyles,
    ...noBrand({}),
    _visited: {
      color: "ui.white",
      _dark: {
        color: "ui.white",
      },
    },
  },
  buttonDisabled: {
    ...baseButtonLinkStyles,
    ...primary({}),
    bg: "ui.gray.light-cool",
    color: "ui.gray.dark",
    opacity: "1",
    pointerEvents: "none",
    _visited: {
      color: "ui.gray.dark",
      _dark: {
        color: "dark.ui.disabled.primary",
      },
    },
    _dark: {
      bg: "dark.ui.disabled.secondary",
      color: "dark.ui.disabled.primary",
    },
  },
};
const Link = {
  parts: ["screenreaderOnly"],
  baseStyle: ({ isUnderlined = true }) => ({
    ...baseLinkStyles,
    textDecoration: isUnderlined ? "underline" : "none",
    /** This is needed for custom anchor elements or link components
     * that are passed as children to the `Link` component. */
    a: {
      _hover: {
        color: "ui.link.secondary",
      },
    },
    /** The element will handle descriptive text added to aid
     * screen readers. */
    screenreaderOnly: screenreaderOnly(),
  }),
  variants,
};

export default Link;
