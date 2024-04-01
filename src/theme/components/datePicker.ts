import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { labelLegendTextSpecialSpacing } from "./global";

/**
 * Note: these styles are only used when the
 * DatePicker is in "date range" mode.
 */

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["fieldset", "subLabels"]);

const DatePicker = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    fieldset: {
      legend: { ...labelLegendTextSpecialSpacing },
    },
    subLabels: {
      label: {
        fontSize: "desktop.label.label2",
        fontWeight: "label.secondary",
        marginBottom: "0",
      },
    },
  }),
});

export default DatePicker;
