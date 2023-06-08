import React from "react";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
import { LayoutTypes } from "../../helpers/types";
export interface RadioGroupProps {
    /** Additional class name. */
    className?: string;
    /** Populates the initial value of the input */
    defaultValue?: string;
    /** Optional string to populate the HelperErrorText for standard state */
    helperText?: HelperErrorTextType;
    /** ID that other components can cross reference for accessibility purposes */
    id: string;
    /** Optional string to populate the HelperErrorText for error state */
    invalidText?: HelperErrorTextType;
    /** Adds the 'disabled' prop to the input when true. */
    isDisabled?: boolean;
    /** Set's the `Radio`s' wrapper to be full width. */
    isFullWidth?: boolean;
    /** Adds the 'aria-invalid' attribute to the input and
     * sets the error state when true. */
    isInvalid?: boolean;
    /** Adds the 'required' attribute to the input when true. */
    isRequired?: boolean;
    /** The radio group label displayed in a `legend` element if `showlabel` is
     * true, or an "aria-label" if `showLabel` is false. */
    labelText: string;
    /** Renders the Radio buttons in a row or column (default). */
    layout?: LayoutTypes;
    /** The `name` prop indicates the form group for all the Radio children. */
    name: string;
    /** The action to perform on the `<input>`'s onChange function  */
    onChange?: (value: string) => void;
    /** Offers the ability to hide the helper/invalid text. */
    showHelperInvalidText?: boolean;
    /** Offers the ability to show the group's legend onscreen or hide it. Refer
     * to the `labelText` property for more information. */
    showLabel?: boolean;
    /** Whether or not to display the "(Required)" text in the label text.
     * True by default. */
    showRequiredLabel?: boolean;
}
/**
 * RadioGroup is a wrapper for DS `Radio` components that renders as a fieldset
 * HTML element along with optional helper text. The `name` prop is essential
 * for this form group element and is not needed for individual DS `Radio`
 * components when `RadioGroup` is used.
 */
export declare const RadioGroup: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<RadioGroupProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
export default RadioGroup;
