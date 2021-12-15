import { helperTextMargin } from "./global";

// Style object for the Toggle's label
const baseStyleLabel = {
  fontSize: -1,
  marginBottom: "0",
  marginLeft: "xs",
};

// Style object for the Toggle's helper text
const baseStyleHelper = {
  ...helperTextMargin,
  marginLeft: "xs",
};

const baseStyle = {
  alignItems: "center",
  label: baseStyleLabel,
  helper: baseStyleHelper,
};

const Switch = {
  baseStyle: {
    opacity: 0.4,
    track: {
      p: "4px",
      _checked: {
        bg: "ui.link.primary",
        opacity: 1,
      },
      _invalid: {
        border: "1px solid",
        borderColor: "ui.error.primary",
        bg: "inherit",
        "> span": {
          bg: "ui.error.primary",
        },
      },
      _disabled: {
        bg: "ui.gray.medium",
        _checked: {
          opacity: 0.4,
        },
      },
      _focus: {
        outline: "2px solid",
        outlineColor: "ui.focus",
        outlineOffset: "2px",
        zIndex: "9999",
      },
    },
    thumb: {
      _disabled: {
        bg: "ui.error.primary",
      },
    },
  },
  defaultProps: {
    colorScheme: "white",
  },
};

const Toggle = {
  parts: ["helper"],
  baseStyle,
  // Default values
  defaultProps: {
    size: "lg",
  },
};

export default { Toggle, Switch };
