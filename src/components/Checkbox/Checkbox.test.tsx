import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

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

  it("Renders without crashing", () => {
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
  });

  it("The checkbox element is an input with type='checkbox'", () => {
    const container = utils.container;
    expect(container.querySelector(".input__checkbox")).toHaveAttribute(
      "type",
      "checkbox"
    );
  });

  it("Allows user to pass in additional attributes", () => {
    expect(clickHander.mock.calls.length).toEqual(0);
    userEvent.click(screen.getByLabelText("Test Label"));
    expect(clickHander.mock.calls.length).toEqual(1);
  });

  it("Changing the value calls the onChange handler", () => {
    const utils = render(
      <Checkbox
        id="onChangeTest"
        onChange={changeHandler}
        labelText="onChangeTest Lab"
        showLabel={true}
        checked
      />
    );

    expect(changeHandler).toHaveBeenCalledTimes(0);
    userEvent.type(utils.getByText("onChangeTest Lab"), "Hello");
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });

  it("Renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false and 'helperText' has been passed", () => {
    const utils = render(
      <Checkbox
        id="onChangeTest"
        onChange={changeHandler}
        labelText="onChangeTest Lab"
        showLabel={false}
        helperText="The helper text."
        checked
      />
    );
    const container = utils.container;

    expect(container.querySelector(".input__checkbox")).toHaveAttribute(
      "aria-label",
      "onChangeTest Lab - The helper text."
    );
  });

  it("Renders with label", () => {
    const utils = render(
      <Checkbox
        //add other props here
        id="test_id"
        labelText="Hello"
        showLabel={true}
      />
    );
    const container = utils.container;
    expect(utils.getByLabelText("Hello")).toBeInTheDocument();
    expect(container.querySelector(".input__checkbox")).not.toHaveAttribute(
      "aria-label"
    );
    expect(utils.getByText("Hello")).toHaveAttribute("for", "test_id");
  });

  it("Renders with visible helper text", () => {
    const utils = render(
      <Checkbox
        //add other props here
        id="test_id"
        labelText="Hello"
        showLabel={true}
        helperText="The helper text."
        errorText="The error text."
        errored={false}
      />
    );
    expect(utils.getByText("The helper text.")).toBeInTheDocument();
  });

  it("Renders with visible error text", () => {
    const utils = render(
      <Checkbox
        //add other props here
        id="test_id"
        labelText="Hello"
        showLabel={true}
        helperText="The helper text."
        errorText="The error text."
        errored={true}
      />
    );
    expect(utils.getByText("The error text.")).toBeInTheDocument();
  });

  it("Calls a UUID generation method if no ID is passed as a prop", () => {
    render(<Checkbox labelText="Hello" showLabel={true}></Checkbox>);

    expect(generateUUIDSpy).toHaveBeenCalledTimes(1);
  });

  it("The 'checked' attribute can be set properly", () => {
    const onChange = jest.fn();
    const utils = render(
      <Checkbox
        id="inputID-attributes"
        labelText="Hello"
        showLabel={false}
        attributes={{
          checked: true,
          "aria-checked": true,
          onChange,
        }}
      />
    );

    const container = utils.container;
    expect(container.querySelector(".input__checkbox")).toHaveAttribute(
      "checked"
    );
    expect(container.querySelector(".input__checkbox")).toHaveAttribute(
      "aria-checked"
    );
  });

  // TODO:
  // it("Passes the ref to the input element", () => {
  //   const ref = React.createRef<HTMLInputElement>();
  //   const container = render(
  //     <Checkbox
  //       id="inputID-attributes"
  //       ref={ref}
  //       labelText="Hello"
  //       showLabel={false}
  //     />
  //   );
  // });

  it("Renders HTML attributes passed through the `attributes` prop", () => {
    const onChangeSpy = jest.fn();
    const onBlurSpy = jest.fn();
    const utils = render(
      <Checkbox
        id="inputID-attributes"
        attributes={{
          onChange: onChangeSpy,
          onBlur: onBlurSpy,
          tabIndex: 0,
        }}
        labelText="Hello"
        showLabel={true}
      ></Checkbox>
    );
    const container = utils.container;

    expect(container.querySelector(".input__checkbox")).toHaveAttribute(
      "tabIndex",
      "0"
    );

    expect(onChangeSpy).toHaveBeenCalledTimes(0);
    userEvent.type(utils.getByText("Hello"), "Hello");
    expect(onChangeSpy).toHaveBeenCalledTimes(1);
    expect(onBlurSpy).toHaveBeenCalledTimes(0);
    fireEvent.blur(utils.getByLabelText("Hello"));
    expect(onBlurSpy).toHaveBeenCalledTimes(1);
  });
});
