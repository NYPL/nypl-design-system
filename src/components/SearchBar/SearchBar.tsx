import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";
import Select from "../Select/Select";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import HelperErrorText from "../HelperErrorText/HelperErrorText";

export interface SearchBarProps {
  /** Adds 'action' property to the `form` element. */
  action?: string;
  /** Populates aria-label on the form and labels the entire SearchBar. */
  ariaLabel?: string;
  /** A class name for the `form` element. */
  className?: string;
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
}

/**
 * Renders a wrapper `form` element to be used with `Select` (optional),
 * `Input`, and `Button` components together. */
export default function SearchBar(
  props: React.PropsWithChildren<SearchBarProps>
) {
  const {
    ariaLabel,
    children,
    className,
    id = generateUUID(),
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    onSubmit,
    method,
    action,
  } = props;
  const styles = useMultiStyleConfig("SearchBar", {});
  const stateProps = { isDisabled, isInvalid, isRequired };
  // Select, TextInput, Button
  const topRow = [];
  // HelperErrorText
  const bottomRow = [];
  let ariaDescribedby = null;
  let finalAriaLabel;

  React.Children.map(children, (child: React.ReactElement, key) => {
    if (!child) return;
    if (child.type === Select || child.props?.mdxType === "Select") {
      topRow.push(
        React.cloneElement(child, {
          key,
          className: "select",
          showLabel: false,
          helperText: "",
          ...stateProps,
        })
      );
    } else if (
      child.type === TextInput ||
      child.props?.mdxType === "TextInput"
    ) {
      finalAriaLabel = ariaLabel || child.props.labelText;
      topRow.push(
        React.cloneElement(child, {
          key,
          className: "textInput",
          helperText: "",
          showLabel: false,
          ...stateProps,
        })
      );
    } else if (child.type === Button || child.props?.mdxType === "Button") {
      topRow.push(React.cloneElement(child, { key, disabled: isDisabled }));
    } else if (
      child.type === HelperErrorText ||
      child.props?.mdxType === "HelperErrorText"
    ) {
      ariaDescribedby = child.props?.id;
      bottomRow.push(React.cloneElement(child, { key, isError: isInvalid }));
    } else {
      // Assuming it's an autosuggest component.
      topRow.push(child);
    }
  });

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
      <Box __css={styles.topRow}>{topRow}</Box>
      {bottomRow}
    </Box>
  );
}
