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
      position: "absolute",
      // When `showLabel` is false, the input field is at the top
      // which means the clear button should float higher.
      top: showLabel ? "32px" : "0",
      right: "0",
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
