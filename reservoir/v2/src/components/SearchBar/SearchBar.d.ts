import React from "react";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
import { SelectProps as InitialSelectProps } from "../Select/Select";
import { InputProps as InitialInputProps } from "../TextInput/TextInput";
interface SelectOptionsProps {
    text: string;
    value: string;
}
export type SelectProps = Partial<Pick<InitialSelectProps, "id" | "labelText" | "name" | "onChange" | "value">> & {
    optionsData: SelectOptionsProps[];
};
export type TextInputProps = Pick<InitialInputProps, "labelText" | "name"> & Partial<Pick<InitialInputProps, "defaultValue" | "id" | "isClearable" | "isClearableCallback" | "max" | "maxLength" | "min" | "onChange" | "pattern" | "placeholder" | "value">>;
export interface SearchBarProps {
    /** Adds 'action' property to the `form` element. */
    action?: string;
    /** The onClick callback function for the `Button` component. */
    buttonOnClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    /** A class name for the `form` element. */
    className?: string;
    /** Optional string for the SearchBar's description above the component. */
    descriptionText?: string;
    /** Optional string value used to set the text for a `Heading` component, or
     * a DS Heading component that can be passed in.
     */
    headingText?: string | JSX.Element;
    /** The text to display below the form in a `HelperErrorText` component. */
    helperText?: HelperErrorTextType;
    /** ID that other components can cross reference for accessibility purposes */
    id: string;
    /** Optional string to populate the `HelperErrorText` for the error state
     * when `isInvalid` is true. */
    invalidText?: HelperErrorTextType;
    /** Sets children form components in the disabled state. */
    isDisabled?: boolean;
    /** Sets children form components in the error state. */
    isInvalid?: boolean;
    /** Sets children form components in the required state. */
    isRequired?: boolean;
    /** Populates the `aria-label` attribute on the form element. */
    labelText: string;
    /** Adds 'method' property to the `form` element. */
    method?: string;
    /** Sets the `Button` variant type to `noBrand` when true;
     * false by default which sets the type to `primary`. */
    noBrandButtonType?: boolean;
    /** Handler function when the form is submitted. */
    onSubmit: (event: React.FormEvent) => void;
    /** Required props to render a `Select` element. */
    selectProps?: SelectProps | undefined;
    /** Custom input element to render instead of a `TextInput` element. */
    textInputElement?: JSX.Element;
    /** Required props to render a `TextInput` element. */
    textInputProps?: TextInputProps | undefined;
}
/**
 * Renders a wrapper `form` element to be used with `Select` (optional),
 * `Input`, and `Button` components together.
 */
export declare const SearchBar: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<SearchBarProps & React.RefAttributes<HTMLDivElement>>, {}>;
export default SearchBar;
