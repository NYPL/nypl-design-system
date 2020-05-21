import * as React from "react";

import UnderlineLink from "./UnderlineLink";

export default {
    title: "Link with Underline",
    component: UnderlineLink,
};

export const passedInLink = () => (
    <UnderlineLink>
        <a href="#passed-in-link">hello there</a>
    </UnderlineLink>
);
export const generatedLink = () => (
    <UnderlineLink url="#passed-in-link">hello</UnderlineLink>
);
