import * as Enzyme from "enzyme";
import * as React from "react";

import Dropdown from "./Dropdown";

describe("Dropdown", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;
    let blurCallback;
    let changeCallback;

    beforeEach(() => {
        changeCallback = jest.fn();
        blurCallback = jest.fn();
    });

    it("renders Select with Label", () => {
        wrapper = Enzyme.shallow(
            <Dropdown
                dropdownId="dropdown"
                isRequired={false}
                labelPosition="left"
                labelText="Sort By"
                labelId="nav-sort-by"
                dropdownOptions={["test1", "test2"]}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        expect(
            wrapper
                .find("FormDropdown")
                .dive()
                .find("select")
        ).toHaveLength(1);
        expect(
            wrapper
                .find("Label")
                .dive()
                .find("label")
        ).toHaveLength(1);
    });

    it("requires ariaLabel if labelPosition is none", () => {
        expect(() =>
            Enzyme.mount(
                <Dropdown
                    dropdownId="dropdown"
                    isRequired={false}
                    labelPosition="none"
                    dropdownOptions={["test1", "test2"]}
                    onSelectChange={changeCallback}
                    onSelectBlur={blurCallback}
                />
            )
        ).toThrowError("prop ariaLabel must be passed into Dropdown when labelPosition is 'none'");
    });

    it("does not render Label if labelPosition is none", () => {
        wrapper = Enzyme.shallow(
            <Dropdown
                dropdownId="dropdown"
                isRequired={false}
                labelPosition="none"
                ariaLabel="aria-label"
                dropdownOptions={["test1", "test2"]}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        expect(
            wrapper
                .find("FormDropdown")
                .dive()
                .find("select")
        ).toHaveLength(1);
        expect(wrapper.find("Label")).toHaveLength(0);
    });

    it("adds appropriate modifier if labelPosition is 'top' or 'left'", () => {
        wrapper = Enzyme.shallow(
            <Dropdown
                dropdownId="dropdown"
                isRequired={false}
                labelPosition="left"
                labelText="Sort By"
                labelId="nav-sort-by"
                dropdownOptions={["test1", "test2"]}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        expect(wrapper.find(".dropdown--label-left")).toHaveLength(1);
    });

    it("renders 'required' component if Required", () => {
        wrapper = Enzyme.shallow(
            <Dropdown
                dropdownId="dropdown"
                isRequired={true}
                labelPosition="left"
                labelText="Sort By"
                labelId="nav-sort-by"
                dropdownOptions={["test1", "test2"]}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        expect(wrapper.find(".dropdown__required-message")).toHaveLength(1);
    });

    it("renders HelperErrorText if helper passed", () => {
        wrapper = Enzyme.shallow(
            <Dropdown
                dropdownId="dropdown"
                isRequired={false}
                labelPosition="none"
                ariaLabel="label"
                helperContentId="helper"
                helperContent={
                    <span>
                        If you are unsure of your size, please see the{" "}
                        <a href="#sizing-chart">sizing chart</a>
                    </span>
                }
                dropdownOptions={["test1", "test2"]}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        expect(wrapper.find("HelperErrorText")).toHaveLength(1);
    });

    it("throws error if HelperContent is passed without an id", () => {
        expect(() =>
            Enzyme.mount(
                <Dropdown
                    dropdownId="dropdown"
                    isRequired={false}
                    labelPosition="none"
                    ariaLabel="label"
                    dropdownOptions={["test1", "test2"]}
                    helperContent={
                        <span>
                            If you are unsure of your size, please see the{" "}
                            <a href="#sizing-chart">sizing chart</a>
                        </span>
                    }
                    onSelectChange={changeCallback}
                    onSelectBlur={blurCallback}
                />
            )
        ).toThrowError(
            "prop helperText [object Object] is passed, but it is missing prop helperTextId"
        );
    });

    it("renders HelperErrorText if error passed", () => {
        wrapper = Enzyme.shallow(
            <Dropdown
                dropdownId="dropdown"
                isRequired={false}
                labelPosition="none"
                ariaLabel="label"
                hasError={true}
                errorContentId="error"
                errorContent={<span>Error Message Lorem Ipsum</span>}
                dropdownOptions={["test1", "test2"]}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        expect(wrapper.find("HelperErrorText")).toHaveLength(1);
    });

    it("throws error if passed error with no content", () => {
        expect(() =>
            Enzyme.mount(
                <Dropdown
                    dropdownId="dropdown"
                    isRequired={false}
                    labelPosition="none"
                    ariaLabel="label"
                    dropdownOptions={["test1", "test2"]}
                    hasError={true}
                    onSelectChange={changeCallback}
                    onSelectBlur={blurCallback}
                />
            )
        ).toThrowError(
            "prop hasError is true, but is missing props errorMessage (got undefined) and/or errorTextId (got undefined)"
        );
    });
});
