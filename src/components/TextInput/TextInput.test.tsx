import { render, RenderResult, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import TextInput, { TextInputRefType } from "./TextInput";

describe("TextInput Accessibility", () => {
  it("passes axe accessibility test for the input element", async () => {
    const { container } = render(
      <TextInput
        id="textInput"
        isRequired
        labelText="Custom input label"
        onChange={jest.fn()}
        placeholder="Input Placeholder"
        type="text"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test with hidden label", async () => {
    const { container } = render(
      <TextInput
        id="textInput"
        isRequired
        labelText="Custom input label"
        onChange={jest.fn()}
        placeholder="Input Placeholder"
        showLabel={false}
        type="text"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for the textarea element", async () => {
    const { container } = render(
      <TextInput
        id="textInput"
        isRequired
        labelText="Custom textarea label"
        onChange={jest.fn()}
        placeholder="Input Placeholder"
        type="textarea"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("TextInput", () => {
  let changeHandler: jest.MockedFunction<() => void>;
  let utils: RenderResult;

  beforeEach(() => {
    changeHandler = jest.fn();
    utils = render(
      <TextInput
        helperText="Custom Helper Text"
        id="myTextInput"
        isRequired
        labelText="Custom Input Label"
        onChange={changeHandler}
        placeholder="Input Placeholder"
        type="text"
      />
    );
  });

  it("renders an input element", () => {
    expect(screen.getByLabelText(/Custom Input Label/i)).toBeInTheDocument();
  });

  it("renders label with label text", () => {
    expect(screen.getByText("Custom Input Label")).toBeInTheDocument();
  });

  it("renders 'Required' along with the label text", () => {
    expect(screen.getByText("Custom Input Label")).toBeInTheDocument();
    expect(screen.getByText(/Required/i)).toBeInTheDocument();
  });

  it("does not render '(Required)' along with the label text", () => {
    utils.rerender(
      <TextInput
        id="myTextInput"
        isRequired
        labelText="Custom Input Label"
        onChange={changeHandler}
        placeholder="Input Placeholder"
        showRequiredLabel={false}
        type="text"
      />
    );

    expect(screen.getByText("Custom Input Label")).toBeInTheDocument();
    expect(screen.queryByText(/Required/i)).not.toBeInTheDocument();
  });

  it("does not render the label but adds it as an aria-label attribute", () => {
    utils.rerender(
      <TextInput
        id="myTextInput"
        isRequired
        labelText="Custom Input Label"
        onChange={changeHandler}
        placeholder="Input Placeholder"
        showLabel={false}
        type="text"
      />
    );

    expect(screen.queryByText(/Custom Input Label/i)).not.toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-label",
      "Custom Input Label"
    );
  });

  it("renders the invalid state and shows the invalid text", () => {
    utils.rerender(
      <TextInput
        helperText="Custom Helper Text"
        id="myTextInputError"
        invalidText="Custom Error Text"
        isInvalid
        labelText="Custom Input Label"
        placeholder="Input Placeholder"
        type="text"
      />
    );

    expect(screen.queryByText("Custom Helper Text")).not.toBeInTheDocument();
    expect(screen.getByText("Custom Error Text")).toBeInTheDocument();
    expect(screen.getByLabelText(/Custom Input Label/i)).toHaveAttribute(
      "aria-invalid"
    );
  });

  it("does not render the invalid text when 'showHelperInvalidText' is set to false", () => {
    utils.rerender(
      <TextInput
        helperText="Custom Helper Text"
        id="myTextInputError"
        invalidText="Custom Error Text"
        isInvalid
        labelText="Custom Input Label"
        placeholder="Input Placeholder"
        showHelperInvalidText={false}
        type="text"
      />
    );
    expect(screen.queryByText("Custom Helper Text")).not.toBeInTheDocument();
    expect(screen.queryByText("Custom Error Text")).not.toBeInTheDocument();
  });

  it("renders label's `for` attribute pointing at ID from input", () => {
    expect(screen.getByText(/Custom Input Label/i)).toHaveAttribute(
      "for",
      "myTextInput"
    );
  });

  it("renders placeholder text", () => {
    expect(
      screen.getByPlaceholderText("Input Placeholder")
    ).toBeInTheDocument();
  });

  it("adds aria-required prop if input is required", () => {
    expect(screen.getByLabelText(/Custom Input Label/i)).toHaveAttribute(
      "aria-required"
    );
  });

  it("calls the onChange handler function", () => {
    expect(changeHandler).toHaveBeenCalledTimes(0);
    userEvent.type(screen.getByLabelText(/Custom Input Label/i), "Hello");
    // Called 5 times because "Hello" has length of 5.
    expect(changeHandler).toHaveBeenCalledTimes(5);
  });

  it("has a maxlength for the input element", () => {
    const onChangeSpy = jest.fn();
    utils.rerender(
      <TextInput
        id="inputID-attributes"
        labelText="Input Label"
        maxLength={10}
        onChange={onChangeSpy}
        placeholder="Input Placeholder"
        type="text"
      />
    );
    expect(screen.getByLabelText(/Input Label/i)).toHaveAttribute(
      "maxLength",
      "10"
    );
  });

  it("logs a warning for the number type when the min prop is greater than the max prop", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <TextInput
        id="input-number"
        labelText="Input Label"
        max={20}
        min={50}
        type="number"
      />
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir TextInput: The `min` prop is greater than the `max` prop."
    );
  });

  it("logs a warning when there is no `id` passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      // @ts-ignore: Typescript complains when a required prop is not passed, but
      // here we don't want to pass the required prop to make sure the warning appears.
      <TextInput labelText="Custom Input Label" />
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir TextInput: This component's required `id` prop was not passed."
    );
  });
});

describe("Forwarding refs", () => {
  it("Passes the ref to the input element", () => {
    const ref = React.createRef<TextInputRefType>();
    const { container } = render(
      <TextInput
        id="inputID-attributes"
        labelText="Input Label"
        placeholder={"Input Placeholder"}
        type="text"
        ref={ref}
      />
    );
    expect(container.querySelector("input")).toEqual(ref.current);
  });

  it("Passes the ref to the textarea element", () => {
    const ref = React.createRef<TextInputRefType>();
    const { container } = render(
      <TextInput
        id="inputID-attributes"
        labelText="Input Label"
        placeholder={"Input Placeholder"}
        type="textarea"
        ref={ref}
      />
    );
    expect(container.querySelector("textarea")).toEqual(ref.current);
  });
});

describe("Hidden input", () => {
  it("renders a hidden type input", () => {
    const utils = render(
      <TextInput
        id="inputID-hidden"
        labelText="Hidden Input Label"
        type="hidden"
        value="hidden"
      />
    );

    expect(utils.container.querySelector("#inputID-hidden")).toHaveAttribute(
      "aria-hidden"
    );
    expect(utils.container.querySelector("#inputID-hidden")).toHaveAttribute(
      "value",
      "hidden"
    );
  });

  it("does not show the helper text", () => {
    render(
      <TextInput
        helperText="Helper Text"
        id="inputID-hidden"
        labelText="Hidden Input Label"
        type="hidden"
        value="hidden"
      />
    );

    expect(screen.queryByText("Hidden Input Label")).not.toBeInTheDocument();
    expect(screen.queryByText("Helper Text")).not.toBeInTheDocument();
  });
});

describe("Textarea element type", () => {
  beforeEach(() => {
    render(
      <TextInput
        id="myTextarea"
        labelText="Custom textarea Label"
        placeholder="Textarea Placeholder"
        type="textarea"
      />
    );
  });

  it("renders a textarea element", () => {
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders label with label text", () => {
    expect(screen.getByLabelText(/Custom textarea Label/i)).toBeInTheDocument();
  });
});

describe("UI Snapshots", () => {
  it("renders the text input UI snapshot correctly", () => {
    const basicTextarea = renderer
      .create(
        <TextInput
          id="myTextarea"
          labelText="Custom textarea Label"
          placeholder="Textarea Placeholder"
          type="textarea"
        />
      )
      .toJSON();
    const required = renderer
      .create(
        <TextInput
          id="myTextInput"
          isRequired
          labelText="Custom Input Label"
          placeholder="Input Placeholder"
          type="text"
        />
      )
      .toJSON();
    const optional = renderer
      .create(
        <TextInput
          id="myTextInput"
          labelText="Custom Input Label"
          placeholder="Input Placeholder"
          type="text"
        />
      )
      .toJSON();
    const hiddenLabelText = renderer
      .create(
        <TextInput
          id="myTextInput"
          isRequired
          labelText="Custom Input Label"
          placeholder="Input Placeholder"
          showLabel={false}
          type="text"
        />
      )
      .toJSON();
    const withHelperText = renderer
      .create(
        <TextInput
          helperText="Custom helper text"
          id="myTextInput"
          isRequired
          labelText="Custom Input Label"
          placeholder="Input Placeholder"
          type="text"
        />
      )
      .toJSON();
    const errorState = renderer
      .create(
        <TextInput
          id="myTextInput"
          isInvalid
          isRequired
          labelText="Custom Input Label"
          placeholder="Input Placeholder"
          type="text"
        />
      )
      .toJSON();
    const disabledState = renderer
      .create(
        <TextInput
          id="myTextInput"
          isDisabled
          isRequired
          labelText="Custom Input Label"
          placeholder="Input Placeholder"
          type="text"
        />
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <TextInput
          id="chakra"
          labelText="Custom Input Label"
          placeholder="Input Placeholder"
          type="text"
          p="20px"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <TextInput
          id="props"
          labelText="Custom Input Label"
          placeholder="Input Placeholder"
          type="text"
          data-testid="props"
        />
      )
      .toJSON();

    expect(basicTextarea).toMatchSnapshot();
    expect(required).toMatchSnapshot();
    expect(optional).toMatchSnapshot();
    expect(hiddenLabelText).toMatchSnapshot();
    expect(withHelperText).toMatchSnapshot();
    expect(errorState).toMatchSnapshot();
    expect(disabledState).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });

  it("passes a ref to the input element", () => {
    const ref = React.createRef<TextInputRefType>();
    const { container } = render(
      <TextInput id="ref" labelText="Custom Label" ref={ref} />
    );

    expect(container.querySelector("input")).toBe(ref.current);
  });
});
