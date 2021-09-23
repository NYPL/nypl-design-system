// style object for base or default style
const baseStyle = {
  borderRadius: "2px",
  lineHeight: "1.5",
  display: "flex",
  cursor: "pointer",
  color: "ui.white",
  justifyContent: "center",
  py: 2, // var(--space-xs)
  px: 4, // var(--space-s)
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
// styles for different sizes ("sm", "md", "lg")
const sizes = {
  lg: {
    width: "150px",
  },
};
// styles for different visual variants:
// primary, secondary, link, pill, icon-only
const variants = {
  primary: {
    bg: "ui.link.primary",
    minWidth: "none",
    height: "none",
  },
  secondary: {
    bg: "ui.white",
    border: "1px solid",
    borderColor: "ui.gray.light-cool",
    color: "inherit",
    _hover: {
      bg: "ui.gray.xx-light-cool",
    },
  },
  link: {
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
  },
  pill: {
    bg: "ui.white",
    border: "1px solid",
    borderColor: "ui.gray.light-cool",
    color: "inherit",
    borderRadius: "20px",
    py: 2, // var(--space-xs)
    paddingInlineStart: 6, // var(--space-m)
    paddingInlineEnd: 6, // var(--space-m)
    _hover: {
      bg: "ui.gray.xx-light-cool",
    },
  },
  "icon-only": {
    bg: "ui.white",
    border: "1px solid",
    borderColor: "ui.gray.light-cool",
    color: "inherit",
    _hover: {
      bg: "ui.gray.xx-light-cool",
    },
    paddingInlineStart: 1, // var(--space-xs)
    paddingInlineEnd: 1, //var(--space-xs)
  },
  callout: {
    bg: "brand.primary",
    _hover: {
      bg: "brand.secondary",
    },
    _active: {
      bg: "brand.secondary",
    },
  },
};

const Button = {
  baseStyle,
  sizes,
  // Available variants:
  //   primary, secondary, link, pill, icon-only
  variants,
  // Default values
  defaultProps: {
    size: "md",
    variant: "primary",
    colorScheme: "blue",
  },
};

export default Button;
