import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Modal from "../../components/Modal/Modal";

describe("Modal", () => {
    it("modal applies 'no-scroll' class to body", () => {
        const wrapper = Enzyme.mount(<Modal />, { attachTo: document.body });
        expect(wrapper.find("Modal").exists()).to.equal(true);
        expect(document.body.classList[0]).to.equal("no-scroll");
    });
});
