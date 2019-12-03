import * as React from "react";

import SearchBar from "./SearchBar";
import { action } from "@storybook/addon-actions";

export default {
  title: "SearchBar",
  component: SearchBar,
};

export const basicSearch = () => <SearchBar id="searchbar" searchHandler={action("searched")}/>;
export const searchWithPlaceholder = () => <SearchBar id="searchbar" placeholderText={"Placeholder"} searchHandler={action("searched")}/>;
