import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Button from "../../components/Button/Button";

describe("Button", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;
    let callback;

    beforeEach(() => {
        callback = stub();
        wrapper = Enzyme.shallow(
            <Button id="button" callback={callback}>
                Submit
            </Button>
        );
    });

    it("calls the callback", () => {
        wrapper.simulate("click");
        expect(callback.callCount).to.equal(1);
    });
    it("optionally renders a component", () => {
        expect(wrapper.find("span").length).to.equal(1);
        expect(wrapper.text()).to.equal("Submit");
    });
    it("has 'button' class", () => {
        expect(wrapper.find(".button")).to.have.lengthOf(1);
    });

    it("has type submit", () => {
        expect(wrapper.prop("type")).to.equal("submit");
    });

    it("optionally calls the callback on mouseDown instead of on click", () => {
        expect(callback.callCount).to.equal(0);
        wrapper.setProps({ mouseDown: true });
        wrapper.simulate("click");
        expect(callback.callCount).to.equal(0);
        wrapper.simulate("mouseDown");
        expect(callback.callCount).to.equal(1);
    });

    describe("rendering content from its children prop", () => {
        it("should render string children", () => {
            wrapper = Enzyme.shallow(
                <Button id="button" callback={callback}>
                    Submit
                </Button>
            );
            expect(wrapper.text()).to.equal("Submit");
        });

        it("should render element children", () => {
            wrapper = Enzyme.shallow(
                <Button id="button" callback={callback}>
                    <em>I'm a em element</em>
                </Button>
            );
            expect(wrapper.text()).to.equal("I'm a em element");
            expect(wrapper.find("em")).to.have.lengthOf(1);
        });
    });

    describe("passes button type", () => {
        it("button has passed type", () => {
            const wrapper = Enzyme.mount(
                <Button id="button" callback={callback} type="button">
                    <span>I'm a span element</span>
                </Button>
            );
            expect(wrapper.find("#btn-button").prop("type")).to.equal("button");
        });
    });
});
