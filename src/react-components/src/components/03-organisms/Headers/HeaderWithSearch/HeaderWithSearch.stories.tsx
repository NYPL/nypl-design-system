import * as React from "react";

import HeaderWithSearch from "./HeaderWithSearch";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";


export default {
  title: "HeaderWithSearch",
  component: HeaderWithSearch,
};

export const searchPromo = () => <HeaderWithSearch
  searchButtonId="searchButtonId"
  advancedSearchMessage={<p>Use <a href="#advanced-fake-link">Advanced Search</a> to narrow your results.</p>}
  searchBarId="searchBarId" dropdownId="dropdownId"
  searchDropdownOptions={["Keyword", "bye there"]}
  searchSubmitHandler={action("searched")}
  selectChangeHandler={action("changed")}
  selectBlurHandler={action("selectChanged")} />;
