
import * as React from "react";
import bem from "../../../utils/bem";
import FormDropdown from "../../01-atoms/Forms/FormDropdown";
import TextField from "../../01-atoms/Forms/TextField";
import { Button } from "../../..";
import Label, { LabelOptions } from "./Label";
import HelperErrorText from "./HelperErrorText";
import { boolean } from "@storybook/addon-knobs";

export interface CheckboxOptions {
  name?: string;

  baseClass?: string;
  blockName?: string;

  labelOptions?: LabelOptions;

  isSelected?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CheckboxProps {
  name?: string;

  baseClass?: string;
  blockName?: string;

  checkboxId: string;
  /* The Label that the checkbox is using.
  To enforce that a Label is used correctly, it must be passed as props and not as children. */
  labelOptions: LabelOptions;

  isSelected?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox(props: CheckboxProps) {

  const {
    name,
    baseClass = "checkbox",
    blockName = "",
    checkboxId,
    labelOptions,
    isSelected = false,
    onChange
  } = props;

  return (
    <div className="checkbox">
      <input id={checkboxId} name={name} className={"checkbox"}  onChange={onChange} type="checkbox" aria-checked={isSelected} checked={isSelected}></input>
      <span className={bem("label", [], baseClass)}>
        <Label referenceId={checkboxId} {...labelOptions} />
      </span>
    </div>
  );
}
