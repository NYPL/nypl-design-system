import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";
import { labelLegendText } from "./global";

interface LabelBaseStyle extends StyleFunctionProps {
  isInlined: boolean;
}

const Label = defineStyleConfig({
  baseStyle: defineStyle((props: LabelBaseStyle) => ({
    ...labelLegendText,
    flex: props.isInlined ? "1" : null,
    whiteSpace: props.isInlined ? "nowrap" : null,
  })),
});

export default Label;
