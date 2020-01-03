import * as React from "react";

import SearchBar from "./SearchBar";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";


export default {
  title: "SearchBar",
  component: SearchBar,
};

export const searchWithParams = () => <SearchBar searchBarId="searchBarId"
  buttonId="searchButtonId"
  dropdownId="dropdownId"
  textFieldAriaLabel="Text Field aria-label"
  dropdownOptions={["Keyword", "Other Keyword"]}
  searchSubmitHandler={action("searched")}
  selectChangeHandler={action("selectChanged")}
  selectBlurHandler={action("selectChanged")} />;

export const searchWithNoParams = () => <SearchBar searchBarId="searchBarId"
  buttonId="searchButtonId"
  textFieldAriaLabel="Text Field aria-label"
  searchSubmitHandler={action("searched")} />;

export const searchWithFormError = () => <SearchBar
  searchBarId="searchBarId"
  buttonId="searchButtonId"
  textFieldAriaLabel="Text Field aria-label"
  searchSubmitHandler={action("searched")}
  hasError={true} errorMessage={"Error text"} />;

export const searchFormWithParamsAndError = () => <SearchBar searchBarId="searchBarId"
  buttonId="searchButtonId"
  textFieldAriaLabel="Text Field aria-label"
  dropdownId="dropdownId"
  dropdownOptions={["Keyword", "Other Keyword"]}
  searchSubmitHandler={action("searched")}
  selectChangeHandler={action("selectChanged")}
  selectBlurHandler={action("selectChanged")}
  hasError={true} errorMessage={"Error text"} />;
