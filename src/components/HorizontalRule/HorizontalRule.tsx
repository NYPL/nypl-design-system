// HorizontalRule
import { Box, chakra, useStyleConfig, ChakraComponent } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export interface HorizontalRuleProps {
  /** Optional alignment value to align the horizontal rule to one side or the
   * other when the width is less than 100%. If omitted, the horizontal rule
   * will have a default center alignment. */
  align?: "left" | "right";
  /** ClassName you can add in addition to `horizontal-rule` */
  className?: string;
}

export const HorizontalRule: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<HorizontalRuleProps> &
      React.RefAttributes<HTMLDivElement & HTMLHRElement>
  >,
  React.PropsWithChildren<HorizontalRuleProps>
> = chakra(
  forwardRef<HTMLDivElement & HTMLHRElement, HorizontalRuleProps>(
    (props, ref?) => {
      const { align, className, ...rest } = props;
      const styles = useStyleConfig("HorizontalRule", { align });

      const finalStyles = {
        ...styles,
        height: "2px",
        width: "100%",
      };

      return (
        <Box
          as="hr"
          className={className}
          ref={ref}
          __css={finalStyles}
          {...rest}
        />
      );
    }
  )
);

export default HorizontalRule;
