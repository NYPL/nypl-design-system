import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import range from "lodash/range";
import Accordion from "./Accordion";
import { withDesign } from "storybook-addon-designs";

import List from "../List/List";
import { ListTypes } from "../List/ListTypes";
import { list as ListStory } from "../List/List.stories";
import Link from "../Link/Link";

export default {
    title: "Accordion",
    component: Accordion,
    decorators: [withDesign],
} as Meta;

// Set up the reusable template to create multiple stories for the
// Accordian component.
const AccordionListTemplate = ({ count, children, ...args }) => (
    <List type={ListTypes.Unordered} modifiers={["no-list-styling"]}>
        {range(count).map((i) => (
            <li key={i}>
                <Accordion {...args} inputId={`${args.inputId}-${i}`}>
                    {children}
                </Accordion>
            </li>
        ))}
    </List>
);

// This is one specific story where it will render a list of checkboxes.
export const AccordionWithList = AccordionListTemplate.bind({});

// The `args` allow these props to be updated in the UI through the
// "Controls" tab.
AccordionWithList.args = {
    accordionLabel: "Click to expand",
    inputId: "accordionBtn",
    children: <ListStory {...ListStory.args} />,
    count: 1,
};

AccordionWithList.argTypes = {
    blockName: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    modifiers: { table: { disable: true } },
    children: { table: { disable: true } },
};

AccordionWithList.parameters = {
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
export const AccordionAsFAQSet = AccordionListTemplate.bind({});
AccordionAsFAQSet.args = {
    accordionLabel: "FAQ Question Lorem Ipsum",
    modifiers: ["faq"],
    inputId: "accordionBtn",
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
