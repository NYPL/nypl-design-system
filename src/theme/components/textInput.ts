import { activeFocus } from "./global";

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
      marginTop: "xs",
    },
    input,
    textarea: {
      ...input,
      lineheight: "1.5",
      minHeight: "xxl",
    },
  },
  variants: {
    searchBar: {
      flex: "1 1 80%",
      input: {
        borderRightRadius: "0",
      },
    },
    searchBarSelect: {
      flex: "1 1 80%",
      input: {
        borderRadius: "0",
      },
    },
  },
};

export default TextInput;
