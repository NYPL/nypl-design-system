import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";
import { cssVar } from "@chakra-ui/theme-tools";

import { ToggleSizes } from "../../components/Toggle/Toggle";

// This function creates a set of function that helps us
// create multipart component styles.
const {
  defineMultiStyleConfig: switchDefineMultiStyleConfig,
  definePartsStyle: switchDefinePartsStyle,
} = createMultiStyleConfigHelpers(["container", "track", "thumb", "label"]);
const {
  defineMultiStyleConfig: toggleDefineMultiStyleConfig,
  definePartsStyle: toggleDefinePartsStyle,
} = createMultiStyleConfigHelpers(["label", "helperErrorText"]);

interface ToggleBaseStyle extends StyleFunctionProps {
  isDisabled: boolean;
  size: ToggleSizes;
}
interface SwitchStyleProps extends StyleFunctionProps {
  size: string;
}

const $width = cssVar("switch-track-width");
const $height = cssVar("switch-track-height");

const toggleBaseStyle = toggleDefinePartsStyle(
  ({ isDisabled, size }: ToggleBaseStyle) => ({
    label: {
      alignItems: "start",
      display: "flex",
      width: "fit-content",
    },
    helperErrorText: {
      marginStart: size === "default" ? "xxl" : "xl",
      fontStyle: isDisabled ? "italic" : null,
    },
  })
);
const switchBaseStyle = switchDefinePartsStyle(
  ({ size }: SwitchStyleProps) => ({
    alignItems: "start",
    track: {
      backgroundColor: "ui.gray.semi-dark",
      border: "1px solid",
      borderColor: "ui.gray.semi-dark",
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
        bgColor: "ui.gray.semi-dark",
        borderColor: "ui.gray.semi-dark",
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
      fontSize: "desktop.label.label1",
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
  })
);

const Switch = switchDefineMultiStyleConfig({
  baseStyle: switchBaseStyle,
  sizes: {
    sm: switchDefinePartsStyle({
      container: {
        // Chakra defaults for `sm`:
        // width: 1.375rem
        // height: 0.75rem
        [$width.variable]: "2.25rem",
        [$height.variable]: "1rem",
      },
    }),
    lg: switchDefinePartsStyle({
      container: {
        // Chakra defaults for `lg`:
        // width: 2.875rem
        // height: 1.5rem
        [$width.variable]: "3.25rem",
        [$height.variable]: "1.5rem",
      },
    }),
  },
  defaultProps: {
    colorScheme: "white",
  },
});

const Toggle = toggleDefineMultiStyleConfig({
  baseStyle: toggleBaseStyle,
  // Default values
  defaultProps: {
    size: "lg",
  },
});

export default { Toggle, Switch };
