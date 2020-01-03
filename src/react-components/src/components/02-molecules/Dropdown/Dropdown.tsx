/* MN-10: Pagination */

import * as React from "react";
import bem from "../../../utils/bem";
import FormDropdown from "../../01-atoms/Forms/FormDropdown";
import Label from "../../01-atoms/Forms/Label";

export interface DropdownProps {
  dropdownId: string;
  labelText: string;
  dropdownOptions: string[];
  onSelectChange: (event: React.FormEvent) => void;
  onSelectBlur: (event: React.FormEvent) => void;
}

export default function DropdownProps(props: DropdownProps) {
  const { dropdownId, labelText, dropdownOptions, onSelectChange, onSelectBlur } = props;
  return <div>
    <Label referenceId={dropdownId}>{labelText}</Label>
    <FormDropdown dropdownId={dropdownId} options={dropdownOptions} onSelectChange={onSelectChange} onSelectBlur={onSelectBlur}></FormDropdown>
  </div>
}
