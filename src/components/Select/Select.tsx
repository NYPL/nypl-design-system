import React from "react";
import {
  Box,
  Select as ChakraSelect,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";
import Icon from "../Icons/Icon";
import { IconNames, IconSizes } from "../Icons/IconTypes";
import Label from "../Label/Label";
import { SelectTypes } from "./SelectTypes";
export interface SelectProps {
  /** Optionally pass in additional Chakra-based styles. */
  additionalStyles?: { [key: string]: any };
  /** A class name for the `div` parent element. */
  className?: string;
  /** Optional string to populate the `HelperErrorText` for the standard state. */
  helperText?: HelperErrorTextType;
  /** ID that other components can cross reference for accessibility purposes */
  id: string;
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
  /** Provides text for a `Label` component if `showLabel` is set to `true`;
   * populates an `aria-label` attribute on the select input if `showLabel` is
   * set to `false`. */
  labelText: string;
  /** Used to reference the select element in forms. */
  name: string;
  /** The callback function to get the selected value.
   * Should be passed along with `value` for controlled components. */
  onChange?: (event: React.FormEvent) => void;
  /** Placeholder text in the select element. */
  placeholder?: string;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Offers the ability to show the select's label onscreen or hide it. Refer
   * to the `labelText` property for more information. */
  showLabel?: boolean;
  /** Whether or not to display the "Required"/"Optional" text in the label text. */
  showOptReqLabel?: boolean;
  /** The variant to display. */
  type?: SelectTypes;
  /** The value of the selected option.
   * Should be passed along with `onChange` for controlled components. */
  value?: string;
}

/**
 * Component that renders Chakra's `Select` component along with an accessible
 * `Label` and optional `HelperErrorText` component.
 */
const Select = React.forwardRef<
  HTMLSelectElement,
  React.PropsWithChildren<SelectProps>
>((props: React.PropsWithChildren<SelectProps>, ref?) => {
  const {
    additionalStyles = {},
    children,
    className,
    helperText,
    id,
    invalidText,
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    labelText,
    name,
    onChange,
    placeholder,
    showHelperInvalidText = true,
    showLabel = true,
    showOptReqLabel = true,
    type = SelectTypes.Default,
    value = "",
  } = props;
  const ariaAttributes = {};
  const optReqFlag = isRequired ? "Required" : "Optional";
  const styles = useMultiStyleConfig("CustomSelect", { variant: type });
  const finalInvalidText = invalidText
    ? invalidText
    : "There is an error related to this field.";
  const footnote: HelperErrorTextType = isInvalid
    ? finalInvalidText
    : helperText;
  // To control the `Select` component, both `onChange` and `value`
  // must be passed.
  const controlledProps = onChange ? { onChange, value } : {};

  if (!showLabel) {
    ariaAttributes["aria-label"] =
      labelText && footnote ? `${labelText} - ${footnote}` : labelText;
  } else if (helperText) {
    ariaAttributes["aria-describedby"] = `${id}-helperText`;
  }

  if (!id) {
    console.warn(
      "NYPL Reservoir Select: This component's required `id` prop was not passed."
    );
  }

  if (React.Children.count(children) > 10) {
    console.warn(
      "NYPL Reservoir Select: NYPL DS recommends that <select> fields have no more than 10 options; an auto-complete text input is a good alternative for 11 or more options."
    );
  }

  if (React.Children.count(children) < 4) {
    console.warn(
      "NYPL Reservoir Select: NYPL DS recommends that <select> fields have at least 4 options; a radio button group is a good alternative for 3 or fewer options."
    );
  }

  return (
    <Box className={className} __css={{ ...styles, ...additionalStyles }}>
      {showLabel && (
        <Label
          id={`${id}-label`}
          htmlFor={id}
          optReqFlag={showOptReqLabel && optReqFlag}
        >
          {labelText}
        </Label>
      )}
      <ChakraSelect
        id={id}
        variant="outline"
        isRequired={isRequired}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        name={name}
        placeholder={placeholder}
        ref={ref}
        {...controlledProps}
        {...ariaAttributes}
        icon={
          <Icon
            id={`${id}-icon`}
            name={IconNames.Arrow}
            size={IconSizes.Medium}
          />
        }
        __css={styles.select}
      >
        {children}
      </ChakraSelect>
      {footnote && showHelperInvalidText && (
        <Box __css={styles.helper} aria-disabled={isDisabled}>
          <HelperErrorText
            id={`${id}-helperText`}
            isInvalid={isInvalid}
            text={footnote}
          />
        </Box>
      )}
    </Box>
  );
});

export default Select;
