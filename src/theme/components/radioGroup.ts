import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { labelLegendText } from "./global";
import { screenreaderOnly } from "./globalMixins";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["helperErrorText", "legend"]);

const RadioGroup = defineMultiStyleConfig({
  baseStyle: definePartsStyle(({ isLegendHidden = false }) => ({
    spanLegend: {
      ...labelLegendText,
      display: "block",
      mb: "legend.default",
      ...(isLegendHidden ? screenreaderOnly() : {}),
    },
    helperErrorText: {
      marginTop: "6px", // TODO: Replace with v5.inputShared.helperText.marginTop
    },
  })),
});

export default RadioGroup;
