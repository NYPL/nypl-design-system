import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import TextField from "./TextField";

describe("Search Bar Text Field", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;

    it("Renders an input field with aria-label", () => {
        wrapper = Enzyme.shallow(
            <TextField id="textField" ariaLabel="text" isRequired={false} />
        );
        expect(wrapper.find("input")).to.have.lengthOf(1);
        expect(wrapper.find("input").props()["aria-label"]).to.equal("text");
    });

    it("Renders an input field with aria-labelledby", () => {
        wrapper = Enzyme.shallow(
            <TextField
                id="textField"
                ariaLabelledBy="labelId"
                isRequired={false}
            />
        );

        expect(wrapper.find("input")).to.have.lengthOf(1);
        expect(wrapper.find("input").props()["aria-labelledby"]).to.equal(
            "labelId"
        );
    });

    it("if both labelId and ariaLabel are defined, TextField uses aria-labeledBy", () => {
        wrapper = Enzyme.shallow(
            <TextField
                id="textField"
                ariaLabelledBy="labelId"
                ariaLabel="label"
                isRequired={false}
            />
        );
        expect(wrapper.find("input").props()["aria-label"]).to.equal(undefined);
        expect(wrapper.find("input").props()["aria-labelledby"]).to.equal(
            "labelId"
        );
    });

    it("Shows 'aria-required' if required", () => {
        wrapper = Enzyme.shallow(
            <TextField id="textField" ariaLabel="text" isRequired={true} />
        );
        expect(wrapper.props()["aria-required"]).to.equal(true);
    });

    it("Throws error if neither label or aria-label are passed", () => {
        expect(() =>
            Enzyme.mount(<TextField id="textField" isRequired={true} />)
        ).to.throw("Either label or ariaLabel must be defined");
    });
});
