import { helperTextMargin } from "./global";

const baseStyle = {
  label: { display: "flex", alignItems: "center", width: "fit-content" },
  helper: {
    ...helperTextMargin,
    marginLeft: "xs",
  },
};

const Switch = {
  baseStyle: {
    opacity: 0.4,
    track: {
      p: "4px",
      border: "1px solid",
      borderColor: "ui.gray.medium",
      _checked: {
        borderColor: "ui.link.primary",
        bg: "ui.link.primary",
        opacity: 1,
      },
      _invalid: {
        borderColor: "ui.error.primary",
        bg: "inherit",
        "> span": {
          bg: "ui.error.primary",
        },
      },
      _disabled: {
        borderColor: "ui.gray.medium",
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
    label: { fontSize: -1, marginLeft: "xs" },
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
