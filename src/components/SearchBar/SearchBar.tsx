import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";
import Select from "../Select/Select";
import TextInput from "../TextInput/TextInput";
import { TextInputTypes, TextInputVariants } from "../TextInput/TextInputTypes";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/IconTypes";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import { SelectTypes } from "../Select/SelectTypes";

// Internal interfaces that are used only for `SearchBar` props.
interface SelectProps {
  labelText: string;
  name: string;
  optionsData: string[];
}
interface TextInputProps {
  labelText: string;
  placeholder: string;
}

export interface SearchBarProps {
  /** Adds 'action' property to the `form` element. */
  action?: string;
  /** Populates aria-label on the form and labels the entire SearchBar. */
  ariaLabel?: string;
  /** The onClick callback function for the `Button` component. */
  buttonOnClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /** A class name for the `form` element. */
  className?: string;
  /** The text to display below the form in a `HelperErrorText` component. */
  helperErrorText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Sets children form components in the disabled state. */
  isDisabled?: boolean;
  /** Sets children form components in the error state. */
  isInvalid?: boolean;
  /** Sets children form components in the required state. */
  isRequired?: boolean;
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
    ariaLabel,
    buttonOnClick = null,
    className,
    helperErrorText,
    id = generateUUID(),
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    method,
    onSubmit,
    selectProps,
    textInputElement,
    textInputProps,
  } = props;
  const styles = useMultiStyleConfig("SearchBar", {});
  const stateProps = { isDisabled, isInvalid, isRequired };
  const helperErrorTextID = generateUUID();
  const ariaDescribedby = helperErrorTextID;
  const finalAriaLabel = ariaLabel || textInputProps?.labelText;
  // Render the `Select` component.
  const selectElem = selectProps && (
    <Select
      id={generateUUID()}
      name={selectProps?.name}
      labelText={selectProps?.labelText}
      showLabel={false}
      helperText=""
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
      placeholder={textInputProps?.placeholder}
      type={TextInputTypes.text}
      variantType={TextInputVariants.SearchBar}
      helperText=""
      showLabel={false}
      {...stateProps}
    />
  );
  // Render the `Button` component.
  const buttonElem = (
    <Button
      id={generateUUID()}
      buttonType={ButtonTypes.Primary}
      type="submit"
      onClick={buttonOnClick}
      disabled={isDisabled}
    >
      <Icon
        name={IconNames.search}
        modifiers={["small", "icon-left"]}
        decorative
      />
      Search
    </Button>
  );
  // Render the `HelperErrorText` component.
  const helperErrorTextElem = helperErrorText && (
    <HelperErrorText id={helperErrorTextID} isError={isInvalid}>
      {helperErrorText}
    </HelperErrorText>
  );
  // If a custom input element was passed, use that instead of the
  // `TextInput` component.
  const textInputElem = textInputElement || textInputNative;

  return (
    <Box
      as="form"
      id={id}
      className={className}
      role="search"
      aria-label={finalAriaLabel}
      aria-describedby={ariaDescribedby}
      onSubmit={onSubmit}
      method={method}
      action={action}
      __css={styles}
    >
      <Box __css={styles.topRow}>
        {selectElem}
        {textInputElem}
        {buttonElem}
      </Box>
      {helperErrorTextElem}
    </Box>
  );
}
