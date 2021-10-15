/** Export "mixin" styles. */
export { wrapperStyles } from "./globalMixins";

/** Reusable component styles. */

// Used in `Select` and `TextInput`.
const activeFocus = {
  border: "1px solid",
  borderColor: "ui.focus",
  zIndex: "9999",
  outline: "1px solid",
  outlineColor: "ui.focus",
};
// Used in `Select` and `TextInput`.
const helperTextMargin = {
  marginTop: "xs",
  marginBottom: "0",
};
// Used in `Checkbox` and `Radio`.
const checkboxRadioLabelStyles = {
  userSelect: "none",
  fontSize: "0",
  fontWeight: "light",
  marginBottom: "0",
  marginLeft: "xs",
  verticalAlign: "middle",
  _disabled: {
    color: "ui.gray.dark",
    opacity: 1,
    fontStyle: "italic",
  },
  _invalid: {
    color: "ui.error.primary",
  },
};
// Custom values not in the spacing theme.
// Used in `Checkbox` and `Radio`.
const checkboxRadioControlSize = {
  h: "1.375rem",
  w: "1.375rem",
};
// Used in `CheckboxGroup` and `RadioGroup`.
const checkboxRadioGroupLayout = {
  legend: {
    fontSize: "14px",
    marginBottom: "s",
  },
  required: {
    marginLeft: "m",
  },
  helper: {
    marginTop: "s",
  },
};
// Used in `Checkbox` and `Radio`.
const checkboxRadioHelperStyle = {
  ...helperTextMargin,
  marginLeft: "30px", // calc(22px + var(--space-xs))
  _disabled: {
    fontStyle: "italic",
  },
};

export {
  activeFocus,
  checkboxRadioLabelStyles,
  checkboxRadioControlSize,
  checkboxRadioGroupLayout,
  checkboxRadioHelperStyle,
  helperTextMargin,
};
