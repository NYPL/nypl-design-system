import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Accordion, { AccordionProps } from "./Accordion";
import { action } from "@storybook/addon-actions";
import { withDesign } from "storybook-addon-designs";

import Checkbox from "../Checkbox/Checkbox";
import List from "../List/List";
import { ListTypes } from "../List/ListTypes";

export default {
    title: "Accordion",
    component: Accordion,
    decorators: [withDesign],
} as Meta;

// Set up the reusable template to create multiple stories for the
// Accordian component.
const Template: Story<AccordionProps> = (args) => (
    <Accordion {...args}>{childrenList}</Accordion>
);

const checkboxes = [
    <li key="one">
        <Checkbox
            onChange={action("changed")}
            checkboxId="checkbox-1"
            labelOptions={{
                id: "checkbox-1-label",
                labelContent: <>Checkbox 1</>,
            }}
        ></Checkbox>
    </li>,
    <li key="two">
        <Checkbox
            onChange={action("changed")}
            checkboxId="checkbox-2"
            labelOptions={{
                id: "checkbox-2-label",
                labelContent: <>Checkbox 2</>,
            }}
        ></Checkbox>
    </li>,
    <li key="three">
        <Checkbox
            onChange={action("changed")}
            checkboxId="checkbox-3"
            labelOptions={{
                id: "checkbox-3-label",
                labelContent: <>Checkbox 3</>,
            }}
        ></Checkbox>
    </li>,
];
const childrenList = (
    <List
        type={ListTypes.Unordered}
        id="checkbox-list"
        modifiers={["no-list-styling"]}
    >
        {checkboxes}
    </List>
);

// This is one specific story where it will render a list of checkboxes.
export const AccordionWithCheckboxes = Template.bind({});

// The `args` allow these props to be updated in the UI through the
// "Controls" tab.
AccordionWithCheckboxes.args = {
    accordionLabel: "Click to expand",
    labelId: "accordionBtn",
};

AccordionWithCheckboxes.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10734%3A2520",
    },
};
