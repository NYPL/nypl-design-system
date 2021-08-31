import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import * as generateUUID from "../../helpers/generateUUID";
import Radio from "./Radio";

describe("Radio Accessibility", () => {
  it("passes axe accessibility", async () => {
    const { container } = render(<Radio id="inputID" labelText="Test Label" />);
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
        showLabel={true}
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
        showLabel={true}
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
        showLabel={true}
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
        showLabel={true}
        isInvalid
      />
    );
    expect(screen.getByRole("radio")).toHaveAttribute("aria-invalid");
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

    expect(primary).toMatchSnapshot();
    expect(isChecked).toMatchSnapshot();
    expect(isRequired).toMatchSnapshot();
    expect(isInvalid).toMatchSnapshot();
    expect(isDisabled).toMatchSnapshot();
  });
});
