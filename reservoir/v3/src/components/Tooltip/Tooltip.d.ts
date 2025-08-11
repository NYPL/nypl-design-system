import React from '../../../node_modules/react';
import { ChakraComponent } from "@chakra-ui/react";
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
    /** The placement of the tooltip relative to its children. */
    placement?: "top" | "left" | "bottom" | "right" | "auto";
    /** The main and cross-axis offset to displace the tooltip from its reference element. */
    offset?: [number, number];
}
export declare const Tooltip: ChakraComponent<React.ForwardRefExoticComponent<React.PropsWithChildren<TooltipProps> & React.RefAttributes<HTMLDivElement>>, React.PropsWithChildren<TooltipProps>>;
export default Tooltip;
