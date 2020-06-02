import * as React from "react";

import SearchPromo from "./SearchPromo";
import { action } from "@storybook/addon-actions";
import UnderlineLink from "../UnderlineLink/UnderlineLink";

export default {
    title: "SearchPromo",
    component: SearchPromo,
};

export const researchNowSearchPromo = () => (
    <SearchPromo
        headingText="Search the World's Research Collections"
        titleId="title"
        searchButtonId="searchButtonId"
        advancedSearchMessage={
            <p>
                Use{" "}
                <UnderlineLink url="#advanced-fake-link">
                    Advanced Search
                </UnderlineLink>{" "}
                to narrow your results.
            </p>
        }
        searchBarId="searchBarId"
        dropdownId="dropdownId"
        searchInputAriaLabel="ariaLabel"
        searchDropdownOptions={["Keyword", "Author"]}
        searchSubmitHandler={action("searched")}
        selectChangeHandler={action("changed")}
        selectBlurHandler={action("selectChanged")}
    />
);
export const searchPromoWithError = () => (
    <SearchPromo
        headingText="Search the World's Research Collections"
        titleId="title"
        advancedSearchMessage={
            <p>
                Use{" "}
                <UnderlineLink url="#advanced-fake-link">
                    Advanced Search
                </UnderlineLink>{" "}
                to narrow your results.
            </p>
        }
        searchButtonId="searchButtonId"
        searchBarId="searchBarId"
        dropdownId="dropdownId"
        searchInputAriaLabel="ariaLabel"
        hasError={true}
        errorMessage="oh no you messed up"
        searchDropdownOptions={["Keyword", "Author"]}
        searchSubmitHandler={action("searched")}
        selectChangeHandler={action("changed")}
        selectBlurHandler={action("selectChanged")}
    />
);
