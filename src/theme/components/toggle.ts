import { helperTextMargin } from "./global";

const baseStyle = {
  label: { alignItems: "start", display: "flex", width: "fit-content" },
  helper: {
    ...helperTextMargin,
    marginLeft: "xxs",
  },
};

const Switch = {
  baseStyle: ({ size }) => {
    return {
      alignItems: "start",
      opacity: 0.4,
      track: {
        border: "1px solid",
        borderColor: "ui.gray.medium",
        p: "4px",
        _checked: {
          bg: "ui.link.primary",
          borderColor: "ui.link.primary",
          opacity: 1,
        },
        _invalid: {
          bg: "inherit",
          borderColor: "ui.error.primary",
          "> span": {
            bg: "ui.error.primary",
          },
        },
        _disabled: {
          bg: "ui.gray.medium",
          borderColor: "ui.gray.medium",
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
      label: {
        fontSize: "label.default",
        marginLeft: "xs",
        marginTop: size === "lg" ? "6px" : null,
        _disabled: { fontStyle: "italic" },
      },
      thumb: {
        _disabled: {
          bg: "ui.error.primary",
        },
      },
    };
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
