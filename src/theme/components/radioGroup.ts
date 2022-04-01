import { checkboxRadioGroupStyles } from "./global";

const RadioGroup = {
  parts: ["helper", "stack"],
  baseStyle: ({ isFullWidth = false }) => ({
    ...checkboxRadioGroupStyles(isFullWidth),
  }),
};

export default RadioGroup;
