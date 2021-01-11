import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import range from "lodash/range";
import Dropdown from "./Dropdown";
import { withDesign } from "storybook-addon-designs";

import List from "../List/List";
import { ListTypes } from "../List/ListTypes";
import { list as ListStory } from "../List/List.stories";
import Link from "../Link/Link";

export default {
  title: "Dropdown",
  component: Dropdown,
  decorators: [withDesign],
} as Meta;

// Set up the reusable template to create multiple stories for the
// Accordian component.
const DropdownListTemplate = ({ count, children, ...args }) => (
  <List type={ListTypes.Unordered} modifiers={["no-list-styling"]}>
    {range(count).map(i => (
      <li key={i}>
        <Dropdown {...args} inputId={`${args.inputId}-${i}`}>
          {children}
        </Dropdown>
      </li>
    ))}
  </List>
);

// This is one specific story where it will render a list of checkboxes.
export const DropdownWithList = DropdownListTemplate.bind({});

// The `args` allow these props to be updated in the UI through the
// "Controls" tab.
DropdownWithList.args = {
  dropdownLabel: "Click to expand",
  inputId: "dropdownBtn",
  children: <ListStory {...ListStory.args} />,
  count: 1,
};

DropdownWithList.argTypes = {
  blockName: { table: { disable: true } },
  className: { table: { disable: true } },
  id: { table: { disable: true } },
  modifiers: { table: { disable: true } },
  children: { table: { disable: true } },
};

DropdownWithList.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10734%3A2520",
  },
};

const dropdownContent = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>

    <p>
      <Link href="#">Learn More</Link>
    </p>
  </>
);

// This is one specific story where it will render a list of FAQs.
export const DropdownSet = DropdownListTemplate.bind({});
DropdownSet.args = {
  dropdownLabel: "Dropdown Set",
  modifiers: ["set"],
  inputId: "dropdownBtn",
  children: dropdownContent,
  count: 3,
};

DropdownSet.argTypes = {
  blockName: { table: { disable: true } },
  className: { table: { disable: true } },
  id: { table: { disable: true } },
  children: { table: { disable: true } },
};

DropdownSet.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10734%3A2520",
  },
};
