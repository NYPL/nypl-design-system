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
  borderRadius: "sm",
  borderColor: "ui.gray.dark",
  backgroundColor: "ui.gray.xx-light-cool",
  color: "ui.black",
  cursor: "pointer",
  outline: "none",
  transitionProperty: "box-shadow",
  transitionDuration: "normal",

  _checked: {
    bg: "ui.white",
    borderColor: "ui.focus",
    color: "ui.focus",
    _hover: {
      bg: "ui.gray.xx-light-cool",
    },
    _disabled: {
      bg: "ui.disabled.secondary",
      borderColor: "ui.disabled.primary",
      svg: {
        color: "ui.disabled.primary",
      },
    },
    _indeterminate: {
      color: "ui.focus",
      borderColor: "ui.focus",
    },
  },
  _indeterminate: {
    color: "ui.focus",
    borderColor: "ui.focus",
  },
  _disabled: {
    bg: "ui.white",
    borderColor: "ui.disabled.primary",
  },
  _focus: {
    boxShadow: "none",
    outlineColor: "ui.focus",
  },
  _invalid: {
    borderColor: "ui.error.primary",
    color: "ui.error.primary",
  },
  _dark: {
    borderColor: "dark.ui.border.default",
    backgroundColor: "dark.ui.bg.default",
    color: "dark.ui.typography.body",
    _checked: {
      borderColor: "dark.ui.focus",
      color: "dark.ui.focus",
      _disabled: {
        backgroundColor: "dark.ui.bg.default",
        borderColor: "dark.ui.disabled.secondary",
        svg: {
          color: "dark.ui.disabled.secondary",
        },
      },
      _indeterminate: {
        color: "dark.ui.focus",
        borderColor: "dark.ui.focus",
      },
      _invalid: {
        borderColor: "dark.ui.error.primary",
        color: "dark.ui.error.primary",
      },
    },
    _indeterminate: {
      color: "dark.ui.focus",
      borderColor: "dark.ui.focus",
    },
    _disabled: {
      backgroundColor: "dark.ui.bg.default",
      borderColor: "dark.ui.disabled.secondary",
      svg: {
        color: "dark.ui.disabled.secondary",
      },
    },
    _focus: {
      boxShadow: "none",
      outlineColor: "dark.ui.focus",
    },
    _invalid: {
      borderColor: "dark.ui.error.primary",
      color: "dark.ui.error.primary",
    },
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
  base: checkboxRadioHoverStyles,
  control: baseStyleControl,
  label: baseStyleLabel,
});

// Sticking to "lg" for the default size.
const sizes = {
  lg: {
    // Controls the width/height of the checkbox itself.
    control: defineStyle({
      ...checkboxRadioControlSize,
      borderRadius: "checkbox",
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
