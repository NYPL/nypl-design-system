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
    <Link
        linkType={LinkTypes.Action}
        iconPosition={LinkIconPositions.Left}
        iconRotation={iconRotationTypes.rotate90}
    >
        <a href="#passedinlink">content</a>
    </Link>
);

export const linkWithRightIcon = () => (
    <Link
        url="#passed-in-link"
        linkType={LinkTypes.Action}
        iconPosition={LinkIconPositions.Right}
        iconRotation={iconRotationTypes.rotate270}
    >
        content
    </Link>
);
