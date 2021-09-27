const activeFocus = {
  border: "1px solid",
  borderColor: "ui.focus",
  zIndex: "9999",
  outline: "1px solid",
  outlineColor: "ui.focus",
};

const Select = {
  parts: ["select", "helper"],
  baseStyle: {
    select: {
      borderRadius: "2px",
      borderColor: "ui.gray.medium",
      paddingTop: 2, // --space-xs
      paddingRight: 12, // --space-xl
      paddingBottom: 2, // --space-xs
      paddingLeft: 4, // --space-s
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
    },
    helper: {
      marginTop: 2, // --space-xs
      marginBottom: 0,
    },
  },
  defaultProps: {
    size: "md",
  },
};

export default Select;
