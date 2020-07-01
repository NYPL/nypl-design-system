/* OH-31 Header With Search */
import * as React from "react";

import RNHeaderWithSearch from "./RNHeaderWithSearch";
import { action } from "@storybook/addon-actions";
import Link from "../Link/Link";
import Heading from "../Heading/Heading";

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
            <Heading
                level={1}
                url={"researchNow-home-url"}
                urlClass="researchnow__heading"
                blockName="search-header"
            >
                <>
                    Research
                    <span style={{ fontWeight: "bold" }}>Now</span>
                </>
            </Heading>
        }
        advancedSearchElem={
            <Link href={"advanced-search-link"}>Advanced Search</Link>
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
