import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { messageVariantsArray } from "../../theme/sharedTypes";

export const statusBadgeFontSizeArray = [
  "desktop.body.body1",
  "desktop.body.body2",
  "desktop.caption",
] as const;
export type StatusBadgeVariants = typeof messageVariantsArray[number];
export interface StatusBadgeProps extends BoxProps {
  /** Semantic type of the status badge. */
  variant?: StatusBadgeVariants;
}

/**
 * The `StatusBadge` component is a label that indicates status or importance.
 * It is used for bringing awareness to a specific element or feature and should
 * provide quick recognition.
 */
export const StatusBadge: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<StatusBadgeProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<StatusBadgeProps>
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<StatusBadgeProps>>(
    (props, ref?) => {
      const { children, id, variant, ...rest } = props;
      const styles = useStyleConfig("StatusBadge", {
        labelFontSize: rest["fontSize"],
        variant: variant || "neutral",
      });

      if (!children) {
        console.warn("NYPL Reservoir StatusBadge: No children were passed.");
      }

      return (
        <Box
          data-testid="ds-statusBadge"
          id={id}
          ref={ref}
          __css={styles}
          {...rest}
        >
          {children}
        </Box>
      );
    }
  )
);

export default StatusBadge;
