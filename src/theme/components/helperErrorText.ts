import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { defineStyle, StyleFunctionProps } from "@chakra-ui/system";

interface HelperErrorTextBaseStyle extends StyleFunctionProps {
  isInvalid: boolean;
}

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["innerChild"]);

const innerChildStyle = defineStyle({
  marginTop: "xxs",
  marginBottom: "0",
});

const baseStyle = definePartsStyle(
  ({ isInvalid }: HelperErrorTextBaseStyle) => ({
    fontSize: "desktop.helper.default",
    color: isInvalid ? "ui.error.primary" : null,
    _dark: {
      color: isInvalid ? "dark.ui.error.primary" : null,
    },
    innerChild: innerChildStyle,
  })
);

const helperErrorText = defineMultiStyleConfig({
  baseStyle,
});

export default helperErrorText;
