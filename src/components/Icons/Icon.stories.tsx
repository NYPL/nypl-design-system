import * as React from "react";

import Card from "../Card/Card";
import Icon from "./Icon";
import { IconNames } from "./IconTypes";

export default {
    title: "Icon",
    component: Icon,
};

let icons = [];

for (let icon in IconNames) {
    icons.push(
        <Card>
            <Icon name={IconNames[icon]} decorative={true}></Icon>
        </Card>
    );
}

export const Icons = () => <>{icons}</>;

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
