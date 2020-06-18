import * as React from "react";

import Heading from "./Heading";

export default {
    title: "Heading",
    component: Heading,
};

export const allHeadings = () => [
    <Heading level={1} id="heading1" text={"Heading 1"} />,
    <Heading level={2} id="heading2" text={"Heading 2"} />,
    <Heading level={3} id="heading3" text={"Heading 3"} />,
    <Heading level={4} id="heading4" text={"Heading 4"} />,
    <Heading level={5} id="heading5" text={"Heading 5"} />,
    <Heading level={6} id="heading6" text={"Heading 6"} />,
];

allHeadings.story = {
    name: "All Headings",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10975%3A16",
        },
    },
};

export const headingsWithBold = () => (
    <Heading id="heading1" level={1}>
        <>
            <b>Head</b>ing 1
        </>
    </Heading>
);

headingsWithBold.story = {
    name: "Headings With Bold",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10975%3A16",
        },
    },
};

export const headingsWithLink = () => (
    <Heading id="heading1" level={1}>
        <>
            <a href="hello">Head</a>ing
        </>
    </Heading>
);

headingsWithLink.story = {
    name: "Headings With Link",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10975%3A16",
        },
    },
};
