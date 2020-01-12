import * as React from "react";

import FormDropdown from "./FormDropdown";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "FormDropdown",
  component: FormDropdown,
  decorators: [withKnobs]
};

export const dropdown = () => <FormDropdown dropdownId="baaah"
  isRequired={false}
  ariaLabel="search"
  options={["one", "two"]}
  onSelectBlur={action("blur")}
  onSelectChange={action("changed")} />;

  export const dropdownWithSelected = () => <FormDropdown dropdownId="baaah"
  isRequired={false}
  ariaLabel="search"
  selectedOption={"two"}
  options={["one", "two"]}
  onSelectBlur={action("blur")}
  onSelectChange={action("changed")} />;
