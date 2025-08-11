import { ChakraComponent } from "@chakra-ui/react";
import React from "../../../node_modules/react";
export declare const statusBadgeFontSizeArray: readonly [
  "desktop.body.body1",
  "desktop.body.body2",
  "desktop.caption"
];
export declare const statusBadgeLevelArray: readonly ["low", "medium", "high"];
export type StatusBadgeLevels = typeof statusBadgeLevelArray[number];
export declare const statusBadgeTypeArray: readonly [
  "informative",
  "negative",
  "neutral",
  "positive",
  "recommendation",
  "warning",
  "low",
  "medium",
  "high"
];
export type StatusBadgeTypes = typeof statusBadgeTypeArray[number];
export interface StatusBadgeProps {
  /** Additional class for the component */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Level of the status badge. This prop has been deprecated in favor of the
   * `type` prop. */
  level?: StatusBadgeLevels;
  /** Semantic type of the status badge. */
  type?: StatusBadgeTypes;
}
/**
 * The `StatusBadge` component is a label that indicates status or importance.
 * It is used for bringing awareness to a specific element or feature and should
 * provide quick recognition.
 */
export declare const StatusBadge: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<StatusBadgeProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<StatusBadgeProps>
>;
export default StatusBadge;
