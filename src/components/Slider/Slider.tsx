import {
  Box,
  chakra,
  RangeSlider as ChakraRangeSlider,
  RangeSliderTrack as ChakraRangeSliderTrack,
  RangeSliderFilledTrack as ChakraRangeSliderFilledTrack,
  RangeSliderThumb as ChakraRangeSliderThumb,
  Slider as ChakraSlider,
  SliderTrack as ChakraSliderTrack,
  SliderFilledTrack as ChakraSliderFilledTrack,
  SliderThumb as ChakraSliderThumb,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

import Label from "../Label/Label";
import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";
import TextInput, { TextInputTypes } from "../TextInput/TextInput";

export interface SliderProps {
  /** Additional class name for the Slider component. */
  className?: string;
  /** The initial value for the single `Slider` or an array of two number
   * values for the `isRangeSlider` case.
   */
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
}

/**
 * The `Slider` component renders a singular value slider or a range slider
 * with a min and max value. The value(s) can be updated through the slider
 * thumb(s) or through the text input(s) elements.
 */
export const Slider = chakra((props: React.PropsWithChildren<SliderProps>) => {
  const {
    className,
    defaultValue = 0,
    helperText,
    id,
    invalidText,
    isDisabled = false,
    isInvalid = false,
    isRangeSlider = false,
    isRequired = false,
    labelText,
    max = 100,
    min = 0,
    name,
    onChange,
    showBoxes = true,
    showHelperInvalidText = true,
    showLabel = true,
    showRequiredLabel = true,
    showValues = true,
    step = 1,
    ...rest
  } = props;

  if (!id) {
    console.warn(
      "NYPL Reservoir Slider: This component's required `id` prop was not passed."
    );
  }
  // For the RangeSlider, if the defaultValue is not an array, then we set
  // the defaultValue to an array with the min and max values.
  const rangeSliderDefault =
    typeof defaultValue === "number" ? [min, max] : defaultValue;
  // We need to set the default value correctly for both types of sliders.
  const finalDevaultValue = isRangeSlider ? rangeSliderDefault : defaultValue;
  const [currentValue, setCurrentValue] =
    React.useState<typeof defaultValue>(finalDevaultValue);
  let finalIsInvalid = isInvalid;
  // In the Range Slider, if the first value is bigger than the second value,
  // then set the invalid state.
  if (isRangeSlider && currentValue[0] > currentValue[1]) {
    finalIsInvalid = true;
  }
  const footnote = finalIsInvalid ? invalidText : helperText;
  const styles = useMultiStyleConfig("CustomSlider", {
    isDisabled,
    isInvalid: finalIsInvalid,
    showBoxes,
    showValues,
  });
  // Props that the `Slider` and `RangeSlider` Chakra
  // components both use.
  const sliderSharedProps = {
    // Don't focus on the thumbs for every small change.
    focusThumbOnChange: false,
    id,
    isDisabled,
    max,
    min,
    name,
    onChange: (val) => {
      setCurrentValue(val);
      onChange && onChange(val);
    },
    step,
    // Additional margins so slider thumbs don't overflow past the
    // edge when the value boxes or min/max values are hidden.
    sx: styles.sliderContainer,
  };
  // Props that the two `TextInput` components use.
  const textInputSharedProps = {
    isDisabled,
    isInvalid: finalIsInvalid,
    isRequired,
    max,
    min,
    // Never show the label or helper text for the `TextInput` component.
    showHelperInvalidText: false,
    showLabel: false,
    step,
    type: "number" as TextInputTypes,
  };
  /**
   * This returns either the "start" or "end" `TextInput` component. Note that
   * the "end" `TextInput` component is always rendered but the "start" is
   * only used for the `isRangeSlider` case.
   */
  const getTextInput = (type: "start" | "end") => {
    const inputProps = {
      start: {
        // We only want the value for this box in the `isRangeSlider` case.
        value: isRangeSlider ? currentValue[0].toString() : "",
        onChange: (val) => {
          // If the value is empty, set it to 0.
          let nextValue = parseInt(val.target.value, 10)
            ? parseInt(val.target.value, 10)
            : 0;
          // Only update the first value in the range.
          const newValue = [nextValue, currentValue[1]];
          setCurrentValue(newValue);
          // If the text input was updated directly,
          // send the data back to the user.
          onChange && onChange(newValue);
        },
        ...textInputSharedProps,
      },
      end: {
        // This text input *always* shows. In the default case, we only
        // keep track of one value. For the `isRangeSlider` case, we keep
        // track of an array but only want the second value.
        value: isRangeSlider
          ? currentValue[1].toString()
          : currentValue.toString(),
        onChange: (val) => {
          // If the value is empty, set it to 0.
          let nextValue = parseInt(val.target.value, 10)
            ? parseInt(val.target.value, 10)
            : 0;
          // If the value entered is bigger than the max value,
          // then set it to the max value.
          if (nextValue > max) {
            nextValue = max;
          }
          // Only update the second value in the `isRangeSlider` case,
          // or the single value in the default case.
          const newValue = isRangeSlider
            ? [currentValue[0], nextValue]
            : nextValue;
          setCurrentValue(newValue);
          // If the text input was updated directly,
          // send the data back to the user.
          onChange && onChange(newValue);
        },
        ...textInputSharedProps,
      },
    };
    const updatedLabel = !isRangeSlider
      ? labelText
      : `${labelText} - ${type} value`;
    return (
      <TextInput
        id={`${id}-textInput-${type}`}
        labelText={updatedLabel}
        __css={{
          ...styles.textInput,
          // Specific margins for each text input to
          // push the elements inside.
          marginRight: type === "start" ? "s" : null,
          marginLeft: type === "end" ? "s" : null,
        }}
        {...inputProps[type]}
      />
    );
  };
  /**
   * Returns a Chakra `Slider` or `RangeSlider` component based on the
   * `isRangeSlider` prop from the DS `Slider` component.
   */
  const getSliderType = () => {
    return isRangeSlider ? (
      <ChakraRangeSlider
        // Both slider thumbs need values and should be in an array.
        aria-label={
          !showLabel
            ? [`${labelText} - start value`, `${labelText} - end value`]
            : undefined
        }
        // Both slider thumbs need values and should be in an array,
        // even if it's the same label.
        aria-labelledby={showLabel ? [`${id}-label`, `${id}-label`] : undefined}
        value={currentValue as number[]}
        // Make the thumbs larger.
        size="lg"
        {...sliderSharedProps}
      >
        <ChakraRangeSliderTrack sx={styles.track}>
          <ChakraRangeSliderFilledTrack sx={styles.filledTrack} />
        </ChakraRangeSliderTrack>
        <ChakraRangeSliderThumb index={0} sx={styles.thumb} />
        <ChakraRangeSliderThumb index={1} sx={styles.thumb} />
      </ChakraRangeSlider>
    ) : (
      <ChakraSlider
        aria-label={!showLabel ? labelText : undefined}
        aria-labelledby={`${id}-label`}
        value={currentValue as number}
        // Make the thumb larger.
        size="lg"
        {...sliderSharedProps}
      >
        <ChakraSliderTrack sx={styles.track}>
          <ChakraSliderFilledTrack sx={styles.filledTrack} />
        </ChakraSliderTrack>
        <ChakraSliderThumb sx={styles.thumb} />
      </ChakraSlider>
    );
  };

  return (
    <Box className={className} __css={styles} {...rest}>
      {showLabel && (
        <Label
          id={`${id}-label`}
          // We can't target the slider thumbs since those are divs and we
          // should link the label somewhere. So either target the first
          // input box in a `RangeSlider` or the only input box in a `Slider`.
          // When the input fields are not visible, remove this attribute.
          htmlFor={
            showBoxes
              ? `${id}-textInput-${isRangeSlider ? "start" : "end"}`
              : ""
          }
          isRequired={showRequiredLabel && isRequired}
        >
          {labelText}
        </Label>
      )}

      <Box __css={styles.container}>
        {/* Only show the start input box for the `isRangeSlider` case. */}
        {showBoxes && isRangeSlider && getTextInput("start")}

        {showValues && <Box __css={styles.leftValue}>{min}</Box>}

        {getSliderType()}

        {showValues && <Box __css={styles.rightValue}>{max}</Box>}

        {showBoxes && getTextInput("end")}
      </Box>

      {footnote && showHelperInvalidText && (
        <HelperErrorText
          id={`${id}-helperText`}
          isInvalid={finalIsInvalid}
          text={footnote}
        />
      )}
    </Box>
  );
});

export default Slider;
