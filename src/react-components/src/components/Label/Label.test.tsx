import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Label from "./Label";

describe("Label Test", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;
    it("Renders a <label> when passed text as children", () => {
        wrapper = Enzyme.shallow(
            <Label id="label" referenceId="so-lonely">
                Cupcake's
            </Label>
        );
        expect(wrapper.find("label")).to.have.lengthOf(1);
    });

    it("Renders a <label> when passed element as children", () => {
        wrapper = Enzyme.shallow(
            <Label id="label" referenceId="so-lonely">
                <span>Cupcakes</span>
            </Label>
        );
        expect(wrapper.find("label")).to.have.lengthOf(1);
    });
});
