import { defaultElementSizes } from "./global";

// Style object for base or default style
const baseStyle = {
  alignItems: "center",
  borderRadius: "sm",
  display: "flex",
  cursor: "pointer",
  color: "ui.white",
  fontWeight: "button.default",
  height: "10",
  justifyContent: "center",
  lineHeight: "1.5",
  maxHeight: "2.5rem",
  minHeight: { base: defaultElementSizes.mobileFieldHeight, md: "auto" },
  py: "inset.narrow",
  px: "inset.default",
  textDecoration: "none",
  wordWrap: "normal",
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
    opacity: "1",
    pointerEvents: "none",
  },
};
// Styles for different visual variants:
// primary, secondary, link, pill, iconOnly, callout, searchbar, noBrand
const primary = {
  bg: "ui.link.primary",
  height: "none",
  fontSize: "button.default",
  minWidth: "none",
};
const secondary = {
  bg: "ui.white",
  border: "1px solid",
  borderColor: "ui.link.primary",
  color: "ui.link.primary",
  fontSize: "button.default",
  _hover: {
    bg: "ui.bg.default",
    borderColor: "ui.link.secondary",
    color: "ui.link.secondary",
  },
  _disabled: {
    bg: "transparent",
    borderColor: "ui.disabled.primary",
    color: "ui.disabled.primary",
  },
};
const link = {
  bg: "transparent",
  color: "ui.link.primary",
  lineHeight: "2.5",
  textDecoration: "underline",
  _disabled: {
    bg: "transparent",
  },
  _hover: {
    bg: "transparent",
    color: "ui.link.secondary",
  },
};
const text = {
  bg: "transparent",
  color: "ui.link.primary",
  fontSize: "button.default",
  _disabled: {
    bg: "transparent",
  },
  _hover: {
    bg: "transparent",
    color: "ui.link.secondary",
  },
};
const pill = {
  bg: "ui.white",
  border: "1px solid",
  borderColor: "ui.gray.light-cool",
  borderRadius: "pill",
  color: "inherit",
  fontSize: "button.default",
  py: "inset.narrow",
  px: "inset.wide",
  _hover: {
    bg: "ui.gray.xx-light-cool",
    borderColor: "ui.gray.medium",
  },
  _disabled: {
    bg: "ui.gray.x-light-cool",
  },
};
const iconOnly = {
  bg: "ui.white",
  border: "1px solid",
  borderColor: "ui.link.primary",
  color: "ui.link.primary",
  _hover: {
    bg: "ui.bg.default",
    borderColor: "ui.link.primary",
    color: "ui.link.primary",
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
};
const noBrand = {
  ...primary,
  bg: "ui.black",
  color: "ui.white",
  _hover: {
    bg: "ui.gray.x-dark",
  },
};

const Button = {
  baseStyle,
  // Available variants:
  variants: {
    primary,
    secondary,
    text,
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
