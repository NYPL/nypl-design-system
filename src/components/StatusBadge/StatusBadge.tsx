import { Box, chakra, ChakraComponent, useStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export const statusBadgeLevelArray = ["low", "medium", "high"] as const;
export type StatusBadgeLevels = typeof statusBadgeLevelArray[number];
export const statusBadgeTypeArray = [
  "informative",
  "negative",
  "neutral",
  "positive",
  "recommendation",
  "warningHigh",
  "warningLow",
  "low",
  "medium",
  "high",
] as const;
export type StatusBadgeTypes = typeof statusBadgeTypeArray[number];
export interface StatusBadgeProps {
  /** Additional class for the component */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Level of the status badge. */
  level?: StatusBadgeLevels;
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
    StatusBadgeProps & {
      children?: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>
  >,
  StatusBadgeProps
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<StatusBadgeProps>>(
    (props, ref?) => {
      const { children, className, id, level, type, ...rest } = props;

      // let finalVariant;
      // if (!level && !type) finalVariant = "low";
      // else if (level) finalVariant = level;
      // else if (type) finalVariant = type;

      const finalVariant = level ? level : type ? type : "low";

      const styles = useStyleConfig("StatusBadge", { variant: finalVariant });

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
