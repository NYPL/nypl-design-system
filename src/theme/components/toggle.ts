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

const toggleBaseStyle = toggleDefinePartsStyle(({ size }: ToggleBaseStyle) => ({
  label: {
    alignItems: "start",
    display: "flex",
    width: "fit-content",
  },
  helperErrorText: {
    color: "v5.text.helper",
    // TODO
    // "v5.density.condensed" 8px + width of track
    marginStart: size === "default" ? "58px" : "42px",
  },
}));
const switchBaseStyle = switchDefinePartsStyle(
  ({ size }: SwitchStyleProps) => ({
    alignItems: "start",
    track: {
      backgroundColor: "v5.toggle.bg.default",
      border: "1px solid",
      borderColor: "v5.toggle.border.default",
      p: "0",
      width: size === "lg" ? "48px" : "32px",
      height: size === "lg" ? "24px" : "16px",
      _checked: {
        bg: "v5.toggle.bg.selected.default",
        borderColor: "v5.toggle.border.selected",
        _disabled: {
          bg: "v5.toggle.bg.disabled",
          borderColor: "v5.toggle.border.disabled",
        },
      },
      _invalid: {
        borderColor: "v5.toggle.border.error",
      },
      _disabled: {
        bg: "v5.toggle.bg.disabled",
        borderColor: "v5.toggle.border.disabled",
        opacity: 1,
      },
      _focus: {
        outline: "2px solid",
        outlineColor: "v5.inputShared.border.focus",
        outlineOffset: "2px",
        zIndex: "9999",
      },
      _hover: {
        borderColor: "v5.toggle.border.hover",
        _checked: {
          borderColor: "v5.toggle.border.selected",
        },
        _disabled: {
          borderColor: "v5.toggle.border.disabled",
        },
        _invalid: {
          borderColor: "v5.toggle.border.error",
        },
      },
    },
    label: {
      marginStart: "v5.density.condensed",
      _disabled: {
        color: "v5.text.disabled",
      },
      _invalid: {
        color: "v5.toggle.label.error",
      },
    },
    thumb: {
      mt: size === "lg" ? "4px" : "3px",
      ml: size === "lg" ? "2px" : "1px",
      width: size === "lg" ? "16px" : "10px",
      height: size === "lg" ? "16px" : "10px",
      bg: "v5.toggle.icon.default",
      _hover: {
        bg: "v5.toggle.icon.hover",
      },
      _checked: {
        bg: "v5.toggle.icon.selected",
        _hover: {
          bg: "v5.toggle.icon.selected",
        },
        _disabled: {
          bg: "v5.toggle.icon.disabled",
        },
        _invalid: {
          bg: "v5.toggle.icon.selected",
        },
      },
      _disabled: {
        bg: "v5.toggle.icon.disabled",
      },
      _invalid: {
        bg: "v5.toggle.icon.error",
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
});

const Toggle = toggleDefineMultiStyleConfig({
  baseStyle: toggleBaseStyle,
  // Default values
  defaultProps: {
    size: "lg",
  },
});

export default { Toggle, Switch };
