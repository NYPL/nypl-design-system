import * as React from "react";

import Link from "./Link";
import { LinkTypes } from "./LinkTypes";
import Icon from "../Icons/Icon";

export default {
    title: "Link",
    component: Link,
};

export const passedInLink = () => (
    <Link linkType={LinkTypes.Default}>
        <a href="#passed-in-link">I'm cold</a>
    </Link>
);

export const generatedLink = () => (
    <Link url="#passed-in-link" linkType={LinkTypes.Default}>
        I'm very cold
    </Link>
);

export const buttonLink = () => (
    <Link linkType={LinkTypes.Button} url="#passed-in-link">
        I'm very cold
    </Link>
);

export const defaultLinkWithLeftIcon = () => (
    <Link linkType={LinkTypes.Action}>
        <Icon
            name="arrow_xsmall"
            modifiers={["left"]}
            blockName="more-link"
            decorative={true}
        ></Icon>
        <a href="#passedinlink">content</a>
    </Link>
);

export const linkWithRightIcon = () => (
    <Link url="#passed-in-link" linkType={LinkTypes.Action}>
        content
        <Icon
            name="arrow_xsmall"
            blockName="more-link"
            modifiers={["right"]}
            decorative={true}
        ></Icon>
    </Link>
);
