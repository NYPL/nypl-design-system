import { labelLegendText } from "./global";

const Label = {
  baseStyle: ({ isInlined }) => ({
    ...labelLegendText,
    flex: isInlined ? "1" : null,
    whiteSpace: isInlined ? "nowrap" : null,
  }),
};

export default Label;
