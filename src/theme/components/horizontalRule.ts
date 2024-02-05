import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";

interface HorizontalRuleBaseStyle extends StyleFunctionProps {
  align: string;
}

const HorizontalRule = defineStyleConfig({
  baseStyle: defineStyle((props: HorizontalRuleBaseStyle) => ({
    bg: "ui.bg.hover",
    border: "0",
    height: "2px",
    marginBottom: "s",
    marginTop: "s",
    marginStart: props.align === "left" ? 0 : "auto",
    marginEnd: props.align === "right" ? 0 : "auto",
    _dark: {
      bg: "dark.ui.bg.active",
    },
  })),
});

export default HorizontalRule;
