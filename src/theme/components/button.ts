import { defaultElementSizes } from "./global";

// Style object for base or default style
export const buttonBaseStyle = {
  alignItems: "center",
  borderRadius: "sm",
  display: "flex",
  cursor: "pointer",
  color: "ui.white",
  fontWeight: "button.default",
  justifyContent: "center",
  lineHeight: "1.5",
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
  _dark: {
    _disabled: {
      bg: "dark.ui.disabled.secondary",
      color: "dark.ui.disabled.primary",
    },
  },
};

const ghostDarkStyles = {
  bg: "transparent",
  borderColor: "dark.ui.link.primary",
  color: "dark.ui.link.primary",
  _hover: {
    bg: "dark.ui.link.primary-10",
    borderColor: "dark.ui.link.secondary",
    color: "dark.ui.link.secondary",
  },
  _disabled: {
    bg: "dark.ui.bg.default",
    borderColor: "dark.ui.disabled.primary",
  },
};
const generalSizeValues = (size = "medium", isPill = false) => {
  const sizes = {
    small: {
      fontSize: "button.small",
      height: "fit-content",
      minHeight: "auto",
      px: isPill ? "s" : "button.small.px",
      py: isPill ? "xxxs" : "button.small.py",
    },
    medium: {
      fontSize: "button.default",
      height: isPill ? "fit-content" : undefined,
      minHeight: isPill
        ? "auto"
        : { base: defaultElementSizes.mobileFieldHeight, md: "auto" },
      px: isPill ? "m" : "button.medium.px",
      py: isPill ? "xxxs" : "button.medium.py",
    },
    large: {
      fontSize: "button.large",
      height: "fit-content",
      minHeight: "auto",
      px: isPill ? "l" : "button.large.px",
      py: isPill ? "xxs" : "button.large.py",
    },
  };
  return sizes[size];
};

// Styles for different visual variants:
// primary, secondary, link, text, pill, iconOnly, callout, noBrand
export const primary = ({ buttonSize = "medium" }) => ({
  bg: "ui.link.primary",
  ...generalSizeValues(buttonSize),
  _dark: {
    bg: "dark.ui.link.primary",
    color: "ui.gray.xxx-dark",
    _hover: {
      bg: "dark.ui.link.secondary",
      color: "ui.gray.xxx-dark",
    },
  },
});
export const secondary = ({ buttonSize = "medium" }) => ({
  bg: "ui.white",
  border: "1px solid",
  borderColor: "ui.link.primary",
  color: "ui.link.primary",
  ...generalSizeValues(buttonSize),
  _hover: {
    bg: "ui.link.primary-05",
    borderColor: "ui.link.secondary",
    color: "ui.link.secondary",
  },
  _disabled: {
    bg: "transparent",
    borderColor: "ui.disabled.primary",
    color: "ui.disabled.primary",
  },
  _dark: {
    ...ghostDarkStyles,
  },
});
// The "link" type is deprecated but we still want to style
// it correctly for backwards compatibility.
const link = ({ buttonSize = "medium" }) => ({
  bg: "transparent",
  color: "ui.link.primary",
  textDecoration: "underline",
  ...generalSizeValues(buttonSize),
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
});
const text = ({ buttonSize = "medium" }) => ({
  bg: "transparent",
  color: "ui.link.primary",
  ...generalSizeValues(buttonSize),
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
});
export const pill = ({ buttonSize = "medium" }) => ({
  bg: "ui.white",
  border: "1px solid",
  borderColor: "ui.border.default",
  borderRadius: "button.pill",
  color: "inherit",
  ...generalSizeValues(buttonSize, true),
  _hover: {
    bg: "ui.gray.xx-light-cool",
    borderColor: "ui.gray.medium",
  },
  _disabled: {
    bg: "ui.gray.x-light-cool",
  },
  _dark: {
    background: "transparent",
    borderColor: "dark.ui.border.default",
    color: "dark.ui.typography.heading",
    _hover: {
      background: "dark.ui.bg.hover",
      borderColor: "dark.ui.border.hover",
      color: "dark.ui.typography.heading",
    },
  },
});
const iconOnly = ({ buttonSize = "medium" }) => ({
  bg: "ui.white",
  border: "1px solid",
  borderColor: "ui.link.primary",
  color: "ui.link.primary",
  ...generalSizeValues(buttonSize),
  paddingInlineStart: "inset.narrow",
  paddingInlineEnd: "inset.narrow",
  _hover: {
    bg: "ui.bg.default",
    borderColor: "ui.link.primary",
    color: "ui.link.primary",
  },
  _dark: {
    ...ghostDarkStyles,
  },
});
export const callout = ({ buttonSize = "medium" }) => ({
  bg: "brand.primary",
  ...generalSizeValues(buttonSize),
  _hover: {
    bg: "brand.secondary",
  },
  _active: {
    bg: "brand.secondary",
  },
  _dark: {
    bg: "brand.primary",
    color: "ui.white",
    _hover: {
      bg: "brand.secondary",
      color: "ui.white",
    },
  },
});
export const noBrand = ({ buttonSize = "medium" }) => ({
  bg: "ui.black",
  color: "ui.white",
  ...generalSizeValues(buttonSize),
  _hover: {
    bg: "ui.gray.x-dark",
  },
  _dark: {
    bg: "ui.gray.x-dark",
    color: "ui.white",
    _hover: {
      bg: "ui.gray.dark",
      color: "ui.white",
    },
  },
});

const Button = {
  baseStyle: buttonBaseStyle,
  // Available variants:
  variants: {
    primary,
    secondary,
    text,
    // Deprecated type. Use "text" instead.
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
