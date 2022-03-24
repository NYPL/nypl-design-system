import { labelLegendText } from "./global";
import { screenreaderOnly } from "./globalMixins";

interface FieldSetProps {
  isLegendHidden?: boolean;
}

const Fieldset = {
  parts: ["helper"],
  baseStyle: ({ isLegendHidden }: FieldSetProps) => {
    const screenreaderStyles = isLegendHidden ? screenreaderOnly : {};
    return {
      border: 0,
      padding: 0,
      legend: {
        ...labelLegendText,
        ...screenreaderStyles,
      },
      helper: { ...labelLegendText.helper },
    };
  },
};

export default Fieldset;
