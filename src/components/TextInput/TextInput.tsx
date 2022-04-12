import {
  Box,
  chakra,
  Input as ChakraInput,
  Textarea as ChakraTextarea,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

import {
  TextInputTypes,
  TextInputFormats,
  TextInputVariants,
} from "./TextInputTypes";
import Label from "../Label/Label";
import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";

export interface InputProps {
  /** Optionally pass in additional Chakra-based styles. */
  additionalStyles?: { [key: string]: any };
  /** Additional attributes to pass to the `<input>` or `<textarea>` element */
  attributes?: { [key: string]: any };
  /** A class name for the TextInput parent div. */
  className?: string;
  /** The starting value of the input field. */
  defaultValue?: string;
  /** Populates the HelperErrorText for the standard state */
  helperText?: HelperErrorTextType;
  /** ID that other components can cross reference for accessibility purposes */
  id: string;
  /** Populates the HelperErrorText for the error state */
  invalidText?: HelperErrorTextType;
  /** Adds the `disabled` and `aria-disabled` prop to the input when true */
  isDisabled?: boolean;
  /** Adds errored styling to the input/textarea and helper text elements */
  isInvalid?: boolean;
  /** Will add `required` and `aria-required` props to the input/textarea elements */
  isRequired?: boolean;
  /** Provides text for a `Label` component if `showLabel` is set to true;
   * populates an `aria-label` attribute if `showLabel` is set to false. */
  labelText: string;
  /** Used to reference the input element in forms. */
  name?: string;
  /** The action to perform on the `input`/`textarea`'s onChange function  */
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  /** Populates the placeholder for the input/textarea elements */
  placeholder?: string;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Offers the ability to show the label onscreen or hide it. Refer to the
   * `labelText` property for more information. */
  showLabel?: boolean;
  /** Whether or not to display the "(Required)" text in the label text.
   * True by default. */
  showRequiredLabel?: boolean;
  /** The amount to increase or decrease when using the number type. */
  step?: number;
  /** FOR INTERNAL DS USE ONLY: the input variant to display. */
  textInputType?: TextInputVariants;
  /** HTML Input types as defined by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input */
  type?: TextInputTypes;
  /** Populates the value of the input/textarea elements */
  value?: string;
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
export const TextInput = chakra(
  React.forwardRef<TextInputRefType, InputProps>(
    (props, ref: React.Ref<TextInputRefType>) => {
      const {
        additionalStyles = {},
        attributes = {},
        className,
        defaultValue,
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
        showRequiredLabel = true,
        step = 1,
        textInputType = TextInputVariants.Default,
        type = TextInputTypes.text,
        value,
        ...rest
      } = props;
      const styles = useMultiStyleConfig("TextInput", {
        variant: textInputType,
      });
      const finalStyles = { ...styles, ...additionalStyles };
      const isTextArea = type === TextInputTypes.textarea;
      const isHidden = type === TextInputTypes.hidden;
      const finalInvalidText = invalidText
        ? invalidText
        : "There is an error related to this field.";
      let footnote: HelperErrorTextType = isInvalid
        ? finalInvalidText
        : helperText;
      let fieldOutput;
      let options;

      if (!id) {
        console.warn(
          "NYPL Reservoir TextInput: This component's required `id` prop was not passed."
        );
      }

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
        ? { id, "aria-hidden": isHidden, name, onChange, ref }
        : {
            "aria-required": isRequired,
            defaultValue,
            id,
            isDisabled,
            isRequired,
            isInvalid,
            placeholder,
            name,
            onChange,
            ref,
            // The `step` attribute is useful for the number type.
            step: type === TextInputTypes.number ? step : null,
            ...attributes,
          };
      // For `input` and `textarea`, all attributes are the same but `input`
      // also needs `type` and `value` to render correctly.
      if (!isTextArea) {
        options = { type, value, ...options } as any;
        fieldOutput = <ChakraInput {...options} __css={finalStyles.input} />;
      } else {
        fieldOutput = (
          <ChakraTextarea {...options} __css={finalStyles.textarea}>
            {value}
          </ChakraTextarea>
        );
      }

      return (
        <Box __css={finalStyles} className={className} {...rest}>
          {labelText && showLabel && !isHidden && (
            <Label
              htmlFor={id}
              id={`${id}-label`}
              isRequired={showRequiredLabel && isRequired}
            >
              {labelText}
            </Label>
          )}
          {fieldOutput}
          {footnote && showHelperInvalidText && !isHidden && (
            <Box __css={finalStyles.helper} aria-disabled={isDisabled}>
              <HelperErrorText
                id={`${id}-helperText`}
                isInvalid={isInvalid}
                text={footnote}
              />
            </Box>
          )}
        </Box>
      );
    }
  )
);

export default TextInput;
