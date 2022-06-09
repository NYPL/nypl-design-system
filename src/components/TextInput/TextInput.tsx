import {
  chakra,
  Input as ChakraInput,
  Textarea as ChakraTextarea,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";
import Label from "../Label/Label";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
import { getAriaAttrs } from "../../utils/utils";

// HTML Input types as defined by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
export type TextInputTypes =
  | "email"
  | "hidden"
  | "number"
  | "password"
  | "text"
  | "textarea"
  | "tel"
  | "url";

// Only used internally.
export const TextInputFormats = {
  email: "jdoe@domain.com",
  hidden: "",
  password: "",
  text: "",
  tel: "(123) 123-1234",
  textarea: "",
  url: "https://domain.com",
};

// Only used internally in `TextInput` and `SearchBar`.
export type TextInputVariants = "default" | "searchBar" | "searchBarSelect";

export interface InputProps {
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
  /** The max number for a `number` TextInput type. */
  max?: number;
  /** The max length of the input field. This prop is for all input types
   * except for the `number` type. */
  maxLength?: number;
  /** The min number for a `number` TextInput type. */
  min?: number;
  /** Used to reference the input element in forms. */
  name?: string;
  /** The action to perform on the `input`/`textarea`'s onChange function  */
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  /** The action to perform on the `input`/`textarea`'s onClick function  */
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  /** The action to perform on the `input`/`textarea`'s onFocus function  */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
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
        className,
        defaultValue,
        helperText,
        id,
        invalidText,
        isDisabled = false,
        isInvalid = false,
        isRequired = false,
        labelText,
        max,
        maxLength,
        min,
        name,
        onChange,
        onClick,
        onFocus,
        placeholder,
        showHelperInvalidText = true,
        showLabel = true,
        showRequiredLabel = true,
        step = 1,
        textInputType = "default",
        type = "text",
        value,
        ...rest
      } = props;
      const styles = useMultiStyleConfig("TextInput", {
        variant: textInputType,
      });
      const isTextArea = type === "textarea";
      const isHidden = type === "hidden";
      const finalInvalidText = invalidText
        ? invalidText
        : "There is an error related to this field.";
      let footnote: HelperErrorTextType = isInvalid
        ? finalInvalidText
        : helperText;
      const ariaAttributes = getAriaAttrs({
        footnote,
        id,
        labelText,
        name: "TextInput",
        showLabel,
      });
      let finalIsInvalid = isInvalid;
      let fieldOutput;
      let options;

      if (!id) {
        console.warn(
          "NYPL Reservoir TextInput: This component's required `id` prop was not passed."
        );
      }

      if (type === "number" && max && min && min > max) {
        finalIsInvalid = true;
        console.warn(
          "NYPL Reservoir TextInput: The `min` prop is greater than the `max` prop."
        );
      }

      if (type === "tel" || type === "url" || type === "email") {
        const example = TextInputFormats[type] || "";
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
            isInvalid: finalIsInvalid,
            max,
            maxLength,
            min,
            name,
            onChange,
            onClick,
            onFocus,
            placeholder,
            ref,
            // The `step` attribute is useful for the number type.
            step: type === "number" ? step : null,
            ...ariaAttributes,
            ...rest,
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
        <ComponentWrapper
          className={className}
          helperText={!finalIsInvalid ? footnote : helperText}
          id={id}
          invalidText={finalInvalidText}
          isInvalid={finalIsInvalid}
          showHelperInvalidText={showHelperInvalidText && !isHidden}
          __css={styles}
          {...rest}
        >
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
        </ComponentWrapper>
      );
    }
  )
);

export default TextInput;
