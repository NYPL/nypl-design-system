import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import range from "lodash/range";
import Dropdown from "./Dropdown";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Dropdown",
  component: Dropdown,
  decorators: [withDesign],
} as Meta;

// Set up the reusable template to create multiple stories for the
// Dropdown component.
const DropdownTemplate = ({ ...args }) => (
  <Dropdown {...args} inputId={`${args.inputId}`} />
);

export const SingleDropdown = DropdownTemplate.bind({});

// The `args` allow these props to be updated in the UI through the
// "Controls" tab.
SingleDropdown.args = {
  dropdownLabel: "Click to expand",
  inputId: "dropdownBtn",
  count: 1,
  options: [{ name: "Cats" }, { name: "Dogs" }, { name: "Rabbits" }],
};

SingleDropdown.argTypes = {
  blockName: { table: { disable: true } },
  className: { table: { disable: true } },
  id: { table: { disable: true } },
  modifiers: { table: { disable: true } },
};

SingleDropdown.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=17519%3A64445",
  },
};

// This is one specific story where it will render a group of Dropdowns.
export const DropdownSet = DropdownTemplate.bind({});
DropdownSet.args = {
  dropdownLabel: "Dropdown Set",
  modifiers: ["set"],
  inputId: "dropdownBtn",
  count: 3,
  options: [{ name: "Cats" }, { name: "Dogs" }, { name: "Rabbits" }],
};

DropdownSet.argTypes = {
  blockName: { table: { disable: true } },
  className: { table: { disable: true } },
  id: { table: { disable: true } },
};

DropdownSet.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=17519%3A64445",
  },
};
