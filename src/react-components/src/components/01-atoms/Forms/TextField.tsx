
// AF-239 Text Field
import * as React from "react";
import bem from "../../../utils/bem";

export interface TextFieldProps {
  ariaLabel?: string;
  ariaLabelledBy?: string;
  isRequired: boolean;
  blockName?: string;
  modifiers?: string[];
  value?: string;
  placeholderText?: string;
  onChange?: (event: React.FormEvent) => void;
}
export default function TextField(props: TextFieldProps) {
  const { ariaLabel, ariaLabelledBy, isRequired, blockName, modifiers, value, placeholderText, onChange } = props;
  let textfieldBlockName = blockName ? blockName : "form-item";

  if (!ariaLabel && !ariaLabelledBy) {
    throw new Error("Either label or ariaLabel must be defined");
  }

  let textFieldProps = {
    className: bem("input", modifiers, textfieldBlockName),
    "type": "text",
    value: value,
    onChange: onChange,
    "aria-label": !ariaLabelledBy ? ariaLabel : undefined,
    "aria-labelledby": ariaLabelledBy
  };


  if (isRequired) {
    textFieldProps["aria-required"] = true;
  }

  let transformedTextField = <input {...textFieldProps} placeholder={placeholderText} />;
  return transformedTextField;
}
