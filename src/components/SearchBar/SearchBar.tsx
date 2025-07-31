import {
  Box,
  chakra,
  ChakraComponent,
  ChakraProps,
  useMultiStyleConfig,
  BoxProps,
} from "@chakra-ui/react";
import React, { FormHTMLAttributes, forwardRef } from "react";

import Button from "../Button/Button";
import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
import Icon from "../Icons/Icon";
import Select, { SelectProps as InitialSelectProps } from "../Select/Select";
import TextInput, {
  InputProps as InitialInputProps,
} from "../TextInput/TextInput";
import { useSafeId } from "../../hooks/useSafeId";

interface SelectOptionsProps {
  text: string;
  value: string;
}

// Internal types that are used only for `SearchBar` props. View the
// respective `Select` and `TextInput` components to get full details
// of each prop type value.

// From the `Select` component, we only need a certain set of optional props,
// except for `optionsData`.
export type SelectProps = Partial<
  Pick<InitialSelectProps, "id" | "labelText" | "name" | "onChange" | "value">
> & {
  optionsData: SelectOptionsProps[];
};
// From the `TextInput` component, we only need a certain set of optional props.
export type TextInputProps = Pick<InitialInputProps, "labelText" | "name"> &
  Partial<
    Pick<
      InitialInputProps,
      | "defaultValue"
      | "id"
      | "isClearable"
      | "isClearableCallback"
      | "max"
      | "maxLength"
      | "min"
      | "onChange"
      | "pattern"
      | "placeholder"
      | "value"
    >
  >;

export interface SearchBarProps
  extends Pick<BoxProps, keyof ChakraProps>,
    Omit<FormHTMLAttributes<HTMLFormElement>, "color"> {
  /** The onClick callback function for the `Button` component. */
  buttonOnClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /** Optional string for the SearchBar's description above the component. */
  descriptionText?: string;
  /** Optional string value used to set the text for a `Heading` component, or
   * a DS Heading component that can be passed in.
   */
  headingText?: string | JSX.Element;
  /** The text to display below the form in a `HelperErrorText` component. */
  helperText?: HelperErrorTextType;
  /** Optional string to populate the `HelperErrorText` for the error state
   * when `isInvalid` is true. */
  invalidText?: HelperErrorTextType;
  /** Sets children form components in the disabled state. */
  isDisabled?: boolean;
  /** Sets children form components in the error state. */
  isInvalid?: boolean;
  /** Sets children form components in the required state. */
  isRequired?: boolean;
  /** Populates the `aria-label` attribute on the form element. */
  labelText: string;
  /** Sets the `Button` variant type to `noBrand` when true;
   * false by default which sets the type to `primary`. */
  noBrandButtonType?: boolean;
  /** Required props to render a `Select` element. */
  selectProps?: SelectProps | undefined;
  /** Custom input element to render instead of a `TextInput` element. */
  textInputElement?: JSX.Element;
  /** Required props to render a `TextInput` element. */
  textInputProps?: TextInputProps | undefined;
}

/**
 * `SearchBar` renders a wrapper `form` element containing an `Input`, `Button`,
 * and optional `Select`.
 */
export const SearchBar: ChakraComponent<
  React.ForwardRefExoticComponent<
    SearchBarProps & React.RefAttributes<HTMLDivElement>
  >,
  SearchBarProps
> = chakra(
  forwardRef<HTMLDivElement, SearchBarProps>((props, ref?) => {
    const {
      action,
      buttonOnClick,
      descriptionText,
      headingText,
      helperText,
      id,
      invalidText,
      isDisabled = false,
      isInvalid = false,
      isRequired = false,
      labelText,
      method,
      noBrandButtonType = false,
      onSubmit,
      selectProps,
      textInputElement,
      textInputProps,
      ...rest
    } = props;
    const mainId = useSafeId(id);
    const hasSelectElem = !!selectProps;
    const styles = useMultiStyleConfig("SearchBar", { hasSelectElem });
    const stateProps = {
      helperText: "",
      isDisabled,
      isInvalid,
      isRequired,
      showHelperInvalidText: false,
      showLabel: false,
    };
    const footnote = isInvalid ? invalidText : helperText;
    const finalAriaLabel = footnote ? `${labelText} - ${footnote}` : labelText;
    const inputPlaceholder = textInputProps?.placeholder || "Search terms";
    const textInputPlaceholder = `${inputPlaceholder} ${
      isRequired ? "(required)" : ""
    }`;
    const buttonType = noBrandButtonType ? "noBrand" : "primary";

    // Render the `Select` component.
    const selectElem = selectProps && (
      <Select
        id={`${selectProps?.id || mainId}-select`}
        labelText={selectProps?.labelText}
        name={selectProps?.name}
        onChange={selectProps?.onChange}
        variant="searchbar"
        value={selectProps?.value}
        __css={styles.select}
        data-select
        {...stateProps}
      >
        {selectProps?.optionsData.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </Select>
    );
    // Render the `TextInput` component.
    const textInputNative = textInputProps && (
      <TextInput
        aria-describedby={footnote ? `${mainId}-helperText` : undefined}
        className="ds-searchBar-textInput"
        defaultValue={textInputProps?.defaultValue}
        id={`${textInputProps?.id || mainId}-textInput`}
        isClearable={textInputProps?.isClearable}
        isClearableCallback={textInputProps?.isClearableCallback}
        labelText={textInputProps?.labelText}
        name={textInputProps?.name}
        max={textInputProps?.max}
        maxLength={textInputProps?.maxLength}
        min={textInputProps?.min}
        onChange={textInputProps?.onChange}
        pattern={textInputProps?.pattern}
        placeholder={textInputPlaceholder}
        textInputVariant={selectElem ? "searchBarSelect" : "searchBar"}
        type="text"
        value={textInputProps?.value}
        {...stateProps}
      />
    );
    // Render the `Button` component.
    const buttonElem = (
      <Button
        className="ds-searchBar-button"
        data-button
        id={`${mainId}-submit-button`}
        isDisabled={isDisabled}
        onClick={buttonOnClick}
        type="submit"
        variant={buttonType}
        sx={styles.button}
      >
        <Icon align="left" id={`${mainId}-submit-icon`} name="search" />
        <span>Search</span>
      </Button>
    );
    // If a custom input element was passed, use that element
    // instead of the DS `TextInput` component.
    const textInputElem = textInputElement || textInputNative;

    return (
      <ComponentWrapper
        data-testid="ds-searchBar"
        descriptionText={descriptionText}
        headingText={headingText}
        helperText={helperText}
        id={mainId}
        invalidText={
          invalidText ? `There was a problem. ${invalidText}` : undefined
        }
        isInvalid={isInvalid}
        ref={ref}
        sx={{ containerType: "inline-size" }}
        {...rest}
      >
        <Box
          as="form"
          id={`${mainId}-form`}
          aria-label={finalAriaLabel}
          onSubmit={onSubmit}
          method={method}
          action={action}
          __css={styles}
        >
          {selectElem}
          <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
            {textInputElem}
            {buttonElem}
          </Box>
        </Box>
      </ComponentWrapper>
    );
  })
);

export default SearchBar;
