import * as Enzyme from "enzyme";
import * as React from "react";

import Button from "./Button";

describe("Button", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;
    let callback;

    beforeEach(() => {
        callback = jest.fn();
        wrapper = Enzyme.shallow(
            <Button id="button" callback={callback}>
                Submit
            </Button>
        );
    });

    it("calls the callback", () => {
        wrapper.simulate("click");
        expect(callback.callCount).toBe(1);
    });
    it("optionally renders a component", () => {
        expect(wrapper.find("span").length).toBe(1);
        expect(wrapper.text()).toBe("Submit");
    });
    it("has 'button' class", () => {
        expect(wrapper.find(".button")).toHaveLength(1);
    });

    it("has type submit", () => {
        expect(wrapper.prop("type")).toBe("submit");
    });

    it("optionally calls the callback on mouseDown instead of on click", () => {
        expect(callback.callCount).toBe(0);
        wrapper.setProps({ mouseDown: true });
        wrapper.simulate("click");
        expect(callback.callCount).toBe(0);
        wrapper.simulate("mouseDown");
        expect(callback.callCount).toBe(1);
    });

    describe("rendering content from its children prop", () => {
        it("should render string children", () => {
            wrapper = Enzyme.shallow(
                <Button id="button" callback={callback}>
                    Submit
                </Button>
            );
            expect(wrapper.text()).toBe("Submit");
        });

        it("should render element children", () => {
            wrapper = Enzyme.shallow(
                <Button id="button" callback={callback}>
                    <em>I am a em element</em>
                </Button>
            );
            expect(wrapper.text()).toBe("I'm a em element");
            expect(wrapper.find("em")).toHaveLength(1);
        });
    });

    describe("passes button type", () => {
        it("button has passed type", () => {
            const wrapper = Enzyme.mount(
                <Button id="button" callback={callback} type="button">
                    <span>I am a span element</span>
                </Button>
            );
            expect(wrapper.find("#btn-button").prop("type")).toBe("button");
        });
    });
});
