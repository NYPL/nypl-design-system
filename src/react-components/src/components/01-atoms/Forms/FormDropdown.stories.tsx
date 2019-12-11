import * as React from "react";

import FormDropdown from "./FormDropdown";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";


export default {
  title: "FormDropdown",
  component: FormDropdown,
  decorators: [withKnobs]
};

export const dropdown = () => <FormDropdown dropdownId="baaah" ariaLabel="search" onSelectBlur={action("changed")} options={["hello", "goodbye"]}/>;
export const dropdownWithLabel = () => <FormDropdown dropdownId="baaah" ariaLabel="search" labelText="label" onSelectBlur={action("changed")} options={["hello", "goodbye"]}/>;
