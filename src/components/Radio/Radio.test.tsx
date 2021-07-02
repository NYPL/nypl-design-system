import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import { stub, spy } from "sinon";
import generateUUID from "../../helpers/generateUUID";

import Radio from "./Radio";

describe("Radio Button", () => {
  let container;
  let changeHandler;
  let clickHander;
  let generateUUIDSpy;

  before(() => {
    clickHander = stub();
    changeHandler = stub();
    generateUUIDSpy = spy(generateUUID);
    container = Enzyme.mount(
      <Radio
        id="inputID"
        attributes={{ onClick: clickHander }}
        onChange={changeHandler}
        labelText="Test Label"
        showLabel={false}
      ></Radio>
    );
  });

  it("Renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false", () => {
    const labelText = container.prop("labelText");
    expect(container.find("input").prop("aria-label")).to.equal(labelText);
  });

  it("Renders without crashing", () => {
    expect(container.find("input").exists()).to.equal(true);
  });

  it("The radio element is an input with type='radio'", () => {
    expect(container.find("input").prop("type")).to.equal("radio");
  });

  it("The radio element's ID is set properly using the value passed to it.", () => {
    expect(container.find("input").prop("id")).to.equal("inputID");
  });

  it("Allows user to pass in additional attributes", () => {
    container.simulate("click");
    expect(clickHander.callCount).to.equal(1);
  });

  it("Changing the value calls the onChange handler", () => {
    container.find("input").simulate("change", { target: { value: "Hello" } });
    expect(changeHandler.callCount).to.equal(1);
  });

  it("Renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false and 'helperText' has been passed", () => {
    container = Enzyme.mount(
      <Radio
        //add other props here
        id="test_id"
        labelText="Hello"
        showLabel={false}
        helperText="The helper text."
      ></Radio>
    );
    const labelText = container.prop("labelText");
    const helperText = container.prop("helperText");
    expect(container.find("input").prop("aria-label")).to.equal(
      `${labelText} - ${helperText}`
    );
  });

  it("Renders with label", () => {
    container = Enzyme.mount(
      <Radio
        //add other props here
        id="test_id"
        labelText="Hello"
        showLabel={true}
      ></Radio>
    );
    expect(container.find("label").exists()).to.equal(true);
    expect(container.find("input").props()).not.to.have.property("aria-label");
    const radioId = container.prop("id");
    expect(container.find("label").prop("htmlFor")).to.equal(radioId);
  });

  it("Renders with visible helper text", () => {
    container = Enzyme.mount(
      <Radio
        //add other props here
        id="test_id"
        labelText="Hello"
        showLabel={true}
        helperText="The helper text."
        errorText="The error text."
        errored={false}
      ></Radio>
    );
    expect(container.find(".helper-text").text()).to.equal("The helper text.");
  });

  it("Renders with visible error text", () => {
    container = Enzyme.mount(
      <Radio
        //add other props here
        id="test_id"
        labelText="Hello"
        showLabel={true}
        helperText="The helper text."
        errorText="The error text."
        errored={true}
      ></Radio>
    );
    expect(container.find(".helper-text").text()).to.equal("The error text.");
  });

  it("Calls a UUID generation method if no ID is passed as a prop", () => {
    container = Enzyme.mount(
      <Radio labelText="Hello" showLabel={true}></Radio>
    );
    expect(container.find("input").props()).to.have.property("id");

    expect(generateUUIDSpy.called);
  });

  it("The 'checked' attribute can set properly", () => {
    const onChange = stub();
    const container = Enzyme.mount(
      <Radio
        id="inputID-attributes"
        labelText="Hello"
        showLabel={false}
        attributes={{
          checked: true,
          "aria-checked": true,
          onChange,
        }}
      ></Radio>
    );

    const input = container.find("input");

    expect(input.prop("checked")).to.equal(true);
    expect(input.prop("aria-checked")).to.equal(true);
  });

  it("Passes the ref to the input element", () => {
    const ref = React.createRef<HTMLInputElement>();
    const container = Enzyme.mount(
      <Radio
        id="inputID-attributes"
        ref={ref}
        labelText="Hello"
        showLabel={false}
      ></Radio>
    );
    expect(container.find("input").instance()).to.equal(ref.current);
  });

  it("Renders HTML attributes passed through the `attributes` prop", () => {
    const onChangeSpy = stub();
    const onBlurSpy = stub();
    container = Enzyme.mount(
      <Radio
        id="inputID-attributes"
        attributes={{
          onChange: onChangeSpy,
          onBlur: onBlurSpy,
          tabIndex: 0,
        }}
        labelText="Hello"
        showLabel={true}
      ></Radio>
    );
    expect(container.find("input").prop("tabIndex")).to.equal(0);
    expect(onChangeSpy.callCount).to.equal(0);
    container.find("input").simulate("change");
    expect(onChangeSpy.callCount).to.equal(1);
    expect(onBlurSpy.callCount).to.equal(0);
    container.find("input").simulate("blur");
    expect(onBlurSpy.callCount).to.equal(1);
  });
});
