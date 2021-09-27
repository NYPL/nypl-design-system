const activeFocus = {
  border: "1px solid",
  borderColor: "ui.focus",
  zIndex: "9999",
  outline: "1px solid",
  outlineColor: "ui.focus",
};
const input = {
  border: "1px solid",
  borderColor: "ui.gray.medium",
  borderRadius: "2px",
  py: 2, // --space-xs
  px: 4, // --space-s

  _hover: {
    borderColor: "ui.gray.dark",
  },
  _disabled: {
    bgColor: "ui.gray.xxlight",
    color: "ui.gray.xdark",
    opacity: "1",
  },
  _active: activeFocus,
  _focus: activeFocus,
  _placeholder: {
    color: "ui.gray.dark",
    fontStyle: "italic",
    lineHeight: "21px",
  },
  _invalid: {
    border: "1px solid",
    borderColor: "ui.error",
    boxShadow: "none",
  },
};

const TextInput = {
  parts: ["helper", "input", "text"],
  baseStyle: {
    input,
    textarea: {
      ...input,
      lineheight: 1.5,
      minHeight: 16, // --space-xxl
    },
    helper: {
      marginTop: 2, // --space-xs
      marginBottom: 0,
    },
  },
};

export default TextInput;
