import * as React from "react";

import FormDropdown from "./FormDropdown";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

export default {
  title: "FormDropdown",
  component: FormDropdown
};

export const dropdown = () => <FormDropdown dropdownId="baaah"
  isRequired={false}
  ariaLabel="search"
  options={["one", "two", text("third option", "three")]}
  onSelectBlur={action("blur")}
  onSelectChange={action("changed")} />;

  export const dropdownWithSelected = () => <FormDropdown dropdownId="baaah"
  isRequired={false}
  ariaLabel="search"
  selectedOption={"two"}
  options={["one", "two"]}
  onSelectBlur={action("blur")}
  onSelectChange={action("changed")} />;
