// @see https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/checkbox.ts
// for available theme override options.

import {
  checkboxRadioLabelStyles,
  checkboxRadioControlSize,
  checkboxRadioHelperErrorTextStyle,
} from "./global";

// Style object for the Checkbox's visual icon.
const baseStyleIcon = {
  transitionProperty: "transform",
  transitionDuration: "normal",
  width: "22px",
  height: "22px",
};

// Style object for the Checkbox's "control."
const baseStyleControl = {
  border: "2px solid",
  borderRadius: "sm",
  borderColor: "ui.gray.dark",
  backgroundColor: "ui.gray.xx-light-cool",
  color: "ui.black",
  outline: "none",
  transitionProperty: "box-shadow",
  transitionDuration: "normal",

  _hover: {
    borderColor: "ui.black",
  },

  _checked: {
    bg: "ui.white",
    borderColor: "ui.focus",
    color: "ui.focus",

    _hover: {
      borderColor: "ui.focus",
      bg: "ui.gray.xx-light-cool",
    },

    _disabled: {
      bg: "ui.gray.xx-light-cool",
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
    _hover: {
      borderColor: "ui.disabled.primary",
    },
  },

  _focus: {
    boxShadow: "none",
    outlineColor: "ui.focus",
  },

  _invalid: {
    borderColor: "ui.error.primary",
    color: "ui.error.primary",
    _hover: {
      borderColor: "ui.error.primary",
    },
  },
};

// Style object for the Checkbox's label
const baseStyleLabel = checkboxRadioLabelStyles;

// Style object for the Checkbox's helper text
const baseStyleHelperErrorText = checkboxRadioHelperErrorTextStyle;

const baseStyle = {
  icon: baseStyleIcon,
  control: baseStyleControl,
  label: baseStyleLabel,
  helperErrorText: baseStyleHelperErrorText,
};

// Sticking to "lg" for the default size.
const sizes = {
  lg: {
    // Controls the width/height of the checkbox itself.
    control: {
      ...checkboxRadioControlSize,
      borderRadius: "checkbox",
    },
    // Controls the font-size of the label only.
    label: { fontSize: "label.default" },
  },
};

const Checkbox = {
  parts: ["helperErrorText", "icon", "control", "label"],
  baseStyle,
  sizes,
  // Default values
  defaultProps: {
    size: "lg",
    colorScheme: "white",
  },
};

export default Checkbox;
