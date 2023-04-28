import {
  defaultElementSizes,
  screenreaderOnly,
  selectTextInputDisabledStyles,
  selectTextInputFocusStyles,
} from "./global";

const input = {
  bgColor: "ui.white",
  border: "1px solid",
  borderColor: "ui.gray.medium",
  borderRadius: "sm",
  fontSize: "text.caption",
  minHeight: { base: defaultElementSizes.mobileFieldHeight, md: "auto" },
  py: "inset.narrow",
  px: "inset.default",
  _hover: {
    borderColor: "ui.gray.dark",
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
        color: "ui.gray.x-dark",
      },
    },
    _active: selectTextInputFocusStyles,
    _focus: selectTextInputFocusStyles,
    _placeholder: {
      color: "ui.gray.dark",
    },
    _invalid: {
      borderColor: "dark.ui.error.primary",
      color: "dark.ui.error.primary",
    },
  },
};

const TextInput = {
  parts: ["input", "textarea"],
  baseStyle: ({ showLabel }) => ({
    position: "relative",
    input,
    textarea: {
      ...input,
      lineheight: "1.5",
      minHeight: "xxl",
    },
    clearButton: {
      borderRadius: "1px",
      minHeight: { base: "42px", md: "auto" },
      height: "38px",
      position: "absolute",
      // When `showLabel` is false, the input field is at the top
      // which means the clear button should float higher.
      top: showLabel ? "1.15px" : "1px",
      px: "xs",
      right: "0.5px",
      // Don't visually show the text. This also helps
      // use the "text" `Button` type.
      span: screenreaderOnly(),
      zIndex: "9999",
    },
  }),
  variants: {
    searchBar: {
      flex: "1 1 80%",
      input: {
        borderRightRadius: "none",
      },
    },
    searchBarSelect: {
      flex: "1 1 80%",
      input: {
        borderRadius: "none",
        borderTopLeftRadius: { base: "sm", md: "none" },
        borderTopRightRadius: { base: "sm", md: "none" },
      },
    },
  },
};

export default TextInput;
