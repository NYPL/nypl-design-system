import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";

interface HelperErrorTextBaseStyle extends StyleFunctionProps {
  isInvalid: boolean;
}
const HelperErrorText = defineStyleConfig({
  baseStyle: defineStyle(({ isInvalid }: HelperErrorTextBaseStyle) => ({
    fontSize: "desktop.helper.default",
    color: isInvalid ? "ui.error.primary" : null,
    _dark: {
      color: isInvalid ? "dark.ui.error.primary" : null,
    },
  })),
});

export default HelperErrorText;
