import { defaultElementSizes } from "./global";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["button"]);

const AlphabetFilter = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    button: {
      minWidth: { base: defaultElementSizes.mobileFieldHeight, md: "auto" },
      height: { base: defaultElementSizes.mobileFieldHeight, md: "auto" },
      padding: "1px 4px",
      margin: "2px 1px",
      fontWeight: "bold",
      fontSize: {
        base: "mobile.subtitle.subtitle1",
        md: "desktop.subtitle.subtitle1",
      },
      lineHeight: "1",
      _last: {
        fontSize: "desktop.button.default",
        fontWeight: "normal",
        px: { base: "s", md: "xs" },
        py: { base: null, md: "xxs" },
        whiteSpace: "nowrap",
      },
      _disabled: {
        color: "ui.gray.medium",
        cursor: "not-allowed",
      },
    },
  }),
});

export default AlphabetFilter;
