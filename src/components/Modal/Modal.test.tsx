import * as Enzyme from "enzyme";
import * as React from "react";

import Modal from "./Modal";

describe("Modal", () => {
    it("modal applies 'no-scroll' class to body", () => {
        const wrapper = Enzyme.mount(<Modal />, { attachTo: document.body });
        expect(wrapper.find("Modal").exists()).toBe(true);
        expect(document.body.classList[0]).toBe("no-scroll");
    });
});
