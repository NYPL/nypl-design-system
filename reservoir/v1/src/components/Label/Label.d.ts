import React from "react";
interface LabelProps {
    /** Additional CSS class name to render in the `label` element. */
    className?: string;
    /** The id of the html element that this `Label` is describing. */
    htmlFor: string;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Controls whether the label should be inline with the input it goes with.
     * This prop should only be used internally. */
    isInlined?: boolean;
    /** Controls whether the "(Required)" text should be displayed alongside the
     * label's text. False by default. */
    isRequired?: boolean;
    /** Allows the '(Required)' text to be changed for language purposes
     * Note: Parenthesis will be added automatically by the component */
    requiredLabelText?: string;
}
/**
 * A label for form inputs. It should never be used alone.
 */
export declare const Label: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<LabelProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement & HTMLLabelElement>>, {}>;
export default Label;
