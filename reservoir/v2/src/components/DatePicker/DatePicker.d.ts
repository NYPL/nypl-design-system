import React from "react";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
import { TextInputRefType } from "../TextInput/TextInput";
export declare const datePickerTypesArray: readonly ["full", "month", "year"];
export type DatePickerTypes = typeof datePickerTypesArray[number];
export interface FullDateType {
    /** Date object that gets returned for the onChange
     * function only for date ranges. */
    endDate?: Date | null;
    /** Date object that gets returned for the onChange function. */
    startDate: Date | null;
}
interface DateRangeRowProps {
    /** ID that other components can cross reference for accessibility purposes. */
    id: string;
    /** Whether to render a single date input or two for a range of two dates. */
    isDateRange?: boolean;
}
interface DatePickerWrapperProps extends DateRangeRowProps {
    /** Additional className. */
    className?: string;
    /** Adds the 'required' property to the input element(s). */
    isRequired?: boolean;
    /** Passed to the `TextInput` component to render a label associated with an input field. */
    labelText: string;
    /** Offers the ability to show the label onscreen or hide it. */
    showLabel?: boolean;
    /** Whether or not to display the "(Required)" text in the label text.
     * True by default. */
    showRequiredLabel?: boolean;
}
export interface DatePickerProps extends DatePickerWrapperProps {
    /** The date format to display. Defaults to "yyyy-MM-dd".
     * Must be in ISO-8601 format. */
    dateFormat?: string;
    /** DatePicker date types that can be rendered. */
    dateType?: DatePickerTypes;
    /** Populates the `HelperErrorText` component in this component. */
    helperText?: HelperErrorTextType;
    /** Populates the `HelperErrorText` component in the "From" `TextInput` component. */
    helperTextFrom?: string;
    /** Populates the `HelperErrorText` component in the "To" `TextInput` component. */
    helperTextTo?: string;
    /** The initial date value. If no initialDate is passed, the input will render with
     * today's date. If an empty string is passed, the input will render with no initial
     * value. If a date is passed, it must be in the mm/dd/yyyy format. */
    initialDate?: string;
    /** The initialTo date value (used for date ranges). If no initialTo is passed, the input
     * will render with today's date. If an empty string is passed, the input will render with
     * no initial value.  If a date is passed, it must be in the mm/dd/yyyy format. */
    initialDateTo?: string;
    /** Populates the `HelperErrorText` error state for both "From"
     * and "To" input components. */
    invalidText?: HelperErrorTextType;
    /** Adds the 'disabled' property to the input element(s). */
    isDisabled?: boolean;
    /** Adds 'isInvalid' styling. */
    isInvalid?: boolean;
    /** Adds the 'required' property to the input element(s). */
    isRequired?: boolean;
    /** The maximum date value that applies to both input fields.
     * This must be in the mm/dd/yyyy format. */
    maxDate?: string;
    /** The minimum date value that applies to both input fields.
     * This must be in the mm/dd/yyyy format. */
    minDate?: string;
    /** Value name for the single input field or the "From" input field in a date range. */
    nameFrom?: string;
    /** Value name for the "To" input field */
    nameTo?: string;
    /** The action to perform on the `input`'s onChange function for both fields.
     * This will return the data in an object with `startDate` and `endDate` keys.
     */
    onChange?: (data: FullDateType) => void;
    /** Placeholder text for the input. */
    placeholder?: string;
    /** Placeholder text for the end date input (used in date ranges). */
    placeholderTo?: string;
    /** An additional explicit React ref passed for a date range's "To"
     * input field. Note that the "From" input takes the initial "ref" value. */
    refTo?: React.Ref<TextInputRefType>;
    /** Offers the ability to hide the helper/invalid text. */
    showHelperInvalidText?: boolean;
}
/**
 * Returns a single date input field or two date input fields for a date range.
 */
export declare const DatePicker: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<TextInputRefType>>, {}>;
export default DatePicker;
