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

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref?) => {
    const {
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
    } = props;

    const attributes = props.attributes || {};
    const modifiers = props.modifiers ? props.modifiers : [];
    const id = props.id || generateUUID();

    if (!showLabel) attributes["aria-label"] = labelText;
    if (helperText) attributes["aria-describedby"] = helperText;

    if (errored) {
      modifiers.push("error");
    }
    // WILL COME BACK TO OFFERING TEXTAREA AS AN OPTION
    // if (type === TextInputTypes.textarea) {
    //   modifiers.push("textarea");
    // }

    const errorOutput = errorText
      ? errorText
      : "There is an error related to this field.";

    let footnote;
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

    const textField = (
      <input
        id={id}
        className={bem("inputfield", modifiers, "", [className])}
        type={type}
        value={value}
        aria-required={required}
        aria-hidden={type === TextInputTypes.hidden}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
        {...attributes}
      />
    );
    // const textareaField = (
    //   <textarea
    //     id={id}
    //     className={bem("inputfield", modifiers, "", [className])}
    //     aria-required={required}
    //     aria-hidden={type === TextInputTypes.hidden}
    //     disabled={disabled}
    //     required={required}
    //     placeholder={placeholder}
    //     onChange={onChange}
    //     // ref={ref}
    //     {...attributes}
    //   >
    //     {value}
    //   </textarea>
    // );
    // WILL COME BACK TO OFFERING TEXTAREA AS AN OPTION
    // const fieldOutput =
    //   type === TextInputTypes.textarea ? textareaField : textField;
    const fieldOutput = textField;

    const optReqFlag = required ? "Required" : "Optional";
    const transformedInput = (
      <div className="textinput">
        {labelText && showLabel && type !== TextInputTypes.hidden && (
          <Label htmlFor={id} optReqFlag={optReqFlag} id={id + `-label`}>
            {labelText}
          </Label>
        )}
        {fieldOutput}
        {((helperText && type !== TextInputTypes.hidden) || errored) && (
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
