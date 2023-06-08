import React from "react";
export type AccordionTypes = "default" | "warning" | "error";
export interface AccordionDataProps {
    accordionType?: AccordionTypes;
    label: string;
    panel: string | React.ReactNode;
}
export interface AccordionProps {
    /** Array of data to display, and an optional accordionType */
    accordionData: AccordionDataProps[];
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Whether the accordion is open by default only on its initial rendering */
    isDefaultOpen?: boolean;
    /** Whether the contents of the Accordion should always be rendered.
     *  Useful for form-components. `false` by default. */
    isAlwaysRendered?: boolean;
    /** Sets max height of accordion panel. This value should be entered with the
     * formatting of a CSS height attribute (ex. 100px, 8rem). If height of content
     * within accordion panel is greater than height set by panelMaxHeight, a
     * scrollbar will appear for accordion panel. */
    panelMaxHeight?: string;
}
/**
 * Accordion component that shows content on toggle. Can be used to display
 * multiple accordion items together.
 */
export declare const Accordion: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>, {}>;
export default Accordion;
