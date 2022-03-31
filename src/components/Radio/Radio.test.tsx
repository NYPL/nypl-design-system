import { Flex, Spacer } from "@chakra-ui/react";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Radio from "./Radio";
import * as generateUUID from "../../helpers/generateUUID";

describe("Radio Accessibility", () => {
  it("passes axe accessibility test with string label", async () => {
    const { container } = render(<Radio id="inputID" labelText="Test Label" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test with jsx label", async () => {
    const { container } = render(
      <Radio
        id="jsxLabel"
        labelText={
          <Flex>
            <span>Arts</span>
            <Spacer />
            <span>4</span>
          </Flex>
        }
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Radio Button", () => {
  it("renders with a radio input and label", () => {
    render(<Radio id="inputID" labelText="Test Label" />);
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false", () => {
    render(<Radio id="inputID" labelText="Test Label" showLabel={false} />);
    expect(screen.getByLabelText("Test Label")).toHaveAttribute(
      "aria-label",
      "Test Label"
    );
  });

  it("renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false and 'helperText' has been passed", () => {
    render(
      <Radio
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

  it("renders visible helper or error text", () => {
    const { rerender } = render(
      <Radio
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
      <Radio
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

  it("sets the radio's ID", () => {
    render(<Radio id="inputID" labelText="Test Label" />);
    expect(screen.getByRole("radio")).toHaveAttribute("id", "inputID");
  });

  it("calls the UUID generation function if no id prop value is passed", () => {
    const generateUUIDSpy = jest.spyOn(generateUUID, "default");
    expect(generateUUIDSpy).toHaveBeenCalledTimes(0);
    render(<Radio labelText="Hello" />);
    expect(generateUUIDSpy).toHaveBeenCalledTimes(1);
  });

  it("sets the 'checked' attribute", () => {
    render(
      <Radio
        id="inputID-attributes"
        labelText="onChange test"
        showLabel
        isChecked
      />
    );
    expect(screen.getByRole("radio")).toHaveAttribute("checked");
  });

  it("sets the 'disabled' attribute", () => {
    render(
      <Radio
        id="inputID-attributes"
        labelText="onChange test"
        showLabel
        isDisabled
      />
    );
    expect(screen.getByRole("radio")).toHaveAttribute("disabled");
  });

  it("sets the 'required' attribute", () => {
    render(
      <Radio
        id="inputID-attributes"
        labelText="onChange test"
        showLabel
        isRequired
      />
    );
    expect(screen.getByRole("radio")).toHaveAttribute("required");
  });

  it("sets the error state", () => {
    render(
      <Radio
        id="inputID-attributes"
        labelText="onChange test"
        showLabel
        invalidText="There is an error!"
        isInvalid
      />
    );
    expect(screen.getByRole("radio")).toHaveAttribute("aria-invalid");
    expect(screen.getByText("There is an error!")).toBeInTheDocument();
  });

  it("does not render the error text when 'showHelperInvalidText' is false", () => {
    render(
      <Radio
        id="inputID-attributes"
        labelText="onChange test"
        showLabel
        showHelperInvalidText={false}
        isInvalid
      />
    );
    expect(screen.getByRole("radio")).toHaveAttribute("aria-invalid");
    expect(screen.queryByText("There is an error!")).not.toBeInTheDocument();
  });

  it("logs a warning if `labelText` is not a string and `showLabel` is false", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Radio
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
      "NYPL Reservoir Radio: `labelText` must be a string when `showLabel` is false."
    );
  });

  it("renders the UI snapshot correctly", () => {
    const primary = renderer
      .create(<Radio id="inputID" labelText="Test Label" />)
      .toJSON();
    const isChecked = renderer
      .create(<Radio id="radio-checked" labelText="Test Label" isChecked />)
      .toJSON();
    const isRequired = renderer
      .create(<Radio id="radio-required" labelText="Test Label" isRequired />)
      .toJSON();
    const isInvalid = renderer
      .create(<Radio id="radio-invalid" labelText="Test Label" isInvalid />)
      .toJSON();
    const isDisabled = renderer
      .create(<Radio id="radio-disabled" labelText="Test Label" isDisabled />)
      .toJSON();
    const withJSXLabel = renderer
      .create(
        <Radio
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
        <Radio
          id="chakra"
          labelText="Test Label"
          p="20px"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(<Radio id="props" labelText="Test Label" data-testid="props" />)
      .toJSON();

    expect(primary).toMatchSnapshot();
    expect(isChecked).toMatchSnapshot();
    expect(isRequired).toMatchSnapshot();
    expect(isInvalid).toMatchSnapshot();
    expect(isDisabled).toMatchSnapshot();
    expect(withJSXLabel).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
