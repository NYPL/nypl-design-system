import {
  BoxProps,
  chakra,
  ChakraComponent,
  CheckboxGroup as ChakraCheckboxGroup,
  Stack,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, useMemo } from "react";

import Fieldset from "../Fieldset/Fieldset";
import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";
import { LayoutTypes } from "../../helpers/types";
import { spacing } from "../../theme/foundations/spacing";
import { useSafeId } from "../../hooks/useSafeId";
import { CheckboxGroupContext } from "./CheckboxGroupContext";

export interface CheckboxGroupProps extends Omit<BoxProps, "onChange"> {
  /** Populates the initial value of the input */
  defaultValue?: string[];
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: HelperErrorTextType;
  /** Optional string to populate the HelperErrorText for error state */
  invalidText?: HelperErrorTextType;
  /** Adds the 'disabled' prop to the input when true. */
  isDisabled?: boolean;
  /** Set's the `Checkbox`s' wrapper to be full width. */
  isFullWidth?: boolean;
  /** A`dds the 'aria-invalid' attribute to the input and
   * sets the error state when true. */
  isInvalid?: boolean;
  /** Adds the 'required' attribute to the input when true. */
  isRequired?: boolean;
  /** The checkbox group label displayed in a `legend` element if `showlabel` is
   * true, or an "aria-label" if `showLabel` is false. */
  labelText: string;
  /** Renders the checkbox buttons in a row or column (default). */
  layout?: LayoutTypes;
  /** The `name` prop indicates the form group for all the `Checkbox` children. */
  name: string;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (value: string[]) => void;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Offers the ability to show the group's legend onscreen or hide it. Refer
   * to the `labelText` property for more information. */
  showLabel?: boolean;
  /** Whether or not to display the "(required)" text in the label text.
   * True by default. */
  showRequiredLabel?: boolean;
  /** The values to programmatically update the selected `Checkbox`es. */
  value?: string[];
}

/**
 * Wrapper component to wrap `Checkbox` components. Can be displayed in a
 * column or in a row. The `CheckboxGroup` component renders all the necessary
 * wrapping and associated text elements. We highly recommend using DS
 * `Checkbox` components as children.
 */
export const CheckboxGroup: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<CheckboxGroupProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<CheckboxGroupProps>
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<CheckboxGroupProps>>(
    (props, ref?) => {
      const {
        children,
        defaultValue = [],
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
        value,
        ...rest
      } = props;
      const mainId = useSafeId(id);
      const footnote = isInvalid ? invalidText : helperText;
      const spacingProp =
        layout === "column"
          ? spacing.input.group.default.vstack
          : spacing.input.group.default.hstack;
      const checkboxProps =
        defaultValue && onChange
          ? {
              defaultValue,
              onChange,
            }
          : {};

      if (value) {
        checkboxProps["value"] = value;
      }

      const checkboxGroupContextValue = useMemo(
        () => ({
          isDisabled,
          isInvalid,
          isRequired,
          name,
        }),
        [isDisabled, isInvalid, isRequired, name]
      );

      // Get the Chakra-based styles for the custom elements in this component.
      const styles = useMultiStyleConfig("CheckboxGroup", { isFullWidth });

      return (
        <Fieldset
          data-testid="ds-checkboxGroup"
          id={mainId}
          isLegendHidden={!showLabel}
          isRequired={isRequired}
          legendText={labelText}
          showRequiredLabel={showRequiredLabel}
          {...rest}
          __css={styles}
        >
          <ChakraCheckboxGroup {...checkboxProps}>
            <Stack
              id={`${mainId}-stack`}
              data-testid="checkbox-group"
              direction={[layout]}
              spacing={spacingProp}
              ref={ref}
            >
              <CheckboxGroupContext.Provider value={checkboxGroupContextValue}>
                {children}
              </CheckboxGroupContext.Provider>
            </Stack>
          </ChakraCheckboxGroup>
          <HelperErrorText
            id={`${mainId}-helperErrorText`}
            isInvalid={isInvalid}
            isRenderedText={showHelperInvalidText}
            text={footnote}
            __css={styles.helperErrorText}
          />
        </Fieldset>
      );
    }
  )
);

export default CheckboxGroup;
