// HorizontalRule
import { Box, useStyleConfig } from "@chakra-ui/react";
import * as React from "react";

export interface HorizontalRuleProps {
  /** Optional alignment value to align the horizontal rule to one side or the
   * other when the width is less than 100%. If omitted, the horizontal rule
   * will have a default center alignment. */
  align?: "left" | "right";
  /** ClassName you can add in addition to `horizontal-rule` */
  className?: string;
  /** Optional height value. This value should be entered with the same
   * formatting as a CSS height attribute except for percent values (ex. `2`,
   * `5px`, `1.5rem`). If this prop is omitted or a percent value is used, the
   * horizontal rule will have a default height of 2px. */
  height?: string;
  /** Optional width value. This value should be entered with the same
   * formatting as a CSS width attribute (ex. `50%`, `640px`, `20rem`). If
   * omitted, the horizontal rule will have a default width of "100%". */
  width?: string;
}

export default function HorizontalRule(props: HorizontalRuleProps) {
  const { align, className, height = "2px", width = "100%" } = props;
  const styles = useStyleConfig("HorizontalRule", { align });
  let finalHeight = height;

  if (height.endsWith("%")) {
    console.warn(
      "NYPL Reservoir HorizontalRule: An invalid value was passed for the " +
        "`height` prop, so the default value of 2px will be used.  A valid " +
        "value should be a whole number, a `px` value, a `em` value, or a `rem` value."
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
