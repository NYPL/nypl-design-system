import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

import TextInput from "./TextInput";
import { TextInputTypes } from "./TextInputTypes";
import * as generateUUID from "../../helpers/generateUUID";

describe("TextInput Accessibility", () => {
  it("passes axe accessibility test for the input element", async () => {
    const { container } = render(
      <TextInput
        isRequired
        labelText="Custom input label"
        onChange={jest.fn()}
        placeholder="Input Placeholder"
        type={TextInputTypes.text}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for the textarea element", async () => {
    const { container } = render(
      <TextInput
        isRequired
        labelText="Custom textarea label"
        onChange={jest.fn()}
        placeholder="Input Placeholder"
        type={TextInputTypes.textarea}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("TextInput", () => {
  let utils;
  let changeHandler;
  let focusHandler;

  beforeEach(() => {
    focusHandler = jest.fn();
    changeHandler = jest.fn();
    utils = render(
      <TextInput
        attributes={{ onFocus: focusHandler }}
        id="myTextInput"
        isRequired
        labelText="Custom Input Label"
        onChange={changeHandler}
        placeholder="Input Placeholder"
        type={TextInputTypes.text}
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
        attributes={{ onFocus: focusHandler }}
        id="myTextInput"
        isRequired
        labelText="Custom Input Label"
        onChange={changeHandler}
        placeholder="Input Placeholder"
        showRequiredLabel={false}
        type={TextInputTypes.text}
      />
    );

    expect(screen.getByText("Custom Input Label")).toBeInTheDocument();
    expect(screen.queryByText(/Required/i)).not.toBeInTheDocument();
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

  it("allows user to pass in additional attributes", () => {
    expect(focusHandler).toHaveBeenCalledTimes(0);
    fireEvent.focus(screen.getByLabelText(/Custom Input Label/i));
    expect(focusHandler).toHaveBeenCalledTimes(1);
  });

  it("changing the value calls the onChange handler", () => {
    expect(changeHandler).toHaveBeenCalledTimes(0);
    userEvent.type(screen.getByLabelText(/Custom Input Label/i), "Hello");
    // Called 5 times because "Hello" has length of 5.
    expect(changeHandler).toHaveBeenCalledTimes(5);
  });
});

describe("Renders TextInput with auto-generated ID, hidden label and visible helper text", () => {
  let generateUUIDSpy;

  beforeEach(() => {
    generateUUIDSpy = jest.spyOn(generateUUID, "default");
    render(
      <TextInput
        helperText="Custom Helper Text"
        isRequired
        labelText="Custom Input Label"
        placeholder="Input Placeholder"
        showLabel={false}
        type={TextInputTypes.text}
      />
    );
  });

  it("renders Input component", () => {
    expect(screen.getByLabelText(/Custom Input Label/i)).toBeInTheDocument();
  });

  it("calls a UUID generation method if no ID is passed as a prop", () => {
    // Called twice for the `TextInput` and the SVG icon components.
    expect(generateUUIDSpy).toHaveBeenCalledTimes(2);
  });

  it("does not renders Label component", () => {
    expect(screen.queryByText(/Custom Input Label/i)).not.toBeInTheDocument();
  });

  it("renders custom aria-label", () => {
    expect(screen.getByLabelText(/Custom Input Label/i)).toHaveAttribute(
      "aria-label",
      "Custom Input Label - Custom Helper Text"
    );
  });

  it("renders HelperErrorText component", () => {
    expect(screen.getByText("Custom Helper Text")).toBeInTheDocument();
  });
});

describe("TextInput shows error state", () => {
  let rerender;
  beforeEach(() => {
    const utils = render(
      <TextInput
        helperText="Custom Helper Text"
        id="myTextInputError"
        invalidText="Custom Error Text"
        isInvalid
        labelText="Custom Input Label"
        placeholder="Input Placeholder"
        type={TextInputTypes.text}
      />
    );

    rerender = utils.rerender;
  });

  it("renders Input component", () => {
    expect(screen.getByLabelText(/Custom Input Label/i)).toBeInTheDocument();
  });

  it("renders Label component", () => {
    expect(screen.getByText(/Custom Input Label/i)).toBeInTheDocument();
  });

  it("renders HelperErrorText component", () => {
    expect(screen.queryByText("Custom Helper Text")).not.toBeInTheDocument();
    expect(screen.getByText("Custom Error Text")).toBeInTheDocument();
  });

  it("does not render the invalid text when 'showHelperInvalidText' is set to false", () => {
    rerender(
      <TextInput
        helperText="Custom Helper Text"
        id="myTextInputError"
        invalidText="Custom Error Text"
        isInvalid
        labelText="Custom Input Label"
        placeholder="Input Placeholder"
        showHelperInvalidText={false}
        type={TextInputTypes.text}
      />
    );
    expect(screen.queryByText("Custom Helper Text")).not.toBeInTheDocument();
    expect(screen.queryByText("Custom Error Text")).not.toBeInTheDocument();
  });

  it("input shows error state", () => {
    expect(screen.getByLabelText(/Custom Input Label/i)).toHaveAttribute(
      "aria-invalid"
    );
  });
});

describe("Renders HTML attributes passed through the `attributes` prop", () => {
  const onChangeSpy = jest.fn();
  const onBlurSpy = jest.fn();
  beforeEach(() => {
    render(
      <TextInput
        attributes={{
          onChange: onChangeSpy,
          onBlur: onBlurSpy,
          maxLength: 10,
          tabIndex: 0,
        }}
        id="inputID-attributes"
        labelText="Input Label"
        placeholder="Input Placeholder"
        type={TextInputTypes.text}
      />
    );
  });

  it("has a maxlength for the input element", () => {
    expect(screen.getByLabelText(/Input Label/i)).toHaveAttribute(
      "maxLength",
      "10"
    );
  });

  it("has a tabIndex", () => {
    expect(screen.getByLabelText(/Input Label/i)).toHaveAttribute(
      "tabIndex",
      "0"
    );
  });

  it("calls the onChange function", () => {
    expect(onChangeSpy).toHaveBeenCalledTimes(0);
    userEvent.type(screen.getByLabelText(/Input Label/i), "Hello");
    expect(onChangeSpy).toHaveBeenCalledTimes(5);
  });

  it("calls the onBlur function", () => {
    expect(onBlurSpy).toHaveBeenCalledTimes(0);
    fireEvent.blur(screen.getByLabelText(/Input Label/i));
    expect(onBlurSpy).toHaveBeenCalledTimes(1);
  });
});

// TODO:
// describe("Forwarding refs", () => {
//   it("Passes the ref to the input element", () => {
//     const ref = React.createRef<TextInputRefType>();
//     const container = render(
//       <TextInput
//         id="inputID-attributes"
//         labelText="Input Label"
//         placeholder={"Input Placeholder"}
//         type={TextInputTypes.text}
//         ref={ref}
//       />
//     );
//     expect(container.find("input").instance()).toEqual(ref.current);
//   });

//   it("Passes the ref to the textarea element", () => {
//     const ref = React.createRef<TextInputRefType>();
//     const container = render(
//       <TextInput
//         id="inputID-attributes"
//         labelText="Input Label"
//         placeholder={"Input Placeholder"}
//         type={TextInputTypes.textarea}
//         ref={ref}
//       />
//     );
//     expect(container.find("textarea").instance()).toEqual(ref.current);
//   });
// });

describe("Hidden input", () => {
  it("renders a hidden type input", () => {
    const utils = render(
      <TextInput
        id="inputID-hidden"
        labelText="Hidden Input Label"
        type={TextInputTypes.hidden}
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
        type={TextInputTypes.hidden}
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
        type={TextInputTypes.textarea}
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
    const required = renderer
      .create(
        <TextInput
          id="myTextInput"
          isRequired
          labelText="Custom Input Label"
          placeholder="Input Placeholder"
          type={TextInputTypes.text}
        />
      )
      .toJSON();
    const optional = renderer
      .create(
        <TextInput
          id="myTextInput"
          labelText="Custom Input Label"
          placeholder="Input Placeholder"
          type={TextInputTypes.text}
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
          type={TextInputTypes.text}
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
          type={TextInputTypes.text}
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
          type={TextInputTypes.text}
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
          type={TextInputTypes.text}
        />
      )
      .toJSON();

    expect(required).toMatchSnapshot();
    expect(optional).toMatchSnapshot();
    expect(hiddenLabelText).toMatchSnapshot();
    expect(withHelperText).toMatchSnapshot();
    expect(errorState).toMatchSnapshot();
    expect(disabledState).toMatchSnapshot();
  });

  it("renders the textarea UI snapshot correctly", () => {
    const basicTextarea = renderer
      .create(
        <TextInput
          id="myTextarea"
          labelText="Custom textarea Label"
          placeholder="Textarea Placeholder"
          type={TextInputTypes.textarea}
        />
      )
      .toJSON();

    expect(basicTextarea).toMatchSnapshot();
  });
});
