import { cssVar } from "@chakra-ui/theme-tools";

import { ToggleSizes } from "../../components/Toggle/Toggle";

interface ToggleBaseStyle {
  isDisabled: boolean;
  size: ToggleSizes;
}

const toggleBaseStyle = ({ isDisabled, size }: ToggleBaseStyle) => {
  const label = { alignItems: "start", display: "flex", width: "fit-content" };
  const helperErrorText = {
    marginStart: size === "default" ? "xxl" : "xl",
    fontStyle: isDisabled ? "italic" : null,
  };
  return {
    label,
    helperErrorText,
  };
};
const $width = cssVar("switch-track-width");
const $height = cssVar("switch-track-height");

const Switch = {
  baseStyle: ({ size }: { size: string }) => {
    return {
      alignItems: "start",
      // opacity: 0.4,
      track: {
        backgroundColor: "ui.gray.medium",
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
        _dark: {
          bgColor: "ui.gray.dark",
          borderColor: "ui.gray.dark",
          _checked: {
            bg: "dark.ui.link.primary",
            borderColor: "dark.ui.link.primary",
          },
          _invalid: {
            bg: "inherit",
            borderColor: "dark.ui.error.primary",
            "> span": {
              bg: "dark.ui.error.primary",
            },
          },
          _disabled: {
            bg: "dark.ui.disabled.secondary",
            borderColor: "dark.ui.disabled.secondary",
            opacity: 1,
            // These are styles for the thumb. _isDisabled was not working within the `thumb` part.
            ".chakra-switch__thumb": {
              bgColor: "dark.ui.disabled.primary",
            },
          },
          _focus: {
            outlineColor: "dark.ui.focus",
          },
        },
      },
      label: {
        fontSize: "label.default",
        marginStart: "xs",
        marginTop: size === "lg" ? "xxxs" : null,
        _disabled: {
          color: "ui.gray.dark",
          fontStyle: "italic",
        },
        _invalid: {
          color: "ui.error.primary",
        },
        _dark: {
          _disabled: {
            color: "dark.ui.disabled.primary",
          },
          _invalid: {
            color: "dark.ui.error.primary",
          },
        },
      },
      thumb: {
        _dark: {
          bgColor: "dark.ui.bg.default",
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
  parts: ["helperErrorText"],
  baseStyle: toggleBaseStyle,
  // Default values
  defaultProps: {
    size: "lg",
  },
};

export default { Toggle, Switch };
