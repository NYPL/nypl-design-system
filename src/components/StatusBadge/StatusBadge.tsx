import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import * as React from "react";

import { StatusBadgeTypes } from "./StatusBadgeTypes";
export interface StatusBadgeProps {
  /** Additional class for the component */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Level of the status badge through StatusBadgeTypes. Defaults to
   * `StatusBadgeTypes.Low`. */
  level?: StatusBadgeTypes;
}

/**
 * The `StatusBadge` component is used to display a visual badge for three
 * different status levels.
 */
export const StatusBadge = chakra(
  (props: React.PropsWithChildren<StatusBadgeProps>) => {
    const {
      children,
      className,
      id,
      level = StatusBadgeTypes.Low,
      ...rest
    } = props;
    const styles = useStyleConfig("StatusBadge", { variant: level });

    if (!children) {
      console.warn("NYPL Reservoir StatusBadge: No children were passed.");
    }

    return (
      <Box id={id} className={className} __css={styles} {...rest}>
        {children}
      </Box>
    );
  }
);

export default StatusBadge;
