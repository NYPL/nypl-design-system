import * as React from "react";

import Link from "./Link";
import { LinkTypes } from "./LinkTypes";
import Icon from "../Icons/Icon";
import { IconRotationTypes } from "../Icons/IconTypes";

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
    // To Pass in an icon and its link, make sure that the link tag wraps the icon.
    // The passed-in content must be properly styled.
    <Link linkType={LinkTypes.Action}>
        <a href="#passed-link" style={{ display: "flex" }}>
            <Icon
                name="download"
                blockName="more-link"
                modifiers={["left"]}
                decorative={true}
                iconRotation={IconRotationTypes.rotate0}
            ></Icon>
            Download
        </a>
    </Link>
);
