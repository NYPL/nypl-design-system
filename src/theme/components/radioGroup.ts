import { checkboxRadioGroupStyles } from "./global";

const RadioGroup = {
  parts: ["helperErrorText", "stack"],
  baseStyle: ({ isFullWidth = false }) => ({
    ...checkboxRadioGroupStyles(isFullWidth),
  }),
};

export default RadioGroup;
