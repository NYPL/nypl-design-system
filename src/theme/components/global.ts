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
// Used in `Checkbox` and `Radio`.
const checkboxRadioHelperStyle = {
  ...helperTextMargin,
  marginLeft: "30px", // calc(22px + var(--nypl-space-xs))
  _disabled: {
    fontStyle: "italic",
  },
};
// Used in `Label` and `Fieldset`:
const labelLegendText = {
  alignItems: "baseline",
  width: "100%",
  marginBottom: "xs",
  fontSize: "14px",
  fontWeight: "medium",
  display: "flex",
  justifyContent: "space-between",
  helper: {
    marginLeft: "m",
    fontWeight: "300",
    fontSize: "-1",
  },
};

export {
  activeFocus,
  checkboxRadioLabelStyles,
  checkboxRadioControlSize,
  checkboxRadioHelperStyle,
  helperTextMargin,
  labelLegendText,
};
