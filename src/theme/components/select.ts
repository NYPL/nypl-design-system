import { activeFocus, helperTextMargin } from "./global";

const select = {
  backgroundColor: "ui.white",
  borderRadius: "sm",
  borderColor: "ui.gray.medium",
  fontSize: "text.caption",
  paddingTop: "xs",
  paddingRight: "xl",
  paddingBottom: "xs",
  paddingLeft: "s",
  _hover: {
    borderColor: "ui.gray.dark",
  },
  _active: activeFocus(),
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
        borderRightColor: { md: "transparent" },
        borderRightRadius: { md: "none" },
        _hover: {
          borderRightColor: { md: "transparent" },
        },
      },
    },
  },
  defaultProps: {
    size: "md",
  },
};

export default Select;
