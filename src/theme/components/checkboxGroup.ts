import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["helperErrorText"]);

const CheckboxGroup = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    helperErrorText: {
      marginTop: "6px", // TODO: Replace with v5.inputShared.helperText.marginTop
    },
  }),
});

export default CheckboxGroup;
