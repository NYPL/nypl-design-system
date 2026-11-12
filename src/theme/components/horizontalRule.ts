import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";

interface HorizontalRuleBaseStyle extends StyleFunctionProps {
  align: string;
}

const HorizontalRule = defineStyleConfig({
  baseStyle: defineStyle((props: HorizontalRuleBaseStyle) => ({
    bg: "v5.border.subtle.neutral.emphasis",
    border: "0",
    height: "2px",
    marginStart: props.align === "left" ? 0 : "auto",
    marginEnd: props.align === "right" ? 0 : "auto",
  })),
});

export default HorizontalRule;
