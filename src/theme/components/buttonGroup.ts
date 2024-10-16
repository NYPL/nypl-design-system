import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";

const ButtonGroup = defineStyleConfig({
  baseStyle: defineStyle(({ buttonWidth }) => ({
    width: {
      base: "100%",
      md: buttonWidth === "default" ? "fit-content" : "100%",
    },
    button: {
      flexGrow: buttonWidth === "default" ? undefined : "1",
    },
  })),
});

export default ButtonGroup;
