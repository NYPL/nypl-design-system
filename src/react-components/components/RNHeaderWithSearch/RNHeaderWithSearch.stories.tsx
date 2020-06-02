/* OH-31 Header With Search */
import * as React from "react";

import RNHeaderWithSearch from "./RNHeaderWithSearch";
import { action } from "@storybook/addon-actions";
import UnderlineLink from "../UnderlineLink/UnderlineLink";

import bem from "../../utils/bem";

export default {
    title: "Research Now Header With Search",
    component: RNHeaderWithSearch,
};

export const researchNowSearchHeader = () => (
    <RNHeaderWithSearch
        searchButtonId="searchButtonId"
        searchBarAriaLabel="Search research catalog"
        sectionTitle={
            <a
                className={`${bem(
                    "rn-section-title",
                    ["dark-background"],
                    "search-header"
                )} rn-section-title`}
                href={"researchNow-home-url"}
            >
                <span id={"research-now-title"}>
                    Research
                    <span className={bem("emphasis", [], "rn-section-title")}>
                        Now
                    </span>
                </span>
            </a>
        }
        advancedSearchElem={
            <UnderlineLink url={"advanced-search-link"}>
                Advanced Search
            </UnderlineLink>
        }
        searchBarId="searchBarId"
        dropdownId="dropdownId"
        textFieldAriaLabel="Research Now"
        searchDropdownOptions={["Keyword", "Author", "Subject"]}
        searchSubmitHandler={action("searched")}
        selectChangeHandler={action("changed")}
        selectBlurHandler={action("selectChanged")}
    />
);
