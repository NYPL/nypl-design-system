// HorizontalRule
import * as React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

export interface HorizontalRuleProps {
  /** Optional alignment value to align the horizontal rule to one side or the
   * other when the width is less than 100%. If omitted, the horizontal rule
   * will have a default center alignment. */
  align?: "left" | "right";
  /** ClassName you can add in addition to `horizontal-rule` */
  className?: string;
  /** Optional height value. This value should be entered with the same
   * formatting as a CSS height attribute (ex. `2`, `5px`, `1.5rem`). If
   * omitted, the horizontal rule will have a default height of 2px. */
  height?: string;
  /** Optional width value. This value should be entered with the same
   * formatting as a CSS width attribute (ex. `50%`, `640px`, `20rem`). If
   * omitted, the horizontal rule will have a default width of "auto". */
  width?: string;
}

export default function HorizontalRule(
  props: React.ComponentProps<"hr"> & HorizontalRuleProps
) {
  const { align, className, height = "2px", width = "auto" } = props;
  const styles = useStyleConfig("HorizontalRule", { align });
  let finalHeight = height;

  if (height.endsWith("%")) {
    console.warn(
      "For the `height` prop, use a whole number, a `px` value, a `em` value, or a `rem` value. Using the default of 2px."
    );
    finalHeight = "2px";
  }

  const finalStyles = {
    ...styles,
    height: finalHeight,
    width,
  };

  return <Box as="hr" className={className} __css={finalStyles} />;
}
