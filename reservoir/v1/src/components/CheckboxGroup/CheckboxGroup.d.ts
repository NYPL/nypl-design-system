import React from "react";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
import { LayoutTypes } from "../../helpers/types";
export interface CheckboxGroupProps {
    /** Any child node passed to the component. */
    children: React.ReactNode;
    /** Populates the initial value of the input */
    defaultValue?: string[];
    /** Optional string to populate the HelperErrorText for standard state */
    helperText?: HelperErrorTextType;
    /** ID that other components can cross reference for accessibility purposes */
    id: string;
    /** Optional string to populate the HelperErrorText for error state */
    invalidText?: HelperErrorTextType;
    /** Adds the 'disabled' prop to the input when true. */
    isDisabled?: boolean;
    /** Set's the `Checkbox`s' wrapper to be full width. */
    isFullWidth?: boolean;
    /** A`dds the 'aria-invalid' attribute to the input and
     * sets the error state when true. */
    isInvalid?: boolean;
    /** Adds the 'required' attribute to the input when true. */
    isRequired?: boolean;
    /** The checkbox group label displayed in a `legend` element if `showlabel` is
     * true, or an "aria-label" if `showLabel` is false. */
    labelText: string;
    /** Renders the checkbox buttons in a row or column (default). */
    layout?: LayoutTypes;
    /** The `name` prop indicates the form group for all the `Checkbox` children. */
    name: string;
    /** The action to perform on the `<input>`'s onChange function  */
    onChange?: (value: string[]) => void;
    /** Offers the ability to hide the helper/invalid text. */
    showHelperInvalidText?: boolean;
    /** Offers the ability to show the group's legend onscreen or hide it. Refer
     * to the `labelText` property for more information. */
    showLabel?: boolean;
    /** Whether or not to display the "(Required)" text in the label text.
     * True by default. */
    showRequiredLabel?: boolean;
    /** The values to programmatically update the selected `Checkbox`es. */
    value?: string[];
}
/**
 * Wrapper component to wrap `Checkbox` components. Can be displayed in a
 * column or in a row. The `CheckboxGroup` component renders all the necessary
 * wrapping and associated text elements, but the checkbox input elements
 * _need_ to be child `Checkbox` components from the NYPL Design System.
 */
export declare const CheckboxGroup: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLDivElement>>, {}>;
export default CheckboxGroup;
