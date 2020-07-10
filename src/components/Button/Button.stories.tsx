import * as React from "react";

import Button from "./Button";
import { ButtonTypes, ButtonIconPositions } from "./ButtonTypes";
import { IconRotationTypes, IconNames } from "../Icons/IconTypes";
import { action } from "@storybook/addon-actions";
import { withDesign } from "storybook-addon-designs";
import { text, boolean, select } from "@storybook/addon-knobs";

export default {
    title: "Button",
    component: Button,
    decorators: [withDesign],
};

let showIcon;

export const button = () => (
    <>
        {boolean("Show Icon", true) ? (showIcon = true) : (showIcon = false)}
        <Button
            onClick={action("clicked")}
            id="button"
            buttonType={select("Button Type", ButtonTypes, ButtonTypes.Primary)}
            type="submit"
            iconPosition={
                showIcon
                    ? select(
                          "Icon Position",
                          ButtonIconPositions,
                          ButtonIconPositions.Left
                      )
                    : null
            }
            iconName={
                showIcon
                    ? select("Icon", IconNames, IconNames.search_small)
                    : null
            }
            iconDecorative={true}
        >
            {text("Button Text", "Search")}
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
