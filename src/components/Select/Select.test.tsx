import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Select from "./Select";

describe("Select Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Select
        labelText="Select Label"
        onChange={jest.fn()}
        onBlur={jest.fn()}
        name="test"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Select", () => {
  let utils;
  const changeCallback = jest.fn();
  const blurCallback = jest.fn();

  it("Renders a select DOM element", () => {
    utils = render(
      <Select
        labelText="Select Label"
        onChange={changeCallback}
        onBlur={blurCallback}
        name="test"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(utils.container.querySelector(".select")).toBeInTheDocument();
  });

  it("Renders a name attribute to use in forms", () => {
    utils = render(
      <Select
        labelText="Select Label"
        onChange={changeCallback}
        onBlur={blurCallback}
        name="test2"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(screen.getByLabelText("Select Label")).toHaveAttribute(
      "name",
      "test2"
    );
  });

  it("Renders an aria-label", () => {
    utils = render(
      <Select
        labelText="Select Label"
        onChange={changeCallback}
        onBlur={blurCallback}
        showLabel={false}
        name="test3"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(screen.getByLabelText("Select Label")).toHaveAttribute(
      "aria-label",
      "Select Label"
    );
  });

  it("Renders an aria-label based on deprecated prop", () => {
    utils = render(
      <Select
        labelText="Select Label"
        ariaLabel="Aria Label"
        onChange={changeCallback}
        onBlur={blurCallback}
        showLabel={false}
        name="test3"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(screen.getByLabelText("Aria Label")).toHaveAttribute(
      "aria-label",
      "Aria Label"
    );
  });

  it("Renders aria-describedby when helperText prop is passed", () => {
    utils = render(
      <Select
        id="custom-select-id"
        showLabel={true}
        labelText="Select Label"
        onChange={changeCallback}
        onBlur={blurCallback}
        helperText="example helper text"
        name="test4"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(screen.getByLabelText(/Select Label/i)).toHaveAttribute(
      "aria-describedby",
      "custom-select-id-helperText"
    );
  });

  it("Renders required or optional text in the label", () => {
    const utils = render(
      <Select
        id="custom-select-id"
        labelText="Select Label"
        showLabel={true}
        onChange={changeCallback}
        onBlur={blurCallback}
        name="test4"
        required
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(screen.getByLabelText(/Select Label/i)).toBeInTheDocument();
    expect(screen.getByText(/Required/i)).toBeInTheDocument();
    expect(screen.queryByText(/Optional/i)).not.toBeInTheDocument();

    utils.rerender(
      <Select
        id="custom-select-id"
        labelText="Select Label"
        showLabel={true}
        onChange={changeCallback}
        onBlur={blurCallback}
        name="test4"
        required={false}
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );

    expect(screen.getByLabelText(/Select Label/i)).toBeInTheDocument();
    expect(screen.queryByText(/Required/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Optional/i)).toBeInTheDocument();
  });

  it("Renders required and aria-required attributes when 'showLabel' is false", () => {
    render(
      <Select
        id="custom-select-id"
        labelText="Select Label"
        showLabel={false}
        onChange={changeCallback}
        onBlur={blurCallback}
        name="test4"
        required
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
    expect(screen.getByLabelText("Select Label")).toHaveAttribute(
      "aria-required"
    );
    expect(screen.getByLabelText("Select Label")).toHaveAttribute("required");
  });

  it("Should not render a required label if 'showOptReqLabel' flag is false, but still render the label", () => {
    render(
      <Select
        id="custom-select-id"
        labelText="Select Label"
        onChange={changeCallback}
        onBlur={blurCallback}
        name="test4"
        required
        showOptReqLabel={false}
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
    expect(screen.getByLabelText("Select Label")).toBeInTheDocument();
  });

  it("Renders required and aria-required attributes using deprecated prop", () => {
    render(
      <Select
        id="custom-select-id"
        labelText="Select Label"
        onChange={changeCallback}
        onBlur={blurCallback}
        name="test4"
        isRequired
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(screen.getByLabelText("Select Label")).toHaveAttribute(
      "aria-required"
    );
    expect(screen.getByLabelText("Select Label")).toHaveAttribute("required");
  });

  it("Renders helper text when helperText prop is passed", () => {
    render(
      <Select
        id="custom-select-id"
        labelText="Select Label"
        helperText="The helper text."
        name="test4"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );

    expect(screen.getByText("The helper text.")).toBeInTheDocument();
  });

  it("Renders default error text when 'errorText' prop is not passed and 'errored' prop is set to true", () => {
    render(
      <Select
        id="custom-select-id"
        labelText="Select Label"
        name="test4"
        errored
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );

    expect(
      screen.getByText("There is an error related to this field.")
    ).toBeInTheDocument();
  });

  it("Renders custom error text when 'errorText' prop is passed and 'errored' prop is set to true", () => {
    render(
      <Select
        id="custom-select-id"
        labelText="Select Label"
        errorText="Custom error text!"
        name="test4"
        errored
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(screen.getByText("Custom error text!")).toBeInTheDocument();
  });

  it("Calls the onChange callback", () => {
    render(
      <Select
        labelText="Select Label"
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

    expect(changeCallback).toHaveBeenCalledTimes(0);
    fireEvent.change(screen.getByLabelText("Select Label"), {
      target: { value: "test2" },
    });
    expect(changeCallback).toHaveBeenCalledTimes(1);
  });

  it("Calls the callback onChange function with the updated value", () => {
    let currentValue = "";
    const onChange = (event) => {
      currentValue = event?.target?.value;
    };
    render(
      <Select
        labelText="Select Label"
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
    fireEvent.change(screen.getByLabelText("Select Label"), {
      target: { value: "value2" },
    });
    expect(currentValue).toEqual("value2");

    fireEvent.change(screen.getByLabelText("Select Label"), {
      target: { value: "value3" },
    });
    expect(currentValue).toEqual("value3");

    fireEvent.change(screen.getByLabelText("Select Label"), {
      target: { value: "value1" },
    });
    expect(currentValue).toEqual("value1");
  });

  it("Calls the onBlur callback", () => {
    render(
      <Select
        labelText="Select Label"
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
    expect(blurCallback).toHaveBeenCalledTimes(0);
    fireEvent.blur(screen.getByLabelText("Select Label"));
    expect(blurCallback).toHaveBeenCalledTimes(1);
  });

  it("Calls the callback onBlur function with the updated value", () => {
    let currentValue = "";
    const onBlur = (event) => {
      currentValue = event?.target?.value;
    };
    render(
      <Select
        labelText="Select Label"
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

    fireEvent.blur(screen.getByLabelText("Select Label"), {
      target: { value: "value2" },
    });
    expect(currentValue).toEqual("value2");

    fireEvent.blur(screen.getByLabelText("Select Label"), {
      target: { value: "value3" },
    });
    expect(currentValue).toEqual("value3");

    fireEvent.blur(screen.getByLabelText("Select Label"), {
      target: { value: "value1" },
    });
    expect(currentValue).toEqual("value1");
  });

  it("Displays the selected option onLoad when passed selectedOption", () => {
    render(
      <Select
        labelText="Select Label"
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
    expect(screen.getByText("test2")).toBeInTheDocument();
  });

  it("Calls the correct handlers when a new value is selected", () => {
    render(
      <Select
        labelText="Select Label"
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

    fireEvent.change(screen.getByLabelText("Select Label"), {
      target: { value: "value2" },
    });
    expect(changeCallback).toHaveBeenCalled();

    fireEvent.blur(screen.getByLabelText("Select Label"), {
      target: { value: "value3" },
    });
    expect(blurCallback).toHaveBeenCalled();
  });

  // TODO:
  // it("Passes the ref to the select element", () => {
  //   const ref = React.createRef<HTMLSelectElement>();
  //   const container = render(
  //     <Select
  //       labelText="Select Label"
  //       labelId="label"
  //       isRequired={false}
  //       id="ref-test"
  //       name="test11"
  //       ref={ref}
  //     >
  //       <option aria-selected={false}>test1</option>
  //       <option aria-selected={false}>test2</option>
  //     </Select>
  //   );
  //   expect(container.find("select").instance()).toEqual(ref.current);
  // });

  it("should throw warning when fewer than 4 options", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Select
        labelText="Select Label"
        labelId="label"
        isRequired={false}
        id="ref-test"
        name="test1"
      >
        <option aria-selected={false}>test1</option>
      </Select>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL DS recommends that <select> fields have at least 4 options; a radio button group is a good alternative for 3 or fewer options."
    );
  });

  it("should throw warning when there are more than 10 options", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Select
        labelText="Select Label"
        labelId="label"
        isRequired={false}
        id="ref-test"
        name="test1"
      >
        <option aria-selected={false}>test1</option>
        <option aria-selected={false}>test2</option>
        <option aria-selected={false}>test3</option>
        <option aria-selected={false}>test4</option>
        <option aria-selected={false}>test5</option>
        <option aria-selected={false}>test6</option>
        <option aria-selected={false}>test7</option>
        <option aria-selected={false}>test8</option>
        <option aria-selected={false}>test9</option>
        <option aria-selected={false}>test10</option>
        <option aria-selected={false}>test11</option>
      </Select>
    );

    expect(warn).toHaveBeenCalledWith(
      "NYPL DS recommends that <select> fields have no more than 10 options; an auto-complete text input is a good alternative for 11 or more options."
    );
  });
});
