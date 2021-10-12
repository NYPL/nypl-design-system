import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import * as generateUUID from "../../helpers/generateUUID";
import RadioGroup from "./RadioGroup";
import Radio from "../Radio/Radio";
import { RadioGroupLayoutTypes } from "./RadioGroupLayoutTypes";
import userEvent from "@testing-library/user-event";

describe("Radio Accessibility", () => {
  it("passes axe accessibility", async () => {
    const { container } = render(
      <RadioGroup labelText="RadioGroup example" name="a11y-test">
        <Radio value="2" labelText="Radio 2" />
        <Radio value="3" labelText="Radio 3" />
        <Radio value="4" labelText="Radio 4" />
        <Radio value="5" labelText="Radio 5" />
      </RadioGroup>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Radio Button", () => {
  it("renders with radio inputs and a label", () => {
    render(
      <RadioGroup labelText="Test Label" name="test1">
        <Radio value="2" labelText="Radio 2" />
        <Radio value="3" labelText="Radio 3" />
        <Radio value="4" labelText="Radio 4" />
      </RadioGroup>
    );
    expect(screen.getByText(/Test Label/i)).toBeInTheDocument();
    expect(screen.getAllByRole("radio")).toHaveLength(3);
    expect(screen.getByText("Radio 2")).toBeInTheDocument();
    expect(screen.getByText("Radio 3")).toBeInTheDocument();
    expect(screen.getByText("Radio 4")).toBeInTheDocument();
  });

  it("renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false", () => {
    render(
      <RadioGroup labelText="Test Label" name="test2" showLabel={false}>
        <Radio value="2" labelText="Radio 2" />
        <Radio value="3" labelText="Radio 3" />
        <Radio value="4" labelText="Radio 4" />
      </RadioGroup>
    );
    expect(screen.getByRole("radiogroup")).toHaveAttribute(
      "aria-label",
      "Test Label"
    );
  });

  it("renders visible helper or error text", () => {
    const { rerender } = render(
      <RadioGroup
        labelText="Test Label"
        name="test3"
        helperText="This is the helper text for the full group."
        invalidText="This is the error text :("
      >
        <Radio value="2" labelText="Radio 2" />
        <Radio value="3" labelText="Radio 3" />
        <Radio value="4" labelText="Radio 4" />
      </RadioGroup>
    );
    expect(
      screen.getByText("This is the helper text for the full group.")
    ).toBeVisible();
    expect(
      screen.queryByText("This is the error text :(")
    ).not.toBeInTheDocument();

    rerender(
      <RadioGroup
        labelText="Test Label"
        name="test4"
        helperText="This is the helper text for the full group."
        invalidText="This is the error text :("
        isInvalid
      >
        <Radio value="2" labelText="Radio 2" />
        <Radio value="3" labelText="Radio 3" />
        <Radio value="4" labelText="Radio 4" />
      </RadioGroup>
    );
    expect(screen.getByText("This is the error text :(")).toBeVisible();
    expect(
      screen.queryByText("This is the helper text for the full group.")
    ).not.toBeInTheDocument();
  });

  it("sets the RadioGroup's ID", () => {
    render(
      <RadioGroup labelText="Test Label" name="test5" id="some-id">
        <Radio value="2" labelText="Radio 2" />
      </RadioGroup>
    );

    // The "group" role here is for the `fieldset` element.
    expect(screen.getByRole("group")).toHaveAttribute(
      "id",
      "radio-group-some-id"
    );
  });

  it("sets the next value through the onChange function", () => {
    let newValue = "";
    const onChange = (value) => {
      newValue = value;
    };
    render(
      <RadioGroup
        labelText="Test Label"
        name="getValue"
        defaultValue="4"
        onChange={onChange}
      >
        <Radio value="2" labelText="Radio 2" />
        <Radio value="3" labelText="Radio 3" />
        <Radio value="4" labelText="Radio 4" />
      </RadioGroup>
    );

    expect(newValue).toEqual("");
    userEvent.click(screen.getByText("Radio 3"));
    expect(newValue).toEqual("3");
    userEvent.click(screen.getByText("Radio 2"));
    expect(newValue).toEqual("2");
  });

  it("calls the UUID generation function if no id prop value is passed", () => {
    const generateUUIDSpy = jest.spyOn(generateUUID, "default");
    expect(generateUUIDSpy).toHaveBeenCalledTimes(0);
    render(
      <RadioGroup labelText="Test Label" name="test6">
        <Radio value="2" labelText="Radio 2" id="radio2" />
      </RadioGroup>
    );
    expect(generateUUIDSpy).toHaveBeenCalledTimes(1);
  });

  it("sets the 'disabled' attribute for all its Radio children", () => {
    render(
      <RadioGroup labelText="Test Label" name="test7" isDisabled>
        <Radio value="2" labelText="Radio 2" />
        <Radio value="3" labelText="Radio 3" />
        <Radio value="4" labelText="Radio 4" />
      </RadioGroup>
    );
    const radios = screen.getAllByRole("radio");

    expect(radios).toHaveLength(3);
    expect(radios[0]).toHaveAttribute("disabled");
    expect(radios[1]).toHaveAttribute("disabled");
    expect(radios[2]).toHaveAttribute("disabled");
  });

  it("sets the 'required' attribute for all its Radio children", () => {
    render(
      <RadioGroup labelText="Test Label" name="test8" isRequired>
        <Radio value="2" labelText="Radio 2" />
        <Radio value="3" labelText="Radio 3" />
        <Radio value="4" labelText="Radio 4" />
      </RadioGroup>
    );
    const radios = screen.getAllByRole("radio");

    expect(radios).toHaveLength(3);
    expect(radios[0]).toHaveAttribute("required");
    expect(radios[0]).toHaveAttribute("aria-required");
    expect(radios[1]).toHaveAttribute("required");
    expect(radios[1]).toHaveAttribute("aria-required");
    expect(radios[2]).toHaveAttribute("required");
    expect(radios[2]).toHaveAttribute("aria-required");
  });

  it("sets the error state for all its Radio children", () => {
    render(
      <RadioGroup
        labelText="Test Label"
        name="test9"
        isInvalid
        invalidText="There is an error :("
      >
        <Radio value="2" labelText="Radio 2" />
        <Radio value="3" labelText="Radio 3" />
        <Radio value="4" labelText="Radio 4" />
      </RadioGroup>
    );
    const radios = screen.getAllByRole("radio");

    expect(radios).toHaveLength(3);
    expect(radios[0]).toHaveAttribute("aria-invalid");
    expect(radios[1]).toHaveAttribute("aria-invalid");
    expect(radios[2]).toHaveAttribute("aria-invalid");
    expect(screen.getByText("There is an error :(")).toBeInTheDocument();
  });

  it("does not render the error text when 'showHelperInvalidText' is false", () => {
    render(
      <RadioGroup
        labelText="Test Label"
        name="test10"
        isInvalid
        invalidText="There is an error :("
        showHelperInvalidText={false}
      >
        <Radio value="2" labelText="Radio 2" />
        <Radio value="3" labelText="Radio 3" />
        <Radio value="4" labelText="Radio 4" />
      </RadioGroup>
    );
    expect(screen.queryByText("There is an error :(")).not.toBeInTheDocument();
  });

  it("renders the UI snapshot correctly", () => {
    const column = renderer
      .create(
        <RadioGroup labelText="column" name="column" id="column">
          <Radio value="2" labelText="Radio 2" id="radio-2" />
          <Radio value="3" labelText="Radio 3" id="radio-3" />
        </RadioGroup>
      )
      .toJSON();
    const row = renderer
      .create(
        <RadioGroup
          labelText="row"
          name="row"
          id="row"
          layout={RadioGroupLayoutTypes.Row}
        >
          <Radio value="2" labelText="Radio 2" id="radio-2" />
          <Radio value="3" labelText="Radio 3" id="radio-3" />
        </RadioGroup>
      )
      .toJSON();
    const noLabel = renderer
      .create(
        <RadioGroup
          labelText="no label"
          name="noLabel"
          id="noLabel"
          showLabel={false}
        >
          <Radio value="2" labelText="Radio 2" id="radio-2" />
          <Radio value="3" labelText="Radio 3" id="radio-3" />
        </RadioGroup>
      )
      .toJSON();
    const helperText = renderer
      .create(
        <RadioGroup
          labelText="helperText"
          name="helperText"
          id="helperText"
          helperText="helper text"
        >
          <Radio value="2" labelText="Radio 2" id="radio-2" />
          <Radio value="3" labelText="Radio 3" id="radio-3" />
        </RadioGroup>
      )
      .toJSON();
    const invalidText = renderer
      .create(
        <RadioGroup
          labelText="invalidText"
          name="invalidText"
          id="invalidText"
          invalidText="error text"
        >
          <Radio value="2" labelText="Radio 2" id="radio-2" />
          <Radio value="3" labelText="Radio 3" id="radio-3" />
        </RadioGroup>
      )
      .toJSON();
    const noOptReqLabel = renderer
      .create(
        <RadioGroup
          labelText="no optional or required label"
          name="optReq"
          id="optReq"
          optReqFlag={false}
        >
          <Radio value="2" labelText="Radio 2" id="radio-2" />
          <Radio value="3" labelText="Radio 3" id="radio-3" />
        </RadioGroup>
      )
      .toJSON();
    const isRequired = renderer
      .create(
        <RadioGroup
          labelText="required"
          name="required"
          id="required"
          isRequired
        >
          <Radio value="2" labelText="Radio 2" id="radio-2" />
          <Radio value="3" labelText="Radio 3" id="radio-3" />
        </RadioGroup>
      )
      .toJSON();
    const isInvalid = renderer
      .create(
        <RadioGroup labelText="invalid" name="invalid" id="invalid" isInvalid>
          <Radio value="2" labelText="Radio 2" id="radio-2" />
          <Radio value="3" labelText="Radio 3" id="radio-3" />
        </RadioGroup>
      )
      .toJSON();
    const isDisabled = renderer
      .create(
        <RadioGroup
          labelText="disabled"
          name="disabled"
          id="disabled"
          isDisabled
        >
          <Radio value="2" labelText="Radio 2" id="radio-2" />
          <Radio value="3" labelText="Radio 3" id="radio-3" />
        </RadioGroup>
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

  it("should throw warning when a non-Radio component is used as a child", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <RadioGroup labelText="wrong child!" name="wrong" id="wrong-child">
        <p>This is wrong!</p>
      </RadioGroup>
    );
    expect(warn).toHaveBeenCalledWith(
      "Only `Radio` components are allowed inside the `RadioGroup` component."
    );
  });
});
