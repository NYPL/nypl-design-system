// MF-46 Search Bar with Search By Parameter

import * as React from "react";
import bem from "../../../utils/bem";
import FormDropdown from "../../01-atoms/Forms/FormDropdown";
import TextField from "../../01-atoms/Forms/TextField";
import { Button } from "../../..";

export interface SearchBarProps {
  searchBarId: string;
  blockName?: string;
  searchBarAriaLabel?: string;
  searchBarAriaLabelledBy?: string;
  buttonId: string;
  dropdownId?: string;
  dropdownAriaLabel?: string;
  dropdownOptions?: string[];
  selectedField?: string;
  searchValue?: string;
  placeHolder?: string;
  searchButtonAttributes?: {};
  placeholderText?: string;
  textFieldAriaLabel?: string;
  textFieldAttributes?: {};
  helperVariant?: "ResearchNow";
  hasError?: boolean;
  errorMessage?: string;
  selectBlurHandler?: (event: React.MouseEvent) => void;
  selectChangeHandler?: (event: React.MouseEvent) => void;
  searchSubmitHandler: (event: React.MouseEvent) => void;
  searchChangeHandler?: (event: React.FormEvent) => void;
}

export default function SearchBar(props: SearchBarProps) {

  const { blockName,
    searchBarId, buttonId,
    searchBarAriaLabel, searchBarAriaLabelledBy,
    dropdownId, dropdownOptions, dropdownAriaLabel,
    selectedField, searchValue,
    placeholderText,
    helperVariant,
    hasError, errorMessage,
    selectBlurHandler, searchSubmitHandler, selectChangeHandler, searchChangeHandler } = props;

  if (dropdownOptions) {
    if (!(dropdownId && dropdownAriaLabel && selectBlurHandler && selectChangeHandler)) {
      throw new Error(`If dropdownOptions are passed, dropdownId (currently ${dropdownId}),
      dropdownAriaLabel (currently ${dropdownAriaLabel}), selectChangeHandler (currently ${selectChangeHandler}),
      and selectBlurHandler (currently ${selectBlurHandler}) must also be passed`);
    }
  }

  if (!searchBarAriaLabel && !searchBarAriaLabelledBy) {
    throw new Error("Either searchBarAriaLabel and searchBarAriaLabelledBy must be passed");
  }

  let modifiers = [];
  if (hasError) {
    if (!errorMessage) {
      throw new Error("If there is an error, there must also be an error message");
    }
    modifiers.push("error");
  }

  let searchbar__base_class = "search-bar";

  /* TODO: after SFR-637 is merged, Replace Error with MT-51 and add its id to TextField's aria-labelledBy*/
  let textfieldProps = {
    ariaLabelledBy: buttonId,
    onChange: searchChangeHandler,
    isRequired: true,
    blockName: searchbar__base_class,
    placeholderText: hasError && helperVariant ? errorMessage : placeholderText,
    value: searchValue,
    modifiers: modifiers,
  };

  let buttonProps = {
    id: buttonId,
    callback: searchSubmitHandler,
    blockName: searchbar__base_class,
    content: "Search",
    type: "filled",
    iconPosition: "left",
    iconName: "search-small",
    iconDecorative: true,
  };

  return <form className={`${bem(searchbar__base_class, modifiers, blockName)} ${bem(searchbar__base_class, modifiers)}`}
    id={searchBarId}
    role="search"
    aria-label={searchBarAriaLabel}
    aria-labelledby={searchBarAriaLabelledBy}>
    {dropdownOptions &&
      <FormDropdown selectedOption={selectedField}
        ariaLabel="Search by"
        dropdownId={dropdownId} options={dropdownOptions}
        onSelectBlur={selectBlurHandler}
        blockName={searchbar__base_class}
        onSelectChange={selectChangeHandler} />
    }

    <div className={bem("input-group", [], searchbar__base_class)}>
      <TextField {...textfieldProps}></TextField>
      <Button {...buttonProps} />
      {/* TODO: after SFR-637 is merged, Replace Error with MT-51 and add its id to TextField's aria-labelledBy*/}
      {hasError && !helperVariant && <span className={bem("input-description", modifiers, searchbar__base_class)}>{errorMessage}</span>}
    </div>
  </form>;
}
