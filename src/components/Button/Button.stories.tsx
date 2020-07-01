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

console.log(IconNames.search_small);

export const button = () => (
    <Button
        onClick={action("clicked")}
        id="button"
        buttonType={select("Button Type", ButtonTypes, ButtonTypes.Primary)}
        type="submit"
        iconPosition={select(
            "Icon Position",
            ButtonIconPositions,
            ButtonIconPositions.Left
        )}
        iconName={select("Icon", IconNames, IconNames.search_small)}
        iconDecorative={true}
    >
        Search
    </Button>
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
