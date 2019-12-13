// MF-46 Search Bar with Search By Parameter

import * as React from "react";
import bem from "../../../utils/bem";
import FormDropdown from "../../01-atoms/Forms/FormDropdown";
import TextField from "../../01-atoms/Forms/TextField";
import { Button } from "../../..";

export interface SearchBarProps {
  searchBarId: string;
  dropdownId?: string;
  dropdownOptions?: string[];
  selectedField?: string;
  searchValue?: string;
  placeHolder?: string;
  searchButtonAttributes?: {};
  placeholderText?: string;
  textFieldAttributes?: {};
  hasError?: boolean;
  errorMessage?: string;
  selectBlurHandler?: (event: React.MouseEvent) => void;
  selectChangeHandler?: (event: React.MouseEvent) => void;
  searchSubmitHandler: (event: React.MouseEvent) => void;
  searchChangeHandler?: (event: React.FormEvent) => void;
}

export default function SearchBar(props: SearchBarProps) {

  const { searchBarId, dropdownId, dropdownOptions, selectedField, placeholderText, hasError, errorMessage,
    selectBlurHandler, searchSubmitHandler, selectChangeHandler, searchChangeHandler } = props;

  if (dropdownOptions) {
    if (!(dropdownId && selectBlurHandler && selectChangeHandler)) {
      throw new Error("If dropdownOptions are passed, dropdownId, selectChangeHandler, and selectBlurHandler must also be passed");
    }
  }
  let modifiers = [];
  if (hasError) {
    if (!errorMessage) {
      throw new Error("If there is an error, there must also be an error message");
    }
    modifiers.push("error");
  }

  let searchbar__base_class = "search-bar";

  let textfieldProps = {
    labelId: searchBarId,
    onChange: searchChangeHandler,
    isRequired: true,
    blockName: searchbar__base_class,
    placeholderText: placeholderText,
    modifiers: modifiers,
  };

  let buttonProps = {
    id: searchBarId,
    callback: searchSubmitHandler,
    blockName: searchbar__base_class,
    content: "Search",
    type: "filled",
    iconPosition: "left",
    iconName: "search-small",
    iconDecorative: true,
  };

  return <div className={bem(searchbar__base_class, modifiers)}>
    {dropdownOptions &&
      <FormDropdown selectedOption={selectedField}
        ariaLabel="search"
        dropdownId={dropdownId} options={dropdownOptions}
        onSelectBlur={selectBlurHandler}
        blockName={searchbar__base_class}
        onSelectChange={selectChangeHandler} />
    }
    <div className={bem("input-group", [], searchbar__base_class)}>
      <TextField {...textfieldProps}></TextField>
      <Button {...buttonProps} />
      {hasError && <span className={bem("input-description", modifiers, searchbar__base_class)}>{errorMessage}</span>}
    </div>
  </div>;
}
