/* MN-10: Pagination */

import * as React from "react";
import bem from "../../../../utils/bem";
import Button from "../../../01-atoms/Button/Button";
import Dropdown from "../../../02-molecules/Dropdown/Dropdown";

export interface PaginationProps {
  paginationDropdownOptions: string[];
  previousPageHandler: (event: React.MouseEvent) => void;
  nextPageHandler: (event: React.MouseEvent) => void;
  currentValue: string;
  onSelectChange: (event: React.MouseEvent) => void;
  onSelectBlur: (event: React.MouseEvent) => void;
}

export default function Pagination(props: PaginationProps) {
  const { paginationDropdownOptions, currentValue,
    previousPageHandler, nextPageHandler,
    onSelectChange, onSelectBlur } = props;

  const pagination__base_class = "pagination";
  let buttonPrevProps = {
    id: "pagination-previous",
    callback: previousPageHandler,
    content: "Previous",
    type: "outline",
    iconPosition: "left",
    iconName: "arrow-xsmall",
    iconModifiers: ["left"],
    iconDecorative: true,
  };

  let buttonNextProps = {
    id: "pagination-next",
    callback: nextPageHandler,
    content: "Next",
    type: "outline",
    iconPosition: "right",
    iconName: "arrow-xsmall",
    iconModifiers: ["right"],
    iconDecorative: true,
  };

  let dropdownProps = {
    dropdownId: "pagination-dropdown",
    isRequired: false,
    labelId: "pagination-select-label",
    labelText: "Page",
    dropdownOptions: paginationDropdownOptions,
    selectedOption: currentValue,
    onSelectChange: onSelectChange,
    onSelectBlur: onSelectBlur
  };

  return (
    <nav aria-label="Pagination" className={bem(pagination__base_class)}>
      <Button {...buttonPrevProps}/><Dropdown labelPosition="left" {...dropdownProps}></Dropdown><Button {...buttonNextProps}/>
  </nav>);
}
