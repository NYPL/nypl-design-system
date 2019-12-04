import * as React from "react";

import SearchBar from "./SearchBar";
import { action } from "@storybook/addon-actions";

export default {
  title: "SearchBar",
  component: SearchBar,
};

export const basicSearch = () => <SearchBar id="searchbar" changeHandler={action("changed")} searchHandler={action("searched")}/>;
export const searchWithPlaceholder = () => <SearchBar id="searchbar" placeholderText={"Placeholder"} searchHandler={action("searched")}/>;
