/**
 * An Input field that labels a TextField and has Helpers or Errors
 */
import * as React from "react";
import bem from "../../../utils/bem";
import TextField, { TextFieldOptions } from "../../01-atoms/Forms/TextField";
import Label, { LabelOptions } from "./Label";
import HelperErrorText, { HelperErrorTextOptions } from "./HelperErrorText";

export interface InputOptions {
  baseClass?: string;
  blockName?: string;

  labelId?: string;
  labelContent?: JSX.Element;

  inputId?: string;
  inputType?: string;
  inputValue?: string | number;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  isRequired?: boolean;

  helperContentOpts?: HelperErrorTextOptions;
  errorContentOpts?: HelperErrorTextOptions;

  showError?: boolean;
}
interface InputProps {
  /** Used for BEM css convention. */
  baseClass?: string;
  /** Used for BEM css convention. */
  blockName?: string;

  /** The Label ID for the input */
  labelId: string;
  /** The label content for the input */
  labelContent: JSX.Element;

  /** The unique ID of the input */
  inputId: string;
  /** The HTML inputType */
  inputType?: string;
  /** The current input value */
  inputValue?: string | number;
  /** The action to perform on the <input>'s onChange function  */
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Whether the "required" flag is shown */
  isRequired?: boolean;

  /** The input helper text */
  helperContentOpts?: HelperErrorTextOptions;
  /** The input error text */
  errorContentOpts?: HelperErrorTextOptions;

  /** Whether the input is currently in an error state */
  showError?: boolean;
}

export default function Input(props: InputProps) {

  const {
    baseClass = "input",
    blockName = "form-item",
    labelId,
    labelContent,
    inputId,
    inputType = "text",
    inputValue,
    onInputChange,
    isRequired,
    helperContentOpts,
    errorContentOpts,
    showError
  } = props;

  if (showError && !errorContentOpts) {
    throw new Error("Error should be shown, but no errorContentOpts passed");
  }

  let labelOptions: LabelOptions = { id: labelId, labelContent: labelContent, referenceId: inputId };
  let textFieldOptions: TextFieldOptions = { id: inputId, ariaLabelledBy: labelId, value: inputValue, isRequired: isRequired, type: inputType, onChange: onInputChange };

  return (
    <div className={bem(blockName, [], baseClass)}>
      <div className={bem("label", [], baseClass)}>
        <Label referenceId={labelOptions.referenceId} {...labelOptions}></Label>
        {isRequired && <span className={bem("required-message", [], baseClass)}>
          Required
        </span>}
      </div>

      <TextField id={inputId} {...textFieldOptions}></TextField>
      {helperContentOpts && <div className={bem("help-text", [], baseClass)}>
        <HelperErrorText id={helperContentOpts.id} isError={false}>{helperContentOpts.content}</HelperErrorText>
      </div>}
      {showError && <div className={bem("help-text", [], baseClass)}>
        <HelperErrorText id={errorContentOpts.id} isError={true}>{errorContentOpts.content}</HelperErrorText>
      </div>}
    </div>
  );
}
