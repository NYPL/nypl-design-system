import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import StatusBadge from "./StatusBadge";

describe("StatusBadge Test", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;

    it("Shows status badge", () => {
        wrapper = Enzyme.shallow(
            <StatusBadge level={"low"} text={"Registration Required"} />
        );
        expect(wrapper.find("div")).to.have.lengthOf(1);
    });
    it("Can pass status badge content as child", () => {
        wrapper = Enzyme.shallow(
            <StatusBadge level={"medium"}>
                Cancelled
            </StatusBadge>
        );
        expect(wrapper.find("div")).to.have.lengthOf(1);
    });
});
