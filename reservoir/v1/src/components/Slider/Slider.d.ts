import React from "react";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
export interface SliderProps {
    /** Additional class name for the Slider component. */
    className?: string;
    /** The initial value for the single `Slider` or an array of two number
     * values for the `isRangeSlider` case. */
    defaultValue?: number | number[];
    /** Optional string to populate the HelperErrorText for standard state */
    helperText?: HelperErrorTextType;
    /** ID that other components can cross reference for accessibility purposes. */
    id: string;
    /** Optional string to populate the `HelperErrorText` for the error state
     * when `isInvalid` is true. */
    invalidText?: HelperErrorTextType;
    /** Adds the 'disabled' state to the slider and text input(s) when true. */
    isDisabled?: boolean;
    /** Adds the 'invalid' state to the slider and text input(s) when true. */
    isInvalid?: boolean;
    /** Offers the ability to render a slider with one value or
     * a range slider with two values. */
    isRangeSlider?: boolean;
    /** Adds the 'required' attribute to the input(s) when true. */
    isRequired?: boolean;
    /** The `Slider`'s label. In the default single slider, this will be linked to
     * the only `TextInput` component. In the range slider, this will be linked to
     * the first `TextInput` component. If `showLabel` is false, then this value
     * will be set in the `Slider`'s `aria-label` attribute. */
    labelText: string;
    /** Maximum value allowed. */
    max?: number;
    /** Minimum value allowed. */
    min?: number;
    /** The name prop indicates into which form this component belongs to. */
    name?: string;
    /** Callback function that gets the value(s) selected. */
    onChange?: (val: number | number[]) => void;
    /** Callback function when the user is done selecting a new value. */
    onChangeEnd?: (val: number | number[]) => void;
    /** Offers the ability to hide the `TextInput` boxes. */
    showBoxes?: boolean;
    /** Offers the ability to hide the helper/invalid text. */
    showHelperInvalidText?: boolean;
    /** Offers the ability to show the label onscreen or hide it. Refer
     * to the `labelText` property for more information. */
    showLabel?: boolean;
    /** Whether or not to display the "(Required)" text in the label text.
     * True by default. */
    showRequiredLabel?: boolean;
    /** Offers the ability to hide the static min/max values. */
    showValues?: boolean;
    /** The amount to increase or decrease when using the slider thumb(s). */
    step?: number;
    /** The value(s) to programmatically update the Slider or RangeSlider. */
    value?: number | number[];
}
/**
 * The `Slider` component renders a singular value slider or a range slider
 * with a min and max value. The value(s) can be updated through the slider
 * thumb(s) or through the text input(s) elements.
 */
export declare const Slider: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<SliderProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
export default Slider;
