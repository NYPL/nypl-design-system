import * as React from "react";

import SearchBar from "./SearchBar";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";


export default {
  title: "SearchBar",
  component: SearchBar,
};

export const searchWithParams = () => <SearchBar searchBarId="searchBarId" dropdownId="dropdownId" dropdownOptions={["Keyword", "Other Keyword"]} searchHandler={action("searched")} dropdownBlurHandler={action("selectChanged")}/>;
export const searchWithNoParams = () => <SearchBar searchBarId="searchBarId" searchHandler={action("searched")} />;
