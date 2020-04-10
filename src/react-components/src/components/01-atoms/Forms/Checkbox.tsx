/**
 * A Form Checkbox component that can be selected and deselected.
 */

import * as React from "react";
import bem from "../../../utils/bem";
import Label, { LabelOptions } from "./Label";

export interface CheckboxOptions {
  name?: string;

  modifiers?: string[];
  blockName?: string;
  labelOptions?: LabelOptions;

  isSelected?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CheckboxProps {
  /** name of the checkbox */
  name?: string;

  /** Used for BEM css convention. */
  blockName?: string;
  /** Used for BEM css convention. */
  modifiers?: string[];

  /** Unique ID used by checkbox */
  checkboxId: string;
  /* The Label that the checkbox is using. */
  labelOptions: LabelOptions;

  /* The current selected state of the checkbox */
  isSelected?: boolean;
  /** The action to perform on the <input>'s onChange function  */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox(props: CheckboxProps) {
  const {
    name,
    modifiers = [],
    blockName = "",
    checkboxId,
    labelOptions,
    isSelected,
    onChange
  } = props;

  const baseClass = "checkbox";
  return (
    <div className={bem(baseClass, modifiers, blockName)}>
      <input id={checkboxId} name={name} className={bem("input", [], baseClass)}  onChange={onChange} type="checkbox" aria-checked={isSelected} checked={isSelected}></input>
      <span className={bem("label", [], baseClass)}>
        <Label referenceId={checkboxId} {...labelOptions} />
      </span>
    </div>
  );
}
