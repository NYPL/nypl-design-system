import * as React from "react";

import RNSectionTitle from "./RNSectionTitle";
import bem from "../../../../utils/bem";

export default {
    title: "Research Now Section Title",
    component: RNSectionTitle,
};

export const researchNowSectionTitle = () => (
    <RNSectionTitle>
        <a
            className={`${bem("rn-section-title", [
                "dark-background",
            ])} rn-section-title`}
            href={"researchNow-home-url"}
        >
            <span id={"research-now-title"}>
                Research
                <span className={bem("emphasis", [], "rn-section-title")}>
                    Now
                </span>
            </span>
        </a>
    </RNSectionTitle>
);
