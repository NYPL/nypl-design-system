import {
  defaultElementSizes,
  selectTextInputDisabledStyles,
  selectTextInputFocusStyles,
} from "./global";

interface SelectBaseStyle {
  labelPosition: string;
}

const select = {
  backgroundColor: "ui.white",
  borderRadius: "sm",
  borderColor: "ui.gray.medium",
  fontSize: "text.caption",
  minHeight: { base: defaultElementSizes.mobileFieldHeight, md: "auto" },
  paddingTop: "inset.narrow",
  paddingEnd: "inset.extrawide",
  paddingBottom: "inset.narrow",
  paddingStart: "inset.default",
  _hover: {
    borderColor: "ui.gray.dark",
  },
  _active: selectTextInputFocusStyles,
  _disabled: {
    ...selectTextInputDisabledStyles,
  },
  _focus: {
    ...selectTextInputFocusStyles,
    // When the select is focused, the icon should be on top of the dropdown.
    // This should only be done when focused, otherswise the icon will render
    // above any other elements on the page.
    "+ .chakra-select__icon-wrapper": {
      zIndex: "9999",
    },
  },
  _invalid: {
    border: "1px solid",
    borderColor: "ui.error.primary",
    boxShadow: "none",
    color: "ui.error.primary",
  },
  _dark: {
    backgroundColor: "dark.ui.bg.default",
    borderColor: "dark.ui.border.default",
    _hover: {
      borderColor: "dark.ui.border.hover",
    },
    _invalid: {
      borderColor: "dark.ui.error.primary",
      color: "dark.ui.error.primary",
    },
  },
};

const Select = {
  parts: ["helperText", "inline", "select"],
  baseStyle: ({ labelPosition }: SelectBaseStyle) => {
    return {
      inline: {
        display: { md: "flex" },
        gap: { md: "var(--nypl-space-xs)" },
        alignItems: { md: "flex-end" },
      },
      select: {
        ...select,
        flex: labelPosition === "inline" ? { md: "1" } : null,
      },
    };
  },
  variants: {
    searchbar: {
      select: {
        flex: "1 1 20%",
        borderRightColor: { md: "transparent" },
        borderRightRadius: { md: "none" },
      },
    },
  },
  defaultProps: {
    size: "md",
  },
};

export default Select;
