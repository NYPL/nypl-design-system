import * as React from "react";

import SearchPromo from "./SearchPromo";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";


export default {
  title: "SearchPromo",
  component: SearchPromo,
};

export const searchPromo = () => <SearchPromo headingText="Search the World's Research Collections"
  titleId="title"
  advancedSearchMessage={<p>Use <a href="#apple-pie">Advanced Search</a> to narrow your results.</p>}
  searchBarId="searchBarId" dropdownId="dropdownId"
  searchDropdownOptions={["Keyword", "bye there"]}
  searchSubmitHandler={action("searched")}
  selectChangeHandler={action("changed")}
  selectBlurHandler={action("selectChanged")} />;
export const searchPromoWithError = () => <SearchPromo headingText="Search the World's Research Collections"
  titleId="title"
  advancedSearchMessage={<p>Use <a href="#apple-pie">Advanced Search</a> to narrow your results.</p>}
  searchBarId="searchBarId" dropdownId="dropdownId"
  hasError={true}
  errorMessage="oh no you messed up"
  searchDropdownOptions={["Keyword", "bye there"]}
  searchSubmitHandler={action("searched")}
  selectChangeHandler={action("changed")}
  selectBlurHandler={action("selectChanged")} />;
