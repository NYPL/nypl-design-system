import * as React from "react";

import Dropdown from "./Dropdown";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Dropdown",
  component: Dropdown,
};

export const requiredField = () => <Dropdown
  dropdownId="dropdown"
  isRequired={true}
  labelPosition="top"
  labelText="Label"
  labelId="label"
  helperContentId="helper"
  helperContent={<span>If you're unsure of your size, please see the <a href="#sizing-chart">sizing chart</a></span>}
  dropdownOptions={["Option One", "Option Two", "Option Three"]}
  onSelectChange={action("selectChanged")}
  onSelectBlur={action("selectBlur")} />;

  export const labelOnLeft = () => <Dropdown
  dropdownId="dropdown"
  isRequired={false}
  labelPosition="left"
  labelText="Label"
  labelId="label"
  helperContentId="helper"
  helperContent={<span>If you're unsure of your size, please see the <a href="#sizing-chart">sizing chart</a></span>}
  dropdownOptions={["one", "two"]}
  onSelectChange={action("selectChanged")}
  onSelectBlur={action("selectBlur")} />;

  export const noLabel = () => <Dropdown
  dropdownId="dropdown"
  isRequired={false}
  labelPosition="none"
  ariaLabel="label"
  helperContentId="helper"
  helperContent={<span>If you're unsure of your size, please see the <a href="#sizing-chart">sizing chart</a></span>}
  dropdownOptions={["one", "two", "three"]}
  onSelectChange={action("selectChanged")}
  onSelectBlur={action("selectBlur")} />;

  export const requiredWithError = () => <Dropdown
  dropdownId="dropdown"
  isRequired={true}
  labelPosition="top"
  labelText="Label"
  labelId="label"
  hasError={true}
  errorContentId="error"
  errorContent={<span>Error Message Lorem Ipsum</span>}
  dropdownOptions={["one", "two", "three"]}
  onSelectChange={action("selectChanged")}
  onSelectBlur={action("selectBlur")} />;

  export const labelLeftWithError = () => <Dropdown
  dropdownId="dropdown"
  isRequired={false}
  labelPosition="left"
  labelText="Label"
  labelId="label"
  hasError={true}
  errorContentId="error"
  errorContent={<span>Error Message Lorem Ipsum</span>}
  dropdownOptions={["one", "two", "three"]}
  onSelectChange={action("selectChanged")}
  onSelectBlur={action("selectBlur")} />;

  export const noLabelWithError = () => <Dropdown
  dropdownId="dropdown"
  isRequired={false}
  labelPosition="none"
  ariaLabel="label"
  hasError={true}
  errorContentId="error"
  errorContent={<span>Error Message Lorem Ipsum</span>}
  dropdownOptions={["one", "two", "three"]}
  onSelectChange={action("selectChanged")}
  onSelectBlur={action("selectBlur")} />;

export const RNItemPerPage = () => <Dropdown
  dropdownId="dropdown"
  isRequired={false}
  labelPosition="left"
  labelText="Items Per Page"
  labelId="nav-items-per-page"
  dropdownOptions={["10", "20", "50", "100"]}
  onSelectChange={action("selectChanged")}
  onSelectBlur={action("selectBlur")} />;

export const RNRelevance = () => <Dropdown
  dropdownId="dropdown"
  isRequired={false}
  labelPosition="left"
  labelText="Sort By"
  labelId="nav-sort-by"
  dropdownOptions={["Relevance", "Title A-Z", "Title Z-A", "Author A-Z", "Author Z-A", "Year Published (Old-New)", "Year Published (New-Old)"]}
  onSelectChange={action("selectChanged")}
  onSelectBlur={action("selectBlur")} />;
