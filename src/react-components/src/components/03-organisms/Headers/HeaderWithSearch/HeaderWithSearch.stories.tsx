import * as React from "react";

import HeaderWithSearch from "./HeaderWithSearch";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";


export default {
  title: "HeaderWithSearch",
  component: HeaderWithSearch,
};

export const searchPromo = () => <HeaderWithSearch
  titleId="titleId"
  searchButtonId="searchButtonId"
  advancedSearchLink="#advanced-fake-link"
  searchBarId="searchBarId"
  dropdownId="dropdownId"
  headingText="ResearchNOW"
  searchDropdownOptions={["Keyword", "bye there"]}
  searchSubmitHandler={action("searched")}
  selectChangeHandler={action("changed")}
  selectBlurHandler={action("selectChanged")} />;
