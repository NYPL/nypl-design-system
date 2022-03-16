import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";
import * as generateUUID from "../../helpers/generateUUID";
import Checkbox from "./Checkbox";

describe("Checkbox Accessibility", () => {
  it("Passes axe accessibility test", async () => {
    const { container } = render(
      <Checkbox
        id="inputID"
        onChange={jest.fn()}
        labelText="Test Label"
        showLabel={false}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Checkbox", () => {
  let changeHandler;
  let generateUUIDSpy;

  beforeEach(() => {
    changeHandler = jest.fn();
    generateUUIDSpy = jest.spyOn(generateUUID, "default");
  });

  it("Renders with a checkbox input and label", () => {
    render(<Checkbox id="inputID" labelText="Test Label" />);
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("Renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false", () => {
    render(<Checkbox id="inputID" labelText="Test Label" showLabel={false} />);
    expect(screen.getByLabelText("Test Label")).toHaveAttribute(
      "aria-label",
      "Test Label"
    );
  });

  it("Renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false and 'helperText' has been passed", () => {
    render(
      <Checkbox
        id="inputID"
        labelText="Test Label"
        showLabel={false}
        helperText="This is the helper text."
      />
    );
    expect(
      screen.getByLabelText("Test Label - This is the helper text.")
    ).toBeInTheDocument();
  });

  it("Renders visible helper or error text", () => {
    const { rerender } = render(
      <Checkbox
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
      <Checkbox
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

  it("Sets the checkbox's ID", () => {
    render(<Checkbox id="inputID" labelText="Test Label" />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("id", "inputID");
  });

  it("Calls the UUID generation function if no id prop value is passed", () => {
    expect(generateUUIDSpy).toHaveBeenCalledTimes(0);
    render(<Checkbox labelText="Test Label" />);
    expect(generateUUIDSpy).toHaveBeenCalledTimes(1);
  });

  it("Sets the 'checked' attribute", () => {
    render(
      <Checkbox
        id="inputID"
        labelText="Test Label"
        showLabel={true}
        isChecked
      />
    );
    expect(screen.getByRole("checkbox")).toHaveAttribute("checked");
  });

  it("Sets the 'indeterminate' state", () => {
    const { container, rerender } = render(
      <Checkbox id="inputID" labelText="Test Label" isChecked />
    );
    expect(
      container.querySelector(".chakra-checkbox__control")
    ).not.toHaveAttribute("data-indeterminate");

    rerender(
      <Checkbox id="inputID" labelText="Test Label" isChecked isIndeterminate />
    );
    expect(
      container.querySelector(".chakra-checkbox__control")
    ).toHaveAttribute("data-indeterminate");
  });

  it("Sets the 'disabled' attribute", () => {
    render(
      <Checkbox
        id="inputID"
        labelText="Test Label"
        showLabel={true}
        isDisabled
      />
    );
    expect(screen.getByRole("checkbox")).toHaveAttribute("disabled");
  });

  it("Sets the 'required' attribute", () => {
    render(
      <Checkbox
        id="inputID"
        labelText="Test Label"
        showLabel={true}
        isRequired
      />
    );
    expect(screen.getByRole("checkbox")).toHaveAttribute("required");
  });

  it("Sets the error state", () => {
    render(
      <Checkbox
        id="inputID-attributes"
        labelText="onChange test"
        showLabel={true}
        invalidText="This is the error text!"
        isInvalid
      />
    );
    expect(screen.getByRole("checkbox")).toHaveAttribute("aria-invalid");
    expect(screen.getByText("This is the error text!")).toBeInTheDocument();
  });

  it("does not render the error text when 'isInvalid' is true but 'showHelperInvalidText' is false", () => {
    render(
      <Checkbox
        id="inputID-attributes"
        labelText="onChange test"
        showLabel={true}
        showHelperInvalidText={false}
        isInvalid
      />
    );
    expect(screen.getByRole("checkbox")).toHaveAttribute("aria-invalid");
    expect(
      screen.queryByText("This is the error text!")
    ).not.toBeInTheDocument();
  });

  it("Changing the value calls the onChange handler", () => {
    const utils = render(
      <Checkbox
        id="onChangeTest"
        onChange={changeHandler}
        labelText="onChangeTest Lab"
        showLabel={true}
        isChecked
      />
    );

    expect(changeHandler).toHaveBeenCalledTimes(0);
    userEvent.type(utils.getByText("onChangeTest Lab"), "Hello");
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });

  it("Renders the UI snapshot correctly", () => {
    const primary = renderer
      .create(<Checkbox id="inputID" labelText="Test Label" />)
      .toJSON();
    const isChecked = renderer
      .create(
        <Checkbox id="checkbox-checked" labelText="Test Label" isChecked />
      )
      .toJSON();
    const isIndeterminate = renderer
      .create(
        <Checkbox
          id="checkbox-checked"
          labelText="Test Label"
          isChecked
          isIndeterminate
        />
      )
      .toJSON();
    const isRequired = renderer
      .create(
        <Checkbox id="checkbox-required" labelText="Test Label" isRequired />
      )
      .toJSON();
    const isInvalid = renderer
      .create(
        <Checkbox id="checkbox-invalid" labelText="Test Label" isInvalid />
      )
      .toJSON();
    const isDisabled = renderer
      .create(
        <Checkbox id="checkbox-disabled" labelText="Test Label" isDisabled />
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <Checkbox
          id="checkbox-chakra"
          labelText="Test Label"
          p="s"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <Checkbox
          id="checkbox-props"
          labelText="Test Label"
          data-testid="testid"
        />
      )
      .toJSON();

    expect(primary).toMatchSnapshot();
    expect(isChecked).toMatchSnapshot();
    expect(isIndeterminate).toMatchSnapshot();
    expect(isRequired).toMatchSnapshot();
    expect(isInvalid).toMatchSnapshot();
    expect(isDisabled).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
