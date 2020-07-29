import * as React from "react";

import { boolean, text } from "@storybook/addon-knobs";
import cssVariables from "../../helpers/CSSVariablesHelper";
import getCSSVariable from "../../helpers/getCSSVariable";
import Heading from "../Heading/Heading";
import { ListTypes } from "../List/ListTypes";

export default {
    title: "Breakpoints",
};

const breakpointVariables: { [k: string]: string } = {};

for (const [key, value] of Object.entries(cssVariables)) {
    if (key.startsWith(" --breakpoint")) {
        breakpointVariables[key] = value;
    }
}

const breakpointSizes = {
    Desktop: "xl",
    "Tablet Landscape": "large",
    "Tablet Portrait": "medium",
    Mobile: "small",
};

let breakpointDocs = [];

for (const [key, value] of Object.entries(breakpointSizes)) {
    breakpointDocs.push(
        <div style={{ marginBottom: "2%" }}>
            <div>
                <span
                    style={{
                        marginRight: "var(--space-s)",
                    }}
                >
                    {key}
                </span>
                <span>--breakpoint-{value}</span>
            </div>
            <p>{getCSSVariable(`--breakpoint-${value}`)}</p>
        </div>
    );
}

export const breakpoints = () => (
    <>
        <Heading level={1}>Breakpoints</Heading>
        {breakpointDocs}
    </>
);

breakpoints.story = {
    name: "Breakpoints",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17983%3A60146",
        },
    },
};
