// AF-121 Form Dropdown
import * as React from "react";
import bem from "../../../utils/bem";
import Icon from "../Images/Icons/Icon";

export interface FormDropdownProps {
  dropdownId: string;
  blockName?: string;
  labelText?: string;
  ariaLabel?: string;
  disabled?: boolean;
  options: string[];
  selectedOption?: string;
  onSelectBlur: (event: React.FormEvent) => void;
  onSelectChange: (event: React.FormEvent) => void;
}

export default function FormDropdown(props: FormDropdownProps) {
  const { dropdownId, blockName, labelText, options, ariaLabel, disabled, selectedOption, onSelectBlur, onSelectChange } = props;
  if (!labelText) {
    if (!ariaLabel) {
      // TODO: Assign aria-labeledBy to labelText
      throw new Error("Either labelText or ariaLabel must be defined");
    }
  }

  let formItemBlockName = blockName ? blockName : "form-item";
  let labelClassName = bem("label", ["textField"], formItemBlockName);

  return <div>
    {labelText && (<label htmlFor={dropdownId} className={labelClassName}>{labelText}</label>)}
    <div className={bem("dropdown", [], formItemBlockName)}>
      <select id={dropdownId}
      className={bem("select", [], formItemBlockName)}
      value={selectedOption}
      onChange={onSelectChange}
      onBlur={onSelectBlur}
      aria-label={ariaLabel}
      disabled={disabled ? disabled : false}>
         { options.map((child, key) => {
            return <option key={key.toString()} aria-selected={child === selectedOption} value={child}>{ child }</option>;
          }) }
      </select>
    <Icon decorative={true} name={'arrow'} modifiers={['small']} />
  </div>
  </div>;
}
