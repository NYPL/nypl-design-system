import { checkboxRadioGroupStyles } from "./global";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["helperErrorText", "stack"]);

const RadioGroup = defineMultiStyleConfig({
  baseStyle: definePartsStyle(({ isFullWidth = false }) => ({
    ...checkboxRadioGroupStyles(isFullWidth),
  })),
});

export default RadioGroup;
