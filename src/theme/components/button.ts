// Style object for base or default style
const baseStyle = {
  borderRadius: "sm",
  lineHeight: "1.5",
  display: "flex",
  cursor: "pointer",
  color: "ui.white",
  justifyContent: "center",
  maxHeight: "2.5rem",
  py: "inset.narrow",
  px: "inset.default",
  textDecoration: "none",
  wordWrap: "normal",
  fontWeight: "button.default",
  svg: {
    fill: "currentColor",
    marginTop: "xxs",
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
};
// Styles for different visual variants:
// primary, secondary, link, pill, iconOnly, callout, searchbar, noBrand
const primary = {
  bg: "ui.link.primary",
  minWidth: "none",
  height: "none",
  fontSize: "button.default",
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
};
const pill = {
  bg: "ui.white",
  border: "1px solid",
  borderColor: "ui.gray.light-cool",
  color: "inherit",
  borderRadius: "button.pill",
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
};
const noBrand = {
  ...primary,
  bg: "ui.black",
  color: "ui.white",
  _hover: {
    bg: "ui.gray.xdark",
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
