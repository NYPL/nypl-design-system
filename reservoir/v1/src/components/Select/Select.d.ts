import React from "react";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
export declare const selectTypesArray: string[];
export declare const labelPositionsArray: string[];
export type SelectTypes = typeof selectTypesArray[number];
export type LabelPositions = typeof labelPositionsArray[number];
export interface SelectProps {
    /** A class name for the `div` parent element. */
    className?: string;
    /** Optional string to populate the `HelperErrorText` for the standard state. */
    helperText?: HelperErrorTextType;
    /** ID that other components can cross reference for accessibility purposes */
    id: string;
    /** Optional string to populate the `HelperErrorText` for the error state
     * when `isInvalid` is true. */
    invalidText?: HelperErrorTextType;
    /** Adds the `disabled` and `aria-disabled` attributes to the select when true */
    isDisabled?: boolean;
    /** Adds the `aria-invalid` attribute to the select when true. This also makes
     * the color theme "NYPL error" red for the select and text. */
    isInvalid?: boolean;
    /** Adds the `required` and `aria-required` attributes to the input when true. */
    isRequired?: boolean;
    /** Optional value to render the label inline, rather than the default (on top)
     * of the select element. */
    labelPosition?: LabelPositions;
    /** Provides text for a `Label` component if `showLabel` is set to `true`;
     * populates an `aria-label` attribute on the select input if `showLabel` is
     * set to `false`. */
    labelText: string;
    /** Used to reference the select element in forms. */
    name: string;
    /** The callback function to get the selected value.
     * Should be passed along with `value` for controlled components. */
    onChange?: (event: React.FormEvent) => void;
    /** Placeholder text in the select element. */
    placeholder?: string;
    /** The variant to display. */
    selectType?: SelectTypes;
    /** Offers the ability to hide the helper/invalid text. */
    showHelperInvalidText?: boolean;
    /** Offers the ability to show the select's label onscreen or hide it. Refer
     * to the `labelText` property for more information. */
    showLabel?: boolean;
    /** Whether or not to display the "(Required)" text in the label text.
     * True by default. */
    showRequiredLabel?: boolean;
    /** The value of the selected option.
     * Should be passed along with `onChange` for controlled components. */
    value?: string;
}
/**
 * Component that renders Chakra's `Select` component along with an accessible
 * `Label` and optional `HelperErrorText` component.
 */
export declare const Select: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<SelectProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLSelectElement>>, {}>;
export default Select;
