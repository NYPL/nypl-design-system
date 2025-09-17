import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

import {
  defaultElementSizes,
  screenreaderOnly,
  selectTextInputDisabledStyles,
  selectTextInputFocusStyles,
} from "./global";

// This function creates a set of function that helps us
// create multipart component styles.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["clearButton", "input", "textarea"]);

const getInputStyles = (isClearable) => ({
  bgColor: "ui.white",
  border: "1px solid",
  borderColor: "ui.border.default",
  borderRadius: "sm",
  fontSize: "desktop.body.body2",
  minHeight: { base: defaultElementSizes.mobileFieldHeight, md: "auto" },
  py: "inset.narrow",
  pr: isClearable ? "inset.extrawide" : "inset.default",
  pl: "inset.default",
  _hover: {
    borderColor: "ui.border.hover",
  },
  _disabled: {
    ...selectTextInputDisabledStyles,
    _placeholder: {
      color: "ui.gray.medium",
    },
  },
  _active: selectTextInputFocusStyles,
  _focus: selectTextInputFocusStyles,
  _placeholder: {
    color: "ui.gray.dark",
    fontStyle: "italic",
    lineHeight: "21px",
  },
  _invalid: {
    border: "1px solid",
    borderColor: "ui.error.primary",
    boxShadow: "none",
    color: "ui.error.primary",
    _focus: {
      borderColor: "ui.focus",
    },
  },
  _dark: {
    bgColor: "dark.ui.bg.default",
    borderColor: "dark.ui.border.default",
    _hover: {
      borderColor: "dark.ui.border.hover",
    },
    _disabled: {
      ...selectTextInputDisabledStyles,
      _placeholder: {
        color: "dark.ui.disabled.primary",
      },
    },
    _active: selectTextInputFocusStyles,
    _focus: selectTextInputFocusStyles,
    _placeholder: {
      color: "ui.gray.semi-dark",
    },
    _invalid: {
      borderColor: "dark.ui.error.primary",
      color: "dark.ui.error.primary",
    },
  },
});

const TextInput = defineMultiStyleConfig({
  baseStyle: definePartsStyle(({ showLabel, isClearable }) => ({
    position: "relative",
    clearButton: {
      borderRadius: "1px",
      minHeight: { base: "42px", md: "auto" },
      height: "38px",
      position: "absolute",
      top: showLabel ? ".75px" : "1px",
      px: "xs",
      right: "0.5px",
      span: screenreaderOnly(),
      zIndex: "9999",
      _dark: {
        svg: {
          fill: "dark.ui.typography.heading",
        },
      },
    },
    input: getInputStyles(isClearable),
    label: { marginBottom: "label.default" },
    textarea: {
      ...getInputStyles(isClearable),
      lineHeight: "1.5",
      minHeight: "xxl",
    },
  })),
  variants: {
    searchBar: definePartsStyle({
      flex: "1 1 80%",
      input: {
        borderRightRadius: "none",
      },
    }),
    searchBarSelect: definePartsStyle({
      flex: "1 1 80%",
      input: {
        borderRadius: "none",
        borderTopLeftRadius: { base: "sm", md: "none" },
        borderTopRightRadius: { base: "sm", md: "none" },
      },
    }),
  },
});

export default TextInput;
