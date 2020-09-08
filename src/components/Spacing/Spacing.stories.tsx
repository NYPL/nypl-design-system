import * as React from "react";

import cssVariables from "../../helpers/CSSVariablesHelper";
import Card from "../Card/Card";
import List from "../List/List";
import Heading from "../Heading/Heading";
import { ListTypes } from "../List/ListTypes";
import { CSSVariablesInterface } from "../../interfaces";

export default {
    title: "Spacing",
};

const spaceVariables: CSSVariablesInterface = {};

for (const [key, value] of Object.entries(cssVariables)) {
    if (key.startsWith(" --space")) {
        spaceVariables[key] = value;
    }
}

let spaceDocs = [];
const breakpointSizes = {
    Desktop: "xl",
    "Tablet Landscape": "large",
    "Tablet Portrait": "medium",
    Mobile: "small",
};

let spaceBoxStyle = {
    backgroundColor: "var(--ui-focus)",
    marginBottom: "var(--space-xs)",
    padding: "2%",
    color: "var(--ui-white)",
    flex: "1 1 100%",
    height: "20px",
};

for (const [key, value] of Object.entries(spaceVariables)) {
    spaceDocs.push(
        <li style={{ textAlign: "center" }}>
            <Card>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexFlow: "row wrap",
                        alignItems: "center",
                    }}
                >
                    <div id={value} style={{ width: `${value}` }}>
                        <div style={spaceBoxStyle}></div>
                    </div>
                    <div style={{ flex: "1 1 100%" }}>
                        {key}: {value}
                    </div>
                </div>
            </Card>
        </li>
    );
}

export const Spacing = () => (
    <>
        <Heading level={1}>Spacing Variables</Heading>
        <p>1rem in the Design System is equal to 16px.</p>
        <List
            type={ListTypes.Unordered}
            modifiers={["no-list-styling"]}
            className="card-grid__cards"
        >
            {spaceDocs}
        </List>
    </>
);
Spacing.storyName = "Spacing";
Spacing.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17249%3A13",
    },
};
