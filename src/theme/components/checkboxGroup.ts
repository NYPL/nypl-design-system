import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { checkboxRadioGroupStyles } from "./global";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["helperErrorText", "stack"]);

const CheckboxGroup = defineMultiStyleConfig({
  baseStyle: definePartsStyle(({ isFullWidth = false }) => ({
    ...checkboxRadioGroupStyles(isFullWidth),
  })),
});

export default CheckboxGroup;
