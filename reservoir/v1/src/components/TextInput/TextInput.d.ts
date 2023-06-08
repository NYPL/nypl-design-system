import React from "react";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
export declare const textInputTypesArray: readonly ["email", "hidden", "number", "password", "text", "textarea", "tel", "url"];
export type TextInputTypes = typeof textInputTypesArray[number];
export declare const TextInputFormats: {
    email: string;
    hidden: string;
    password: string;
    text: string;
    tel: string;
    textarea: string;
    url: string;
};
export type TextInputVariants = "default" | "searchBar" | "searchBarSelect";
export interface InputProps {
    /** A class name for the TextInput parent div. */
    className?: string;
    /** The starting value of the input field. */
    defaultValue?: string;
    /** Populates the HelperErrorText for the standard state */
    helperText?: HelperErrorTextType;
    /** ID that other components can cross reference for accessibility purposes */
    id: string;
    /** Populates the HelperErrorText for the error state */
    invalidText?: HelperErrorTextType;
    /** Adds a button to clear existing text in the input field. */
    isClearable?: boolean;
    /** The callback function that is called when the clear button is clicked. */
    isClearableCallback?: () => void;
    /** Adds the `disabled` and `aria-disabled` prop to the input when true */
    isDisabled?: boolean;
    /** Adds errored styling to the input/textarea and helper text elements */
    isInvalid?: boolean;
    /** Will add `required` and `aria-required` props to the input/textarea elements */
    isRequired?: boolean;
    /** Provides text for a `Label` component if `showLabel` is set to true;
     * populates an `aria-label` attribute if `showLabel` is set to false. */
    labelText: string;
    /** The max number for a `number` TextInput type. */
    max?: number;
    /** The max length of the input field. This prop is for all input types
     * except for the `number` type. */
    maxLength?: number;
    /** The min number for a `number` TextInput type. */
    min?: number;
    /** Used to reference the input element in forms. */
    name?: string;
    /** The action to perform on the `input`/`textarea`'s onChange function  */
    onChange?: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    /** The action to perform on the `input`/`textarea`'s onClick function  */
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    /** The action to perform on the `input`/`textarea`'s onFocus function  */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** Regex to query the user input against. */
    pattern?: string;
    /** Populates the placeholder for the input/textarea elements */
    placeholder?: string;
    /** Allows the '(Required)' text to be changed for language purposes
     * Note: Parenthesis will be added automatically by the component */
    requiredLabelText?: string;
    /** Offers the ability to hide the helper/invalid text. */
    showHelperInvalidText?: boolean;
    /** Offers the ability to show the label onscreen or hide it. Refer to the
     * `labelText` property for more information. */
    showLabel?: boolean;
    /** Whether or not to display the "(Required)" text in the label text.
     * True by default. */
    showRequiredLabel?: boolean;
    /** The amount to increase or decrease when using the number type. */
    step?: number;
    /** FOR INTERNAL DS USE ONLY: the input variant to display. */
    textInputType?: TextInputVariants;
    /** HTML Input types as defined by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input */
    type?: TextInputTypes;
    /** Populates the value of the input/textarea elements */
    value?: string;
}
/**
 * The type used for `ref`s. We want to extend both `input` and `textarea`
 * since both are available to create through `TextInput`.
 */
export type TextInputRefType = HTMLInputElement & HTMLTextAreaElement;
/**
 * Renders either an `input` element with a specified type or a `textarea`
 * element. All types will render an accessible `Label` component and an
 * optional `HelperErrorText` component.
 */
export declare const TextInput: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<InputProps & React.RefAttributes<TextInputRefType>>, {}>;
export default TextInput;
