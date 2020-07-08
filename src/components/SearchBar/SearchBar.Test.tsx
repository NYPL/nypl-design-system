import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";

import SearchBar from "./SearchBar";

describe("Search Bar with Optional Parameters", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;
    let searchCallback;
    let onChangeCallback;
    beforeEach(() => {
        searchCallback = stub();
        onChangeCallback = stub();
    });

    it("Search Bar has an input field and button", () => {
        let wrapper = Enzyme.shallow(
            <SearchBar
                id="id"
                ariaLabel="label"
                searchSubmitHandler={searchCallback}
            />
        );
        expect(wrapper.find("TextField")).to.have.lengthOf(1);
        expect(wrapper.find("Button")).to.have.lengthOf(1);
    });

    it("Search Bar calls callback on Submit ", () => {
        let mounted = Enzyme.mount(
            <SearchBar
                textFieldAriaLabel="searchBar"
                id="id"
                ariaLabel="label"
                searchSubmitHandler={searchCallback}
            />
        );
        mounted.find("Button").simulate("click");
        expect(searchCallback.callCount).to.equal(1);
    });

    it("SearchBar calls optional onChange property", () => {
        wrapper = Enzyme.shallow(
            <SearchBar
                textFieldAriaLabel="searchBar"
                id="id"
                ariaLabel="label"
                searchChangeHandler={onChangeCallback}
                searchSubmitHandler={searchCallback}
            />
        );
        wrapper
            .find("TextField")
            .dive()
            .find("input")
            .simulate("change", { target: { value: "Hello" } });
        expect(onChangeCallback.callCount).to.equal(1);
    });

    it("Shows 'error' span when error is passed", () => {
        wrapper = Enzyme.shallow(
            <SearchBar
                id="id"
                ariaLabel="label"
                hasError={true}
                errorMessage="test"
                searchSubmitHandler={searchCallback}
            />
        );
        expect(
            wrapper.find(".search-bar__input-description--error")
        ).to.have.lengthOf(1);
    });

    it("Shows 'error' text inside input when error is passed with ResearchNow Variation", () => {
        let mounted = Enzyme.mount(
            <SearchBar
                id="id"
                ariaLabel="label"
                hasError={true}
                errorMessage="test"
                searchSubmitHandler={searchCallback}
            />
        );

        expect(
            mounted.find(".search-bar__input-description--error")
        ).to.have.lengthOf(0);
        expect(mounted.find("input").prop("placeholder")).to.equal("test");
    });

    it("Throws error when SearchBar is not passed aria-label or aria-labelledby", () => {
        expect(() =>
            Enzyme.mount(
                <SearchBar id="id" searchSubmitHandler={searchCallback} />
            )
        ).to.throw("Either ariaLabel and ariaLabelledBy must be passed");
    });

    it("Throws error when hasError is true and no errorMessage is passed", () => {
        expect(() =>
            Enzyme.mount(
                <SearchBar
                    id="id"
                    ariaLabel="label"
                    hasError={true}
                    searchSubmitHandler={searchCallback}
                />
            )
        ).to.throw("If there is an error, there must also be an error message");
    });
});
