// MF-46 Search Bar with Search By Parameter

import * as React from "react";
import bem from "../../../utils/bem";
import SearchBar from "./SearchBar";
import FormDropdown from "../../01-atoms/Forms/FormDropdown";

export interface ParamSearchBarProps {
  searchBarId: string;
  dropdownId: string;
  selectedField?: string;
  searchButtonAttributes?: {};
  dropdownBlurHandler: (event: React.MouseEvent) => void;
  searchHandler: (event: React.MouseEvent) => void;
  changeHandler?: (event: React.FormEvent) => void;
}

export default function ParamSearchBar(props: ParamSearchBarProps) {

    const { searchBarId, dropdownId, selectedField, dropdownBlurHandler, searchHandler, changeHandler } = props;

    let searchbar__base_class = "search-bar";

    return <div className={bem(searchbar__base_class)}>
      <FormDropdown selectedOption={selectedField} ariaLabel="search" dropdownId={dropdownId} options={["hi", "bye"]} onSelectBlur={dropdownBlurHandler}/><SearchBar id={searchBarId} searchHandler={searchHandler}></SearchBar>
    </div>;
}
