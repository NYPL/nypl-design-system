import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";

import {
  defaultElementSizes,
  selectTextInputDisabledStyles,
  selectTextInputFocusStyles,
} from "./global";

// This function creates a set of function that helps us
// create multipart component styles.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["inline", "select"]);

interface SelectBaseStyle extends StyleFunctionProps {
  labelPosition: string;
  showLabel: boolean;
}

const select = (labelPosition: string) => ({
  backgroundColor: "ui.white",
  borderRadius: "sm",
  borderColor: "ui.border.default",
  fontSize: "desktop.body.body2",
  minHeight: { base: defaultElementSizes.mobileFieldHeight, md: "auto" },
  paddingTop: "inset.narrow",
  paddingEnd: "2.5rem",
  paddingBottom: "inset.narrow",
  paddingStart: "inset.default",
  flex: labelPosition === "inline" ? { md: "1" } : null,
  _hover: {
    borderColor: "ui.border.hover",
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
    color: "dark.ui.typography.body",
    _hover: {
      borderColor: "dark.ui.border.hover",
    },
    _invalid: {
      borderColor: "dark.ui.error.primary",
      color: "dark.ui.error.primary",
    },
  },
});

const Select = defineMultiStyleConfig({
  baseStyle: definePartsStyle(
    ({ labelPosition, labelWidth, showLabel }: SelectBaseStyle) => {
      return {
        inline: {
          display: { md: "flex" },
          gap: { md: "xs" },
          alignItems: { md: "center" },
        },
        label: {
          marginBottom: labelPosition === "inline" ? "0" : "label.default",
        },
        select: select(labelPosition),
        "div[data-testid='ds-helperErrorText']": {
          marginLeft:
            !showLabel && labelPosition === "inline" ? "0" : `${labelWidth}px`,
        },
        /**
         * Overriding Chakra default styles with styles that are RTL-aware to
         * properly position the dropdown icon.
         *
         * To work properly, the `right` attribute needs to be unset before the
         * `inset-inline-end` attribute is set. Additionally, `insetInlineEnd`
         * which should map to `inset-inline-end` actually maps to `right`,
         * which does not solve the problem. Maybe these are bugs in Chakra.
         * */
        ".chakra-select__icon-wrapper": {
          right: "unset",
          "inset-inline-end": "var(--nypl-space-2)",
        },
      };
    }
  ),
  variants: {
    searchbar: definePartsStyle({
      select: {
        flex: "1 1 20%",
      },
    }),
  },
  defaultProps: {
    size: "md",
  },
});

export default Select;
