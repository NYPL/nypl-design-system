// Style object for base or default style
const baseStyle = {
  borderRadius: "2px",
  lineHeight: "1.5",
  display: "flex",
  cursor: "pointer",
  color: "ui.white",
  justifyContent: "center",
  py: "xs",
  px: "s",
  textDecoration: "none",
  wordWrap: "normal",
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
// Styles for different "lg" size
const sizes = {
  lg: {
    width: "150px",
  },
};
// Styles for different visual variants:
// primary, secondary, link, pill, icon-only, callout
const primary = {
  bg: "ui.link.primary",
  minWidth: "none",
  height: "none",
};
const secondary = {
  bg: "ui.white",
  border: "1px solid",
  borderColor: "ui.gray.light-cool",
  color: "inherit",
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
  borderRadius: "20px",
  py: "xs",
  paddingInlineStart: "m",
  paddingInlineEnd: "m",
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
  _hover: {
    bg: "brand.secondary",
  },
  _active: {
    bg: "brand.secondary",
  },
};
const searchBar = {
  ...primary,
  borderLeftRadius: "0",
};

const Button = {
  baseStyle,
  sizes,
  // Available variants:
  // primary, secondary, link, pill, icon-only, searchBar
  variants: {
    primary,
    secondary,
    link,
    pill,
    ["icon-only"]: iconOnly,
    callout,
    searchBar,
  },
  // Default values
  defaultProps: {
    size: "md",
    variant: "primary",
    colorScheme: "blue",
  },
};

export default Button;
