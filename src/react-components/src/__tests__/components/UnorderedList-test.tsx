import { expect } from "chai";

import * as Enzyme from "enzyme";
import * as React from "react";

import UnorderedList from "../../components/List/UnorderedList";

describe("Link With Underline", () => {
    let wrapper: Enzyme.ReactWrapper<{}, {}>;
    let textList: JSX.Element[] = [];

    it("Returns proper classes for UnorderedList with modifier", () => {
        wrapper = Enzyme.mount(
            <UnorderedList id="text-list-scroll" modifiers={["scroll"]}>
                {textList}
            </UnorderedList>
        );
        expect(
            wrapper
                .find("ul")
                .hasClass(
                    "unordered-list unordered-list unordered-list--scroll"
                )
        ).to.equal(true);
    });

    it("Returns proper classes for UnorderedList without modifier", () => {
        wrapper = Enzyme.mount(
            <UnorderedList id="search-results-list">{textList}</UnorderedList>
        );
        expect(
            wrapper.find("ul").hasClass("unordered-list unordered-list")
        ).to.equal(true);
    });
});
