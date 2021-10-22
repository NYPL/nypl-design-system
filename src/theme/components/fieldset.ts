import { screenreaderOnly } from "./globalMixins";

const Fieldset = {
  baseStyle: ({ hideLegend }) => {
    const screenreaderStyles = hideLegend ? screenreaderOnly : {};
    return {
      legend: {
        marginBottom: "xs",
        fontSize: "14px",
        fontWeight: "medium",
        ...screenreaderStyles,
      },
    };
  },
};

export default Fieldset;
