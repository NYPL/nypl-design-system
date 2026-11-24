/** Export "mixin" styles. */
export { screenreaderOnly, wrapperStyles } from "./globalMixins";

/** Reusable component styles. */

const customFocusColor = (focusColor) => ({
  boxShadow: "none",
  outline: "2px solid",
  outlineOffset: "2px",
  outlineColor: focusColor,
  zIndex: "9999",
});
// Used in `Select` and `TextInput`.
const activeFocus = () => ({
  boxShadow: "none",
  outline: "2px solid",
  outlineOffset: "2px",
  outlineColor: "v5.inputShared.border.focus",
});
// Used in `Checkbox` and `Radio`.
const checkboxRadioLabelStyles = {
  color: "v5.text.body.default",
  userSelect: "none",
  marginBottom: "0",
  marginStart: "v5.density.condensed",
  width: "100%",
  _disabled: {
    color: "v5.text.disabled",
    opacity: 1,
  },
  _invalid: {
    color: "v5.text.error",
  },
};
// Custom values not in the spacing theme.
// Used in `Checkbox` and `Radio`.
const checkboxRadioControlSize = {
  h: "1.375rem",
  w: "1.375rem",
};
// Used in `Checkbox` and `Radio`.
const checkboxRadioHelperErrorTextStyles = {
  mt: "v5.inputShared.helperText.marginTop",
};
/** TODO: remove checkboxRadioHoverStyles once Radio has been updated to v5 styles */
// General hover styles for Checkbox and Radio
const checkboxRadioHoverStyles = {
  _hover: {
    span: {
      _first: {
        borderColor: "ui.black",
      },
      _checked: {
        borderColor: "ui.focus",
      },
      _disabled: {
        borderColor: "ui.disabled.primary",
      },
      _invalid: {
        borderColor: "ui.error.primary",
      },
    },
  },
};
const checkboxRadioGroupStyles = (isFullWidth = false) => ({
  helperErrorText: {
    mt: "v5.inputShared.helperText.marginTop",
  },
  label: {
    display: "flex",
    width: isFullWidth ? "100%" : "fit-content",
  },
});
// Default sizes used throughout the codebase.
const defaultElementSizes = {
  mobileFieldHeight: "44px",
};
// Used in `Label` and `Fieldset`.
const labelLegendText = {
  color: "v5.text.label",
  display: "inline-block",
  fontSize: "v5.label.form.primary",
  fontWeight: "v5.label.form",
  lineHeight: "v5.label.form.primary",
  width: "100%",
  span: {
    fontWeight: "v5.regular",
  },
};

// Used for the disabled state of Select and TextInput
const selectTextInputDisabledStyles = {
  bg: "v5.inputShared.bg.disabled",
  borderColor: "v5.inputShared.border.disabled",
  color: "v5.text.disabled",
  opacity: "1",
};
// Used for the focus state of Select and TextInput
const selectTextInputFocusStyles = {
  ...activeFocus(),
  borderColor: "v5.inputShared.border.focus",
};
/** TODO: `textMargin` is only used in `StructuredContent`. Remove `textMargin` once `StructuredContent` is removed. */
// Used for p, ul, and ol
const textMargin = {
  margin: "0",
  marginBottom: "v5.text.paragraph.body",
};
// Used for responsive spacing values
const responsiveSpacing = {
  gridGap: {
    base: "v5.grid.gap.normal.mobile",
    md: "v5.grid.gap.normal.tablet",
    xl: "v5.grid.gap.normal.desktop",
  },
  margin: {
    base: "v5.container.paddingX.mobile",
    md: "v5.container.paddingX.tablet",
    xl: "v5.container.paddingX.desktop",
  },
  padding: {
    base: "v5.container.paddingX.mobile",
    md: "v5.container.paddingX.tablet",
    xl: "v5.container.paddingX.desktop",
  },
  // v5 values
  containerPaddingX: {
    base: "v5.container.paddingX.mobile",
    md: "v5.container.paddingX.tablet",
    xl: "v5.container.paddingX.desktop",
  },
  gridGapCondensed: {
    base: "v5.grid.gap.condensed.mobile",
    md: "v5.grid.gap.condensed.tablet",
    xl: "v5.grid.gap.condensed.desktop",
  },
  gridGapNormal: {
    base: "v5.grid.gap.normal.mobile",
    md: "v5.grid.gap.normal.tablet",
    xl: "v5.grid.gap.normal.desktop",
  },
  gridGapSpacious: {
    base: "v5.grid.gap.spacious.mobile",
    md: "v5.grid.gap.spacious.tablet",
    xl: "v5.grid.gap.spacious.desktop",
  },
};

export {
  activeFocus,
  checkboxRadioControlSize,
  checkboxRadioGroupStyles,
  checkboxRadioHelperErrorTextStyles,
  checkboxRadioHoverStyles,
  checkboxRadioLabelStyles,
  customFocusColor,
  defaultElementSizes,
  labelLegendText,
  responsiveSpacing,
  selectTextInputDisabledStyles,
  selectTextInputFocusStyles,
  textMargin,
};
