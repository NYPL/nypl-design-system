import { expect } from "chai";
import { stub, spy } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";

import Select from "./Select";

describe("Select", () => {
  let wrapper: Enzyme.ReactWrapper<any, any>;
  let blurCallback;
  let changeCallback;

  const warn = spy(console, "warn");

  beforeEach(() => {
    changeCallback = spy();
    blurCallback = stub();
  });

  it("Renders a select DOM element", () => {
    wrapper = Enzyme.mount(
      <Select
        isRequired={false}
        onChange={changeCallback}
        onBlur={blurCallback}
        name="test"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(wrapper.find("select")).to.have.lengthOf(1);
  });

  it("Renders a name attribute to use in forms", () => {
    wrapper = Enzyme.mount(
      <Select
        isRequired={false}
        onChange={changeCallback}
        onBlur={blurCallback}
        ariaLabel="arialabel"
        name="test2"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(wrapper.find("select").prop("name")).to.equal("test2");
  });

  it("Renders an aria-label", () => {
    wrapper = Enzyme.mount(
      <Select
        isRequired={false}
        onChange={changeCallback}
        onBlur={blurCallback}
        ariaLabel="arialabel"
        name="test3"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(wrapper.find("select").props()["aria-label"]).to.equal("arialabel");
  });

  it("Renders aria-labelledby for labelId and helperTextId", () => {
    wrapper = Enzyme.mount(
      <Select
        isRequired={false}
        onChange={changeCallback}
        onBlur={blurCallback}
        labelId="labelId"
        helperTextId="helperTextId"
        name="test4"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );

    expect(wrapper.find("select").prop("aria-labelledby")).to.equal(
      "labelId helperTextId"
    );
  });

  it("Calls the onChange callback", () => {
    wrapper = Enzyme.mount(
      <Select
        labelId="label"
        isRequired={false}
        id="hi"
        onChange={changeCallback}
        onBlur={blurCallback}
        name="test5"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );

    wrapper.find("select").simulate("change", { target: { value: "test2" } });

    expect(changeCallback.callCount).to.equal(1);
  });

  it("Calls the callback onChange function with the updated value", () => {
    let currentValue = "";
    const onChange = event => {
      currentValue = event?.target?.value;
    };
    wrapper = Enzyme.mount(
      <Select
        labelId="label"
        isRequired={false}
        id="update-value"
        onChange={onChange}
        onBlur={blurCallback}
        name="test6"
      >
        <option aria-selected={false}>value1</option>
        <option aria-selected={false}>value2</option>
        <option aria-selected={false}>value3</option>
      </Select>
    );

    wrapper.find("select").simulate("change", { target: { value: "value2" } });
    expect(currentValue).to.equal("value2");

    wrapper.find("select").simulate("change", { target: { value: "value3" } });
    expect(currentValue).to.equal("value3");

    wrapper.find("select").simulate("change", { target: { value: "value1" } });
    expect(currentValue).to.equal("value1");
  });

  it("Calls the onBlur callback", () => {
    wrapper = Enzyme.mount(
      <Select
        id="hi"
        labelId="label"
        isRequired={false}
        onChange={changeCallback}
        onBlur={blurCallback}
        name="test7"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    wrapper.find("select").simulate("blur", { target: { value: "" } });

    expect(blurCallback.callCount).to.equal(1);
  });

  it("Calls the callback onBlur function with the updated value", () => {
    let currentValue = "";
    const onBlur = event => {
      currentValue = event?.target?.value;
    };
    wrapper = Enzyme.mount(
      <Select
        labelId="label"
        isRequired={false}
        id="update-value"
        onChange={changeCallback}
        onBlur={onBlur}
        name="test8"
      >
        <option aria-selected={false}>value1</option>
        <option aria-selected={false}>value2</option>
        <option aria-selected={false}>value3</option>
      </Select>
    );

    wrapper.find("select").simulate("blur", { target: { value: "value2" } });
    expect(currentValue).to.equal("value2");

    wrapper.find("select").simulate("blur", { target: { value: "value3" } });
    expect(currentValue).to.equal("value3");

    wrapper.find("select").simulate("blur", { target: { value: "value1" } });
    expect(currentValue).to.equal("value1");
  });

  it("Displays the selected option onLoad when passed selectedOption", () => {
    wrapper = Enzyme.mount(
      <Select
        labelId="label"
        isRequired={false}
        id="hi"
        selectedOption="test2"
        onChange={changeCallback}
        onBlur={blurCallback}
        name="test9"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(wrapper.find("select").props().value).to.equal("test2");
  });

  it("Calls the correct handlers when a new value is selected", () => {
    wrapper = Enzyme.mount(
      <Select
        labelId="label"
        isRequired={false}
        id="state-change"
        onChange={changeCallback}
        onBlur={blurCallback}
        selectedOption="value1"
        name="test10"
      >
        <option aria-selected={false}>value1</option>
        <option aria-selected={false}>value2</option>
        <option aria-selected={false}>value3</option>
      </Select>
    );
    expect(wrapper.find("select").props().value).to.equal("value1");

    wrapper.find("select").simulate("change", { target: { value: "value2" } });
    expect(changeCallback.callCount).to.equal(1);

    wrapper.find("select").simulate("blur", { target: { value: "value3" } });
    expect(blurCallback.callCount).to.equal(1);
  });

  it("Passes the ref to the select element", () => {
    const ref = React.createRef<HTMLSelectElement>();
    const container = Enzyme.mount(
      <Select
        labelId="label"
        isRequired={false}
        id="ref-test"
        name="test11"
        ref={ref}
      >
        <option aria-selected={false}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(container.find("select").instance()).to.equal(ref.current);
  });

  it("should throw warning when fewer than 2 options", () => {
    wrapper = Enzyme.mount(
      <Select labelId="label" isRequired={false} id="ref-test" name="test1">
        <option aria-selected={false}>test1</option>
      </Select>
    );
    expect(wrapper.find("select").prop("name")).to.equal("test1");
    expect(
      warn.calledWith(
        "NYPL DS recommends <select> not be used for 1 or fewer options"
      )
    );
  });

  it("should throw warning when there are more than 7 options", () => {
    wrapper = Enzyme.mount(
      <Select labelId="label" isRequired={false} id="ref-test" name="test1">
        <option aria-selected={false}>test1</option>
        <option aria-selected={false}>test2</option>
        <option aria-selected={false}>test3</option>
        <option aria-selected={false}>test4</option>
        <option aria-selected={false}>test5</option>
        <option aria-selected={false}>test6</option>
        <option aria-selected={false}>test7</option>
        <option aria-selected={false}>test8</option>
      </Select>
    );
    expect(wrapper.find("select").prop("name")).to.equal("test1");
    expect(
      warn.calledWith(
        "NYPL DS recommends that your <select>s have fewer than 8 options"
      )
    );
  });
});
