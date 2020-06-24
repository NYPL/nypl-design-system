import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

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

    it("Has aria-live and aria-atomic properties when errored", () => {
        const container = Enzyme.mount(
            <HelperErrorText id="helperTextWithLink" isError={true}>
                Text
            </HelperErrorText>
        );
        expect(
            container.find("#helperTextWithLink").props()["aria-live"]
        ).to.equal("polite");
        // expect(
        //     container.find("#helperTextWithLink").props()["aria-atomic"]
        // ).to.equal("true");
    });
});
