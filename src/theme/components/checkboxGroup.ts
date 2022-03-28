import { checkboxRadioGroupStyles } from "./global";

const CheckboxGroup = {
  parts: ["helper", "stack"],
  baseStyle: ({ isFullWidth = false }) => ({
    ...checkboxRadioGroupStyles(isFullWidth),
  }),
};

export default CheckboxGroup;
