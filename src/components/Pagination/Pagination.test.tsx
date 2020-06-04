import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Pagination from "./Pagination";

describe("Pagination Test", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;
    let previousCallback;
    let nextCallback;
    let changeCallback;
    let blurCallback;

    beforeEach(() => {
        previousCallback = jest.fn();
        nextCallback = jest.fn();
        changeCallback = jest.fn();
        blurCallback = jest.fn();
    });

    it("Renders two buttons and a Select", () => {
        wrapper = Enzyme.shallow(
            <Pagination
                paginationDropdownOptions={[
                    "1 of 4",
                    "2 of 4",
                    "3 of 4",
                    "4 of 4",
                ]}
                previousPageHandler={previousCallback}
                nextPageHandler={nextCallback}
                currentValue={"1 of 4"}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        expect(wrapper.find("Button")).to.have.lengthOf(2);
        expect(wrapper.find("Dropdown")).to.have.lengthOf(1);
    });

    it("Renders two buttons and a Select when there are zero pages", () => {
        wrapper = Enzyme.shallow(
            <Pagination
                paginationDropdownOptions={[
                    "1 of 4",
                    "2 of 4",
                    "3 of 4",
                    "4 of 4",
                ]}
                previousPageHandler={previousCallback}
                nextPageHandler={nextCallback}
                currentValue={"1 of 4"}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        expect(wrapper.find("Button")).to.have.lengthOf(2);
        expect(wrapper.find("Dropdown")).to.have.lengthOf(1);
    });
});
