import * as React from "react";

import Icon from "./Icon";
import { IconNames, LogoNames } from "./IconTypes";
import List from "../List/List";
import { ListTypes } from "../List/ListTypes";

export default {
    title: "Icon",
    component: Icon,
};

const iconRow = function (array, icon, modifiers = "") {
    let styles = {} as any;
    if (icon.indexOf("_negative") !== -1) {
        styles.backgroundColor = "#000";
        styles.display = "inline-block";
    }
    array.push(
        <li
            key={icon}
            style={{
                marginBottom: "var(--space-s)",
            }}
        >
            <span style={styles}>
                <Icon name={icon} decorative={true} modifiers={[modifiers]} />
            </span>
            <span style={{ marginLeft: "var(--space-s)" }}>{icon}</span>
        </li>
    );
};

let icons = [];

for (let icon in IconNames) {
    iconRow(icons, icon);
}

let logos = [];

for (let logo in LogoNames) {
    iconRow(logos, logo, "xlarge");
}

export const Icons = () => <List type={ListTypes.Unordered}>{icons}</List>;

Icons.story = {
    name: "Icons",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17226%3A630",
        },
    },
};

export const Logos = () => (
    <List type={ListTypes.Unordered} modifiers={["no-list-styling"]}>
        {logos}
    </List>
);

Logos.story = {
    name: "Logos",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10968%3A2377",
        },
    },
};
