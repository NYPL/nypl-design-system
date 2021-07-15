import * as React from "react";
import bem from "../../utils/bem";
import { TextInputTypes, TextInputFormats } from "./TextInputTypes";
import Label from "../Label/Label";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import generateUUID from "../../helpers/generateUUID";

export interface InputProps {
  /** Additional attributes to pass to the `<input>` tag */
  attributes?: { [key: string]: any };
  /** HTML Input types as defined by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input */
  type?: TextInputTypes;
  /** Will add 'aria-required: true' to input */
  required?: boolean;
  /** Provides text for a `Label` component if `showLabel` is set to true; populates a `aria-label` sttribute if `showLabel` is set to false. */
  labelText: string;
  /** Offers the ability to show the label onscreen or hide it. Refer to the `labelText` property for more information. */
  showLabel?: boolean;
  /** Populates the HelperErrorText for standard state */
  helperText?: string;
  /** Populates the HelperErrorText for error state */
  errorText?: string;
  /** Populates the placeholder of the input */
  placeholder?: string;
  /** Populates the value of the input */
  value?: string;
  /** className you can add in addition to 'textinput' */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Helper for modifiers array; adds 'errored' styling */
  errored?: boolean;
  /** Adds the 'disabled' prop to the input when true */
  disabled?: boolean;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

/** The type used for `ref`s. We want to extend both `input` and `textarea`
 * since both are available to create through `TextInput`.
 */
export type TextInputRefType = HTMLInputElement & HTMLTextAreaElement;

/** Renders either an `input` element with a specified type or a `textarea`
 * element. All types will render an accessible Label component and an optional
 * HelperErrorText component.
 */
const TextInput = React.forwardRef<TextInputRefType, InputProps>(
  (props, ref: React.Ref<TextInputRefType>) => {
    const {
      attributes = {},
      type = TextInputTypes.text,
      required,
      labelText,
      showLabel = true,
      helperText,
      errorText,
      placeholder,
      value,
      className,
      disabled,
      errored,
      onChange,
      modifiers = [],
      id = generateUUID(),
    } = props;

    const isTextArea = type === TextInputTypes.textarea;
    const isHidden = type === TextInputTypes.hidden;
    const optReqFlag = required ? "Required" : "Optional";
    const errorOutput = errorText
      ? errorText
      : "There is an error related to this field.";
    let footnote;
    let options;

    if (!showLabel) attributes["aria-label"] = labelText;
    if (helperText) attributes["aria-describedby"] = helperText;

    if (errored) {
      modifiers.push("error");
    }
    if (isTextArea) {
      modifiers.push("textarea");
    }

    if (errored) {
      footnote = errorOutput;
    } else {
      footnote = helperText;
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

    options = {
      id,
      className: bem("inputfield", modifiers, "", [className]),
      "aria-required": required,
      "aria-hidden": isHidden,
      disabled,
      required,
      placeholder,
      onChange,
      ref,
      ...attributes,
    };
    // For `input` and `textarea`, all attributes are the same but `input`
    // also needs `type` and `value` to render correctly.
    if (!isTextArea) {
      options = { type, value, ...options } as any;
    }

    const fieldOutput = React.createElement(
      isTextArea ? "textarea" : "input",
      options,
      isTextArea ? value : null
    );

    const transformedInput = (
      <div className="textinput">
        {labelText && showLabel && !isHidden && (
          <Label htmlFor={id} optReqFlag={optReqFlag} id={id + `-label`}>
            {labelText}
          </Label>
        )}
        {fieldOutput}
        {((helperText && !isHidden) || errored) && (
          <HelperErrorText isError={errored} id={id + `-helperText`}>
            {footnote}
          </HelperErrorText>
        )}
      </div>
    );

    return transformedInput;
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
