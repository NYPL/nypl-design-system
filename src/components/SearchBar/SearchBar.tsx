import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import * as React from "react";

import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
import Icon from "../Icons/Icon";
import { IconAlign, IconNames, IconSizes } from "../Icons/IconTypes";
import Select from "../Select/Select";
import { SelectTypes } from "../Select/SelectTypes";
import TextInput from "../TextInput/TextInput";
import { TextInputTypes, TextInputVariants } from "../TextInput/TextInputTypes";
import generateUUID from "../../helpers/generateUUID";

interface BaseProps {
  labelText: string;
  name: string;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}
// Internal interfaces that are used only for `SearchBar` props.
export interface SelectProps extends BaseProps {
  optionsData: string[];
}
export interface TextInputProps extends BaseProps {
  placeholder?: string;
  value?: string;
}

export interface SearchBarProps {
  /** Adds 'action' property to the `form` element. */
  action?: string;
  /** The onClick callback function for the `Button` component. */
  buttonOnClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /** A class name for the `form` element. */
  className?: string;
  /** Optional string for the SearchBar's description above the component. */
  descriptionText?: string;
  /** Optional string for the SearchBar's heading text above the component. */
  headingText?: string;
  /** The text to display below the form in a `HelperErrorText` component. */
  helperText?: HelperErrorTextType;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
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
  /** Adds 'method' property to the `form` element. */
  method?: string;
  /** Sets the `Button` variant type to `ButtonTypes.NoBrand` when true;
   * false by default which sets the type to `ButtonTypes.Primary`. */
  noBrandButtonType?: boolean;
  /** Handler function when the form is submitted. */
  onSubmit: (event: React.FormEvent) => void;
  /** Required props to render a `Select` element. */
  selectProps?: SelectProps | undefined;
  /** Custom input element to render instead of a `TextInput` element. */
  textInputElement?: JSX.Element;
  /** Required props to render a `TextInput` element. */
  textInputProps?: TextInputProps | undefined;
}

/**
 * Renders a wrapper `form` element to be used with `Select` (optional),
 * `Input`, and `Button` components together.
 */
export default function SearchBar(props: SearchBarProps) {
  const {
    action,
    buttonOnClick = null,
    className,
    descriptionText,
    headingText,
    helperText,
    id = generateUUID(),
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
  } = props;
  const styles = useMultiStyleConfig("SearchBar", {});
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
    isRequired ? "(Required)" : ""
  }`;
  const buttonType = noBrandButtonType
    ? ButtonTypes.NoBrand
    : ButtonTypes.Primary;
  const searchBarButtonStyles = {
    borderLeftRadius: "none",
    borderRightRadius: { base: "none", md: "sm" },
    lineHeight: "1.70",
    marginBottom: "auto",
  };
  // Render the `Select` component.
  const selectElem = selectProps && (
    <Select
      additionalStyles={styles.select}
      id={`searchbar-select-${id}`}
      labelText={selectProps?.labelText}
      name={selectProps?.name}
      onChange={selectProps?.onChange}
      selectType={SelectTypes.SearchBar}
      {...stateProps}
    >
      {selectProps?.optionsData.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
  // Render the `TextInput` component.
  const textInputNative = textInputProps && (
    <TextInput
      id={`searchbar-textinput-${id}`}
      labelText={textInputProps?.labelText}
      name={textInputProps?.name}
      onChange={textInputProps?.onChange}
      placeholder={textInputPlaceholder}
      textInputType={
        selectElem
          ? TextInputVariants.SearchBarSelect
          : TextInputVariants.SearchBar
      }
      type={TextInputTypes.text}
      value={textInputProps?.value}
      {...stateProps}
    />
  );
  // Render the `Button` component.
  const buttonElem = (
    <Button
      additionalStyles={searchBarButtonStyles}
      buttonType={buttonType}
      id={`searchbar-button-${id}`}
      isDisabled={isDisabled}
      onClick={buttonOnClick}
      type="submit"
    >
      <Icon
        align={IconAlign.Left}
        id={`searchbar-icon-${id}`}
        name={IconNames.Search}
        size={IconSizes.Small}
      />
      Search
    </Button>
  );
  // If a custom input element was passed, use that element
  // instead of the DS `TextInput` component.
  const textInputElem = textInputElement || textInputNative;

  return (
    <ComponentWrapper
      descriptionText={descriptionText}
      headingText={headingText}
      helperText={helperText}
      id={id}
      invalidText={invalidText}
      isInvalid={isInvalid}
    >
      <Box
        as="form"
        id={`searchbar-form-${id}`}
        className={className}
        role="search"
        aria-label={finalAriaLabel}
        onSubmit={onSubmit}
        method={method}
        action={action}
        __css={styles}
      >
        {selectElem}
        {textInputElem}
        {buttonElem}
      </Box>
    </ComponentWrapper>
  );
}
