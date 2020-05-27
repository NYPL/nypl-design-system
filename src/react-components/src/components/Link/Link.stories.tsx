import * as React from "react";

import Link from "./Link";
import Icon from "../Icons/Icon";

export default {
    title: "Link",
    component: Link,
};

export const passedInLink = () => (
    <Link>
        <a href="#passed-in-link">I'm cold</a>
    </Link>
);

export const generatedLink = () => (
    <Link url="#passed-in-link">I'm very cold</Link>
);

export const linkWithLeftIcon = () => (
    <Link url="#passed-in-link" className="more-link">
        <>
            <Icon
                name="arrow_xsmall"
                modifiers={["left"]}
                blockName="more-link"
                decorative={true}
            ></Icon>
            content
        </>
    </Link>
);

export const linkWithRightIcon = () => (
    <Link url="#passed-in-link" className="more-link">
        <>
            content
            <Icon
                name="arrow_xsmall"
                blockName="more-link"
                modifiers={["right"]}
                decorative={true}
            ></Icon>
        </>
    </Link>
);
