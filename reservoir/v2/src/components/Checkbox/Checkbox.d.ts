import React from "react";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
interface CheckboxIconProps {
    /** When using the Checkbox as a "controlled" form element, you can specify
     * the Checkbox's checked state using this prop.
     * Learn more about controlled and uncontrolled form fields:
     * https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/ */
    isChecked?: boolean;
    /** Adds the indeterminate state to the `Checkbox`. */
    isIndeterminate?: boolean;
}
export interface CheckboxProps extends CheckboxIconProps {
    /** className you can add in addition to 'input' */
    className?: string;
    /** Optional string to populate the HelperErrorText for standard state */
    helperText?: HelperErrorTextType;
    /** ID that other components can cross reference for accessibility purposes */
    id: string;
    /** Optional string to populate the HelperErrorText for the error state
     * when `isInvalid` is true. */
    invalidText?: HelperErrorTextType;
    /** Adds the 'disabled' and `aria-disabled` attributes to the input when true.
     * This also makes the text italic and color scheme gray. */
    isDisabled?: boolean;
    /** Adds the 'aria-invalid' attribute to the input when true. This also makes
     * the color theme "NYPL error" red for the button and text. */
    isInvalid?: boolean;
    /** Adds the 'required' attribute to the input when true. */
    isRequired?: boolean;
    /** The checkbox's label. This will serve as the text content for a `<label>`
     * element if `showlabel` is true, or an "aria-label" if `showLabel` is false. */
    labelText: string | JSX.Element;
    /** The name prop indicates into which group of checkboxes this checkbox
     * belongs. If none is specified, 'default' will be used */
    name?: string;
    /** The action to perform on the `<input>`'s onChange function  */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Offers the ability to hide the helper/invalid text. */
    showHelperInvalidText?: boolean;
    /** Offers the ability to show the checkbox's label onscreen or hide it.
     * Refer to the `labelText` property for more information. */
    showLabel?: boolean;
    /** Populates the value of the input */
    value?: string;
}
export declare const Checkbox: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>, {}>;
export default Checkbox;
