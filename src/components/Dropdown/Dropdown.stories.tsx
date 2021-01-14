import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
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

export const ExampleDropdown = DropdownTemplate.bind({});

const options = [{ name: "Cats" }, { name: "Dogs" }, { name: "Rabbits" }];

// The `args` allow these props to be updated in the UI through the
// "Controls" tab.
ExampleDropdown.args = {
  modifiers: ["fieldset"],
  dropdownLabel: "Click to expand",
  inputId: "dropdownBtn",
  children: (
    <form>
      <fieldset>
        {options.map(option => (
          <div key={`option-${option.name}`}>
            <input type="checkbox" id={option.name} />
            <label htmlFor={option.name}>{option.name}</label>
          </div>
        ))}
      </fieldset>
    </form>
  ),
};

ExampleDropdown.argTypes = {
  blockName: { table: { disable: true } },
  className: { table: { disable: true } },
  id: { table: { disable: true } },
  modifiers: { table: { disable: true } },
};

ExampleDropdown.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=17519%3A64445",
  },
};
