import * as Enzyme from "enzyme";
import * as React from "react";

import FormDropdown from "./FormDropdown";

describe("FormDropdown", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;
    let blurCallback;
    let changeCallback;

    beforeEach(() => {
        changeCallback = jest.fn();
        blurCallback = jest.fn();
    });
    it("Form Dropdown should render a FormDropdown", () => {
        wrapper = Enzyme.shallow(
            <FormDropdown
                labelId="label"
                isRequired={false}
                dropdownId="hi"
                options={["test1", "test2"]}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        expect(wrapper.find("select")).toHaveLength(1);
    });

    it("requires either label or aria-label", () => {
        expect(() =>
            Enzyme.mount(
                <FormDropdown
                    isRequired={false}
                    dropdownId="hi"
                    options={["test1", "test2"]}
                    onSelectChange={changeCallback}
                    onSelectBlur={blurCallback}
                />
            )
        ).toThrowError("Must either have labelId or aria-label");
    });

    it("if both labelId and ariaLabel are defined, select has aria-labeledBy", () => {
        wrapper = Enzyme.shallow(
            <FormDropdown
                labelId="label"
                ariaLabel="aria-label"
                isRequired={false}
                dropdownId="hi"
                options={["test1", "test2"]}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        expect(wrapper.find("select").props()["aria-labelledby"]).toBe("label");
    });

    it("if only aria-label is defined, select has aria-label", () => {
        wrapper = Enzyme.shallow(
            <FormDropdown
                ariaLabel="aria-label"
                isRequired={false}
                dropdownId="hi"
                options={["test1", "test2"]}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        expect(wrapper.find("select").props()["aria-label"]).toBe("aria-label");
    });

    it("Form Dropdown should render an icon", () => {
        wrapper = Enzyme.shallow(
            <FormDropdown
                labelId="label"
                isRequired={false}
                dropdownId="hi"
                options={["test1", "test2"]}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        expect(wrapper.find("Icon")).toHaveLength(1);
    });

    it("sends callback with value on change", () => {
        wrapper = Enzyme.shallow(
            <FormDropdown
                labelId="label"
                isRequired={false}
                dropdownId="hi"
                options={["test1", "test2"]}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );

        wrapper.find("select").simulate("change", "", { value: ["val"] });

        expect(changeCallback.callCount).toBe(1);
    });

    it("sends callback with no value on blur", () => {
        wrapper = Enzyme.shallow(
            <FormDropdown
                dropdownId="hi"
                labelId="label"
                isRequired={false}
                options={["test1", "test2"]}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        wrapper.find("select").simulate("blur", "");

        expect(blurCallback.callCount).toBe(1);
    });

    it("displays selected when passed selectedOption", () => {
        wrapper = Enzyme.shallow(
            <FormDropdown
                labelId="label"
                isRequired={false}
                dropdownId="hi"
                selectedOption={"test2"}
                options={["test1", "test2"]}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        expect(wrapper.find("select").props().value).toBe("test2");
    });

    it("renders nothing when passed no options", () => {
        wrapper = Enzyme.shallow(
            <FormDropdown
                dropdownId="hi"
                labelId="label"
                isRequired={false}
                options={[]}
                onSelectChange={changeCallback}
                onSelectBlur={blurCallback}
            />
        );
        expect(wrapper.getElement()).toBe(null);
    });
});
