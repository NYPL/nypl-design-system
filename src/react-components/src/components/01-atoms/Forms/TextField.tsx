
// AF-239 Text Field
import * as React from "react";
import bem from "../../../utils/bem";

export interface TextFieldOptions {
  id?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  isRequired?: boolean;
  blockName?: string;
  modifiers?: string[];
  value?: string | number;
  placeholderText?: string;
  type?: string;
  onChange?: (event: React.FormEvent) => void;
}

export interface TextFieldProps {
  id: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  isRequired?: boolean;
  blockName?: string;
  modifiers?: string[];
  value?: string | number;
  placeholderText?: string;
  type?: string;
  onChange?: (event: React.FormEvent) => void;
}
export default function TextField(props: TextFieldProps) {
  const { id, ariaLabel, ariaLabelledBy, isRequired = "false", blockName, modifiers, value, placeholderText, type= "text", onChange } = props;
  let textfieldBlockName = blockName ? blockName : "form-item";

  if (!ariaLabel && !ariaLabelledBy) {
    throw new Error("Either label or ariaLabel must be defined");
  }

  let textFieldProps = {
    className: bem("input", modifiers, textfieldBlockName),
    type: type,
    value: value,
    onChange: onChange,
    "aria-label": !ariaLabelledBy ? ariaLabel : undefined,
    "aria-labelledby": ariaLabelledBy
  };


  if (isRequired) {
    textFieldProps["aria-required"] = true;
  }

  let transformedTextField = <input id={id} {...textFieldProps} placeholder={placeholderText} />;
  return transformedTextField;
}
