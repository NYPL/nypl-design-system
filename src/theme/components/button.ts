import { defaultElementSizes } from "./global";

// Style object for base or default style
const baseStyle = {
  alignItems: "center",
  borderRadius: "sm",
  display: "flex",
  cursor: "pointer",
  color: "ui.white",
  height: "10",
  justifyContent: "center",
  lineHeight: "1.5",
  maxHeight: "2.5rem",
  minHeight: { base: defaultElementSizes.mobileFieldHeight, md: "auto" },
  py: "inset.narrow",
  px: "inset.default",
  textDecoration: "none",
  wordWrap: "normal",
  fontWeight: "button.default",
  svg: {
    fill: "currentColor",
  },
  _hover: {
    bg: "ui.link.secondary",
  },
  _visited: {
    color: "ui.white",
  },
  _disabled: {
    bg: "ui.gray.light-cool",
    color: "ui.gray.dark",
    pointerEvents: "none",
    opacity: "1",
  },
  _dark: {
    _disabled: {
      bg: "dark.ui.disabled.secondary",
      color: "dark.ui.disabled.primary",
    },
  },
};
// Styles for different visual variants:
// primary, secondary, link, pill, iconOnly, callout, searchbar, noBrand
const primary = {
  bg: "ui.link.primary",
  minWidth: "none",
  height: "none",
  fontSize: "button.default",
  _dark: {
    bg: "dark.ui.link.primary",
    _hover: {
      bg: "dark.ui.link.secondary",
      color: "ui.gray.xxx-dark",
    },
  },
};
const secondary = {
  bg: "ui.white",
  border: "1px solid",
  borderColor: "ui.gray.light-cool",
  color: "inherit",
  fontSize: "button.default",
  _hover: {
    bg: "ui.gray.xx-light-cool",
    borderColor: "ui.gray.medium",
  },
  _disabled: {
    bg: "ui.gray.x-light-cool",
  },
  _dark: {
    bg: "dark.ui.bg.default",
    borderColor: "dark.ui.link.primary",
    color: "dark.ui.link.primary",
    _hover: {
      bg: "dark.ui.bg.hover",
      borderColor: "dark.ui.link.secondary",
      color: "dark.ui.link.secondary",
    },
    _disabled: {
      bg: "dark.ui.bg.default",
      borderColor: "dark.ui.disabled.primary",
    },
  },
};
const link = {
  bg: "transparent",
  lineHeight: "2.5",
  color: "ui.link.primary",
  textDecoration: "underline",
  _disabled: {
    bg: "transparent",
  },
  _hover: {
    bg: "transparent",
    color: "ui.link.secondary",
  },
  _dark: {
    color: "dark.ui.link.primary",
    _disabled: {
      bg: "transparent",
    },
    _hover: {
      color: "dark.ui.link.secondary",
    },
  },
};
const pill = {
  bg: "ui.white",
  border: "1px solid",
  borderColor: "ui.gray.light-cool",
  color: "inherit",
  borderRadius: "pill",
  py: "inset.narrow",
  px: "inset.wide",
  fontSize: "button.default",
  _hover: {
    bg: "ui.gray.xx-light-cool",
    borderColor: "ui.gray.medium",
  },
  _disabled: {
    bg: "ui.gray.x-light-cool",
  },
  _dark: {
    bg: "dark.ui.bg.default",
    borderColor: "dark.ui.link.primary",
    color: "dark.ui.link.primary",
    _hover: {
      bg: "dark.ui.bg.hover",
      borderColor: "dark.ui.link.secondary",
      color: "dark.ui.link.secondary",
    },
    _disabled: {
      bg: "dark.ui.bg.default",
      borderColor: "dark.ui.disabled.primary",
    },
  },
};
const iconOnly = {
  bg: "ui.white",
  border: "1px solid",
  borderColor: "ui.gray.light-cool",
  color: "inherit",
  _hover: {
    bg: "ui.gray.xx-light-cool",
    borderColor: "ui.gray.medium",
  },
  paddingInlineStart: "inset.narrow",
  paddingInlineEnd: "inset.narrow",
};
const callout = {
  bg: "brand.primary",
  fontSize: "button.default",
  _hover: {
    bg: "brand.secondary",
  },
  _active: {
    bg: "brand.secondary",
  },
  _dark: {
    bg: "dark.brand.primary",
  },
};
const noBrand = {
  ...primary,
  bg: "ui.black",
  color: "ui.white",
  _hover: {
    bg: "ui.gray.x-dark",
  },
  _dark: {
    bg: "ui.gray.xx-dark",
    _hover: {
      bg: "ui.gray.x-dark",
    },
  },
};

const Button = {
  baseStyle,
  // Available variants:
  variants: {
    primary,
    secondary,
    link,
    pill,
    iconOnly,
    callout,
    noBrand,
  },
  // Default values
  defaultProps: {
    variant: "primary",
  },
};

export default Button;
