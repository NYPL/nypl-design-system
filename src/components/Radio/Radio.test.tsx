import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import { stub } from "sinon";

import Radio from "./Radio";

describe("Radio Button", () => {
  let container;
  let changeHandler;
  let clickHander;

  before(() => {
    clickHander = stub();
    changeHandler = stub();
    container = Enzyme.mount(
      <Radio
        id="inputID"
        attributes={{ onClick: clickHander }}
        onChange={changeHandler}
      ></Radio>
    );
  });

  it("Renders without crashing", () => {
    expect(container.find("input").exists()).to.equal(true);
  });

  it("The radio element is an input with type='radio'", () => {
    expect(container.find("input").prop("type")).to.equal("radio");
  });

  it("Allows user to pass in additional attributes", () => {
    container.simulate("click");
    expect(clickHander.callCount).to.equal(1);
  });

  it("Changing the value calls the onChange handler", () => {
    container.find("input").simulate("change", { target: { value: "Hello" } });
    expect(changeHandler.callCount).to.equal(1);
  });

  it("Renders with label", () => {
    container = Enzyme.mount(
      <>
        <Radio
          //add other props here
          labelText="Hello"
        ></Radio>
      </>
    );
    expect(container.find("label").exists()).to.equal(true);
  });

  it("The 'checked' attribute can set properly", () => {
    const onChange = stub();
    const container = Enzyme.mount(
      <Radio
        id="inputID-attributes"
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
      <Radio id="inputID-attributes" ref={ref}></Radio>
    );
    expect(container.find("input").instance()).to.equal(ref.current);
  });
});

describe("Renders HTML attributes passed through the `attributes` prop", () => {
  const onChangeSpy = stub();
  const onBlurSpy = stub();
  let container;
  before(() => {
    container = Enzyme.mount(
      <Radio
        id="inputID-attributes"
        attributes={{
          onChange: onChangeSpy,
          onBlur: onBlurSpy,
          maxLength: 10,
          tabIndex: 0,
        }}
      ></Radio>
    );
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
