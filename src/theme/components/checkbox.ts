import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { defineStyle } from "@chakra-ui/system";

// @see https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/components/checkbox.ts
// for available theme override options.

import {
  checkboxRadioHelperErrorTextStyles,
  checkboxRadioLabelStyles,
} from "./global";

// This function creates a set of function that helps us
// create multipart component styles.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    "container",
    "control",
    "helperErrorText",
    "icon",
    "label",
  ]);

// Style object for the Checkbox's visual icon.
const baseStyleIcon = defineStyle({
  // Remove Chakra's default animation
  animation: null,
  width: "14px",
  height: "14px",
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
  h: "v5.checkbox",
  w: "v5.checkbox",
  _checked: {
    borderColor: "v5.checkbox.border.selected",
    bg: "v5.checkbox.bg.selected.default",
    color: "v5.checkbox.icon.default",
    _hover: {
      borderColor: "v5.checkbox.border.selected",
      bg: "v5.checkbox.bg.selected.default",
    },
    _disabled: {
      bg: "v5.checkbox.bg.selected.disabled",
      borderColor: "v5.checkbox.border.disabled",
      svg: {
        color: "v5.checkbox.icon.disabled",
      },
    },
    _invalid: {
      bg: "v5.checkbox.bg.selected.error",
      borderColor: "v5.checkbox.border.error",
      color: "v5.checkbox.icon.default",
    },
  },
  _indeterminate: {
    borderColor: "v5.checkbox.border.selected",
    bg: "v5.checkbox.bg.selected.default",
    color: "v5.checkbox.icon.default",
    _disabled: {
      bg: "v5.checkbox.bg.selected.disabled",
      borderColor: "v5.checkbox.border.disabled",
      svg: {
        color: "v5.checkbox.icon.disabled",
      },
    },
    _invalid: {
      bg: "v5.checkbox.bg.selected.error",
      borderColor: "v5.checkbox.border.error",
      color: "v5.checkbox.icon.default",
    },
  },
  _disabled: {
    bg: "v5.checkbox.bg.disabled",
    borderColor: "v5.checkbox.border.disabled",
  },
  _invalid: {
    borderColor: "v5.checkbox.border.error",
  },
});

// // Style object for the Checkbox's label
const baseStyleLabel = defineStyle({
  cursor: "pointer",
  verticalAlign: "top",
  ...checkboxRadioLabelStyles,
  _invalid: {
    color: "v5.checkbox.label.error",
  },
});

// Chakra's default Checkbox theme defines a `sizes` map (sm/md/lg) that sets
// `label.fontSize`. Since `sizes` merges on top of `baseStyle`, we need to
// set our own sizes object to override theirs.
const sizes = {
  sm: definePartsStyle({ label: { fontSize: "v5.body" } }),
  md: definePartsStyle({ label: { fontSize: "v5.body" } }),
  lg: definePartsStyle({ label: { fontSize: "v5.body" } }),
};

const baseStyle = definePartsStyle({
  container: {
    alignItems: "center",
    position: "relative",
    _hover: {
      span: {
        _first: {
          borderColor: "v5.checkbox.border.hover",
        },
        _checked: {
          borderColor: "v5.checkbox.border.selected",
        },
        _indeterminate: {
          borderColor: "v5.checkbox.border.selected",
        },
        _disabled: {
          borderColor: "v5.checkbox.border.disabled",
        },
        _invalid: {
          borderColor: "v5.checkbox.border.error",
        },
      },
    },
  },
  control: baseStyleControl,
  helperErrorText: checkboxRadioHelperErrorTextStyles,
  icon: baseStyleIcon,
  // Controls the font-size of the label only.
  label: baseStyleLabel,
});

const Checkbox = defineMultiStyleConfig({
  baseStyle,
  sizes,
});

export default Checkbox;
