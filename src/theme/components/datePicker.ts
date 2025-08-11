import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

/**
 * Note: these styles are only used when the
 * DatePicker is in "date range" mode.
 */

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["fieldset", "subLabels"]);

const DatePicker = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    fieldset: {
      /**
       * In this instance, the legend element is mimicking a label element, so
       * the label spacing is being used.
       */
      legend: { marginBottom: "label.default" },
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
