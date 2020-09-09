import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Accordion, { AccordionProps } from "./Accordion";
import { action } from "@storybook/addon-actions";
import { withDesign } from "storybook-addon-designs";

import { BasicCheckbox } from "../Checkbox/Checkbox.stories";
import List from "../List/List";
import { ListTypes } from "../List/ListTypes";

export default {
    title: "Accordion",
    component: Accordion,
    decorators: [withDesign],
} as Meta;

// Set up the reusable template to create multiple stories for the
// Accordian component.
const AccordionTemplate = ({ items, ...args }) => (
    <Accordion {...args}>
        <List
            type={ListTypes.Unordered}
            id="checkbox-list"
            modifiers={["no-list-styling"]}
        >
            {items.map((item) => (
                <li>
                    <BasicCheckbox {...item} />
                </li>
            ))}
        </List>
    </Accordion>
);

// This is one specific story where it will render a list of checkboxes.
export const AccordionWithCheckboxes = AccordionTemplate.bind({});

// The `args` allow these props to be updated in the UI through the
// "Controls" tab.
AccordionWithCheckboxes.args = {
    accordionLabel: "Click to expand",
    labelId: "accordionBtn",
    items: [BasicCheckbox.args],
};

AccordionWithCheckboxes.argTypes = {
    blockName: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    modifiers: { table: { disable: true } },
};

AccordionWithCheckboxes.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10734%3A2520",
    },
};

// This is one specific story where it will render a list of FAQs.
export const AccordionAsFAQ = AccordionTemplate.bind({});
AccordionAsFAQ.args = {
    accordionLabel: "FAQ Question Lorem Ipsum",
    modifiers: ["faq"],
    labelId: "accordionBtn",
    items: [BasicCheckbox.args],
};

AccordionAsFAQ.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10734%3A2520",
    },
};
