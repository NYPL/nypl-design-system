// @see https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/checkbox.ts
// For avail theme override options.

// Style object for the Checkbox's visual icon.
const baseStyleIcon = {
  transitionProperty: "transform",
  transitionDuration: "normal",
  color: "ui.focus",
  width: "22px",
  height: "22px",
};

// Style object for the Checkbox's "control."
const baseStyleControl = {
  border: "2px solid",
  borderRadius: "sm",
  borderColor: "ui.black",
  color: "ui.white",
  outline: "none",
  transitionProperty: "box-shadow",
  transitionDuration: "normal",

  _checked: {
    bg: "ui.white",
    borderColor: "ui.focus",
    color: "ui.white",

    _hover: {
      bg: "ui.white",
    },

    _disabled: {
      bg: "ui.white",
      borderColor: "ui.gray.medium",
      color: "ui.gray.medium",
    },
  },

  _indeterminate: {
    bg: "ui.white",
    borderColor: "ui.gray.medium",
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
    borderColor: "ui.error",
  },
};

// Style object for the Checkbox's label
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

// Style object for the Checkbox's helper text
const baseStyleHelper = {
  marginTop: 2, // var(--space-xs)
  marginBottom: 0,
  marginLeft: "30px", // calc(22px + var(--space-xs))

  _disabled: {
    fontStyle: "italic",
  },
};

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
    control: { w: "1.375rem", h: "1.375rem", borderRadius: "3px" },
    // Controls the font-size of the label only.
    label: { fontSize: "md" },
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
