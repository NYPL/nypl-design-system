import { helperTextMargin } from "./global";

// Style object for the Checkbox's label
const baseStyleLabel = {
  fontSize: "sm",
  marginBottom: "0",
  marginLeft: "xs",
};

// Style object for the Checkbox's helper text
const baseStyleHelper = {
  ...helperTextMargin,
  marginLeft: "xs",
};

const baseStyle = {
  label: baseStyleLabel,
  helper: baseStyleHelper,
};

const Switch = {
  baseStyle: {
    opacity: 0.4,
    track: {
      p: "4px",
    },
  },
  variants: {
    standard: {
      track: {
        _checked: {
          bg: "ui.link.primary",
          opacity: 1,
        },
      },
    },
    disabled: {
      track: {
        bg: "ui.gray.medium",
      },
    },
    error: {
      track: {
        bg: "red.200",
        _checked: {
          bg: "red.500",
        },
      },
    },
  },
  defaultProps: {
    colorScheme: "white",
    variant: "standard",
  },
};

const Toggle = {
  parts: ["helper", "switch"],
  baseStyle,
  // Default values
  defaultProps: {
    size: "lg",
  },
};

export default { Toggle, Switch };
