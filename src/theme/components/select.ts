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
  paddingRight: "inset.extrawide",
  paddingBottom: "inset.narrow",
  paddingLeft: "inset.default",
  _hover: {
    borderColor: "ui.gray.dark",
  },
  _active: selectTextInputFocusStyles,
  _disabled: {
    ...selectTextInputDisabledStyles,
  },
  _focus: selectTextInputFocusStyles,
  _invalid: {
    border: "1px solid",
    borderColor: "ui.error.primary",
    boxShadow: "none",
  },
};

const Select = {
  parts: ["helperText", "inline", "select"],
  baseStyle: ({ labelPosition }: SelectBaseStyle) => {
    return {
      // The backgroundColor set to "ui.white" hides the arrow SVG icon when
      // the component is focused. The background is added for dark mode and
      // so we need to add specific selector.
      ".chakra-select__icon-wrapper": {
        zIndex: "9999",
      },
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
