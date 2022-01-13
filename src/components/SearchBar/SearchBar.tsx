import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";
import Icon from "../Icons/Icon";
import { IconAlign, IconNames, IconSizes } from "../Icons/IconTypes";
import Select from "../Select/Select";
import { SelectTypes } from "../Select/SelectTypes";
import TextInput from "../TextInput/TextInput";
import { TextInputTypes, TextInputVariants } from "../TextInput/TextInputTypes";
import generateUUID from "../../helpers/generateUUID";

// Internal interfaces that are used only for `SearchBar` props.
interface SelectProps {
  labelText: string;
  name: string;
  optionsData: string[];
}
interface TextInputProps {
  labelText: string;
  name: string;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  placeholder: string;
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
  helperErrorText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Optional string to populate the `HelperErrorText` for the error state
   * when `isInvalid` is true. */
  invalidText?: string;
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
    helperErrorText,
    id = generateUUID(),
    invalidText,
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    labelText,
    method,
    onSubmit,
    selectProps,
    textInputElement,
    textInputProps,
  } = props;
  const styles = useMultiStyleConfig("SearchBar", { hasSelect: selectProps });
  const stateProps = {
    helperText: "",
    isDisabled,
    isInvalid,
    isRequired,
    showHelperInvalidText: false,
    showLabel: false,
  };
  const helperErrorTextID = generateUUID();
  const ariaDescribedby = helperErrorTextID;
  const footnote = isInvalid ? invalidText : helperErrorText;
  const finalAriaLabel = footnote ? `${labelText} - ${footnote}` : labelText;
  const textInputPlaceholder = `${textInputProps?.placeholder} ${
    isRequired ? "(Required)" : ""
  }`;
  // Render the `Select` component.
  const selectElem = selectProps && (
    <Select
      id={generateUUID()}
      name={selectProps?.name}
      labelText={selectProps?.labelText}
      type={SelectTypes.SearchBar}
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
      id={generateUUID()}
      labelText={textInputProps?.labelText}
      placeholder={textInputPlaceholder}
      onChange={textInputProps?.onChange}
      name={textInputProps?.name}
      type={TextInputTypes.text}
      variantType={
        selectElem
          ? TextInputVariants.SearchBarSelect
          : TextInputVariants.SearchBar
      }
      value={textInputProps?.value}
      {...stateProps}
    />
  );
  // Render the `Button` component.
  const buttonElem = (
    <Button
      id={generateUUID()}
      buttonType={ButtonTypes.SearchBar}
      type="submit"
      onClick={buttonOnClick}
      isDisabled={isDisabled}
    >
      <Icon
        name={IconNames.Search}
        size={IconSizes.Small}
        align={IconAlign.Left}
      />
      Search
    </Button>
  );
  // If a custom input element was passed, use that instead of the
  // `TextInput` component.
  const textInputElem = textInputElement || textInputNative;

  return (
    <ComponentWrapper
      descriptionText={descriptionText}
      headingText={headingText}
      helperText={helperErrorText}
      id={id}
      invalidText={invalidText}
      isInvalid={isInvalid}
    >
      <Box
        as="form"
        id={`${id}-form`}
        className={className}
        role="search"
        aria-label={finalAriaLabel}
        aria-describedby={ariaDescribedby}
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
