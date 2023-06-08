import React from "react";
interface FieldsetProps {
    /** Additional class name to add. */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes */
    id: string;
    /** Flag to show or hide the text in the `legend` element. False by default. */
    isLegendHidden?: boolean;
    /** Flag to render "Required" in the `legend`. True by default. */
    isRequired?: boolean;
    /** Text to display in the `legend` element. */
    legendText?: string;
    /** Whether or not to display the "(Required)" text in the `legend` text.
     * True by default. */
    showRequiredLabel?: boolean;
}
/**
 * A wrapper component that renders a `fieldset` element along with a `legend`
 * element as its first child. Commonly used to wrap form components.
 */
export declare const Fieldset: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<FieldsetProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement & HTMLFieldSetElement>>, {}>;
export default Fieldset;
