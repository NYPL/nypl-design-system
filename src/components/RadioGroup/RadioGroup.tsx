import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  RadioGroup as ChakraRadioGroup,
  Stack,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, useMemo } from "react";

import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";
import { spacing } from "../../theme/foundations/spacing";
import { LayoutTypes } from "../../helpers/types";
import { RadioGroupContext } from "./RadioGroupContext";

export interface RadioGroupProps extends Omit<BoxProps, "onChange"> {
  /** Populates the initial value of the input */
  defaultValue?: string;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: HelperErrorTextType;
  /** Optional string to populate the HelperErrorText for error state */
  invalidText?: HelperErrorTextType;
  /** Adds the 'disabled' prop to the input when true. */
  isDisabled?: boolean;
  /** Set's the `Radio`s' wrapper to be full width. */
  isFullWidth?: boolean;
  /** Adds the 'aria-invalid' attribute to the input and
   * sets the error state when true. */
  isInvalid?: boolean;
  /** Adds the 'required' attribute to the input when true. */
  isRequired?: boolean;
  /** The radio group label displayed in a `legend` element if `showlabel` is
   * true, or an "aria-label" if `showLabel` is false. */
  labelText: string;
  /** Renders the Radio buttons in a row or column (default). */
  layout?: LayoutTypes;
  /** The `name` prop indicates the form group for all the Radio children. */
  name: string;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (value: string) => void;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Offers the ability to show the group's legend onscreen or hide it. Refer
   * to the `labelText` property for more information. */
  showLabel?: boolean;
  /** Whether or not to display the "(required)" text in the label text.
   * True by default. */
  showRequiredLabel?: boolean;
}

/**
 * `RadioGroup` is a wrapper for DS `Radio` components that render together
 * along with an optional helper text.
 *
 * The `name` prop is essential for this form group element and is not needed
 * for individual DS `Radio` components when `RadioGroup` is used.
 */
export const RadioGroup: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<RadioGroupProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<RadioGroupProps>
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<RadioGroupProps>>(
    (props, ref?) => {
      const {
        children,
        defaultValue,
        helperText,
        id,
        invalidText,
        isDisabled = false,
        isFullWidth = false,
        isInvalid = false,
        isRequired = false,
        labelText,
        layout = "column",
        name,
        onChange,
        showHelperInvalidText = true,
        showLabel = true,
        showRequiredLabel = true,
        ...rest
      } = props;
      const [value, setValue] = React.useState(defaultValue);
      const footnote: HelperErrorTextType = isInvalid
        ? invalidText
        : helperText;
      const spacingProp = layout === "column" ? spacing.s : spacing.l;
      // Get the Chakra-based styles for the custom elements in this component.
      const styles = useMultiStyleConfig("RadioGroup", {
        isFullWidth,
        isLegendHidden: !showLabel,
      });
      // Props for the `ChakraRadioGroup` component.
      const radioGroupProps = {
        ["aria-labelledby"]: `${id}-span-title`,
        name,
        onChange: (selected: string) => {
          setValue(selected);
          onChange && onChange(selected);
        },
        ref,
        value,
      };

      const radioGroupContextValue = useMemo(
        () => ({
          isDisabled,
          isInvalid,
          isRequired,
          name,
        }),
        [isDisabled, isInvalid, isRequired, name]
      );

      return (
        <Box data-testid="ds-radioGroup" id={id} __css={styles} {...rest}>
          <Box as="span" id={`${id}-span-title`} __css={styles.spanLegend}>
            {labelText}
            {showRequiredLabel && isRequired && <span> (required)</span>}
          </Box>
          <ChakraRadioGroup {...radioGroupProps}>
            <Stack
              className="ds-radioGroup-stack"
              direction={[layout]}
              spacing={spacingProp}
            >
              <RadioGroupContext.Provider value={radioGroupContextValue}>
                {children}
              </RadioGroupContext.Provider>
            </Stack>
          </ChakraRadioGroup>
          <HelperErrorText
            id={`${id}-helperErrorText`}
            isInvalid={isInvalid}
            isRenderedText={showHelperInvalidText}
            text={footnote}
            __css={styles.helperErrorText}
          />
        </Box>
      );
    }
  )
);

export default RadioGroup;
