import { activeFocus, helperTextMargin } from "./global";

const input = {
  border: "1px solid",
  borderColor: "ui.gray.medium",
  borderRadius: "2px",
  py: "xs",
  px: "s",
  _hover: {
    borderColor: "ui.gray.dark",
  },
  _disabled: {
    bgColor: "ui.gray.xx-light-cool",
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
    borderColor: "ui.error.primary",
    boxShadow: "none",
  },
};

const TextInput = {
  parts: ["helper", "input", "textarea"],
  baseStyle: {
    helper: {
      ...helperTextMargin,
    },
    input,
    textarea: {
      ...input,
      lineheight: "1.5",
      minHeight: "xxl",
    },
  },
};

export default TextInput;
