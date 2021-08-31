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
        borderColor: "ui.error",
      },
      _before: {
        borderColor: "ui.error",
        bg: "ui.error",
      },
    },
    _hover: {
      bg: "ui.white",
    },
    _before: {
      content: `""`,
      display: "block",
      w: 3,
      h: 3,
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
    borderColor: "ui.error",
  },
  // TODO:
  // _indeterminate: {
  //   borderColor: "ui.gray.medium",
  //   bg: "ui.white",
  // },
};

// Style object for the Radio's label
const baseStyleLabel = {
  userSelect: "none",
  fontSize: 0,
  fontWeight: "light",
  marginBottom: 0,
  marginLeft: 2,
  verticalAlign: "middle",

  _disabled: {
    color: "ui.gray.dark",
    opacity: 1,
    fontStyle: "italic",
  },
  _invalid: {
    color: "ui.error",
  },
};

const baseStyle = {
  control: baseStyleControl,
  label: baseStyleLabel,
};

// Sticking to "md" for the default size.
const sizes = {
  md: {
    control: {
      h: "1.375rem",
      w: "1.375rem",
    },
  },
};

const Radio = {
  baseStyle,
  sizes,
  // Default values
  defaultProps: {
    size: "md",
  },
};

export default Radio;
