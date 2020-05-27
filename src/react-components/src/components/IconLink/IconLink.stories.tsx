import * as React from "react";
import { iconRotationOptions } from "../Icons/IconTypes";
import IconLink from "./IconLink";

export default {
    title: "Link with Icon",
    component: IconLink,
};

export const passedInLinkWithLeftIcon = () => (
    <IconLink iconPosition="left" iconRotation={iconRotationOptions.rotate90}>
        <a href="#passed-in-link">hello there</a>
    </IconLink>
);
export const passedInLinkWithNoIcon = () => (
    <IconLink>
        <a href="#passed-in-link">hello there</a>
    </IconLink>
);
export const linkWithLeftIcon = () => (
    <IconLink
        url="#generated-link-link"
        iconPosition="left"
        iconRotation={iconRotationOptions.rotate90}
    >
        hello there
    </IconLink>
);
export const linkWithRightIcon = () => (
    <IconLink
        url="#generated-link-link"
        iconPosition="right"
        iconRotation={iconRotationOptions.rotate270}
    >
        hello there
    </IconLink>
);
