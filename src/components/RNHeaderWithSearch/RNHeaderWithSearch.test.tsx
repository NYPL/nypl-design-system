import * as Enzyme from "enzyme";
import * as React from "react";

import RNHeaderWithSearch from "./RNHeaderWithSearch";

describe("HeaderWithSearch", () => {
    let blurCallback;
    let changeCallback;
    let submitCallback;

    beforeEach(() => {
        changeCallback = jest.fn();
        blurCallback = jest.fn();
    });

    it("Generates a Header and a Searchbar", () => {
        const wrapper = Enzyme.shallow(
            <RNHeaderWithSearch
                searchButtonId="searchButtonId"
                searchBarAriaLabel="Search research catalog"
                sectionTitle={<span>title</span>}
                advancedSearchElem={<span>hello</span>}
                searchBarId="searchBarId"
                dropdownId="dropdownId"
                textFieldAriaLabel="Research Now"
                searchDropdownOptions={["Keyword", "Author", "Subject"]}
                searchSubmitHandler={submitCallback}
                selectChangeHandler={changeCallback}
                selectBlurHandler={blurCallback}
            />
        );
        expect(wrapper.find("RNSectionTitle")).toHaveLength(1);
        expect(wrapper.find("SearchBar")).toHaveLength(1);
    });
});
