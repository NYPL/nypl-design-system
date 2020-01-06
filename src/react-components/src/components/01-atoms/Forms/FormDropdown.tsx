// AF-121 Form Dropdown
import * as React from "react";
import bem from "../../../utils/bem";
import Icon from "../Images/Icons/Icon";

export interface FormDropdownProps {
  dropdownId: string;
  blockName?: string;
  modifiers?: string[];
  labelId?: string;
  isRequired: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  options: string[];
  selectedOption?: string;
  onSelectBlur: (event: React.FormEvent) => void;
  onSelectChange: (event: React.FormEvent) => void;
}

export default function FormDropdown(props: FormDropdownProps) {
  const { dropdownId, blockName, options, labelId, isRequired, ariaLabel, disabled, selectedOption, onSelectBlur, onSelectChange } = props;
  const modifiers = props.modifiers ? props.modifiers : [];
  if (!labelId && !ariaLabel) {
    throw new Error("Must either have labelId or aria-label");
  }

  let formItemBlockName = blockName ? blockName : "form-item";

  let selectProps = {
    id: dropdownId,
    className: bem("select", modifiers, formItemBlockName),
    value: selectedOption,
    onChange: onSelectChange,
    onBlur: onSelectBlur,
    "aria-required": isRequired,
    disabled: disabled ? disabled : false
  };

  if (labelId) {
    selectProps["aria-labelledBy"] = labelId;
  } else {
    selectProps["aria-label"] = ariaLabel;
  }

  return (
    <div className={bem("dropdown", modifiers, formItemBlockName)}>

      <select {...selectProps}>
        {options.map((child, key) => {
          return <option key={key.toString()}
            aria-selected={child === selectedOption}
            value={child}>{child}</option>;
        })}
      </select>

      <Icon decorative={true} name={"arrow"} modifiers={["small"]} />
    </div>
  );
}
