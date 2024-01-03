import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

/**
 * Note: these styles are only used when the
 * DatePicker is in "date range" mode.
 */

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["subLabels"]);

const DatePicker = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
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
