import * as React from "react";

import SectionTitle from "./SectionTitle";

export default {
    title: "Section Title",
    component: SectionTitle,
};

export const headingsWithLinks = () => (
    <SectionTitle
        id={"section-title-with-link"}
        headingText={"Heading 2"}
        linkUrl="#heading2"
    />
);

export const headingNoLink = () => (
    <SectionTitle id={"section-title-without-link"} headingText={"Heading 2"} />
);
