const Button = {
  // style object for base or default style
  baseStyle: {
    borderRadius: "2px",
    cursor: "pointer",
    color: "ui.white",
    justifyContent: "center",
    padding: "var(--space-xs) var(--space-s)",
    textDecoration: "none",
    _hover: {
      bg: "ui.link.secondary",
    },
    _visited: {
      color: "ui.white",
    },
    _disabled: {
      bg: "ui.gray.light",
      color: "ui.gray.dark",
      pointerEvents: "none",
      opacity: "1",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    lg: {
      width: "150px",
    },
  },
  // styles for different visual variants:
  // primary, secondary, link, pill, icon-only
  variants: {
    primary: {
      bg: "ui.link.primary",
      hoverBg: "blue.600",
      activeBg: "blue.700",
    },
    secondary: {
      bg: "ui.white",
      border: "1px solid",
      borderColor: "ui.gray.light",
      color: "inherit",
      _hover: {
        bg: "ui.gray.xxlight",
      },
    },
    link: {
      bg: "transparent",
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
      borderColor: "ui.gray.light",
      color: "inherit",
      borderRadius: "20px",
      padding: "var(--space-xs)",
      paddingInlineStart: "var(--space-m)",
      paddingInlineEnd: "var(--space-m)",
      _hover: {
        bg: "ui.gray.xxlight",
      },
    },
    "icon-only": {
      bg: "ui.white",
      border: "1px solid",
      borderColor: "ui.gray.light",
      color: "inherit",
      _hover: {
        bg: "ui.gray.xxlight",
      },
      paddingInlineStart: "var(--space-xs)",
      paddingInlineEnd: "var(--space-xs)",
    },
  },
  // default values for `size`, `variant`, `colorScheme`
  defaultProps: {
    size: "md",
    variant: "primary",
    colorScheme: "blue",
  },
};

export default Button;
