import React from "react";
export interface TooltipProps {
    /** Any child node passed to the component. */
    children: React.ReactNode;
    /** Value used to populate the tooltip content. */
    content: string | number | React.ReactNode;
    /** A class name for the Tooltip parent div. */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** Adds the `disabled` prop to the Tooltip when true. */
    isDisabled?: boolean;
    /** Wraps the children of the tooltip in `ComponentWrapper` with `tabIndex=0` when true. */
    shouldWrapChildren?: boolean;
}
export declare const Tooltip: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>, {}>;
export default Tooltip;
