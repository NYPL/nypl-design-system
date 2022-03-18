import { checkboxRadioGroupStyles } from "./global";

const CheckboxGroup = {
  parts: ["helper", "stack"],
  baseStyle: ({ isFullWidth = false }) => ({
    ...checkboxRadioGroupStyles,
    stack: {
      width: isFullWidth ? "100%" : checkboxRadioGroupStyles.stack.width,
    },
  }),
};

export default CheckboxGroup;
