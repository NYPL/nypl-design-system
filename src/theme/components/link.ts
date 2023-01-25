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
  _hover: {
    color: "ui.link.secondary",
  },
  _visited: {
    color: "ui.link.tertiary",
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
        color: "ui.link.tertiary",
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
    _hover: {
      color: "ui.white",
      bg: "ui.link.secondary",
      textDecoration: "none",
    },
    _visited: {
      color: "ui.white",
    },
  },
  buttonPrimary: {
    ...baseButtonLinkStyles,
    ...primary({}),
  },
  buttonSecondary: {
    ...baseButtonLinkStyles,
    ...secondary({}),
    _visited: {
      color: "ui.link.primary",
    },
  },
  buttonPill: {
    ...baseButtonLinkStyles,
    ...pill({}),
    _visited: {
      color: "ui.black",
    },
  },
  buttonCallout: {
    ...baseButtonLinkStyles,
    ...callout({}),
  },
  buttonNoBrand: {
    ...baseButtonLinkStyles,
    ...noBrand({}),
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
    },
  },
};
const Link = {
  parts: ["srOnly"],
  baseStyle: {
    ...baseLinkStyles,
    /** This is needed for custom anchor elements or link components
     * that are passed as children to the `Link` component. */
    a: {
      _hover: {
        color: "ui.link.secondary",
      },
    },
    /** The element will handle descriptive text added to aid
     * screen readers. */
    srOnly: screenreaderOnly(),
  },
  variants,
};

export default Link;
