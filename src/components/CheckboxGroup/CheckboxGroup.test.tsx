import { Flex, Spacer } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import renderer from "react-test-renderer";

import CheckboxGroup from "./CheckboxGroup";
import Checkbox from "../Checkbox/Checkbox";

describe("CheckboxGroup Accessibility", () => {
  it("passes axe accessibility with string labels ", async () => {
    const { container } = render(
      <CheckboxGroup
        id="checkboxGroup"
        labelText="CheckboxGroup example"
        name="a11y-test"
      >
        <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
        <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
        <Checkbox id="checkbox4" value="4" labelText="Checkbox 4" />
        <Checkbox id="checkbox5" value="5" labelText="Checkbox 5" />
      </CheckboxGroup>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes axe accessibility with jsx labels", async () => {
    const { container } = render(
      <CheckboxGroup
        labelText="jsxLabels"
        name="jsxLabels"
        id="jsxLabels"
        isFullWidth
      >
        <Checkbox
          id="arts"
          labelText={
            <Flex>
              <span>Arts</span>
              <Spacer />
              <span>4</span>
            </Flex>
          }
          value="arts"
        />
        <Checkbox
          id="English"
          labelText={
            <Flex>
              <span>English</span>
              <Spacer />
              <span>23</span>
            </Flex>
          }
          value="English"
        />
      </CheckboxGroup>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Checkbox", () => {
  it("renders with Checkbox inputs and a label", () => {
    render(
      <CheckboxGroup id="checkboxGroup" labelText="Test Label" name="test1">
        <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
        <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
        <Checkbox id="checkbox4" value="4" labelText="Checkbox 4" />
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
      <CheckboxGroup id="checkboxGroup" labelText="Test Label" name="test2">
        <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
        <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
        <Checkbox id="checkbox4" value="4" labelText="Checkbox 4" />
      </CheckboxGroup>
    );
    expect(screen.getByTestId("checkbox-group")).not.toHaveAttribute(
      "aria-label",
      "Test Label"
    );

    rerender(
      <CheckboxGroup
        id="checkboxGroup"
        labelText="Test Label"
        name="test2"
        showLabel={false}
      >
        <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
        <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
        <Checkbox id="checkbox4" value="4" labelText="Checkbox 4" />
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
        id="checkboxGroup"
        labelText="Test Label"
        name="test3"
        helperText="This is the helper text for the full group."
        invalidText="This is the error text :("
      >
        <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
        <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
        <Checkbox id="checkbox4" value="4" labelText="Checkbox 4" />
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
        id="checkboxGroup"
        labelText="Test Label"
        name="test3"
        helperText="This is the helper text for the full group."
        invalidText="This is the error text :("
        isInvalid
      >
        <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
        <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
        <Checkbox id="checkbox4" value="4" labelText="Checkbox 4" />
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
        <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
      </CheckboxGroup>
    );

    // The "group" role here is for the `fieldset` element.
    expect(screen.getByRole("group")).toHaveAttribute(
      "id",
      "some-id-checkbox-group"
    );
  });

  it("sets the next value through the onChange function", () => {
    let newValue: string[] = [];
    const onChange = (value: string[]) => {
      newValue = value;
    };
    render(
      <CheckboxGroup
        id="checkboxGroup"
        labelText="Test Label"
        name="getValue"
        defaultValue={["4"]}
        onChange={onChange}
      >
        <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
        <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
        <Checkbox id="checkbox4" value="4" labelText="Checkbox 4" />
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

  it("sets the 'disabled' attribute for all its Checkbox children", () => {
    render(
      <CheckboxGroup
        id="checkboxGroup"
        labelText="Test Label"
        name="test7"
        isDisabled
      >
        <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
        <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
        <Checkbox id="checkbox4" value="4" labelText="Checkbox 4" />
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
      <CheckboxGroup
        id="checkboxGroup"
        labelText="Test Label"
        name="test8"
        isRequired
      >
        <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
        <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
        <Checkbox id="checkbox4" value="4" labelText="Checkbox 4" />
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
      <CheckboxGroup
        id="checkboxGroup"
        labelText="Test Label"
        name="test9"
        isInvalid
        invalidText="There's an error!"
      >
        <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
        <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
        <Checkbox id="checkbox4" value="4" labelText="Checkbox 4" />
      </CheckboxGroup>
    );
    const Checkboxes = screen.getAllByRole("checkbox");

    expect(Checkboxes).toHaveLength(3);
    expect(Checkboxes[0]).toHaveAttribute("aria-invalid");
    expect(Checkboxes[1]).toHaveAttribute("aria-invalid");
    expect(Checkboxes[2]).toHaveAttribute("aria-invalid");
  });

  it("does not render the invalid text when 'isInvalid' is true but 'showHelperInvalidText' is false", () => {
    render(
      <CheckboxGroup
        id="checkboxGroup"
        labelText="Test Label"
        name="test9"
        isInvalid
        invalidText="There's an error!"
        showHelperInvalidText={false}
      >
        <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
        <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
        <Checkbox id="checkbox4" value="4" labelText="Checkbox 4" />
      </CheckboxGroup>
    );
    const Checkboxes = screen.getAllByRole("checkbox");

    expect(Checkboxes).toHaveLength(3);
    expect(Checkboxes[0]).toHaveAttribute("aria-invalid");
    expect(Checkboxes[1]).toHaveAttribute("aria-invalid");
    expect(Checkboxes[2]).toHaveAttribute("aria-invalid");
  });

  it("logs a warning when there is no `id` passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      // @ts-ignore: Typescript complains when a required prop is not passed, but
      // here we don't want to pass the required prop to make sure the warning appears.
      <CheckboxGroup labelText="column" name="column">
        <Checkbox id="checkbox1" value="1" labelText="Checkbox 1" />
      </CheckboxGroup>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir CheckboxGroup: This component's required `id` prop was not passed."
    );
  });

  it("updates the selected checkboxes programmatically through the `value` prop", () => {
    const value = ["physics", "english", "math"];
    render(
      <CheckboxGroup
        id="programmatically-update-example"
        labelText="Course Selection"
        name="courseSelection"
        value={value}
      >
        <Checkbox id="art" labelText="Art" value="art" />
        <Checkbox id="chemistry" labelText="Chemistry" value="chemistry" />
        <Checkbox id="english" labelText="English" value="english" />
        <Checkbox id="magic" labelText="Magic" value="magic" />
        <Checkbox id="math" labelText="Math" value="math" />
        <Checkbox id="music" labelText="Music" value="music" />
        <Checkbox id="physics" labelText="Physics" value="physics" />
        <Checkbox id="science" labelText="Science" value="science" />
      </CheckboxGroup>
    );
    const checkboxes = screen.getAllByRole("checkbox");

    // Only "physics", "english", and "math" are checked
    expect(checkboxes[0]).not.toHaveAttribute("checked");
    expect(checkboxes[1]).not.toHaveAttribute("checked");
    expect(checkboxes[2]).toHaveAttribute("checked");
    expect(checkboxes[3]).not.toHaveAttribute("checked");
    expect(checkboxes[4]).toHaveAttribute("checked");
    expect(checkboxes[5]).not.toHaveAttribute("checked");
    expect(checkboxes[6]).toHaveAttribute("checked");
    expect(checkboxes[7]).not.toHaveAttribute("checked");
  });

  it("renders the UI snapshot correctly", () => {
    const column = renderer
      .create(
        <CheckboxGroup labelText="column" name="column" id="column">
          <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
          <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
        </CheckboxGroup>
      )
      .toJSON();
    const row = renderer
      .create(
        <CheckboxGroup labelText="row" name="row" id="row" layout="row">
          <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
          <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
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
          <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
          <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
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
          <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
          <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
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
          <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
          <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
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
          <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
          <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
        </CheckboxGroup>
      )
      .toJSON();
    const noRequiredLabel = renderer
      .create(
        <CheckboxGroup
          labelText="no optional or required label"
          name="noRequiredLabel"
          id="noRequiredLabel"
          isRequired
          showRequiredLabel={false}
        >
          <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
          <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
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
          <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
          <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
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
          <Checkbox id="checkbox2" value="2" labelText="Checkbox 2" />
          <Checkbox id="checkbox3" value="3" labelText="Checkbox 3" />
        </CheckboxGroup>
      )
      .toJSON();
    const withJSXCheckboxLabels = renderer
      .create(
        <CheckboxGroup
          id="jsxLabels"
          isFullWidth
          labelText="jsxLabels"
          name="jsxLabels"
        >
          <Checkbox
            id="arts"
            labelText={
              <Flex>
                <span>Arts</span>
                <Spacer />
                <span>4</span>
              </Flex>
            }
            value="arts"
          />
          <Checkbox
            id="English"
            labelText={
              <Flex>
                <span>English</span>
                <Spacer />
                <span>23</span>
              </Flex>
            }
            value="English"
          />
        </CheckboxGroup>
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <CheckboxGroup
          labelText="chakraProps"
          name="chakraProps"
          id="chakraProps"
          p="s"
          color="ui.error.primary"
        >
          <Checkbox id="2" value="2" labelText="Checkbox 2" />
          <Checkbox id="3" value="3" labelText="Checkbox 3" />
        </CheckboxGroup>
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <CheckboxGroup
          labelText="otherProps"
          name="otherProps"
          id="otherProps"
          data-testid="props"
        >
          <Checkbox id="2" value="2" labelText="Checkbox 2" />
          <Checkbox id="3" value="3" labelText="Checkbox 3" />
        </CheckboxGroup>
      )
      .toJSON();

    expect(column).toMatchSnapshot();
    expect(row).toMatchSnapshot();
    expect(noLabel).toMatchSnapshot();
    expect(helperText).toMatchSnapshot();
    expect(invalidText).toMatchSnapshot();
    expect(noRequiredLabel).toMatchSnapshot();
    expect(isRequired).toMatchSnapshot();
    expect(isInvalid).toMatchSnapshot();
    expect(isDisabled).toMatchSnapshot();
    expect(withJSXCheckboxLabels).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });

  it("should throw warning when a non-Checkbox component is used as a child", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <CheckboxGroup labelText="wrong child!" name="wrong" id="wrong-child">
        <p>This is wrong!</p>
      </CheckboxGroup>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir CheckboxGroup: Only `Checkbox` components are " +
        "allowed as children."
    );
  });

  it("passes a ref to the inner div wrapper element", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <CheckboxGroup
        id="checkboxGroup-ref"
        labelText="otherProps"
        name="otherProps"
        ref={ref}
      >
        <Checkbox id="2" value="2" labelText="Checkbox 2" />
        <Checkbox id="3" value="3" labelText="Checkbox 3" />
      </CheckboxGroup>
    );

    expect(container.querySelector("div")).toBe(ref.current);
  });
});
