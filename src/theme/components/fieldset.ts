import { labelLegendText } from "./global";
import { screenreaderOnly } from "./globalMixins";

const Fieldset = {
  parts: ["helper"],
  baseStyle: ({ isLegendHidden }) => {
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
