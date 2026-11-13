import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { checkboxRadioGroupStyles } from "./global";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["helperErrorText", "label"]);

const CheckboxGroup = defineMultiStyleConfig({
  baseStyle: definePartsStyle(({ isFullWidth = false }) => ({
    ...checkboxRadioGroupStyles(isFullWidth),
  })),
});

export default CheckboxGroup;
