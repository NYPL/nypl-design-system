import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import { stub } from "sinon";

import HelperErrorText from "../HelperErrorText/HelperErrorText";
import TextInput from "./TextInput";
import { TextInputTypes } from "./TextInputTypes";

describe("Renders TextInput", () => {
  let container;
  let changeHandler;
  let clickHander;

  before(() => {
    clickHander = stub();
    changeHandler = stub();
    container = Enzyme.mount(
      <TextInput
        id={"myTextInput"}
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

  it("Renders as type `text`", () => {
    expect(container.find("input").prop("type")).to.equal("text");
  });

  it("Renders default aria-label", () => {
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

describe("TextInput with label and helper text", () => {
  let container;
  before(() => {
    container = Enzyme.mount(
      <>
        <TextInput
          id={"myTextInput"}
          label={"Custom Input Label"}
          helperText={"Custom Helper Text"}
          required={true}
          placeholder={"Input Placeholder"}
          type={TextInputTypes.text}
        ></TextInput>
      </>
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

  it("Renders custom aria-label", () => {
    expect(container.find("input").prop("aria-label")).to.equal(
      "Custom Input Label"
    );
  });

  it("Renders label with `for` pointing at ID from input", () => {
    expect(container.find("label").prop("htmlFor")).to.equal("myTextInput");
  });

  it("Renders aria-labelledby pointing at label and helper text", () => {
    expect(container.find("input").prop("aria-labelledby")).to.equal(
      "myTextInput-label myTextInput-helperText"
    );
  });
});

describe("TextInput shows error state", () => {
  let container;
  before(() => {
    container = Enzyme.mount(
      <>
        <TextInput
          id={"myTextInputError"}
          label={"Custom Input Label"}
          helperText={"Custom Helper Text"}
          errorText={"Custom Error Text"}
          placeholder={"Input Placeholder"}
          errored={true}
          type={TextInputTypes.text}
        ></TextInput>
      </>
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
    expect(container.find("input").hasClass("textinput--error")).to.equal(true);
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
        <>
          <>
            <TextInput
              id="input1"
              required={true}
              type={TextInputTypes.text}
              label="For"
              helperText="Input 1 Helper Text"
            ></TextInput>
          </>

          <>
            <TextInput
              id="input2"
              required={true}
              type={TextInputTypes.text}
              label="To"
              helperText="Input 2 Helper Text"
            ></TextInput>
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
