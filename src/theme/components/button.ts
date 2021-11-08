// Style object for base or default style
const baseStyle = {
  borderRadius: "sm",
  lineHeight: "1.5",
  display: "flex",
  cursor: "pointer",
  color: "ui.white",
  justifyContent: "center",
  py: "xs",
  px: "s",
  textDecoration: "none",
  wordWrap: "normal",
  fontWeight: "regular",
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
// primary, secondary, link, pill, iconOnly, callout
const primary = {
  bg: "ui.link.primary",
  minWidth: "none",
  height: "none",
  fontSize: "-1",
};
const secondary = {
  bg: "ui.white",
  border: "1px solid",
  borderColor: "ui.gray.light-cool",
  color: "inherit",
  fontSize: "-1",
  _hover: {
    bg: "ui.gray.xx-light-cool",
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
  borderRadius: "pill",
  py: "xs",
  paddingInlineStart: "m",
  paddingInlineEnd: "m",
  fontSize: "-1",
  _hover: {
    bg: "ui.gray.xx-light-cool",
  },
};
const iconOnly = {
  bg: "ui.white",
  border: "1px solid",
  borderColor: "ui.gray.light-cool",
  color: "inherit",
  _hover: {
    bg: "ui.gray.xx-light-cool",
  },
  paddingInlineStart: "xs",
  paddingInlineEnd: "xs",
};
const callout = {
  bg: "brand.primary",
  fontSize: "-1",
  _hover: {
    bg: "brand.secondary",
  },
  _active: {
    bg: "brand.secondary",
  },
};
const searchBar = {
  ...primary,
  borderLeftRadius: "none",
  borderRightRadius: { base: "none", md: "sm" },
  lineHeight: "1.75",
};

const Button = {
  baseStyle,
  // Available variants:
  // primary, secondary, link, pill, iconOnly, searchBar
  variants: {
    primary,
    secondary,
    link,
    pill,
    iconOnly,
    callout,
    searchBar,
  },
  // Default values
  defaultProps: {
    variant: "primary",
  },
};

export default Button;
