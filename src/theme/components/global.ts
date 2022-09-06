/** Export "mixin" styles. */
export { screenreaderOnly, wrapperStyles } from "./globalMixins";

/** Reusable component styles. */

// Used in `Select` and `TextInput`.
const activeFocus = (darkMode = false) => ({
  boxShadow: "none",
  outline: "2px solid",
  outlineOffset: "2px",
  outlineColor: darkMode ? "ui.white" : "ui.focus",
  zIndex: "9999",
});
// Used in `Checkbox` and `Radio`.
const checkboxRadioLabelStyles = {
  userSelect: "none",
  fontWeight: "text.default",
  marginBottom: "0",
  marginStart: "xs",
  width: "100%",
  _disabled: {
    color: "ui.gray.dark",
    opacity: 1,
    fontStyle: "italic",
  },
  _invalid: {
    color: "ui.error.primary",
  },
  _dark: {
    _disabled: {
      color: "dark.ui.disabled.primary",
    },
    _invalid: {
      color: "dark.ui.error.primary",
    },
  },
};
// Custom values not in the spacing theme.
// Used in `Checkbox` and `Radio`.
const checkboxRadioControlSize = {
  h: "1.375rem",
  w: "1.375rem",
};
// Used in `Checkbox` and `Radio`.
const checkboxRadioHelperErrorTextStyle = {
  marginStart: "30px", // calc(22px + var(--nypl-space-xs))
  _disabled: {
    color: "ui.gray.dark",
    fontStyle: "italic",
  },
};
const checkboxRadioGroupStyles = (isFullWidth = false) => ({
  helperErrorText: {
    marginTop: "xs",
  },
  label: {
    width: isFullWidth ? "100%" : "fit-content",
  },
});
// Default sizes used throughout the codebase.
const defaultElementSizes = {
  mobileFieldHeight: "44px",
};
// Used in `Label` and `Fieldset`.
const labelLegendText = {
  display: "inline-block",
  fontSize: "label.default",
  fontWeight: "label.default",
  marginBottom: "xs",
  width: "100%",
  span: {
    fontWeight: "regular",
  },
};
// Used for the disabled state of Select and TextInput
const selectTextInputDisabledStyles = {
  bg: "ui.disabled.secondary",
  borderColor: "ui.disabled.primary",
  color: "ui.gray.dark",
  opacity: "1",
};
// Used for the focus state of Select and TextInput
const selectTextInputFocusStyles = {
  ...activeFocus(),
  borderColor: "ui.focus",
};
// Used for p, ul, and ol
const textMargin = {
  margin: "0",
  marginBottom: "s",
};

export {
  activeFocus,
  checkboxRadioControlSize,
  checkboxRadioGroupStyles,
  checkboxRadioHelperErrorTextStyle,
  checkboxRadioLabelStyles,
  defaultElementSizes,
  labelLegendText,
  selectTextInputDisabledStyles,
  selectTextInputFocusStyles,
  textMargin,
};
