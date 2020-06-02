import * as React from "react";

import Link from "./Link";
import { LinkTypes } from "./LinkTypes";
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

export const forwardsLink = () => (
    <Link linkType={LinkTypes.Forwards}>
        <a href="#passedinlink">content</a>
    </Link>
);

export const backwardsLink = () => (
    <Link href="#passed-in-link" linkType={LinkTypes.Backwards}>
        content
    </Link>
);

export const actionLinkWithDownloadIcon = () => (
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
