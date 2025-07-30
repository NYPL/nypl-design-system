import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  ChakraProps,
  Select as ChakraSelect,
  useColorModeValue,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, useEffect, useState, useRef } from "react";

import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
import Icon from "../Icons/Icon";
import Label from "../Label/Label";
import { getAriaAttrs } from "../../utils/utils";
import { useSafeId } from "../../hooks/useSafeId";

export const selectVariantsArray = ["default", "searchbar"] as const;
export const labelPositionsArray = ["default", "inline"] as const;
export type SelectVariants = typeof selectVariantsArray[number];
export type LabelPositions = typeof labelPositionsArray[number];

export interface SelectProps
  extends Pick<BoxProps, keyof ChakraProps>,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "color"> {
  /** The initial value of an uncontrolled component */
  defaultValue?: string;
  /** Optional string to populate the `HelperErrorText` for the standard state. */
  helperText?: HelperErrorTextType;
  /** Optional string to populate the `HelperErrorText` for the error state
   * when `isInvalid` is true. */
  invalidText?: HelperErrorTextType;
  /** Adds the `disabled` and `aria-disabled` attributes to the select when true */
  isDisabled?: boolean;
  /** Adds the `aria-invalid` attribute to the select when true. This also makes
   * the color theme "NYPL error" red for the select and text. */
  isInvalid?: boolean;
  /** Adds the `required` and `aria-required` attributes to the input when true. */
  isRequired?: boolean;
  /** Optional value to render the label inline, rather than the default (on top)
   * of the select element. */
  labelPosition?: LabelPositions;
  /** Provides text for a `Label` component if `showLabel` is set to `true`;
   * populates an `aria-label` attribute on the select input if `showLabel` is
   * set to `false`. */
  labelText: string;
  /** Placeholder text in the select element. */
  placeholder?: string;
  /** Allows the '(required)' text to be changed for language purposes
   * Note: Parenthesis will be added automatically by the component */
  requiredLabelText?: string;
  /** The variant to display. */
  variant?: SelectVariants;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Offers the ability to show the select's label onscreen or hide it. Refer
   * to the `labelText` property for more information. */
  showLabel?: boolean;
  /** Whether or not to display the "(required)" text in the label text.
   * True by default. */
  showRequiredLabel?: boolean;
}

/**
 * Component that renders Chakra's `Select` component along with an accessible
 * `Label` and optional `HelperErrorText` component.
 */
export const Select: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<SelectProps> &
      React.RefAttributes<HTMLSelectElement>
  >,
  React.PropsWithChildren<SelectProps>
> = chakra(
  forwardRef<HTMLSelectElement, React.PropsWithChildren<SelectProps>>(
    (props: React.PropsWithChildren<SelectProps>, ref?) => {
      const {
        autoComplete,
        children,
        defaultValue,
        helperText,
        id,
        invalidText,
        isDisabled = false,
        isInvalid = false,
        isRequired = false,
        labelPosition = "default",
        labelText,
        name,
        onChange,
        placeholder,
        variant = "default",
        showHelperInvalidText = true,
        showLabel = true,
        showRequiredLabel = true,
        requiredLabelText,
        value = "",
        ...rest
      } = props;
      const mainId = useSafeId(id);
      const [labelWidth, setLabelWidth] = useState<number>(0);
      const labelRef = useRef<HTMLDivElement>(null);
      const styles = useMultiStyleConfig("ReservoirSelect", {
        variant,
        labelPosition,
        showLabel,
      });
      const finalInvalidText = invalidText
        ? invalidText
        : "There is an error related to this field.";
      const footnote = isInvalid ? finalInvalidText : helperText;
      const ariaAttributes = getAriaAttrs({
        footnote,
        id: mainId,
        labelText,
        name: "Select",
        showLabel,
      });
      // To control the `Select` component, both `onChange` and `value`
      // must be passed.
      const controlledOrUncontrolledProps = onChange
        ? { onChange, value }
        : defaultValue
        ? { defaultValue }
        : {};

      // The number of pixels between the label and select elements
      // when the labelPosition is inline (equivalent to --nypl-space-xs).
      const labelSelectGap = 8;

      // Set the color of the dropdown arrow based on the color mode.
      const arrowColor = useColorModeValue(
        isInvalid ? "ui.error.primary" : "ui.black",
        isInvalid ? "dark.ui.error.primary" : "dark.ui.typography.body"
      );

      if (onChange && defaultValue) {
        console.warn(
          "NYPL Reservoir Select: Both an `onChange` prop (used for controlled components) and a `defaultValue` prop (used for uncontrolled components) were passed. `defaultValue` will be ignored."
        );
      }

      useEffect(() => {
        if (labelPosition === "inline") {
          if (labelRef.current) {
            const width = labelRef.current.clientWidth + labelSelectGap;
            setLabelWidth(width);
          }
        } else {
          setLabelWidth(0);
        }
      }, [labelPosition]);

      return (
        <ComponentWrapper
          data-testid="ds-select"
          helperText={helperText}
          helperTextStyles={{
            marginStart: { sm: "auto", md: `${labelWidth}px` },
          }}
          id={mainId}
          invalidText={finalInvalidText}
          isInvalid={isInvalid}
          showHelperInvalidText={showHelperInvalidText}
          __css={styles}
          {...rest}
        >
          <Box __css={labelPosition === "inline" && styles.inline}>
            {showLabel && (
              <Box ref={labelRef}>
                <Label
                  htmlFor={mainId}
                  id={`${mainId}-label`}
                  isInlined
                  isRequired={showRequiredLabel && isRequired}
                  requiredLabelText={requiredLabelText}
                >
                  {labelText}
                </Label>
              </Box>
            )}
            <ChakraSelect
              autoComplete={autoComplete}
              id={mainId}
              isRequired={isRequired}
              isDisabled={isDisabled}
              isInvalid={isInvalid}
              name={name}
              placeholder={placeholder}
              ref={ref}
              variant="outline"
              icon={
                <Icon
                  color={arrowColor}
                  id={`${mainId}-select-icon`}
                  name="arrow"
                  size="medium"
                />
              }
              {...controlledOrUncontrolledProps}
              {...ariaAttributes}
              __css={styles.select}
            >
              {children}
            </ChakraSelect>
          </Box>
        </ComponentWrapper>
      );
    }
  )
);

export default Select;
