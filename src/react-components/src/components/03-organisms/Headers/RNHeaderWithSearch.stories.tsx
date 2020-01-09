/* OH-31 Header With Search */
import * as React from "react";

import RNHeaderWithSearch from "./RNHeaderWithSearch";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import UnderlineLink from "../../01-atoms/Links/UnderlineLink";


export default {
  title: "HeaderWithSearch",
  component: RNHeaderWithSearch,
};

export const researchNowSearchHeader = () => <RNHeaderWithSearch
  searchButtonId="searchButtonId"
  searchBarAriaLabel="Search research catalog"
  advancedSearchElem={<UnderlineLink url={"advanced-search-link"}>Advanced Search</UnderlineLink>}
  searchBarId="searchBarId"
  dropdownId="dropdownId"
  textFieldAriaLabel="Research Now"
  // headingContent={<span>Research<span className={"rn-section-title__emphasis"}>Now</span></span>}
  headingId="researchNow-page-title-id"
  headingUrl="#research-now-url"
  searchDropdownOptions={["Keyword", "Author", "Subject"]}
  searchSubmitHandler={action("searched")}
  selectChangeHandler={action("changed")}
  selectBlurHandler={action("selectChanged")} />;
