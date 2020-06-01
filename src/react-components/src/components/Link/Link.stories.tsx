import * as React from "react";

import Link from "./Link";
import { LinkTypes, LinkIconPositions } from "./LinkTypes";
import Icon from "../Icons/Icon";
import { iconRotationTypes } from "../Icons/IconTypes";

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
    <Link href="#passed-in-link" linkType={LinkTypes.Default}>
        I'm very cold
    </Link>
);

export const buttonLink = () => (
    <Link linkType={LinkTypes.Button} href="#passed-in-link">
        I'm very cold
    </Link>
);

export const actionLinkWithLeftIcon = () => (
    <Link linkType={LinkTypes.Action} iconPosition={LinkIconPositions.Left}>
        <a href="#passedinlink">content</a>
    </Link>
);

export const actionLinkWithRightIcon = () => (
    <Link
        href="#passed-in-link"
        linkType={LinkTypes.Action}
        iconPosition={LinkIconPositions.Right}
    >
        content
    </Link>
);

export const actionLinkWithNonArrowIcon = () => (
    <Link href="#passed-in-link" linkType={LinkTypes.Action}>
        <Icon
            name="download"
            blockName="more-link"
            modifiers={["left"]}
            decorative={true}
            iconRotation={iconRotationTypes.rotate0}
        ></Icon>
        Download
    </Link>
);
