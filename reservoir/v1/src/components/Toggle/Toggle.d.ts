import React from "react";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
export declare const toggleSizesArray: readonly ["default", "small"];
export type ToggleSizes = typeof toggleSizesArray[number];
export interface ToggleProps {
    /** Used for uncontrolled scenarios.  Sets the state of the Toggle when the page first loads.
     *   If true, the toggle will be initially set to the "on" position. */
    defaultChecked?: boolean;
    /** Optional string to populate the HelperErrorText for standard state */
    helperText?: HelperErrorTextType;
    /** ID that other components can cross reference for accessibility purposes */
    id: string;
    /** Optional string to populate the HelperErrorText for the error state
     * when `isInvalid` is true. */
    invalidText?: HelperErrorTextType;
    /** When using the Toggle as a "controlled" form element, you can specify
     * the Toggle's checked state using this prop.
     * Learn more about controlled and uncontrolled form fields:
     * https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/ */
    isChecked?: boolean;
    /** Adds the 'disabled' and `aria-disabled` attributes to the input when true.
     * This also makes the text italic and color scheme gray. */
    isDisabled?: boolean;
    /** Adds the 'aria-invalid' attribute to the input when true. */
    isInvalid?: boolean;
    /** Adds the 'required' attribute to the input when true. */
    isRequired?: boolean;
    /** The toggle's label. This will serve as the text content for the `<label>` element */
    labelText: string;
    /** The name prop indicates the `Toggle`'s form element name. If none is
     * specified, 'default' will be used. */
    name?: string;
    /** The action to perform on the `<input>`'s onChange function  */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** The size of the Toggle. Defaults to "large". */
    size?: ToggleSizes;
}
export declare const onChangeDefault: () => void;
/**
 * Component that renders Chakra's `Switch` component along with NYPL defaults.
 */
export declare const Toggle: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLInputElement>>, {}>;
export default Toggle;
