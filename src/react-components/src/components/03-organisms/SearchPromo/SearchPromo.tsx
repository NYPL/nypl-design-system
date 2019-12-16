//OF-21 Search Promo

import * as React from "react";
import bem from "../../../utils/bem";
import SectionTitle from "../../02-molecules/Headings/SectionTitle";
import SearchBar from "../../02-molecules/SearchBar/SearchBar";
import BodyText from "../../01-atoms/Text/Text/BodyText";

export interface SearchPromoProps {
  headingText: string;
  modifiers?: [];
  blockName?: string;
  titleId: string;
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
export default function SearchPromo(props: SearchPromoProps) {
  const { headingText, modifiers, blockName, titleId, searchBarId, searchButtonId, hasError, errorMessage,
    dropdownId, searchDropdownOptions, advancedSearchMessage, 
    selectChangeHandler, selectBlurHandler, searchSubmitHandler, textChangeHandler } = props;

  const searchpromo__base_class = "search-promo";


  return <div className={bem(searchpromo__base_class, [], blockName)}>
    <div className={bem('content', [], searchpromo__base_class)}>
      <SectionTitle id={titleId} headingText={headingText} blockName={searchpromo__base_class} />
      <SearchBar
        searchBarId={searchBarId}
        searchButtonId={searchButtonId}
        dropdownId={dropdownId}
        dropdownOptions={searchDropdownOptions}
        hasError={hasError}
        errorMessage={errorMessage}
        selectBlurHandler={selectBlurHandler}
        selectChangeHandler={selectChangeHandler}
        searchSubmitHandler={searchSubmitHandler}
        searchChangeHandler={textChangeHandler}></SearchBar>
      <BodyText bodyContent={advancedSearchMessage}></BodyText>
    </div>
  </div>;
}
