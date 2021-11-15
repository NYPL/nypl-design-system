import * as React from "react";
import {
  Box,
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

import generateUUID from "../../helpers/generateUUID";
import Label from "../Label/Label";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import TextInput from "../TextInput/TextInput";
import { TextInputTypes } from "../TextInput/TextInputTypes";

export interface SliderProps {
  /** Additional class name for the Slider component. */
  className?: string;
  defaultValue?: number | number[];
  helperText?: string;
  id?: string;
  invalidText?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRangeSlider?: boolean;
  isRequired?: boolean;
  labelText: string;
  max?: number;
  min?: number;
  name?: string;
  onChange?: (val: number) => void;
  optReqFlag?: boolean;
  showBoxes?: boolean;
  showHelperInvalidText?: boolean;
  showLabel?: boolean;
  step?: number;
  value?: number | number[];
}

/**
 * Update me
 */
export default function Slider(props: React.PropsWithChildren<SliderProps>) {
  const {
    className,
    defaultValue = 0,
    helperText,
    id = generateUUID(),
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
    optReqFlag = true,
    showBoxes = true,
    showHelperInvalidText = true,
    showLabel = true,
    step = 1,
    value,
  } = props;
  const [currentValue, setCurrentValue] = React.useState<typeof defaultValue>(
    defaultValue
  );
  const optReqText = isRequired ? "Required" : "Optional";
  const footnote = isInvalid ? invalidText : helperText;
  const styles = useMultiStyleConfig("Slider", { isInvalid });

  const stateProps = {
    isDisabled,
    isInvalid,
    isRequired,
    showHelperInvalidText: false,
    showLabel: false,
  };

  return (
    <Box className={className} __css={styles}>
      {showLabel && (
        <Label
          id={`${id}-label`}
          htmlFor={id}
          optReqFlag={optReqFlag && optReqText}
        >
          {labelText}
        </Label>
      )}
      <Box>
        {showBoxes && isRangeSlider && (
          <TextInput
            id={`{$id}-textInput-1`}
            labelText="Change me"
            type={TextInputTypes.number}
            value={currentValue[0].toString()}
            onChange={(val) => {
              // write comments
              let nextValue = parseInt(val.target.value, 10)
                ? parseInt(val.target.value, 10)
                : 0;
              if (nextValue > max) {
                nextValue = max;
              }
              const newValue = [nextValue, currentValue[1]];
              setCurrentValue(newValue);
            }}
            attributes={{ min, max }}
            {...stateProps}
          />
        )}
        <Box>{min}</Box>
        {isRangeSlider ? (
          <ChakraRangeSlider
            id={id}
            // aria-label={!showLabel ? labelText : null}
            // aria-labelledby={`${id}-label`}
            value={currentValue as number[]}
            onChange={(val) => setCurrentValue(val)}
            onChangeEnd={(val) => console.log(val)}
            focusThumbOnChange={false}
            step={step}
            name={name}
            isDisabled={isDisabled}
          >
            <ChakraRangeSliderTrack>
              <ChakraRangeSliderFilledTrack />
            </ChakraRangeSliderTrack>
            <ChakraRangeSliderThumb index={0} />
            <ChakraRangeSliderThumb index={1} />
          </ChakraRangeSlider>
        ) : (
          <ChakraSlider
            id={id}
            aria-label={!showLabel ? labelText : null}
            aria-labelledby={`${id}-label`}
            value={currentValue as number}
            onChange={(val) => setCurrentValue(val)}
            onChangeEnd={(val) => onChange(val)}
            focusThumbOnChange={false}
            step={step}
            name={name}
            isDisabled={isDisabled}
          >
            <ChakraSliderTrack>
              <ChakraSliderFilledTrack />
            </ChakraSliderTrack>
            <ChakraSliderThumb />
          </ChakraSlider>
        )}
        <Box>{max}</Box>

        {showBoxes && (
          <TextInput
            id={`{$id}-textInput-2`}
            labelText="Change me"
            type={TextInputTypes.number}
            value={
              typeof currentValue === "number"
                ? currentValue.toString()
                : currentValue[1].toString()
            }
            onChange={(val) => {
              // write comments
              let nextValue = parseInt(val.target.value, 10)
                ? parseInt(val.target.value, 10)
                : 0;
              if (nextValue > max) {
                nextValue = max;
              }
              const newValue = [currentValue[0], nextValue];
              setCurrentValue(newValue);
            }}
            attributes={{ min, max }}
            {...stateProps}
          />
        )}
      </Box>
      {footnote && showHelperInvalidText && (
        <Box __css={styles.helper}>
          <HelperErrorText isInvalid={isInvalid} id={`${id}-helperText`}>
            {footnote}
          </HelperErrorText>
        </Box>
      )}
    </Box>
  );
}
