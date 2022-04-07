import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Select from "./Select";

const baseProps = {
  id: "select",
  labelText: "What is your favorite color?",
  helperText: "This is the helper text.",
  name: "color",
};
const baseOptions = (
  <>
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
    <option value="black">Black</option>
    <option value="white">White</option>
  </>
);

describe("Select Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<Select {...baseProps}>{baseOptions}</Select>);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Select", () => {
  it("renders a label, select, option, and helper text DOM elements", () => {
    render(<Select {...baseProps}>{baseOptions}</Select>);

    expect(
      screen.getByLabelText(/What is your favorite color/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(5);
    expect(screen.getByText(/This is the helper text/i)).toBeInTheDocument();
  });

  it("renders a name attribute to use in forms", () => {
    render(<Select {...baseProps}>{baseOptions}</Select>);
    expect(
      screen.getByLabelText(/What is your favorite color/i)
    ).toHaveAttribute("name", "color");
  });

  it("renders an aria-label attribute when `showLabel` is false", () => {
    const { rerender } = render(<Select {...baseProps}>{baseOptions}</Select>);

    expect(
      screen.getByLabelText(/What is your favorite color/i)
    ).not.toHaveAttribute("aria-label");

    rerender(
      <Select {...baseProps} showLabel={false}>
        {baseOptions}
      </Select>
    );
    expect(
      screen.getByLabelText(/What is your favorite color/i)
    ).toHaveAttribute(
      "aria-label",
      "What is your favorite color? - This is the helper text."
    );
  });

  it("renders aria-describedby when helperText prop is passed", () => {
    const id = "test-describe";
    render(
      <Select {...baseProps} id={id}>
        {baseOptions}
      </Select>
    );

    expect(
      screen.getByLabelText(/What is your favorite color/i)
    ).toHaveAttribute("aria-describedby", `${id}-helperText`);
  });

  it("renders required or optional text in the label", () => {
    const { rerender } = render(<Select {...baseProps}>{baseOptions}</Select>);
    expect(screen.getByText(/Optional/i)).toBeInTheDocument();

    rerender(
      <Select {...baseProps} isRequired>
        {baseOptions}
      </Select>
    );
    expect(screen.getByText(/Required/i)).toBeInTheDocument();

    rerender(
      <Select {...baseProps} showOptReqLabel={false}>
        {baseOptions}
      </Select>
    );
    expect(screen.queryByText(/Optional/i)).not.toBeInTheDocument();

    rerender(
      <Select {...baseProps} isRequired showOptReqLabel={false}>
        {baseOptions}
      </Select>
    );
    expect(screen.queryByText(/Required/i)).not.toBeInTheDocument();
  });

  it("renders required and aria-required attributes when 'showLabel' is false", () => {
    render(
      <Select {...baseProps} isRequired showLabel={false}>
        {baseOptions}
      </Select>
    );
    expect(screen.queryByText(/equired/i)).not.toBeInTheDocument();
    expect(
      screen.getByLabelText(/What is your favorite color/i)
    ).toHaveAttribute("aria-required");
    expect(
      screen.getByLabelText(/What is your favorite color/i)
    ).toHaveAttribute("required");
  });

  it("should not render a required label if 'showOptReqLabel' flag is false, but still render the label", () => {
    render(
      <Select {...baseProps} isRequired showOptReqLabel={false}>
        {baseOptions}
      </Select>
    );
    expect(screen.queryByText(/Required/i)).not.toBeInTheDocument();
    expect(
      screen.getByLabelText(/What is your favorite color/i)
    ).toBeInTheDocument();
  });

  it("renders helper text when helperText prop is passed", () => {
    render(<Select {...baseProps}>{baseOptions}</Select>);

    expect(screen.getByText("This is the helper text.")).toBeInTheDocument();
  });

  it("renders default error text when 'invalidText' prop is not passed and 'isInvalid' prop is set to true", () => {
    render(
      <Select {...baseProps} isInvalid>
        {baseOptions}
      </Select>
    );

    expect(
      screen.getByText("There is an error related to this field.")
    ).toBeInTheDocument();
  });

  it("does not render the error text when 'isInvalid' is true and 'showHelperInvalidText' is false", () => {
    render(
      <Select {...baseProps} showHelperInvalidText={false} isInvalid>
        {baseOptions}
      </Select>
    );

    expect(
      screen.queryByText("There is an error related to this field.")
    ).not.toBeInTheDocument();
  });

  it("renders custom error text when 'invalidText' prop is passed and 'isInvalid' prop is set to true", () => {
    render(
      <Select
        {...baseProps}
        invalidText="This is a custom error text!"
        isInvalid
      >
        {baseOptions}
      </Select>
    );
    expect(
      screen.getByText("This is a custom error text!")
    ).toBeInTheDocument();
  });

  it("updates the value through a ref", () => {
    const selectRef = React.createRef<HTMLSelectElement>();
    render(
      <Select {...baseProps} ref={selectRef}>
        {baseOptions}
      </Select>
    );

    expect(selectRef.current.value).toEqual("red");

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "blue" },
    });
    expect(selectRef.current.value).toEqual("blue");

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "white" },
    });
    expect(selectRef.current.value).toEqual("white");
  });

  it("calls the onChange callback function", () => {
    let value = "";
    const changeCallback = (e) => {
      value = e.target.value;
    };
    render(
      <Select {...baseProps} onChange={changeCallback} value={value}>
        {baseOptions}
      </Select>
    );

    expect(value).toEqual("");

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "blue" },
    });
    expect(value).toEqual("blue");

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "white" },
    });
    expect(value).toEqual("white");
  });

  it("should throw warning when fewer than 4 options", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Select {...baseProps}>
        <option value="red">Red</option>
      </Select>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Select: NYPL DS recommends that <select> fields have at least 4 options; a radio button group is a good alternative for 3 or fewer options."
    );
  });

  it("should throw warning when there are more than 10 options", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Select {...baseProps}>
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
      "NYPL Reservoir Select: NYPL DS recommends that <select> fields have no more than 10 options; an auto-complete text input is a good alternative for 11 or more options."
    );
  });

  it("Renders the UI snapshot correctly", () => {
    const siblings = ["Kendall", "Shiv", "Connor", "Roman", "Tom"];

    const options = siblings.map((sibling) => (
      <option key={sibling}>{sibling}</option>
    ));

    const primary = renderer
      .create(
        <Select
          id="select"
          labelText="Which Succession sibling are you?"
          name="succession-sibling"
        >
          {options}
        </Select>
      )
      .toJSON();
    const disabled = renderer
      .create(
        <Select
          id="select"
          isDisabled
          labelText="Which Succession sibling are you?"
          name="succession-sibling"
        >
          {options}
        </Select>
      )
      .toJSON();
    const withInvalidText = renderer
      .create(
        <Select
          id="select"
          invalidText="Tom doesn't count as a sibling :(."
          isInvalid
          labelText="Which Succession sibling are you?"
          name="succession-sibling"
        >
          {options}
        </Select>
      )
      .toJSON();
    const withHelperText = renderer
      .create(
        <Select
          helperText="Remember, Logan will judge you no matter who you pick."
          id="select"
          labelText="Which Succession sibling are you?"
          name="succession-sibling"
        >
          {options}
        </Select>
      )
      .toJSON();
    const required = renderer
      .create(
        <Select
          id="select"
          isRequired
          labelText="Which Succession sibling are you?"
          name="succession-sibling"
        >
          {options}
        </Select>
      )
      .toJSON();
    const hasOnChange = renderer
      .create(
        <Select
          id="select"
          labelText="Which Succession sibling are you?"
          name="succession-sibling"
          onChange={jest.fn()}
        >
          {options}
        </Select>
      )
      .toJSON();

    expect(primary).toMatchSnapshot();
    expect(disabled).toMatchSnapshot();
    expect(withInvalidText).toMatchSnapshot();
    expect(withHelperText).toMatchSnapshot();
    expect(required).toMatchSnapshot();
    expect(hasOnChange).toMatchSnapshot();
  });
});
