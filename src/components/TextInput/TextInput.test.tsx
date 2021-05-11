import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import { stub, spy } from "sinon";

import HelperErrorText from "../HelperErrorText/HelperErrorText";
import TextInput from "./TextInput";
import { TextInputTypes } from "./TextInputTypes";
import generateUUID from "../../helpers/generateUUID";

describe("Renders TextInput with visible label", () => {
  let container;
  let changeHandler;
  let focusHandler;

  before(() => {
    focusHandler = stub();
    changeHandler = stub();
    container = Enzyme.mount(
      <TextInput
        id={"myTextInput"}
        labelText={"Custom Input Label"}
        required={true}
        placeholder={"Input Placeholder"}
        type={TextInputTypes.text}
        attributes={{ onFocus: focusHandler }}
        onChange={changeHandler}
      ></TextInput>
    );
  });

  it("Renders Input", () => {
    expect(container.find("input").exists()).to.equal(true);
  });

  it("Renders as type `text`", () => {
    expect(container.find("input").prop("type")).to.equal("text");
  });

  it("Renders label with label text", () => {
    expect(container.find("label").exists()).to.equal(true);
  });

  it("Renders correct label text", () => {
    expect(container.find("label").text()).to.contain("Custom Input Label");
  });

  it("Renders label's `for` attribute pointing at ID from input", () => {
    expect(container.find("label").prop("htmlFor")).to.equal("myTextInput");
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
    container.find("input").simulate("focus");
    expect(focusHandler.callCount).to.equal(1);
  });

  it("Changing the value calls the onChange handler", () => {
    container.find("input").simulate("change", { target: { value: "Hello" } });

    expect(changeHandler.callCount).to.equal(1);
  });
});

describe("Renders TextInput with auto-generated ID, hidden label and visible helper text", () => {
  let container;
  let generateUUIDSpy;

  before(() => {
    generateUUIDSpy = spy(generateUUID);
    container = Enzyme.mount(
      <TextInput
        labelText={"Custom Input Label"}
        showLabel={false}
        helperText={"Custom Helper Text"}
        required={true}
        placeholder={"Input Placeholder"}
        type={TextInputTypes.text}
      ></TextInput>
    );
  });

  it("Renders Input component", () => {
    expect(container.find("input").exists()).to.equal(true);
  });

  it("Calls a UUID generation method if no ID is passed as a prop", () => {
    expect(container.find("input").props()).to.have.property("id");
    expect(generateUUIDSpy.called);
  });

  it("Does not renders Label component", () => {
    expect(container.find("label").exists()).to.equal(false);
  });

  it("Renders custom aria-label", () => {
    expect(container.find("input").prop("aria-label")).to.equal(
      "Custom Input Label"
    );
  });

  it("Renders HelperErrorText component", () => {
    expect(container.find(".helper-text").exists()).to.equal(true);
  });

  it("Renders aria-describedby with helper text", () => {
    expect(container.find("input").prop("aria-describedby")).to.equal(
      "Custom Helper Text"
    );
  });
});

describe("TextInput shows error state", () => {
  let container;
  before(() => {
    container = Enzyme.mount(
      <TextInput
        id={"myTextInputError"}
        labelText={"Custom Input Label"}
        helperText={"Custom Helper Text"}
        errorText={"Custom Error Text"}
        placeholder={"Input Placeholder"}
        errored={true}
        type={TextInputTypes.text}
      ></TextInput>
    );
  });

  it("Renders Input component", () => {
    expect(container.find("input").exists()).to.equal(true);
  });

  it("Renders Label component", () => {
    expect(container.find("label").exists()).to.equal(true);
  });

  it("Renders HelperErrorText component", () => {
    expect(container.find(".helper-text").exists()).to.equal(true);
  });

  it("Input shows error state", () => {
    expect(container.find("input").hasClass("inputfield--error")).to.equal(
      true
    );
  });

  it("Helper text shows error state", () => {
    expect(
      container.find(".helper-text").hasClass("helper-text--error")
    ).to.equal(true);
  });

  it("Helper text shows error text", () => {
    expect(container.find(".helper-text").text()).to.equal("Custom Error Text");
  });
});

describe("TextInput Group", () => {
  let container;
  before(() => {
    container = Enzyme.mount(
      <fieldset>
        <legend>Input Group Label</legend>

        <TextInput
          id="input1"
          required={true}
          type={TextInputTypes.text}
          labelText="For"
          helperText="Input 1 Helper Text"
        />

        <TextInput
          id="input2"
          required={true}
          type={TextInputTypes.text}
          labelText="To"
          helperText="Input 2 Helper Text"
        />

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
        labelText="Input Label"
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
        labelText="Input Label"
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
        labelText={"Hidden Input Label"}
        type={TextInputTypes.hidden}
        value="hidden"
      />
    );

    const input = container.find("input");

    expect(input.prop("aria-hidden")).to.equal(true);
    expect(input.prop("value")).to.equal("hidden");
  });
});
