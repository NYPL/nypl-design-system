/* OH-31 Header With Search */
import * as React from "react";

import HeaderWithSearch from "./HeaderWithSearch";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import UnderlineLink from "../../01-atoms/Links/UnderlineLink";


export default {
  title: "HeaderWithSearch",
  component: HeaderWithSearch,
};

export const researchNowSearchHeader = () => <HeaderWithSearch
  searchButtonId="searchButtonId"
  searchBarAriaLabel="Search research catalog"
  advancedSearchElem={<UnderlineLink url={"advanced-search-link"}>Advanced Search</UnderlineLink>}
  searchBarId="searchBarId"
  dropdownId="dropdownId"
  textFieldAriaLabel="Research Now"
  headingContent={<span>Research<span className={"rn-section-title__emphasis"}>Now</span></span>}
  headingId="researchNow-page-title-id"
  headingUrl="#research-now-url"
  headingBaseClass="rn-section-title"
  searchDropdownOptions={["Keyword", "Author", "Subject"]}
  searchSubmitHandler={action("searched")}
  selectChangeHandler={action("changed")}
  selectBlurHandler={action("selectChanged")} />;

  export const researchNowSearchPromoHeader = () => <HeaderWithSearch
  searchButtonId="searchButtonId"
  searchBarAriaLabel="Search research catalog"
  advancedSearchElem={<UnderlineLink url={"advanced-search-link"}>Advanced Search</UnderlineLink>}
  searchBarId="searchBarId"
  dropdownId="dropdownId"
  textFieldAriaLabel="Research Now"
  headingContent={<span>Research<span className={"rn-section-title__emphasis"}>Now</span></span>}
  headingId="researchNow-page-title-id"
  headingUrl="#research-now-url"
  headingBaseClass="rn-section-title"
  searchDropdownOptions={["Keyword", "Author", "Subject"]}
  hasError={true}
  errorMessage="Please enter a search term"
  searchSubmitHandler={action("searched")}
  selectChangeHandler={action("changed")}
  selectBlurHandler={action("selectChanged")} />;
