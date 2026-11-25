import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { checkboxRadioGroupStyles, labelLegendText } from "./global";
import { screenreaderOnly } from "./globalMixins";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["helperErrorText", "label", "legend"]);

const RadioGroup = defineMultiStyleConfig({
  baseStyle: definePartsStyle(
    ({ isFullWidth = false, isLegendHidden = false }) => ({
      spanLegend: {
        ...labelLegendText,
        display: "block",
        mb: "v5.inputShared.label.marginBottom",
        ...(isLegendHidden ? screenreaderOnly() : {}),
      },
      ...checkboxRadioGroupStyles(isFullWidth),
    })
  ),
});

export default RadioGroup;
