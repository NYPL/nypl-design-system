import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { labelLegendText } from "./global";
import { screenreaderOnly } from "./globalMixins";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["helperErrorText", "label", "legend"]);

const RadioGroup = defineMultiStyleConfig({
  baseStyle: definePartsStyle(
    ({ isFullWidth = false, isLegendHidden = false }) => ({
      spanLegend: {
        ...labelLegendText,
        display: "block",
        mb: "legend.default",
        ...(isLegendHidden ? screenreaderOnly() : {}),
      },
      helperErrorText: {
        marginTop: "6px", // TODO: Replace with v5.inputShared.helperText.marginTop
      },
      // Not yet wired through to Radio's own label width; preserves the
      // existing (pre-Checkbox-fix) behavior for RadioGroup.
      label: {
        display: "flex",
        width: isFullWidth ? "100%" : "fit-content",
      },
    })
  ),
});

export default RadioGroup;
