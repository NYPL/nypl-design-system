import { helperTextMargin } from "./global";
import { cssVar } from "@chakra-ui/theme-tools";

// const baseStyle = {
const toggleBaseStyle = ({ isDisabled }) => {
  const label = { alignItems: "start", display: "flex", width: "fit-content" };
  const helper = {
    ...helperTextMargin,
    marginLeft: "xxs",
    fontStyle: isDisabled ? "italic" : null,
  };
  return {
    label,
    helper,
  }
};
const $width = cssVar("switch-track-width");
const $height = cssVar("switch-track-height");

const Switch = {
  baseStyle: ({ size }: { size: string }) => {
    return {
      alignItems: "start",
      opacity: 0.4,
      track: {
        border: "1px solid",
        borderColor: "ui.gray.medium",
        p: "1px",
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
        marginTop: size === "lg" ? "xxxs" : null,
        _disabled: {
          color: "ui.gray.dark",
          fontStyle: "italic",
        },
      },
      thumb: {
        _disabled: {
          bg: "ui.error.primary",
        },
      },
    };
  },
  sizes: {
    sm: {
      container: {
        // Chakra defaults for `sm`:
        // width: 1.375rem
        // height: 0.75rem
        [$width.variable]: "2.25rem",
        [$height.variable]: "1rem",
      },
    },
    lg: {
      container: {
        // Chakra defaults for `lg`:
        // width: 2.875rem
        // height: 1.5rem
        [$width.variable]: "3.25rem",
        [$height.variable]: "1.5rem",
      },
    },
  },
  defaultProps: {
    colorScheme: "white",
  },
};

const Toggle = {
  parts: ["helper"],
  baseStyle: toggleBaseStyle,
  // Default values
  defaultProps: {
    size: "lg",
  },
};

export default { Toggle, Switch };
