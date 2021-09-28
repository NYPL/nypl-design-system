import {
  checkboxRadioLabelStyles,
  checkboxRadioControlSize,
  checkboxRadioHelperStyle,
} from "./global";

// Style object for the Radio's "control" or visual icon.
const baseStyleControl = {
  verticalAlign: "middle",
  transitionProperty: "box-shadow",
  transitionDuration: "normal",
  border: "2px solid",
  borderRadius: "50%",
  borderColor: "ui.black",
  color: "ui.white",
  outline: "none",
  _checked: {
    bg: "ui.white",
    borderColor: "ui.focus",
    color: "ui.white",
    _disabled: {
      color: "ui.gray.medium",
      borderColor: "ui.gray.medium",
      bg: "ui.white",

      _before: {
        bg: "ui.gray.medium",
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
      borderRadius: "100%",
      bg: "ui.focus",
    },
  },
  _disabled: {
    borderColor: "ui.gray.medium",
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
const baseStyleLabel = {
  ...checkboxRadioLabelStyles,
};

// Style object for the Radio's helper text
const baseStyleHelper = {
  ...checkboxRadioHelperStyle,
};

const baseStyle = {
  // Chakra-inserted elements in the Chakra Radio component
  control: baseStyleControl,
  label: baseStyleLabel,
  // Custom element in the DS Radio component.
  helper: baseStyleHelper,
};

// Sticking to "md" for the default size.
const sizes = {
  md: {
    control: {
      ...checkboxRadioControlSize,
    },
  },
};

const Radio = {
  parts: ["control", "label", "helper"],
  baseStyle,
  sizes,
  // Default values
  defaultProps: {
    size: "md",
  },
};

export default Radio;
