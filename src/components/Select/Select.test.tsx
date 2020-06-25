import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";

import * as Mocha from "mocha";

import Select from "./Select";

describe("Select", () => {
    let wrapper: Enzyme.ReactWrapper<{}, {}>;
    let blurCallback;
    let changeCallback;

    beforeEach(() => {
        changeCallback = stub();
        blurCallback = stub();
    });

    it("Renders a Select", () => {
        wrapper = Enzyme.mount(
            <Select
                isRequired={false}
                options={["test1", "test2"]}
                onChange={changeCallback}
                onBlur={blurCallback}
            />
        );
        expect(wrapper.find("Select")).to.have.lengthOf(1);
    });

    it("Renders an aria-label", () => {
        wrapper = Enzyme.mount(
            <Select
                isRequired={false}
                options={["test1", "test2"]}
                onChange={changeCallback}
                onBlur={blurCallback}
                ariaLabel={"arialabel"}
            />
        );
        expect(wrapper.find("select").props()["aria-label"]).to.equal(
            "arialabel"
        );
    });

    it("Renders aria-labelledby for labelId and helperTextId", () => {
        wrapper = Enzyme.mount(
            <Select
                isRequired={false}
                options={["test1", "test2"]}
                onChange={changeCallback}
                onBlur={blurCallback}
                labelId={"1"}
                helperTextId={"2"}
            />
        );
        expect(wrapper.find("select").props()["aria-labelledby"]).to.equal(
            "1 2"
        );
    });

    it("Sends callback with value on change", () => {
        wrapper = Enzyme.mount(
            <Select
                labelId="label"
                isRequired={false}
                id="hi"
                options={["test1", "test2"]}
                onChange={changeCallback}
                onBlur={blurCallback}
            />
        );

        wrapper.find("select").simulate("change", "", { value: ["val"] });

        expect(changeCallback.callCount).to.equal(1);
    });

    it("Sends callback with no value on blur", () => {
        wrapper = Enzyme.mount(
            <Select
                id="hi"
                labelId="label"
                isRequired={false}
                options={["test1", "test2"]}
                onChange={changeCallback}
                onBlur={blurCallback}
            />
        );
        wrapper.find("select").simulate("blur", "");

        expect(blurCallback.callCount).to.equal(1);
    });

    it("Displays the selected option onLoad when passed selectedOption", () => {
        wrapper = Enzyme.mount(
            <Select
                labelId="label"
                isRequired={false}
                id="hi"
                selectedOption={"test2"}
                options={["test1", "test2"]}
                onChange={changeCallback}
                onBlur={blurCallback}
            />
        );
        expect(wrapper.find("select").props().value).to.equal("test2");
    });
});
