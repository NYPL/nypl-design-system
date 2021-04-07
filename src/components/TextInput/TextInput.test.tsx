import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import { stub } from "sinon";

import Label from "../Label/Label";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import TextInput from "./TextInput";
import { TextInputTypes } from "./TextInputTypes";

describe("Renders Input", () => {
  let container;
  let changeHandler;
  let clickHander;

  before(() => {
    clickHander = stub();
    changeHandler = stub();
    container = Enzyme.mount(
      <TextInput
        id={"inputID"}
        label={"Input Label"}
        labelledBy={"helperText"}
        required={true}
        placeholder={"Input Placeholder"}
        type={TextInputTypes.text}
        attributes={{ onClick: clickHander }}
        onChange={changeHandler}
      ></TextInput>
    );
  });

  it("Renders Input", () => {
    expect(container.find("input").exists()).to.equal(true);
  });

  it("Renders aria-label", () => {
    expect(container.find("input").prop("aria-label")).to.equal("Input Label");
  });

  it("Renders placeholder text", () => {
    expect(container.find("input").props().placeholder).to.equal(
      "Input Placeholder"
    );
  });

  it("Adds aria-required prop if input is required", () => {
    expect(container.find("input").prop("aria-required")).to.equal(true);
  });

  it("Allows user to pass in additional attributes", () => {
    container.simulate("click");
    expect(clickHander.callCount).to.equal(1);
  });

  it("Changing the value calls the onChange handler", () => {
    container.find("input").simulate("change", { target: { value: "Hello" } });

    expect(changeHandler.callCount).to.equal(1);
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
        <TextInput
          id={"inputID"}
          labelledBy={"label helperText"}
          label={"Input Label"}
          required={true}
          placeholder={"Input Placeholder"}
          type={TextInputTypes.text}
        ></TextInput>
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
    expect(container.find("input").prop("aria-label")).to.equal("Input Label");
  });

  it("Renders aria-labelledby for inputId and labelledBy", () => {
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
            <TextInput
              id="input1"
              labelledBy="label1 helperText1 sharedHelperText"
              required={true}
              type={TextInputTypes.text}
            ></TextInput>
            <HelperErrorText isError={false} id={"helperText1"}>
              Input 1 Helper Text
            </HelperErrorText>
          </>

          <>
            <Label htmlFor="input2" id={"label2"}>
              To
            </Label>
            <TextInput
              id="input2"
              labelledBy={"label2 helperText2 sharedHelperText"}
              required={true}
              type={TextInputTypes.text}
            ></TextInput>
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
});

describe("Renders HTML attributes passed through the `attributes` prop", () => {
  const onChangeSpy = stub();
  const onBlurSpy = stub();
  let container;
  before(() => {
    container = Enzyme.mount(
      <TextInput
        id="inputID-attributes"
        label="Input Label"
        labelledBy={"helperText-attributes"}
        placeholder={"Input Placeholder"}
        type={TextInputTypes.text}
        attributes={{
          onChange: onChangeSpy,
          onBlur: onBlurSpy,
          maxLength: 10,
          tabIndex: 0,
        }}
      ></TextInput>
    );
  });

  it("Has a maxlength for the input element", () => {
    expect(container.find("input").prop("maxLength")).to.equal(10);
  });

  it("Has a tabIndex", () => {
    expect(container.find("input").prop("tabIndex")).to.equal(0);
  });

  it("Calls the onChange function", () => {
    expect(onChangeSpy.callCount).to.equal(0);
    container.find("input").simulate("change");
    expect(onChangeSpy.callCount).to.equal(1);
  });

  it("Calls the onBlur function", () => {
    expect(onBlurSpy.callCount).to.equal(0);
    container.find("input").simulate("blur");
    expect(onBlurSpy.callCount).to.equal(1);
  });
});

describe("Forwarding refs", () => {
  it("Passes the ref to the input element", () => {
    const ref = React.createRef<HTMLInputElement>();
    const container = Enzyme.mount(
      <TextInput
        id="inputID-attributes"
        label="Input Label"
        labelledBy={"helperText-attributes"}
        placeholder={"Input Placeholder"}
        type={TextInputTypes.text}
        ref={ref}
      ></TextInput>
    );
    expect(container.find("input").instance()).to.equal(ref.current);
  });
});

describe("Hidden input", () => {
  it("Renders a hidden type input", () => {
    const container = Enzyme.mount(
      <TextInput
        id="inputID-hidden"
        label={"Hidden Input Label"}
        type={TextInputTypes.hidden}
        value="hidden"
      />
    );

    const input = container.find("input");

    expect(input.prop("aria-hidden")).to.equal(true);
    expect(input.prop("value")).to.equal("hidden");
  });
});
