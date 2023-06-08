import React from "react";
export declare const statusBadgeTypeArray: readonly ["low", "medium", "high"];
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
export declare const StatusBadge: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<StatusBadgeProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
export default StatusBadge;
