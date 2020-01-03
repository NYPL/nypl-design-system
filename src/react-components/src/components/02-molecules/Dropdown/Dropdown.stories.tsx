import * as React from "react";

import Dropdown from "./Dropdown";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";


export default {
  title: "Dropdown",
  component: Dropdown,
};

export const searchWithParams = () => <Dropdown 
dropdownId="dropdown"
labelText="label"
dropdownOptions={["one", "two", "three"]}
onSelectChange={action("selectChanged")}
onSelectBlur={action("selectChanged")}>;

export const searchWithNoParams = () => <Dropdown searchBarId="searchBarId"
  buttonId="searchButtonId"
  textFieldAriaLabel="Text Field aria-label"
  searchSubmitHandler={action("searched")} />;

export const searchWithFormError = () => <Dropdown
  searchBarId="searchBarId"
  buttonId="searchButtonId"
  textFieldAriaLabel="Text Field aria-label"
  searchSubmitHandler={action("searched")}
  hasError={true} errorMessage={"Error text"} />;

export const searchFormWithParamsAndError = () => <Dropdown searchBarId="searchBarId"
  buttonId="searchButtonId"
  textFieldAriaLabel="Text Field aria-label"
  dropdownId="dropdownId"
  dropdownOptions={["Keyword", "Other Keyword"]}
  searchSubmitHandler={action("searched")}
  selectChangeHandler={action("selectChanged")}
  selectBlurHandler={action("selectChanged")}
  hasError={true} errorMessage={"Error text"} />;
