import React from "react";
import {
  Box,
  CircularProgress as ChakraCircularProgress,
  CircularProgressLabel as ChakraCircularProgressLabel,
  Progress as ChakraProgress,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import {
  ProgressIndicatorSizes,
  ProgressIndicatorTypes,
} from "./ProgressIndicatorTypes";
import Label from "../Label/Label";

export interface ProgressIndicatorProps {
  /** Flag to render the component in a dark background. */
  darkMode?: boolean;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Whether the `ProgressIndicator` should be linear or circular. */
  indicatorType?: ProgressIndicatorTypes;
  /** Whether the progress animation should display because the `value` prop is
   * not known. When this is set to `true`, the `value` prop will be ignored. */
  isIndeterminate?: boolean;
  /** The text to display in an HTML `label` element. */
  labelText: string;
  /** Visually show or hide the label text. When set to `false`, then the label
   * text will be added to the parent component as its `aria-label` attribute. */
  showLabel?: boolean;
  /** The size of the linear or circular progress. */
  size?: ProgressIndicatorSizes;
  /** A number between 0 to 100 that defines the progress' value. */
  value?: number;
}

/**
 * A component that displays a progress status for any task that takes a long
 * time to complete or consists of multiple steps. Examples include downloading,
 * uploading, or processing.
 */
const ProgressIndicator: React.FC<ProgressIndicatorProps> = (
  props: ProgressIndicatorProps
) => {
  const {
    darkMode = false,
    id,
    indicatorType = ProgressIndicatorTypes.Linear,
    isIndeterminate = false,
    labelText,
    showLabel = true,
    size = ProgressIndicatorSizes.Default,
    value = 0,
  } = props;
  const styles = useMultiStyleConfig("ProgressIndicator", {
    darkMode,
    size,
  });
  let finalValue = value;
  if (finalValue < 0 || finalValue > 100) {
    console.warn(
      "ProgressIndicator: pass in a `value` between 0 and 100. Defaulting to 0."
    );
    finalValue = 0;
  }
  const progressProps = {
    id,
    // If the label is visually shown, associate it with the progress indicator.
    // Otherwise, the `aria-label` will be added.
    "aria-label": showLabel ? null : labelText,
    "aria-labelledby": showLabel ? `${id}-label` : null,
    // If `isIndeterminate` is true, then it overrides the `value` prop.
    isIndeterminate: isIndeterminate || null,
    value: isIndeterminate ? null : finalValue,
  };
  const progressComponent = (indicatorType) => {
    // Only display the percentage text for the default size, not in the
    // indeterminate state, and when `showLabel` is true.
    if (indicatorType === ProgressIndicatorTypes.Circular) {
      // For the small size, since the label won't be visible, we need to add
      // it to the parent component's `aria-label` attribute.
      if (size === ProgressIndicatorSizes.Small) {
        progressProps["aria-label"] = labelText;
      }
      return (
        <Box __css={styles.circularContainer}>
          <ChakraCircularProgress {...progressProps} sx={styles.circular}>
            {showLabel &&
              !isIndeterminate &&
              size !== ProgressIndicatorSizes.Small && (
                <ChakraCircularProgressLabel>
                  {finalValue}%
                </ChakraCircularProgressLabel>
              )}
          </ChakraCircularProgress>
          {showLabel && size !== ProgressIndicatorSizes.Small && (
            <Label id={`${id}-label`} htmlFor={id}>
              {labelText}
            </Label>
          )}
        </Box>
      );
    }
    // The Linear progress indicator is the default.
    return (
      <>
        {showLabel && (
          <Label id={`${id}-label`} htmlFor={id}>
            {labelText}
          </Label>
        )}
        <Box __css={styles.linearContainer}>
          <ChakraProgress {...progressProps} sx={styles.linear} />
          {showLabel && !isIndeterminate && (
            <Box __css={styles.linearPercentage}>{finalValue}%</Box>
          )}
        </Box>
      </>
    );
  };

  return <Box __css={styles}>{progressComponent(indicatorType)}</Box>;
};

export default ProgressIndicator;
