import * as React from "react";
import bem from "../../utils/bem";
import {
  TextInputTypes,
  TextInputFormats,
  TextInputPatterns,
} from "./TextInputTypes";
import Label from "../Label/Label";
import HelperErrorText from "../HelperErrorText/HelperErrorText";

export interface InputProps {
  /** Additional attributes to pass to the <input> tag */
  attributes?: { [key: string]: any };
  /** HTML Input types as defined by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input */
  type?: TextInputTypes;
  /** Will add 'aria-required: true' to input */
  required?: boolean;
  /** Provides text for a Label component and populates the aria-label on the input */
  label?: string;
  /** Populates the aria-labelledby on the input */
  labelledBy?: string;
  /** Populates the HelperErrorText for standard state */
  helperText?: string;
  /** Populates the HelperErrorText for error state */
  errorText?: string;
  /** Populates the placeholder of the input */
  placeholder?: string;
  /** Populates the value of the input */
  value?: string | number;
  /** BlockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** className you can add in addition to 'input' */
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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref?) => {
    const {
      attributes,
      type = TextInputTypes.text,
      required,
      label,
      labelledBy,
      helperText,
      errorText,
      placeholder,
      value,
      blockName,
      className,
      disabled,
      errored,
      id,
      onChange,
    } = props;

    const modifiers = props.modifiers ? props.modifiers : [];

    if (errored) {
      modifiers.push("error");
    }
    if (type === TextInputTypes.textarea) {
      modifiers.push("textarea");
    }

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
      <>
        <input
          id={id}
          className={bem("textinput", modifiers, blockName, [className])}
          type={type}
          value={value}
          aria-label={label}
          aria-labelledby={labelledBy}
          aria-required={required}
          aria-hidden={type === TextInputTypes.hidden}
          disabled={disabled}
          placeholder={placeholder}
          pattern={TextInputPatterns[type]}
          onChange={onChange}
          ref={ref}
          {...attributes}
        />
      </>
    );
    const textareaField = (
      <>
        <textarea
          id={id}
          className={bem("textinput", modifiers, blockName, [className])}
          aria-label={label}
          aria-labelledby={labelledBy}
          aria-required={required}
          aria-hidden={type === TextInputTypes.hidden}
          disabled={disabled}
          placeholder={placeholder}
          // onChange={onChange}
          // ref={ref}
          {...attributes}
        >
          {value}
        </textarea>
      </>
    );
    const fieldOutput =
      type === TextInputTypes.textarea ? textareaField : textField;

    const optReqFlag = required ? "Required" : "Optional";
    const transformedInput = (
      <>
        {label && (
          <Label htmlFor="inputID" optReqFlag={optReqFlag} id={"label"}>
            {label}
          </Label>
        )}
        {fieldOutput}
        {/* <input
          id={id}
          className={bem("textinput", modifiers, blockName, [className])}
          type={type}
          value={value}
          aria-label={label}
          aria-labelledby={labelledBy}
          aria-required={required}
          aria-hidden={type === TextInputTypes.hidden}
          disabled={disabled}
          placeholder={placeholder}
          pattern={TextInputPatterns[type]}
          onChange={onChange}
          ref={ref}
          {...attributes}
        /> */}
        {/* {helperText ||
          (errorText && ( */}
        <HelperErrorText isError={errored} id={"helperText"}>
          {footnote}
        </HelperErrorText>
        {/* ))} */}
      </>
    );

    return transformedInput;
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
