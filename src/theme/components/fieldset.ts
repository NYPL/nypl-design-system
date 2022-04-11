import { labelLegendText } from "./global";
import { screenreaderOnly } from "./globalMixins";

const Fieldset = {
  baseStyle: ({ isLegendHidden }) => {
    const screenreaderStyles = isLegendHidden ? screenreaderOnly : {};
    // const typeText = isRequired ? "Required" : "Optional";
    // const after = optReqFlag
    //   ? {
    //       content: `'${typeText}'`,
    //       position: "absolute",
    //       // To fit the text within the `legend`'s width.
    //       right: "3%",
    //     }
    //   : null;

    return {
      border: 0,
      padding: 0,
      legend: {
        ...labelLegendText,
        ...screenreaderStyles,
        // "::after": after,
      },
    };
  },
};

export default Fieldset;
