import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";

interface HelperErrorTextBaseStyle extends StyleFunctionProps {
  isInvalid: boolean;
}
const HelperErrorText = defineStyleConfig({
  baseStyle: defineStyle(({ isInvalid }: HelperErrorTextBaseStyle) => ({
    fontSize: "v5.helper",
    fontWeight: "v5.helper",
    lineHeight: "v5.helper",
    color: isInvalid ? "v5.semantic.negative.default" : "v5.text.helper",
  })),
});

export default HelperErrorText;
