import { labelLegendText } from "./global";
import { screenreaderOnly } from "./globalMixins";

interface FieldSetProps {
  isLegendHidden?: boolean;
}

const Fieldset = {
  baseStyle: ({ isLegendHidden }: FieldSetProps) => {
    const screenreaderStyles = isLegendHidden ? screenreaderOnly() : {};

    return {
      border: 0,
      padding: 0,
      legend: {
        ...labelLegendText,
        ...screenreaderStyles,
      },
    };
  },
};

export default Fieldset;
