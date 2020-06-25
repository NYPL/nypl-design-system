import * as React from "react";

import SearchPromo from "./SearchPromo";
import { action } from "@storybook/addon-actions";
import Link from "../Link/Link";

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
                Use <Link href="#advanced-fake-link">Advanced Search</Link> to
                narrow your results.
            </p>
        }
        searchBarId="searchBarId"
        dropdownId="dropdownId"
        searchInputAriaLabel="ariaLabel"
        searchDropdownOptions={
            <>
                <option>Keyword</option>
                <option>Other Keyword</option>
            </>
        }
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
                Use <Link href="#advanced-fake-link">Advanced Search</Link> to
                narrow your results.
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
