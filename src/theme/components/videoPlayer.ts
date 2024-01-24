import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us
// create multipart component styles.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["base", "inside"]);

const fourByThree = definePartsStyle({
  inside: {
    paddingBottom: "75%",
  },
});

const square = definePartsStyle({
  inside: {
    paddingBottom: "100%",
  },
});

const invalid = definePartsStyle({
  base: {
    backgroundColor: "ui.gray.light-cool",
    border: "1px solid",
    borderColor: "ui.border.default",
    height: "auto",
    padding: "s",
    _dark: {
      bg: "dark.ui.bg.default",
      border: "1px solid",
      borderColor: "dark.ui.border.default",
    },
  },
});

const VideoPlayer = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    base: {
      iframe: {
        height: "100%",
        left: "0",
        margin: "auto",
        position: "absolute",
        top: "0",
        width: "100%",
      },
    },
    inside: {
      height: "0",
      overflow: "hidden",
      paddingBottom: "56.25%",
      position: "relative",
    },
  }),
  variants: {
    fourByThree,
    invalid,
    square,
  },
});

export default VideoPlayer;
