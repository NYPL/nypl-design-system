// HorizontalRule
import * as React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

export interface HorizontalRuleProps {
  /** Optional alignment value to align the horizontal rule to one side or the other when the width is less than 100%. If omitted, the horizobntal rule will have a default center alignment. */
  align?: "left" | "right";
  /** ClassName you can add in addition to `horizontal-rule` */
  className?: string;
  /** Optional height value.  This value should be entered with the same formatting as a CSS height attribute (ex. `2%`, `5px`, `1.5rem`).  If omitted, the horizobntal rule will have a default height of 2px. */
  height?: string;
  /** Optional width value.  This value should be entered with the same formatting as a CSS width attribute (ex. `50%`, `640px`, `20rem`).  If omitted, the horizobntal rule will have a default width of 100%. */
  width?: string;
}

export default function HorizontalRule(
  props: React.ComponentProps<"hr"> & HorizontalRuleProps
) {
  const { align, className, height = "2px", width = "auto" } = props;
  const styles = useStyleConfig("HorizontalRule", { align });
  const finalStyles = {
    ...styles,
    width,
    height,
  };

  return <Box as="hr" className={className} __css={finalStyles} />;
}
