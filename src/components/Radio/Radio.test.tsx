import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

import * as generateUUID from "../../helpers/generateUUID";
import Radio from "./Radio";

describe("Radio Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Radio
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

describe("Radio Button", () => {
  let changeHandler;
  let clickHander;
  let generateUUIDSpy;

  beforeEach(() => {
    clickHander = jest.fn();
    changeHandler = jest.fn();
    generateUUIDSpy = jest.spyOn(generateUUID, "default");
    render(
      <Radio
        id="inputID"
        attributes={{ onClick: clickHander }}
        onChange={changeHandler}
        labelText="Test Label"
        showLabel={false}
      />
    );
  });

  it("Renders without crashing", () => {
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("Renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false", () => {
    expect(screen.getByLabelText("Test Label")).toHaveAttribute(
      "aria-label",
      "Test Label"
    );
  });

  it("The radio element's ID is set properly using the value passed to it.", () => {
    expect(screen.getByRole("radio")).toHaveAttribute("id", "inputID");
  });

  it("Allows user to pass in additional attributes", () => {
    expect(clickHander).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByRole("radio"));
    expect(clickHander).toHaveBeenCalledTimes(1);
  });

  // TODO:
  // // Click works but it should be onChange.
  // it("Changing the value calls the onChange handler", () => {
  //   expect(changeHandler).toHaveBeenCalledTimes(0);
  //   console.log(screen.debug());
  //   fireEvent.change(screen.getByRole("radio"));
  //   expect(changeHandler).toHaveBeenCalledTimes(1);
  // });

  it("Renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false and 'helperText' has been passed", () => {
    render(
      <Radio
        //add other props here
        id="test_id"
        labelText="Hello"
        showLabel={false}
        helperText="The helper text."
      />
    );
    expect(
      screen.getByLabelText("Hello - The helper text.")
    ).toBeInTheDocument();
  });

  it("Renders with label", () => {
    render(
      <Radio
        //add other props here
        id="test_id2"
        labelText="Hello"
        showLabel={true}
      />
    );
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByLabelText("Hello")).not.toHaveAttribute("aria-label");
    expect(screen.getByText("Hello")).toHaveAttribute("for", "test_id2");
  });

  it("Renders with visible helper text", () => {
    render(
      <Radio
        //add other props here
        id="test_id3"
        labelText="Hello"
        showLabel={true}
        helperText="The visible helper text."
        errorText="The error text."
        errored={false}
      />
    );
    expect(screen.getByText("The visible helper text.")).toBeInTheDocument();
    expect(screen.queryByText("The error text.")).not.toBeInTheDocument();
  });

  it("Renders with visible error text", () => {
    render(
      <Radio
        //add other props here
        id="test_id4"
        labelText="Hello"
        showLabel={true}
        helperText="The helper text."
        errorText="The visible error text."
        errored={true}
      />
    );
    expect(screen.queryByText("The helper text.")).not.toBeInTheDocument();
    expect(screen.getByText("The visible error text.")).toBeInTheDocument();
  });

  it("Calls a UUID generation method if no ID is passed as a prop", () => {
    render(<Radio labelText="Hello" showLabel={true} />);
    expect(generateUUIDSpy).toHaveBeenCalledTimes(1);
  });

  it("The 'checked' attribute can set properly", () => {
    const onChange = jest.fn();
    render(
      <Radio
        id="inputID-attributes"
        labelText="onChange test"
        showLabel={false}
        attributes={{
          checked: true,
          "aria-checked": true,
          onChange,
        }}
      />
    );

    expect(screen.getByLabelText("onChange test")).toHaveAttribute("checked");
    expect(screen.getByLabelText("onChange test")).toHaveAttribute(
      "aria-checked"
    );
  });

  // TODO:
  // it("Passes the ref to the input element", () => {
  //   const ref = React.createRef<HTMLInputElement>();
  //   const container = render(
  //     <Radio
  //       id="inputID-attributes"
  //       ref={ref}
  //       labelText="Hello"
  //       showLabel={false}
  //     />
  //   );
  //   expect(container.find("input").instance()).toEqual(ref.current);
  // });

  it("Renders HTML attributes passed through the `attributes` prop", () => {
    const onChangeSpy = jest.fn();
    const onBlurSpy = jest.fn();
    render(
      <Radio
        id="inputID-attributes"
        attributes={{
          onChange: onChangeSpy,
          onBlur: onBlurSpy,
          tabIndex: 0,
        }}
        labelText="attributes test"
        showLabel={true}
      />
    );
    expect(screen.getByLabelText("attributes test")).toHaveAttribute(
      "tabIndex",
      "0"
    );
    // TODO:
    // Click works but it should be onChange.
    // expect(onChangeSpy).toHaveBeenCalledTimes(0);
    // userEvent.click(screen.getByLabelText("attributes test"));
    // expect(onChangeSpy).toHaveBeenCalledTimes(1);
    expect(onBlurSpy).toHaveBeenCalledTimes(0);
    fireEvent.blur(screen.getByLabelText("attributes test"));
    expect(onBlurSpy).toHaveBeenCalledTimes(1);
  });
});
