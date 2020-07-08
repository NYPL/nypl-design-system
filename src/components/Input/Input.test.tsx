import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Label from "../Label/Label";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import Input from "./Input";
import { InputTypes } from "./InputTypes";

describe("Renders Input", () => {
    let container;
    before(() => {
        container = Enzyme.mount(
            <Input
                id="inputID"
                ariaLabel="Input Label"
                ariaLabelledBy={"helperText"}
                required={true}
                placeholder={"Input Placeholder"}
                type={InputTypes.text}
            ></Input>
        );
    });

    it("Renders Input", () => {
        expect(container.find("input").exists()).to.equal(true);
    });

    it("Renders aria-label", () => {
        expect(container.find("input").prop("aria-label")).to.equal(
            "Input Label"
        );
    });

    it("Renders placeholder text", () => {
        expect(container.find("input").props().placeholder).to.equal(
            "Input Placeholder"
        );
    });

    it("Adds aria-required prop if input is required", () => {
        expect(container.find("input").prop("aria-required")).to.equal(true);
    });
});

describe("Input with Label", () => {
    let container;
    before(() => {
        container = Enzyme.mount(
            <>
                <Label htmlFor="inputID" id={"label"}>
                    Input Label
                </Label>
                <Input
                    id="inputID"
                    ariaLabelledBy="label helperText"
                    ariaLabel="Input Label"
                    required={true}
                    placeholder={"Input Placeholder"}
                    type={InputTypes.text}
                ></Input>
                <HelperErrorText isError={false} id={"helperText"}>
                    Helper Text Content
                </HelperErrorText>
            </>
        );
    });

    it("Renders Input", () => {
        expect(container.find("input").exists()).to.equal(true);
    });

    it("Renders aria-label", () => {
        expect(container.find("input").prop("aria-label")).to.equal(
            "Input Label"
        );
    });

    it("Renders aria-labelledby for inputId and helperTextId", () => {
        expect(container.find("input").prop("aria-labelledby")).to.equal(
            "label helperText"
        );
    });
});

describe("Input Group", () => {
    let container;
    before(() => {
        container = Enzyme.mount(
            <fieldset>
                <legend>Input Group Label</legend>
                <>
                    <>
                        <Label htmlFor="input1" id={"label1"}>
                            From
                        </Label>
                        <Input
                            id="input1"
                            ariaLabelledBy="label1 helperText1 sharedHelperText"
                            required={true}
                            type={InputTypes.text}
                        ></Input>
                        <HelperErrorText isError={false} id={"helperText1"}>
                            Input 1 Helper Text
                        </HelperErrorText>
                    </>

                    <>
                        <Label htmlFor="input2" id={"label2"}>
                            To
                        </Label>
                        <Input
                            id="input2"
                            ariaLabelledBy={
                                "label2 helperText2 sharedHelperText"
                            }
                            required={true}
                            type={InputTypes.text}
                        ></Input>
                        <HelperErrorText isError={false} id={"helperText2"}>
                            Input 2 Helper Text
                        </HelperErrorText>
                    </>
                </>
                <HelperErrorText isError={true} id={"sharedHelperText"}>
                    Additional Error Text
                </HelperErrorText>
            </fieldset>
        );
    });

    it("Renders fieldset", () => {
        expect(container.find("fieldset").exists()).to.equal(true);
    });

    it("Renders legend", () => {
        expect(container.find("legend").exists()).to.equal(true);
    });

    it("Renders two inputs", () => {
        expect(container.find("input")).to.have.length(2);
    });

    it("Inputs have aria-labelledby pointing to labelId, helperTextId, and sharedHelperTextId", () => {
        expect(
            container.find("#input-input1").prop("aria-labelledby")
        ).to.equal("label1 helperText1 sharedHelperText");
        expect(
            container.find("#input-input2").prop("aria-labelledby")
        ).to.equal("label2 helperText2 sharedHelperText");
    });
});
