import { Flex, Spacer } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Checkbox from "./Checkbox";

describe("Checkbox Accessibility", () => {
  it("passes axe accessibility test with string label", async () => {
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

  it("passes axe accessibility test with jsx label", async () => {
    const { container } = render(
      <Checkbox
        id="jsxLabel"
        labelText={
          <Flex>
            <span>Arts</span>
            <Spacer />
            <span>4</span>
          </Flex>
        }
        value="arts"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Checkbox", () => {
  let changeHandler: jest.MockedFunction<() => void>;

  beforeEach(() => {
    changeHandler = jest.fn();
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

  it("logs a warning if `labelText` is not a string and `showLabel` is false", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Checkbox
        id="checkbox"
        value="arts"
        labelText={
          <Flex>
            <span>Arts</span>
            <Spacer />
            <span>4</span>
          </Flex>
        }
        showLabel={false}
      />
    );

    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Checkbox: `labelText` must be a string when `showLabel` is false."
    );
  });

  it("Logs a warning when there is no `id` passed", () => {
    const warn = jest.spyOn(console, "warn");
    // @ts-ignore: Typescript complains when a required prop is not passed, but
    // here we don't want to pass the required prop to make sure the warning appears.
    render(<Checkbox labelText="checkbox" />);
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Checkbox: This component's required `id` prop was not passed."
    );
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
    const withJSXLabel = renderer
      .create(
        <Checkbox
          id="jsxLabel"
          labelText={
            <Flex>
              <span>Arts</span>
              <Spacer />
              <span>4</span>
            </Flex>
          }
          value="arts"
        />
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
    expect(withJSXLabel).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
