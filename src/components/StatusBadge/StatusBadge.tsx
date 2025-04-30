import { Box, chakra, ChakraComponent, useStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export const statusBadgeFontSizeArray = [
  "desktop.body.body1",
  "desktop.body.body2",
  "desktop.caption",
] as const;

export const statusBadgeTypeArray = [
  "informative",
  "negative",
  "neutral",
  "positive",
  "recommendation",
  "warning",
] as const;
export type StatusBadgeTypes = typeof statusBadgeTypeArray[number];
export interface StatusBadgeProps {
  /** Additional class for the component */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Semantic type of the status badge. */
  type?: StatusBadgeTypes;
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
      const { children, className, id, type, ...rest } = props;
      const styles = useStyleConfig("StatusBadge", {
        labelFontSize: rest["fontSize"],
        variant: type || "neutral",
      });

      if (!children) {
        console.warn("NYPL Reservoir StatusBadge: No children were passed.");
      }

      return (
        <Box id={id} className={className} ref={ref} __css={styles} {...rest}>
          {children}
        </Box>
      );
    }
  )
);

export default StatusBadge;
