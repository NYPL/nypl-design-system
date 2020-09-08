import * as React from "react";
import { select, boolean } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";

import Breadcrumbs from "./Breadcrumbs";
import Heading from "../Heading/Heading";
import Link from "../Link/Link";

export default {
    title: "Breadcrumb",
    component: Breadcrumbs,
    decorators: [withDesign],
};

const shortItems = [
    { url: "#", text: "Parent" },
    { url: "#", text: "Home" },
];

const longItems = [
    { url: "#", text: "Parent" },
    { url: "#", text: "Home" },
    {
        url: "#",
        text:
            "Roast Half And Half Pumpkin Spice Siphon Aroma Ristretto Cinnamon Saucer",
    },
    {
        url: "#",
        text:
            "Roast Half And Half Pumpkin Spice Siphon Aroma Ristretto Cinnamon Saucer",
    },
];

const sections = [
    "nypl--books-and-more",
    "nypl--locations",
    "nypl--research",
    "nypl--whats-on",
];
let showLongItems;

export const breadcrumbs = () => (
    <>
        {boolean("Show Long Items", false)
            ? (showLongItems = true)
            : (showLongItems = false)}
        <Heading level={1}>Breadcrumbs</Heading>
        <p>
            Breadcrumbs background color matches the secondary section color of
            the website section they're placed into. See more about brand colors{" "}
            <Link href="?path=/story/colors--colors-brand">here</Link>.
        </p>
        <div className={select("Section", sections, sections[0])}>
            <Breadcrumbs breadcrumbs={showLongItems ? longItems : shortItems} />
        </div>
    </>
);

breadcrumbs.storyName = "Breadcrumbs";

breadcrumbs.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10766%3A1031",
    },
};
