import * as Enzyme from "enzyme";
import * as React from "react";

import Input from "./Input";

describe("Renders Input", () => {
    let container;
    beforeEach(() => {
        container = Enzyme.mount(
            <Input
                labelId="label-input"
                labelContent={<>Label</>}
                inputId="input"
                isRequired={false}
            ></Input>
        );
    });

    it("Renders label for inputId", () => {
        expect(container.find("label").exists()).toBe(true);
        expect(container.find("label").prop("htmlFor")).toBe("input");
    });
    it("Renters TextField", () => {
        expect(container.find("input").exists()).toBe(true);
    });
    it("Does not render helper if none is passed", () => {
        expect(container.find("HelperErrorText").exists()).toBe(false);
    });
});

describe("Input with Helper and Error", () => {
    let container;
    beforeEach(() => {
        container = Enzyme.mount(
            <Input
                labelId="label-input"
                labelContent={<>Label</>}
                inputId="input"
                isRequired={true}
                helperContentOpts={{
                    id: "input-helper",
                    content: <>This is some helpful text</>,
                }}
                errorContentOpts={{
                    id: "input-error",
                    content: <>Error Message Lorem Ipsum</>,
                }}
                showError={true}
            ></Input>
        );
    });

    it("Renders label for inputId", () => {
        expect(container.find("label").exists()).toBe(true);
        expect(container.find("label").prop("htmlFor")).toBe("input");
    });
    it("Renters TextField", () => {
        expect(container.find("input").exists()).toBe(true);
    });
    it("Renders Helper", () => {
        expect(container.find("#input-helper").exists()).toBe(true);
    });
    it("Renders error", () => {
        expect(container.find("#input-helper").exists()).toBe(true);
    });
});

describe("input errors", () => {
    it("throws error if showError is passed without content", () => {
        expect(() =>
            Enzyme.mount(
                <Input
                    labelId="label-input"
                    labelContent={<>Label</>}
                    inputId="input"
                    isRequired={true}
                    showError={true}
                ></Input>
            )
        ).toThrowError("Error should be shown, but no errorContentOpts passed");
    });
});
