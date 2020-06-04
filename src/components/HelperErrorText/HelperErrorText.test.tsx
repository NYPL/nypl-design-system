import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import HelperErrorText from "./HelperErrorText";

describe("HelperErrorText Test", () => {
    it("Renders HelperErrorText", () => {
        const container = Enzyme.mount(
            <HelperErrorText id="helperTextWithLink" isError={false}>
                Text
            </HelperErrorText>
        );
        expect(container.exists("#helperTextWithLink")).to.equal(true);
    });

    it("Has 'error' modifier if error is passed", () => {
        const container = Enzyme.mount(
            <HelperErrorText id="helperTextWithLink" isError={true}>
                Text
            </HelperErrorText>
        );
        expect(container.exists("#helperTextWithLink")).to.equal(true);
    });
});
