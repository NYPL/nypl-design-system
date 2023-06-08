import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export const statusBadgeTypeArray = ["low", "medium", "high"] as const;
export type StatusBadgeTypes = typeof statusBadgeTypeArray[number];
export interface StatusBadgeProps {
  /** Additional class for the component */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Level of the status badge. Defaults to `"low"`. */
  level?: StatusBadgeTypes;
}

/**
 * The `StatusBadge` component is used to display a visual badge for three
 * different status levels.
 */
export const StatusBadge = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<StatusBadgeProps>>(
    (props, ref?) => {
      const { children, className, id, level = "low", ...rest } = props;
      const styles = useStyleConfig("StatusBadge", { variant: level });

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
