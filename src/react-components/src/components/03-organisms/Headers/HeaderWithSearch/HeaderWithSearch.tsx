// OH-31 Header with Search
import * as React from "react";
import SearchBar from "../../../02-molecules/SearchBar/SearchBar";
import UnderlineLink from "../../../01-atoms/Links/UnderlineLink";
import bem from "../../../../utils/bem";


export interface WithSearchProps {
  modifiers?: [];
  blockName?: string;
  searchBarId: string;
  searchButtonId: string;
  dropdownId: string;
  hasError?: boolean;
  errorMessage?: string;
  searchDropdownOptions: string[];
  advancedSearchMessage: JSX.Element;
  selectChangeHandler: (event: React.FormEvent) => void;
  selectBlurHandler: (event: React.FormEvent) => void;
  searchSubmitHandler: (event: React.MouseEvent) => void;
  textChangeHandler?: (event: React.FormEvent) => void;
}

export default function HeaderWithSearch(props: React.PropsWithChildren<WithSearchProps>) {

  const { blockName, searchBarId, searchButtonId, hasError, errorMessage,
    dropdownId, searchDropdownOptions, advancedSearchMessage,
    selectChangeHandler, selectBlurHandler, searchSubmitHandler, textChangeHandler } = props; const baseClass = "header-with-image-right";

  return (
    <div className={bem(baseClass)}>
      <SearchBar
        searchBarId={searchBarId}
        buttonId={searchButtonId}
        dropdownId={dropdownId}
        dropdownOptions={searchDropdownOptions}
        hasError={hasError}
        errorMessage={errorMessage}
        selectBlurHandler={selectBlurHandler}
        selectChangeHandler={selectChangeHandler}
        searchSubmitHandler={searchSubmitHandler}
        searchChangeHandler={textChangeHandler} />
      <UnderlineLink>{advancedSearchMessage}</UnderlineLink>
    </div>
  );
}

