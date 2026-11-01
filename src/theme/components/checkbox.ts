import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { defineStyle } from "@chakra-ui/system";

// @see https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/components/checkbox.ts
// for available theme override options.

import {
  checkboxRadioLabelStyles,
  checkboxRadioControlSize,
  checkboxRadioHelperErrorTextStyle,
  checkboxRadioHoverStyles,
} from "./global";

// This function creates a set of function that helps us
// create multipart component styles.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    "base",
    "helperErrorText",
    "icon",
    "control",
    "label",
    "container",
  ]);

// Style object for the Checkbox's visual icon.
const baseStyleIcon = defineStyle({
  // Remove Chakra's default animation
  animation: null,
  width: "22px",
  height: "22px",
});

// Style object for the Checkbox's "control."
const baseStyleControl = defineStyle({
  border: "2px solid",
  borderRadius: "v5.faint",
  borderColor: "v5.checkbox.border.default",
  bg: "v5.checkbox.bg.default",
  cursor: "pointer",
  outline: "none",
  transitionProperty: "box-shadow",
  transitionDuration: "normal",

  _checked: {
    borderColor: "v5.checkbox.border.selected",
    bg: "v5.checkbox.bg.selected.default",
    color: "v5.checkbox.icon.default",
    _disabled: {
      bg: "v5.checkbox.bg.disabled",
      borderColor: "v5.checkbox.border.disabled",
      svg: {
        color: "v5.checkbox.icon.disabled",
      },
    },
  },
  _disabled: {
    bg: "v5.checkbox.bg.disabled",
    borderColor: "v5.checkbox.border.disabled",
  },
  _focus: {
    boxShadow: "none",
    outline: "none",
  },
  _invalid: {
    borderColor: "v5.checkbox.border.error",
    color: "v5.checkbox.icon.default",
  },
});

// // Style object for the Checkbox's label
const baseStyleLabel = defineStyle({
  cursor: "pointer",
  verticalAlign: "top",
  ...checkboxRadioLabelStyles,
});

const baseStyle = definePartsStyle({
  // Style object for the Checkbox's helper text
  helperErrorText: checkboxRadioHelperErrorTextStyle,
  icon: baseStyleIcon,
  base: {
    alignItems: "flex-start",
    position: "relative",
    ...checkboxRadioHoverStyles,
  },
  control: baseStyleControl,
  label: baseStyleLabel,
});

// Sticking to "lg" for the default size.
const sizes = {
  lg: {
    // Controls the width/height of the checkbox itself.
    control: defineStyle({
      ...checkboxRadioControlSize,
    }),
    // Controls the font-size of the label only.
    label: defineStyle({ fontSize: "desktop.label.label1" }),
  },
};

const Checkbox = defineMultiStyleConfig({
  baseStyle,
  sizes,
  // Default values
  defaultProps: {
    size: "lg",
    colorScheme: "white",
  },
});

export default Checkbox;
