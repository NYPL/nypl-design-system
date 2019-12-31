// OH-31 Header with Search
import * as React from "react";
import SearchBar from "../../../02-molecules/SearchBar/SearchBar";
import UnderlineLink from "../../../01-atoms/Links/UnderlineLink";
import bem from "../../../../utils/bem";
import BodyText from "../../../01-atoms/Text/Text/BodyText";
import SectionTitle from "../../../02-molecules/Headings/SectionTitle";
import RNSectionTitle from "../../../01-atoms/Text/Headings/RNSectionTitle";


export interface WithSearchProps {
  modifiers?: [];
  blockName?: string;
  titleId: string;
  searchBarId: string;
  searchButtonId: string;
  dropdownId: string;
  headingText: string;
  hasError?: boolean;
  errorMessage?: string;
  searchDropdownOptions: string[];
  advancedSearchLink: string;
  selectChangeHandler: (event: React.FormEvent) => void;
  selectBlurHandler: (event: React.FormEvent) => void;
  searchSubmitHandler: (event: React.MouseEvent) => void;
  textChangeHandler?: (event: React.FormEvent) => void;
}

export default function HeaderWithSearch(props: React.PropsWithChildren<WithSearchProps>) {

  const { blockName, titleId, searchBarId, searchButtonId, hasError, errorMessage,
    dropdownId, headingText, searchDropdownOptions, advancedSearchLink,
    selectChangeHandler, selectBlurHandler, searchSubmitHandler, textChangeHandler } = props;
    const base_class = "search-header";

  return (
    <div className={bem(base_class)}>
      <RNSectionTitle titleId={titleId} sectionUrl="#sectionUrl" blockName={base_class} />
      <SearchBar
        searchBarId={searchBarId}
        buttonId={searchButtonId}
        dropdownId={dropdownId}
        textFieldAriaLabel="blah"
        dropdownOptions={searchDropdownOptions}
        hasError={hasError}
        errorMessage={errorMessage}
        selectBlurHandler={selectBlurHandler}
        selectChangeHandler={selectChangeHandler}
        searchSubmitHandler={searchSubmitHandler}
        searchChangeHandler={textChangeHandler} />
        <div className={bem("promo-text", [], base_class)}>
          <UnderlineLink url={advancedSearchLink} >Advanced Search</UnderlineLink>
        </div>
    </div>
  );
}

