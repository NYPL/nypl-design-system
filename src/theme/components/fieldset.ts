import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";
import { labelLegendText } from "./global";
import { screenreaderOnly } from "./globalMixins";

interface FieldSetProps extends StyleFunctionProps {
  isLegendHidden?: boolean;
}

const Fieldset = defineStyleConfig({
  baseStyle: defineStyle((props: FieldSetProps) => {
    const screenreaderStyles = props.isLegendHidden ? screenreaderOnly() : {};

    return {
      border: 0,
      padding: 0,
      legend: {
        color: "ui.typography.heading",
        ...labelLegendText,
        ...screenreaderStyles,
        _dark: {
          color: "dark.ui.typography.heading",
        },
      },
    };
  }),
});

export default Fieldset;
