import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import * as generateUUID from "../../helpers/generateUUID";
import Checkbox from "./Checkbox";

describe("Checkbox Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Checkbox
        id="inputID"
        attributes={{ onClick: jest.fn() }}
        onChange={jest.fn()}
        labelText="Test Label"
        showLabel={false}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Checkbox", () => {
  let utils;
  let changeHandler;
  let clickHander;
  let generateUUIDSpy;

  beforeEach(() => {
    clickHander = jest.fn();
    changeHandler = jest.fn();
    generateUUIDSpy = jest.spyOn(generateUUID, "default");
    utils = render(
      <Checkbox
        id="inputID"
        attributes={{ onClick: clickHander }}
        onChange={changeHandler}
        labelText="Test Label"
        showLabel={false}
      />
    );
  });

  it("Renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false", () => {
    const container = utils.container;
    expect(container.querySelector(".input__checkbox")).toHaveAttribute(
      "aria-label",
      "Test Label"
    );
  });

  // it("Renders without crashing", () => {
  //   expect(container.find("input").exists()).toEqual(true);
  // });

  // it("The checkbox element is an input with type='checkbox'", () => {
  //   expect(container.find("input").prop("type")).toEqual("checkbox");
  // });

  // it("The checkbox element's ID is set properly using the value passed to it.", () => {
  //   expect(container.find("input").prop("id")).toEqual("inputID");
  // });

  // it("Allows user to pass in additional attributes", () => {
  //   container.simulate("click");
  //   expect(clickHander.callCount).toEqual(1);
  // });

  // it("Changing the value calls the onChange handler", () => {
  //   container = render(
  //     <Checkbox
  //       id="onChangeTest"
  //       onChange={changeHandler}
  //       labelText="onChangeTest Lab"
  //       showLabel={true}
  //       checked
  //     ></Checkbox>
  //   );
  //   container.find("input").simulate("change", { target: { value: "Hello" } });
  //   expect(changeHandler.callCount).toEqual(1);
  // });

  // it("Renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false and 'helperText' has been passed", () => {
  //   container = render(
  //     <Checkbox
  //       id="onChangeTest"
  //       onChange={changeHandler}
  //       labelText="onChangeTest Lab"
  //       showLabel={false}
  //       helperText="The helper text."
  //       checked
  //     ></Checkbox>
  //   );
  //   const labelText = container.prop("labelText");
  //   const helperText = container.prop("helperText");
  //   expect(container.find("input").prop("aria-label")).toEqual(
  //     `${labelText} - ${helperText}`
  //   );
  // });

  // it("Renders with label", () => {
  //   container = render(
  //     <Checkbox
  //       //add other props here
  //       id="test_id"
  //       labelText="Hello"
  //       showLabel={true}
  //     ></Checkbox>
  //   );
  //   expect(container.find("label").exists()).toEqual(true);
  //   expect(container.find("input").props()).not.to.have.property("aria-label");
  //   const checkboxId = container.prop("id");
  //   expect(container.find("label").prop("htmlFor")).toEqual(checkboxId);
  // });

  // it("Renders with visible helper text", () => {
  //   container = render(
  //     <Checkbox
  //       //add other props here
  //       id="test_id"
  //       labelText="Hello"
  //       showLabel={true}
  //       helperText="The helper text."
  //       errorText="The error text."
  //       errored={false}
  //     ></Checkbox>
  //   );
  //   expect(container.find(".helper-text").text()).toEqual("The helper text.");
  // });

  // it("Renders with visible error text", () => {
  //   container = render(
  //     <Checkbox
  //       //add other props here
  //       id="test_id"
  //       labelText="Hello"
  //       showLabel={true}
  //       helperText="The helper text."
  //       errorText="The error text."
  //       errored={true}
  //     ></Checkbox>
  //   );
  //   expect(container.find(".helper-text").text()).toEqual("The error text.");
  // });

  // it("Calls a UUID generation method if no ID is passed as a prop", () => {
  //   container = render(
  //     <Checkbox labelText="Hello" showLabel={true}></Checkbox>
  //   );
  //   expect(container.find("input").props()).to.have.property("id");

  //   expect(generateUUIDSpy.called);
  // });

  // it("The 'checked' attribute can set properly", () => {
  //   const onChange = jest.fn();
  //   const container = render(
  //     <Checkbox
  //       id="inputID-attributes"
  //       labelText="Hello"
  //       showLabel={false}
  //       attributes={{
  //         checked: true,
  //         "aria-checked": true,
  //         onChange,
  //       }}
  //     ></Checkbox>
  //   );

  //   const input = container.find("input");

  //   expect(input.prop("checked")).toEqual(true);
  //   expect(input.prop("aria-checked")).toEqual(true);
  // });

  // it("Passes the ref to the input element", () => {
  //   const ref = React.createRef<HTMLInputElement>();
  //   const container = render(
  //     <Checkbox
  //       id="inputID-attributes"
  //       ref={ref}
  //       labelText="Hello"
  //       showLabel={false}
  //     ></Checkbox>
  //   );
  //   expect(container.find("input").instance()).toEqual(ref.current);
  // });

  // it("Renders HTML attributes passed through the `attributes` prop", () => {
  //   const onChangeSpy = jest.fn();
  //   const onBlurSpy = jest.fn();
  //   container = render(
  //     <Checkbox
  //       id="inputID-attributes"
  //       attributes={{
  //         onChange: onChangeSpy,
  //         onBlur: onBlurSpy,
  //         tabIndex: 0,
  //       }}
  //       labelText="Hello"
  //       showLabel={true}
  //     ></Checkbox>
  //   );
  //   expect(container.find("input").prop("tabIndex")).toEqual(0);
  //   expect(onChangeSpy.callCount).toEqual(0);
  //   container.find("input").simulate("change");
  //   expect(onChangeSpy.callCount).toEqual(1);
  //   expect(onBlurSpy.callCount).toEqual(0);
  //   container.find("input").simulate("blur");
  //   expect(onBlurSpy.callCount).toEqual(1);
  // });
});
