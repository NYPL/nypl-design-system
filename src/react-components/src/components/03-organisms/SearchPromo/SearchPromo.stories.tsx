import * as React from "react";

import SearchPromo from "./SearchPromo";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";


export default {
  title: "SearchPromo",
  component: SearchPromo,
};

export const searchPromo = () => <SearchPromo headingText="hello there"
  titleId="title"
  advancedSearchMessage={<p>click here for <a href="#apple-pie">stuff</a></p>}
  searchBarId="searchBarId" dropdownId="dropdownId"
  searchDropdownOptions={["hi there", "bye there"]}
  searchSubmitHandler={action("searched")}
  selectChangeHandler={action("changed")}
  selectBlurHandler={action("selectChanged")} />;
export const searchPromoWithError = () => <SearchPromo headingText="hello there"
  titleId="title"
  advancedSearchMessage={<p>click here for <a href="#apple-pie">stuff</a></p>}
  searchBarId="searchBarId" dropdownId="dropdownId"
  hasError={true}
  errorMessage="oh no you messed up"
  searchDropdownOptions={["hi there", "bye there"]}
  searchSubmitHandler={action("searched")}
  selectChangeHandler={action("changed")}
  selectBlurHandler={action("selectChanged")} />;
