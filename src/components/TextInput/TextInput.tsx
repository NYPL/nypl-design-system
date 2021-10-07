import * as React from "react";
import {
  Box,
  Input as ChakraInput,
  Textarea as ChakraTextarea,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import {
  TextInputTypes,
  TextInputFormats,
  TextInputVariants,
} from "./TextInputTypes";
import Label from "../Label/Label";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import generateUUID from "../../helpers/generateUUID";

export interface InputProps {
  /** Additional attributes to pass to the `<input>` or `<textarea>` element */
  attributes?: { [key: string]: any };
  /** A class name for the TextInput parent div. */
  className?: string;
  /** Populates the HelperErrorText for the standard state */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Populates the HelperErrorText for the error state */
  invalidText?: string;
  /** Adds the `disabled` and `aria-disabled` prop to the input when true */
  isDisabled?: boolean;
  /** Adds errored styling to the input/textarea and helper text elements */
  isInvalid?: boolean;
  /** Will add `required` and `aria-required` props to the input/textarea elements */
  isRequired?: boolean;
  /** Provides text for a `Label` component if `showLabel` is set to true;
   * populates an `aria-label` attribute if `showLabel` is set to false. */
  labelText: string;
  /** The action to perform on the `input`/`textarea`'s onChange function  */
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  /** Populates the placeholder for the input/textarea elements */
  placeholder?: string;
  /** Offers the ability to hide the input's helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Offers the ability to show the label onscreen or hide it. Refer to the
   * `labelText` property for more information. */
  showLabel?: boolean;
  /** Offers the ability to show the "Required"/"Optional" label onscreen or
   * hide it. True by default. */
  showOptReqLabel?: boolean;
  /** HTML Input types as defined by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input */
  type?: TextInputTypes;
  /** Populates the value of the input/textarea elements */
  value?: string;
  /** The variant to display. */
  variantType?: TextInputVariants;
}

/**
 * The type used for `ref`s. We want to extend both `input` and `textarea`
 * since both are available to create through `TextInput`.
 */
export type TextInputRefType = HTMLInputElement & HTMLTextAreaElement;

/**
 * Renders either an `input` element with a specified type or a `textarea`
 * element. All types will render an accessible `Label` component and an
 * optional `HelperErrorText` component.
 */
const TextInput = React.forwardRef<TextInputRefType, InputProps>(
  (props, ref: React.Ref<TextInputRefType>) => {
    const {
      attributes = {},
      className,
      helperText,
      id = generateUUID(),
      invalidText,
      isDisabled = false,
      isInvalid = false,
      isRequired = false,
      labelText,
      onChange,
      placeholder,
      showHelperInvalidText = true,
      showLabel = true,
      showOptReqLabel = true,
      type = TextInputTypes.text,
      value,
      variantType = TextInputVariants.Default,
    } = props;
    const styles = useMultiStyleConfig("TextInput", { variant: variantType });
    const isTextArea = type === TextInputTypes.textarea;
    const isHidden = type === TextInputTypes.hidden;
    const optReqFlag = isRequired ? "Required" : "Optional";
    const finalInvalidText = invalidText
      ? invalidText
      : "There is an error related to this field.";
    let footnote: string | React.ReactNode = isInvalid
      ? finalInvalidText
      : helperText;
    let fieldOutput;
    let options;

    if (!showLabel) {
      attributes["aria-label"] =
        labelText && footnote ? `${labelText} - ${footnote}` : labelText;
    } else if (helperText) {
      attributes["aria-describedby"] = `${id}-helperText`;
    }

    if (
      type === TextInputTypes.tel ||
      type === TextInputTypes.url ||
      type === TextInputTypes.email
    ) {
      const example = TextInputFormats[type];
      footnote = (
        <>
          Ex: {example}
          <br />
          {footnote}
        </>
      );
    }

    // When the type is "hidden", the input element needs fewer attributes.
    options = isHidden
      ? { id, "aria-hidden": isHidden, onChange, ref }
      : {
          id,
          "aria-required": isRequired,
          isDisabled,
          isRequired,
          isInvalid,
          placeholder,
          onChange,
          ref,
          ...attributes,
        };
    // For `input` and `textarea`, all attributes are the same but `input`
    // also needs `type` and `value` to render correctly.
    if (!isTextArea) {
      options = { type, value, ...options } as any;
      fieldOutput = <ChakraInput {...options} __css={styles.input} />;
    } else {
      fieldOutput = (
        <ChakraTextarea {...options} __css={styles.textarea}>
          {value}
        </ChakraTextarea>
      );
    }

    return (
      <Box __css={styles} className={className}>
        {labelText && showLabel && !isHidden && (
          <Label
            htmlFor={id}
            optReqFlag={showOptReqLabel && optReqFlag}
            id={`${id}-label`}
          >
            {labelText}
          </Label>
        )}
        {fieldOutput}
        {footnote && showHelperInvalidText && !isHidden && (
          <Box __css={styles.helper} aria-disabled={isDisabled}>
            <HelperErrorText isError={isInvalid} id={`${id}-helperText`}>
              {footnote}
            </HelperErrorText>
          </Box>
        )}
      </Box>
    );
  }
);

export default TextInput;
