import { labelLegendText } from "./global";

interface LabelBaseStyle {
  isInlined: boolean;
}

const Label = {
  baseStyle: ({ isInlined }: LabelBaseStyle) => ({
    ...labelLegendText,
    flex: isInlined ? "1" : null,
    whiteSpace: isInlined ? "nowrap" : null,
  }),
};

export default Label;
