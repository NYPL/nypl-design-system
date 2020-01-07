// OH-31 Header with Search
import * as React from "react";
import SearchBar from "../../02-molecules/SearchBar/SearchBar";
import UnderlineLink from "../../01-atoms/Links/UnderlineLink";
import bem from "../../../utils/bem";
import BodyText from "../../01-atoms/Text/Text/BodyText";
import SectionTitle from "../../02-molecules/Headings/SectionTitle";
import Heading from "../../01-atoms/Text/Headings/Heading";
import RNSectionTitle from "../../01-atoms/Text/Headings/RNSectionTitle";


export interface WithSearchProps {
  modifiers?: [];
  blockName?: string;
  searchBarId: string;
  searchButtonId: string;
  searchBarAriaLabel: string;
  dropdownId: string;
  headingContent: JSX.Element;
  headingId: string;
  headingBaseClass?: string;
  headingUrl?: string;
  textFieldAriaLabel: string;
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

  const { blockName, searchBarId, searchBarAriaLabel,
    searchButtonId, hasError, errorMessage,
    dropdownId, searchDropdownOptions,
    headingContent, headingId, headingUrl, headingBaseClass,
    textFieldAriaLabel, advancedSearchLink,
    selectChangeHandler, selectBlurHandler, searchSubmitHandler, textChangeHandler } = props;
  const base_class = "search-header";

  return (
    <div className={bem(base_class)}>
      <div className={bem("content", [], base_class)}>
        <RNSectionTitle
          id={headingId}
          url={headingUrl}/>
        <SearchBar
          searchBarId={searchBarId}
          searchBarAriaLabel={searchBarAriaLabel}
          blockName={base_class}
          buttonId={searchButtonId}
          dropdownId={dropdownId}
          dropdownAriaLabel="Filter Search"
          textFieldAriaLabel={textFieldAriaLabel}
          dropdownOptions={searchDropdownOptions}
          helperVariant="ResearchNow"
          hasError={hasError}
          errorMessage={errorMessage}
          selectBlurHandler={selectBlurHandler}
          selectChangeHandler={selectChangeHandler}
          searchSubmitHandler={searchSubmitHandler}
          searchChangeHandler={textChangeHandler} />
        <div className={bem("promo-text", [], base_class)}>
          <UnderlineLink url={advancedSearchLink} modifiers={["dark-background"]}>Advanced Search</UnderlineLink>
        </div>
      </div>
    </div>
  );
}

