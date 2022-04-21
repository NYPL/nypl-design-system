import { checkboxRadioGroupStyles } from "./global";

const CheckboxGroup = {
  parts: ["helperErrorText", "stack"],
  baseStyle: ({ isFullWidth = false }) => ({
    ...checkboxRadioGroupStyles(isFullWidth),
  }),
};

export default CheckboxGroup;
