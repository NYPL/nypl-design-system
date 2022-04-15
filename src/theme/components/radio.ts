import {
  checkboxRadioLabelStyles,
  checkboxRadioControlSize,
  checkboxRadioHelperErrorTextStyle,
} from "./global";

// Style object for the Radio's "control" or visual icon.
const baseStyleControl = {
  verticalAlign: "middle",
  transitionProperty: "box-shadow",
  transitionDuration: "normal",
  border: "2px solid",
  borderRadius: "round",
  borderColor: "ui.black",
  color: "ui.white",
  outline: "none",
  _checked: {
    bg: "ui.white",
    borderColor: "ui.focus",
    color: "ui.white",
    _disabled: {
      borderColor: "ui.disabled.primary",
      bg: "ui.white",
      _before: {
        bg: "ui.disabled.primary",
      },
    },
    _invalid: {
      _hover: {
        borderColor: "ui.error.primary",
      },
      _before: {
        borderColor: "ui.error.primary",
        bg: "ui.error.primary",
      },
    },
    _hover: {
      bg: "ui.white",
    },
    _before: {
      content: `""`,
      display: "block",
      w: "3",
      h: "3",
      borderRadius: "round",
      bg: "ui.focus",
    },
  },
  _disabled: {
    borderColor: "ui.disabled.primary",
    bg: "ui.white",
  },
  _focus: {
    boxShadow: "outline",
    borderColor: "ui.focus",
  },
  _invalid: {
    borderColor: "ui.error.primary",
  },
  // TODO:
  // _indeterminate: {
  //   borderColor: "ui.gray.medium",
  //   bg: "ui.white",
  // },
};

// Style object for the Radio's label
const baseStyleLabel = checkboxRadioLabelStyles;

// Style object for the Radio's helper text
const baseStyleHelperErrorText = checkboxRadioHelperErrorTextStyle;

const baseStyle = {
  // Chakra-inserted elements in the Chakra Radio component
  control: baseStyleControl,
  label: baseStyleLabel,
  // Custom element in the DS Radio component.
  helperErrorText: baseStyleHelperErrorText,
};

// Sticking to "md" for the default size.
const sizes = {
  md: {
    control: {
      ...checkboxRadioControlSize,
    },
    label: { fontSize: "label.default" },
  },
};

const Radio = {
  parts: ["control", "helperErrorText", "label"],
  baseStyle,
  sizes,
  // Default values
  defaultProps: {
    size: "md",
  },
};

export default Radio;
