import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["helperErrorText"]);

const CheckboxGroup = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    helperErrorText: {
      marginTop: "v5.inputShared.helperText.marginTop",
    },
  }),
});

export default CheckboxGroup;
