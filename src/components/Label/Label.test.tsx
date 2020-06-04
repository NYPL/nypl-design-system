import * as Enzyme from "enzyme";
import * as React from "react";

import Label from "./Label";

describe("Label Test", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;
    it("Renders a <label> when passed text as children", () => {
        wrapper = Enzyme.shallow(
            <Label id="label" referenceId="so-lonely">
                Cupcakes
            </Label>
        );
        expect(wrapper.find("label")).toHaveLength(1);
    });

    it("Renders a <label> when passed element as children", () => {
        wrapper = Enzyme.shallow(
            <Label id="label" referenceId="so-lonely">
                <span>Cupcakes</span>
            </Label>
        );
        expect(wrapper.find("label")).toHaveLength(1);
    });
});
