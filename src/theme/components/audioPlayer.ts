import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us
// create multipart component styles.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["base", "invalid"]);

const AudioPlayer = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    base: {},
    invalid: {
      backgroundColor: "ui.bg.default",
      border: "1px solid",
      borderColor: "ui.border.default",
      padding: "s",
      _dark: {
        bg: "dark.ui.bg.default",
        border: "1px solid",
        borderColor: "dark.ui.border.default",
      },
    },
  }),
});

export default AudioPlayer;
