
// AF-239 Text Field
import * as React from "react";
import bem from "../../../utils/bem";

export interface TextFieldProps {
  labelId?: string;
  ariaLabel?: string;
  isRequired: boolean;
  blockName?: string;
  modifiers?: string[];
  value?: string;
  placeholderText?: string;
  onChange?: (event: React.FormEvent) => void;
}
export default function TextField(props: TextFieldProps) {
  const { labelId, ariaLabel, isRequired, blockName, modifiers, value, placeholderText, onChange } = props;
  let textfieldBlockName = blockName ? blockName : "form-item";

  let textFieldProps = {
    className: bem("input", modifiers, textfieldBlockName),
    "type": "text",
    value: value,
    onChange: onChange,
  };
  if (labelId) {
    // TODO: Add Label to Text Field
  } else if (ariaLabel) {
    textFieldProps["aria-label"] = ariaLabel;
  } else {
    throw new Error("Either label or ariaLabel must be defined");
  }

  if (isRequired) {
    textFieldProps["aria-required"] = true;
  }

  let transformedTextField = <input {...textFieldProps} placeholder={placeholderText} />;
  return transformedTextField;
}
