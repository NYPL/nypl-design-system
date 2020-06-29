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
        callback={action("clicked")}
        id="button"
        buttonType={select("Button Type", ButtonTypes, ButtonTypes.Primary)}
        type="submit"
        iconPosition={ButtonIconPositions.Left}
        // iconName="search_small"
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

export const buttonWithSpan = () => (
    <Button
        callback={action("clicked")}
        id="button"
        buttonType={ButtonTypes.Secondary}
    >
        <span>Style my span!</span>
    </Button>
);

export const buttonIconChildrenString = () => (
    <Button
        callback={action("clicked")}
        id="button"
        buttonType={ButtonTypes.Primary}
        type="submit"
        iconPosition={ButtonIconPositions.Right}
        iconName="search_small"
        iconDecorative={true}
    >
        Search!
    </Button>
);

export const buttonIconChildrenElement = () => (
    <Button
        callback={action("clicked")}
        id="button"
        buttonType={ButtonTypes.Secondary}
        type="button"
        iconPosition={ButtonIconPositions.Right}
        iconName="search_small"
        iconDecorative={true}
    >
        <span>I'm wrapped in a span!</span>
    </Button>
);

export const buttonFullWidthIconRight = () => (
    <Button
        callback={action("clicked")}
        id="button"
        type="submit"
        buttonType={ButtonTypes.Secondary}
        iconPosition={ButtonIconPositions.JustifyRight}
        modifiers={["large"]}
        iconName="plus"
        iconDecorative={true}
    >
        <span>button content</span>
    </Button>
);

export const linkLikeButton = () => (
    <Button
        callback={action["clicked"]}
        id="button"
        type="button"
        buttonType={ButtonTypes.Link}
    >
        <span>button content</span>
    </Button>
);

export const linkLikeButtonIconLeft = () => (
    <Button
        callback={action["clicked"]}
        id="button"
        type="button"
        buttonType={ButtonTypes.Link}
        iconPosition={ButtonIconPositions.Left}
        iconRotation={IconRotationTypes.rotate90}
        modifiers={["left"]}
        iconName="arrow_xsmall"
        iconDecorative={true}
    >
        <span>button content</span>
    </Button>
);
