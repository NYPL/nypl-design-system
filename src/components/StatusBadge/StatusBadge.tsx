import * as React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";

export interface StatusBadgeProps {
  /** Additional class for the component */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Level of the status badge */
  level?: "low" | "medium" | "high";
}

function StatusBadge(props: React.PropsWithChildren<StatusBadgeProps>) {
  const { children, className, id = generateUUID(), level = "low" } = props;
  const styles = useStyleConfig("StatusBadge", { variant: level });

  if (!children) {
    console.warn("Status Badge has no children.");
  }

  return (
    <Box id={id} className={className} __css={styles}>
      {children}
    </Box>
  );
}

export default StatusBadge;
