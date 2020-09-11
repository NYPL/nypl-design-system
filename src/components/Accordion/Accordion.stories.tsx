import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import range from "lodash/range";
import Accordion, { AccordionProps } from "./Accordion";
import { action } from "@storybook/addon-actions";
import { withDesign } from "storybook-addon-designs";

// import List from "../List/List";
// import { ListTypes } from "../List/ListTypes";
import { list as ListStory } from "../List/List.stories";
import Link from "../Link/Link";

export default {
    title: "Accordion",
    component: Accordion,
    decorators: [withDesign],
} as Meta;

// Set up the reusable template to create multiple stories for the
// Accordian component.
const AccordionTemplate = ({ count, children, ...args }) => (
    <>
        {range(count).map((i) => (
            <Accordion {...args}>{children}</Accordion>
        ))}
    </>
);

// This is one specific story where it will render a list of checkboxes.
export const AccordionWithCheckboxes = AccordionTemplate.bind({});

// The `args` allow these props to be updated in the UI through the
// "Controls" tab.
AccordionWithCheckboxes.args = {
    accordionLabel: "Click to expand",
    labelId: "accordionBtn",
    children: <ListStory {...ListStory.args} />,
    count: 1,
};

AccordionWithCheckboxes.argTypes = {
    blockName: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    modifiers: { table: { disable: true } },
    children: { table: { disable: true } },
};

AccordionWithCheckboxes.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10734%3A2520",
    },
};

const faqContent = (
    <>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p>

        <p>
            <Link href="#">Learn More</Link>
        </p>
    </>
);

// This is one specific story where it will render a list of FAQs.
export const AccordionAsFAQSet = AccordionTemplate.bind({});
AccordionAsFAQSet.args = {
    accordionLabel: "FAQ Question Lorem Ipsum",
    modifiers: ["faq"],
    labelId: "accordionBtn",
    children: faqContent,
    count: 3,
};

AccordionAsFAQSet.argTypes = {
    blockName: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    children: { table: { disable: true } },
};

AccordionAsFAQSet.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10734%3A2520",
    },
};
