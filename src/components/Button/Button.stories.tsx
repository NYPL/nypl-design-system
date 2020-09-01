import * as React from "react";

import Button from "./Button";
import { ButtonTypes } from "./ButtonTypes";
import Icon from "../Icons/Icon";
import { IconRotationTypes, IconNames } from "../Icons/IconTypes";
import { action } from "@storybook/addon-actions";
import { withDesign } from "storybook-addon-designs";
import { text, boolean, select } from "@storybook/addon-knobs";

export default {
    title: "Button",
    component: Button,
    decorators: [withDesign],
};

let showIconLeft;
let showIconRight;

export const button = () => (
    <>
        {boolean("Show Icon on Left", true)
            ? (showIconLeft = true)
            : (showIconLeft = false)}
        {boolean("Show Icon on Right", false)
            ? (showIconRight = true)
            : (showIconRight = false)}
        <Button
            onClick={action("clicked")}
            id="button"
            buttonType={select("Button Type", ButtonTypes, ButtonTypes.Primary)}
            type="submit"
            disabled={boolean("Disabled", false)}
        >
            {showIconLeft && (
                <Icon
                    name={select("Icon", IconNames, IconNames.search_small)}
                    decorative={true}
                    modifiers={["small", "icon-left"]}
                />
            )}
            {text("Button Text", "Search")}
            {showIconRight && (
                <Icon
                    name={select("Icon", IconNames, IconNames.search_small)}
                    decorative={true}
                    modifiers={["small", "icon-right"]}
                />
            )}
        </Button>
    </>
);

button.story = {
    name: "Button",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11477%3A2298",
        },
    },
};
