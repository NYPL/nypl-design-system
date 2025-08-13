import { ChakraComponent } from "@chakra-ui/react";
import React from '../../../node_modules/react';
export type AccordionTypes = "default" | "warning" | "error";
export interface AccordionDataProps {
    accordionType?: AccordionTypes;
    ariaLabel?: string;
    /** Ref to the DOM element of the AccordionButton. */
    buttonInteractionRef?: any;
    label: string | JSX.Element;
    panel: string | React.ReactNode;
}
export interface AccordionProps {
    /** Array of data to display, and an optional accordionType */
    accordionData: AccordionDataProps[];
    /** Global aria-label value that is applied to all accordions if individual
     * ariaLabel props are not included with accordionData entries. */
    ariaLabel?: string;
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
    /** For internal use only. This value toggles the accordion closed if the
     * MultiSelect's `closeOnBlur` prop is true and the user clicks outside the
     * component. */
    userClickedOutside?: boolean;
}
/**
 * Accordion component that shows content on toggle. Can be used to display
 * multiple accordion items together.
 */
export declare const Accordion: ChakraComponent<React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>, AccordionProps>;
export default Accordion;
