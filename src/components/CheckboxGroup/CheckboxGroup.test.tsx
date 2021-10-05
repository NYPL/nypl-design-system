import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import * as generateUUID from "../../helpers/generateUUID";
import CheckboxGroup from "./CheckboxGroup";
import Checkbox from "../Checkbox/Checkbox";
import { CheckboxGroupLayoutTypes } from "./CheckboxGroupLayoutTypes";
import userEvent from "@testing-library/user-event";

describe("Checkbox Accessibility", () => {
  it("passes axe accessibility", async () => {
    const { container } = render(
      <CheckboxGroup labelText="CheckboxGroup example" name="a11y-test">
        <Checkbox value="2" labelText="Checkbox 2" />
        <Checkbox value="3" labelText="Checkbox 3" />
        <Checkbox value="4" labelText="Checkbox 4" />
        <Checkbox value="5" labelText="Checkbox 5" />
      </CheckboxGroup>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Checkbox", () => {
  it("renders with Checkbox inputs and a label", () => {
    render(
      <CheckboxGroup labelText="Test Label" name="test1">
        <Checkbox value="2" labelText="Checkbox 2" />
        <Checkbox value="3" labelText="Checkbox 3" />
        <Checkbox value="4" labelText="Checkbox 4" />
      </CheckboxGroup>
    );
    expect(screen.getByText(/Test Label/i)).toBeInTheDocument();
    expect(screen.getAllByRole("checkbox")).toHaveLength(3);
    expect(screen.getByLabelText("Checkbox 2")).toBeInTheDocument();
    expect(screen.getByLabelText("Checkbox 3")).toBeInTheDocument();
    expect(screen.getByLabelText("Checkbox 4")).toBeInTheDocument();
  });

  it("renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false", () => {
    const { rerender } = render(
      <CheckboxGroup labelText="Test Label" name="test2">
        <Checkbox value="2" labelText="Checkbox 2" />
        <Checkbox value="3" labelText="Checkbox 3" />
        <Checkbox value="4" labelText="Checkbox 4" />
      </CheckboxGroup>
    );
    expect(screen.getByTestId("checkbox-group")).not.toHaveAttribute(
      "aria-label",
      "Test Label"
    );

    rerender(
      <CheckboxGroup labelText="Test Label" name="test2" showLabel={false}>
        <Checkbox value="2" labelText="Checkbox 2" />
        <Checkbox value="3" labelText="Checkbox 3" />
        <Checkbox value="4" labelText="Checkbox 4" />
      </CheckboxGroup>
    );
    expect(screen.getByTestId("checkbox-group")).toHaveAttribute(
      "aria-label",
      "Test Label"
    );
  });

  it("renders visible helper or error text", () => {
    const { rerender } = render(
      <CheckboxGroup
        labelText="Test Label"
        name="test3"
        helperText="This is the helper text for the full group."
        invalidText="This is the error text :("
      >
        <Checkbox value="2" labelText="Checkbox 2" />
        <Checkbox value="3" labelText="Checkbox 3" />
        <Checkbox value="4" labelText="Checkbox 4" />
      </CheckboxGroup>
    );
    expect(
      screen.getByText("This is the helper text for the full group.")
    ).toBeVisible();
    expect(
      screen.queryByText("This is the error text :(")
    ).not.toBeInTheDocument();

    rerender(
      <CheckboxGroup
        labelText="Test Label"
        name="test3"
        helperText="This is the helper text for the full group."
        invalidText="This is the error text :("
        isInvalid
      >
        <Checkbox value="2" labelText="Checkbox 2" />
        <Checkbox value="3" labelText="Checkbox 3" />
        <Checkbox value="4" labelText="Checkbox 4" />
      </CheckboxGroup>
    );
    expect(screen.getByText("This is the error text :(")).toBeVisible();
    expect(
      screen.queryByText("This is the helper text for the full group.")
    ).not.toBeInTheDocument();
  });

  it("sets the CheckboxGroup's ID", () => {
    render(
      <CheckboxGroup labelText="Test Label" name="test5" id="some-id">
        <Checkbox value="2" labelText="Checkbox 2" />
      </CheckboxGroup>
    );

    // The "group" role here is for the `fieldset` element.
    expect(screen.getByRole("group")).toHaveAttribute(
      "id",
      "checkbox-group-some-id"
    );
  });

  it("sets the next value through the onChange function", () => {
    let newValue = [];
    const onChange = (value) => {
      newValue = value;
    };
    render(
      <CheckboxGroup
        labelText="Test Label"
        name="getValue"
        defaultValue={["4"]}
        onChange={onChange}
      >
        <Checkbox value="2" labelText="Checkbox 2" />
        <Checkbox value="3" labelText="Checkbox 3" />
        <Checkbox value="4" labelText="Checkbox 4" />
      </CheckboxGroup>
    );

    expect(newValue).toEqual([]);

    userEvent.click(screen.getByText("Checkbox 3"));
    // "4" was the initial selected value
    expect(newValue).toEqual(["4", "3"]);
    userEvent.click(screen.getByText("Checkbox 2"));
    expect(newValue).toEqual(["4", "3", "2"]);
    userEvent.click(screen.getByText("Checkbox 3"));
    expect(newValue).toEqual(["4", "2"]);
  });

  it("calls the UUID generation function if no id prop value is passed", () => {
    const generateUUIDSpy = jest.spyOn(generateUUID, "default");
    expect(generateUUIDSpy).toHaveBeenCalledTimes(0);
    render(
      <CheckboxGroup labelText="Test Label" name="test6">
        <Checkbox value="2" labelText="Checkbox 2" />
      </CheckboxGroup>
    );
    expect(generateUUIDSpy).toHaveBeenCalledTimes(1);
  });

  it("sets the 'disabled' attribute for all its Checkbox children", () => {
    render(
      <CheckboxGroup labelText="Test Label" name="test7" isDisabled>
        <Checkbox value="2" labelText="Checkbox 2" />
        <Checkbox value="3" labelText="Checkbox 3" />
        <Checkbox value="4" labelText="Checkbox 4" />
      </CheckboxGroup>
    );
    const Checkboxes = screen.getAllByRole("checkbox");

    expect(Checkboxes).toHaveLength(3);
    expect(Checkboxes[0]).toHaveAttribute("disabled");
    expect(Checkboxes[1]).toHaveAttribute("disabled");
    expect(Checkboxes[2]).toHaveAttribute("disabled");
  });

  it("sets the 'required' attribute for all its Checkbox children", () => {
    render(
      <CheckboxGroup labelText="Test Label" name="test8" isRequired>
        <Checkbox value="2" labelText="Checkbox 2" />
        <Checkbox value="3" labelText="Checkbox 3" />
        <Checkbox value="4" labelText="Checkbox 4" />
      </CheckboxGroup>
    );
    const Checkboxes = screen.getAllByRole("checkbox");

    expect(Checkboxes).toHaveLength(3);
    expect(Checkboxes[0]).toHaveAttribute("required");
    expect(Checkboxes[1]).toHaveAttribute("required");
    expect(Checkboxes[2]).toHaveAttribute("required");
  });

  it("sets the error state for all its Checkbox children", () => {
    render(
      <CheckboxGroup labelText="Test Label" name="test9" isInvalid>
        <Checkbox value="2" labelText="Checkbox 2" />
        <Checkbox value="3" labelText="Checkbox 3" />
        <Checkbox value="4" labelText="Checkbox 4" />
      </CheckboxGroup>
    );
    const Checkboxes = screen.getAllByRole("checkbox");

    expect(Checkboxes).toHaveLength(3);
    expect(Checkboxes[0]).toHaveAttribute("aria-invalid");
    expect(Checkboxes[1]).toHaveAttribute("aria-invalid");
    expect(Checkboxes[2]).toHaveAttribute("aria-invalid");
  });

  it("renders the UI snapshot correctly", () => {
    const column = renderer
      .create(
        <CheckboxGroup labelText="column" name="column" id="column">
          <Checkbox value="2" labelText="Checkbox 2" />
          <Checkbox value="3" labelText="Checkbox 3" />
        </CheckboxGroup>
      )
      .toJSON();
    const row = renderer
      .create(
        <CheckboxGroup
          labelText="row"
          name="row"
          id="row"
          layout={CheckboxGroupLayoutTypes.Row}
        >
          <Checkbox value="2" labelText="Checkbox 2" />
          <Checkbox value="3" labelText="Checkbox 3" />
        </CheckboxGroup>
      )
      .toJSON();
    const noLabel = renderer
      .create(
        <CheckboxGroup
          labelText="no label"
          name="noLabel"
          id="noLabel"
          showLabel={false}
        >
          <Checkbox value="2" labelText="Checkbox 2" />
          <Checkbox value="3" labelText="Checkbox 3" />
        </CheckboxGroup>
      )
      .toJSON();
    const helperText = renderer
      .create(
        <CheckboxGroup
          labelText="helperText"
          name="helperText"
          id="helperText"
          helperText="helper text"
        >
          <Checkbox value="2" labelText="Checkbox 2" />
          <Checkbox value="3" labelText="Checkbox 3" />
        </CheckboxGroup>
      )
      .toJSON();
    const invalidText = renderer
      .create(
        <CheckboxGroup
          labelText="invalidText"
          name="invalidText"
          id="invalidText"
          invalidText="error text"
        >
          <Checkbox value="2" labelText="Checkbox 2" />
          <Checkbox value="3" labelText="Checkbox 3" />
        </CheckboxGroup>
      )
      .toJSON();
    const noOptReqLabel = renderer
      .create(
        <CheckboxGroup
          labelText="no optional or required label"
          name="optReq"
          id="optReq"
          optReqFlag={false}
        >
          <Checkbox value="2" labelText="Checkbox 2" />
          <Checkbox value="3" labelText="Checkbox 3" />
        </CheckboxGroup>
      )
      .toJSON();
    const isRequired = renderer
      .create(
        <CheckboxGroup
          labelText="required"
          name="required"
          id="required"
          isRequired
        >
          <Checkbox value="2" labelText="Checkbox 2" />
          <Checkbox value="3" labelText="Checkbox 3" />
        </CheckboxGroup>
      )
      .toJSON();
    const isInvalid = renderer
      .create(
        <CheckboxGroup
          labelText="invalid"
          name="invalid"
          id="invalid"
          isInvalid
        >
          <Checkbox value="2" labelText="Checkbox 2" />
          <Checkbox value="3" labelText="Checkbox 3" />
        </CheckboxGroup>
      )
      .toJSON();
    const isDisabled = renderer
      .create(
        <CheckboxGroup
          labelText="disabled"
          name="disabled"
          id="disabled"
          isDisabled
        >
          <Checkbox value="2" labelText="Checkbox 2" />
          <Checkbox value="3" labelText="Checkbox 3" />
        </CheckboxGroup>
      )
      .toJSON();

    expect(column).toMatchSnapshot();
    expect(row).toMatchSnapshot();
    expect(noLabel).toMatchSnapshot();
    expect(helperText).toMatchSnapshot();
    expect(invalidText).toMatchSnapshot();
    expect(noOptReqLabel).toMatchSnapshot();
    expect(isRequired).toMatchSnapshot();
    expect(isInvalid).toMatchSnapshot();
    expect(isDisabled).toMatchSnapshot();
  });

  it("should throw warning when a non-Checkbox component is used as a child", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <CheckboxGroup labelText="wrong child!" name="wrong" id="wrong-child">
        <p>This is wrong!</p>
      </CheckboxGroup>
    );
    expect(warn).toHaveBeenCalledWith(
      "Only `Checkbox` components are allowed inside the `CheckboxGroup` component."
    );
  });
});
