// @see https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/checkbox.ts
// for available theme override options.

import {
  checkboxRadioLabelStyles,
  checkboxRadioControlSize,
  checkboxRadioHelperStyle,
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
  borderColor: "ui.black",
  color: "ui.black",
  outline: "none",
  transitionProperty: "box-shadow",
  transitionDuration: "normal",

  _checked: {
    bg: "ui.white",
    borderColor: "ui.focus",
    color: "ui.focus",

    _hover: {
      bg: "ui.white",
    },

    _disabled: {
      bg: "ui.white",
      borderColor: "ui.gray.medium",
      color: "ui.gray.medium",
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
    borderColor: "ui.gray.medium",
  },

  _focus: {
    borderColor: "ui.focus",
    boxShadow: "none",
    outlineColor: "ui.focus",
  },

  _invalid: {
    borderColor: "ui.error.primary",
    color: "ui.error.primary",
  },
};

// Style object for the Checkbox's label
const baseStyleLabel = checkboxRadioLabelStyles;

// Style object for the Checkbox's helper text
const baseStyleHelper = checkboxRadioHelperStyle;

const baseStyle = {
  icon: baseStyleIcon,
  control: baseStyleControl,
  label: baseStyleLabel,
  helper: baseStyleHelper,
};

// Sticking to "lg" for the default size.
const sizes = {
  lg: {
    // Controls the width/height of the checkbox itself.
    control: {
      ...checkboxRadioControlSize,
      borderRadius: "3px",
    },
    // Controls the font-size of the label only.
    label: { fontSize: "label.default" },
  },
};

const Checkbox = {
  parts: ["icon", "control", "label", "helper"],
  baseStyle,
  sizes,
  // Default values
  defaultProps: {
    size: "lg",
    colorScheme: "white",
  },
};

export default Checkbox;
