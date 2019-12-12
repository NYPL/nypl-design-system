// MF-46 Search Bar with Search By Parameter

import * as React from "react";
import bem from "../../../utils/bem";
import SearchBar from "./SearchBar";
import FormDropdown from "../../01-atoms/Forms/FormDropdown";
import TextField from "../../01-atoms/Forms/TextField";
import { Button } from "../../..";

export interface ParamSearchBarProps {
  searchBarId: string;
  dropdownId?: string;
  dropdownOptions?: string[];
  selectedField?: string;
  searchValue?: string;
  placeHolder?: string;
  searchButtonAttributes?: {};
  placeholderText?: string;
  textFieldAttributes?: {};
  dropdownBlurHandler?: (event: React.MouseEvent) => void;
  searchHandler: (event: React.MouseEvent) => void;
  changeHandler?: (event: React.FormEvent) => void;
}

export default function ParamSearchBar(props: ParamSearchBarProps) {

  const { searchBarId, dropdownId, dropdownOptions, selectedField, placeholderText, dropdownBlurHandler, searchHandler, changeHandler } = props;

  if (dropdownOptions) {
    if (!(dropdownId && dropdownBlurHandler)) {
      throw new Error("If dropdownOptions are passed, dropdownId and dropdownBlurHandler must also be passed");
    }
  }
  let searchbar__base_class = "search-bar";
  let textfieldProps = {
    labelId: searchBarId,
    onChange: changeHandler,
    isRequired: true,
    blockName: searchbar__base_class,
    placeholderText: placeholderText,
  };

  let buttonProps = {
    id: searchBarId,
    callback: searchHandler,
    blockName: searchbar__base_class,
    content: "Search",
    type: "filled",
    iconPosition: "left",
    iconName: "search-small",
    iconDecorative: true,
  };

  return <div className={bem(searchbar__base_class)}>
    {dropdownOptions &&
    <FormDropdown selectedOption={selectedField} ariaLabel="search" dropdownId={dropdownId} options={dropdownOptions} onSelectBlur={dropdownBlurHandler} />
    }
      <TextField {...textfieldProps}></TextField>
      <Button {...buttonProps}/>
    </div>;
}
