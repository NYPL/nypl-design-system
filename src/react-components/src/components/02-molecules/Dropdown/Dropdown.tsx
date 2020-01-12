/* MN-10: Pagination */

import * as React from "react";
import bem from "../../../utils/bem";
import FormDropdown from "../../01-atoms/Forms/FormDropdown";
import Label from "../../01-atoms/Forms/Label";
import HelperErrorText from "../Helpers/HelperErrorText";

export interface DropdownProps {
  dropdownId: string;
  isRequired: boolean;
  labelPosition: string;
  labelId?: string;
  labelText?: string;
  ariaLabel?: string;
  helperContent?: JSX.Element;
  helperContentId?: string;
  hasError?: boolean;
  errorContentId?: string;
  errorContent?: JSX.Element;
  dropdownOptions: string[];
  selectedOption?: string;
  onSelectChange: (event: React.FormEvent) => void;
  onSelectBlur: (event: React.FormEvent) => void;
}

export default function Dropdown(props: DropdownProps) {
  const { dropdownId, isRequired,
    labelId, labelPosition, labelText, ariaLabel,
    helperContent, helperContentId,
    hasError, errorContent, errorContentId,
    dropdownOptions, selectedOption,
    onSelectChange, onSelectBlur } = props;

  let modifiers = [];

  const baseClass = "dropdown";
  if (!["left", "top", "none"].includes(labelPosition)) {
    throw new Error(`prop labelPosition must be one of "left", "top", "none", but Dropdown was passed ${labelPosition}`);
  }

  if (labelPosition !== "none") {
    if (!labelId || !labelText) {
      throw new Error(`prop labelId and labelText must be passed into Dropdown when labelPosition is not "none".  (Got LabelPosition ${labelPosition})`);
    }
    modifiers.push(labelPosition);
  } else {
    if (!ariaLabel) {
      throw new Error(`prop ariaLabel must be passed into Dropdown when labelPosition is "none"`);
    }
  }

  if (helperContent && !helperContentId) {
    throw new Error(`prop helperText ${helperContent} is passed, but it is missing prop helperTextId`);
  }

  if (hasError && (!errorContent || !errorContentId)) {
    throw new Error(`prop hasError is ${hasError}, but is missing props errorMessage (got ${errorContent}) and/or errorTextId (got ${errorContent})`);
  }

  return <div className={bem(baseClass, modifiers)}>

    {labelPosition !== "none" &&
      <div><Label id={labelId} referenceId={dropdownId}>{labelText}</Label>
        {isRequired && <span className={bem("required-message", [], baseClass)}>Required</span>}
      </div>
    }
    <div>
    <FormDropdown
      dropdownId={dropdownId}
      labelId={labelPosition !== "none" ? labelId : undefined}
      isRequired={isRequired}
      ariaLabel={labelPosition === "none" ? ariaLabel : undefined}
      selectedOption={selectedOption}
      options={dropdownOptions}
      onSelectChange={onSelectChange} onSelectBlur={onSelectBlur} />

    {helperContent && <HelperErrorText id={helperContentId} isError={false}>{helperContent}</HelperErrorText>}
    {hasError && <HelperErrorText id={errorContentId} isError={true}>{errorContent}</HelperErrorText>}
    </div>
  </div>;
}
