import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";
import { labelLegendText } from "./global";

interface LabelBaseStyle extends StyleFunctionProps {
  isInlined: boolean;
}

// Style definitions for variants
const primary = defineStyle({
  ...labelLegendText,
});
const secondary = defineStyle({
  fontSize: "v5.label.form.secondary",
  fontWeight: "v5.label.form",
  lineHeight: "v5.label.form.secondary",
});
const tertiary = defineStyle({
  fontSize: "v5.label.primary",
  fontWeight: "v5.label.primary",
  lineHeight: "v5.label.primary",
});
const quaternary = defineStyle({
  fontSize: "v5.label.secondary",
  fontWeight: "v5.label.secondary",
  lineHeight: "v5.label.secondary",
});

const Label = defineStyleConfig({
  // The base style is used by both Label and Fieldset
  baseStyle: defineStyle((props: LabelBaseStyle) => ({
    ...primary,
    flex: props.isInlined ? "1" : null,
    whiteSpace: props.isInlined ? "nowrap" : null,
  })),
  // The additional variants are only used by Label
  variants: {
    secondary,
    tertiary,
    quaternary,
  },
});

export default Label;
