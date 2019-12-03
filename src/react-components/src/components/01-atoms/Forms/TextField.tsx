
// AF-239 Text Field
import * as React from "react";
import bem from "../../../utils/bem";

export interface TextFieldProps {
  labelId: string;
  isRequired: boolean;
  placeholderText?: string;
  onChange?: (event: React.FormEvent) => void;
}
export default function TextField(props: TextFieldProps) {
  const { labelId, isRequired, placeholderText, onChange } = props;

  let textFieldProps = {
    "className": "form-item__textfield",
    "type": "text",
    "placeholder": placeholderText,
    onChange: onChange,
    "aria-labelledby": labelId,
  };
  if (isRequired) {
    textFieldProps["aria-required"] = true;
  }

  return <input {...textFieldProps} />;
}
