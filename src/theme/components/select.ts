import { activeFocus, selectTextInputDisabledStyles } from "./global";

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
    ...selectTextInputDisabledStyles,
  },
  _invalid: {
    border: "1px solid",
    borderColor: "ui.error.primary",
    boxShadow: "none",
  },
};

const Select = {
  parts: ["select"],
  baseStyle: {
    marginBottom: "xs",
    // The backgroundColor set to "ui.white" hides the arrow SVG icon when
    // the component is focused. The background is added for dark mode and
    // so we need to add specific selector.
    ".chakra-select__icon-wrapper": {
      zIndex: "9999",
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
