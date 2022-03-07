import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import * as generateUUID from "../../helpers/generateUUID";
import Toggle from "./Toggle";

describe("Toggle Accessibility", () => {
  it("Passes axe accessibility test", async () => {
    const { container } = render(
      <Toggle id="inputID" onChange={jest.fn()} labelText="Test Label" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Toggle", () => {
  let changeHandler;
  let generateUUIDSpy;

  beforeEach(() => {
    changeHandler = jest.fn();
  });

  it("Renders with a Toggle input and label", () => {
    render(<Toggle id="inputID" labelText="Test Label" />);
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("Renders visible helper or error text", () => {
    const { rerender } = render(
      <Toggle
        id="inputID"
        labelText="Test Label"
        helperText="This is the helper text."
        invalidText="This is the error text :("
      />
    );
    expect(screen.getByText("This is the helper text.")).toBeVisible();
    expect(
      screen.queryByText("This is the error text :(")
    ).not.toBeInTheDocument();

    rerender(
      <Toggle
        id="inputID"
        labelText="Test Label"
        isInvalid
        helperText="This is the helper text."
        invalidText="This is the error text :("
      />
    );
    expect(screen.getByText("This is the error text :(")).toBeVisible();
    expect(
      screen.queryByText("This is the helper text.")
    ).not.toBeInTheDocument();
  });

  it("Sets the Toggle's ID", () => {
    render(<Toggle id="inputID" labelText="Test Label" />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("id", "inputID");
  });

  it("Calls the UUID generation function if no id prop value is passed", () => {
    generateUUIDSpy = jest.spyOn(generateUUID, "default");
    expect(generateUUIDSpy).toHaveBeenCalledTimes(0);
    render(<Toggle labelText="Test Label" />);
    expect(generateUUIDSpy).toHaveBeenCalledTimes(1);
  });

  it("Sets the 'checked' attribute", () => {
    render(<Toggle id="inputID" labelText="Test Label" isChecked />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("checked");
  });

  it("Sets the 'disabled' attribute", () => {
    render(<Toggle id="inputID" labelText="Test Label" isDisabled />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("disabled");
  });

  it("Sets the error state", () => {
    render(
      <Toggle
        id="inputID-attributes"
        labelText="onChange test"
        invalidText="This is the error text!"
        isInvalid
      />
    );
    expect(screen.getByRole("checkbox")).toHaveAttribute("aria-invalid");
    expect(screen.getByText("This is the error text!")).toBeInTheDocument();
  });

  it("does not render the error text when 'isInvalid' is true but 'invalidText' is not passed", () => {
    render(
      <Toggle id="inputID-attributes" labelText="onChange test" isInvalid />
    );
    expect(screen.getByRole("checkbox")).toHaveAttribute("aria-invalid");
    expect(
      screen.queryByText("This is the error text!")
    ).not.toBeInTheDocument();
  });

  it("Changing the value calls the onChange handler", () => {
    const utils = render(
      <Toggle
        id="onChangeTest"
        onChange={changeHandler}
        labelText="onChangeTest Lab"
        isChecked
      />
    );

    expect(changeHandler).toHaveBeenCalledTimes(0);
    userEvent.click(utils.getByText("onChangeTest Lab"));
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });

  it("Renders the UI snapshot correctly", () => {
    const primary = renderer
      .create(<Toggle id="inputID" labelText="Test Label" />)
      .toJSON();
    const isChecked = renderer
      .create(<Toggle id="Toggle-checked" labelText="Test Label" isChecked />)
      .toJSON();
    const isInvalid = renderer
      .create(<Toggle id="Toggle-invalid" labelText="Test Label" isInvalid />)
      .toJSON();
    const isDisabled = renderer
      .create(<Toggle id="Toggle-disabled" labelText="Test Label" isDisabled />)
      .toJSON();

    expect(primary).toMatchSnapshot();
    expect(isChecked).toMatchSnapshot();
    expect(isInvalid).toMatchSnapshot();
    expect(isDisabled).toMatchSnapshot();
  });
});
