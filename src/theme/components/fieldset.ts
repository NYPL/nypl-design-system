import { labelLegendText } from "./global";
import { screenreaderOnly } from "./globalMixins";

const Fieldset = {
  baseStyle: ({ isLegendHidden }) => {
    const screenreaderStyles = isLegendHidden ? screenreaderOnly : {};

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
