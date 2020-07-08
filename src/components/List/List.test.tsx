import { expect } from "chai";

import * as Enzyme from "enzyme";
import * as React from "react";

import List from "./List";
import { ListTypes } from "./ListTypes";

describe("Link With Underline", () => {
    let wrapper: Enzyme.ReactWrapper<{}, {}>;
    let textList: JSX.Element[] = [];

    it("Returns proper classes for List with modifier", () => {
        wrapper = Enzyme.mount(
            <List
                type={ListTypes.Unordered}
                id="text-list-scroll"
                modifiers={["scroll"]}
            >
                {textList}
            </List>
        );
        expect(
            wrapper
                .find("ul")
                .hasClass(
                    "unordered-list unordered-list unordered-list--scroll"
                )
        ).to.equal(true);
    });

    it("Returns proper classes for List without modifier", () => {
        wrapper = Enzyme.mount(
            <List type={ListTypes.Unordered} id="search-results-list">
                {textList}
            </List>
        );
        expect(
            wrapper.find("ul").hasClass("unordered-list unordered-list")
        ).to.equal(true);
    });
});
