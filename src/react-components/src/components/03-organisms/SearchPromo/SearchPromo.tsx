//OF-21 Search Promo

import * as React from "react";
import bem from "../../../utils/bem";
import SectionTitle from "../../02-molecules/Headings/SectionTitle";
import ParamSearchBar from "../../02-molecules/SearchBar/ParamSearchBar";
import BodyText from "../../01-atoms/Text/Text/BodyText";

export interface SearchPromoProps {
  headingText: string;
  modifiers?: [];
  blockName?: string;
  titleId: string;
  searchBarId: string;
  dropdownId: string;
  searchDropdownOptions: string[];
  advancedSearchMessage: JSX.Element;
  dropdownBlurHandler: (event: React.MouseEvent) => void;
  searchHandler: (event: React.MouseEvent) => void;
  changeHandler?: (event: React.FormEvent) => void;
}
export default function SearchPromo(props: SearchPromoProps) {
  const { headingText, modifiers, blockName, titleId, searchBarId, dropdownId, searchDropdownOptions, advancedSearchMessage, dropdownBlurHandler, searchHandler, changeHandler, textLinks, linkObjects } = props;

  const searchpromo__base_class = "search-promo";


  return <div className={bem(searchpromo__base_class, [], blockName)}>
    <SectionTitle id={titleId} headingText={headingText} blockName={searchpromo__base_class} />
    <ParamSearchBar searchBarId={searchBarId} dropdownId={dropdownId} dropdownOptions={searchDropdownOptions} dropdownBlurHandler={dropdownBlurHandler} searchHandler={searchHandler} changeHandler={changeHandler}></ParamSearchBar>
    <BodyText bodyContent={advancedSearchMessage}></BodyText>
  </div>;
}
