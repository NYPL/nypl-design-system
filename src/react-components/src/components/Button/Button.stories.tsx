import * as React from "react";

import Button from "./Button";
import { action } from "@storybook/addon-actions";
import { withDesign } from "storybook-addon-designs";
import { ButtonTypes, ButtonIconPositions } from "./ButtonTypes";

export default {
    title: "Button",
    component: Button,
    decorators: [withDesign],
};

export const buttonFilledIcon = () => (
    <Button
        callback={action("clicked")}
        id="button"
        buttonType={ButtonTypes.Filled}
        type="submit"
        iconPosition={ButtonIconPositions.Left}
        iconName="search_small"
        iconDecorative={true}
    >
        Search
    </Button>
);

buttonFilledIcon.story = {
    name: "Button Filled Icon",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=14972%3A0",
        },
    },
};

export const buttonOutline = () => (
    <Button
        callback={action("clicked")}
        id="button"
        type="submit"
        buttonType={ButtonTypes.Outline}
    >
        Hello World
    </Button>
);

buttonOutline.story = {
    name: "Button Outline",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=14972%3A143",
        },
    },
};

export const buttonWithSpan = () => (
    <Button
        callback={action("clicked")}
        id="button"
        buttonType={ButtonTypes.Outline}
    >
        <span>Style my span!</span>
    </Button>
);

export const buttonIconChildrenString = () => (
    <Button
        callback={action("clicked")}
        id="button"
        buttonType={ButtonTypes.Filled}
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
        buttonType={ButtonTypes.Outline}
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
        buttonType={ButtonTypes.Outline}
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
        iconName="arrow_xsmall"
        iconModifiers={["left"]}
        iconDecorative={true}
    >
        <span>button content</span>
    </Button>
);
