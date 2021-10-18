import { activeFocus, helperTextMargin } from "./global";

const select = {
  borderRadius: "sm",
  borderColor: "ui.gray.medium",
  paddingTop: "xs",
  paddingRight: "xl",
  paddingBottom: "xs",
  paddingLeft: "s",
  _hover: {
    borderColor: "ui.gray.medium",
  },
  _active: activeFocus,
  _focus: activeFocus,
  _disabled: {
    color: "ui.gray.xdark",
    bg: "ui.gray.xx-light-cool",
    opacity: "1",
  },
  _invalid: {
    border: "1px solid",
    borderColor: "ui.error.primary",
    boxShadow: "none",
  },
};

const Select = {
  parts: ["select", "helper"],
  baseStyle: {
    marginBottom: "xs",
    helper: {
      ...helperTextMargin,
    },
    select,
  },
  variants: {
    searchbar: {
      select: {
        flex: "1 1 20%",
        borderRight: "none",
        borderRightRadius: "none",
      },
    },
  },
  defaultProps: {
    size: "md",
  },
};

export default Select;
