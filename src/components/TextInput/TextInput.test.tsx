import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

import TextInput from "./TextInput";
import { TextInputTypes } from "./TextInputTypes";
import * as generateUUID from "../../helpers/generateUUID";

describe("TextInput Accessibility", () => {
  it("passes axe accessibility test for the input element", async () => {
    const { container } = render(
      <TextInput
        labelText="Custom input label"
        isRequired
        placeholder="Input Placeholder"
        type={TextInputTypes.text}
        onChange={jest.fn()}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for the textarea element", async () => {
    const { container } = render(
      <TextInput
        labelText="Custom textarea label"
        isRequired
        placeholder="Input Placeholder"
        type={TextInputTypes.textarea}
        onChange={jest.fn()}
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
        id="myTextInput"
        labelText="Custom Input Label"
        isRequired
        placeholder="Input Placeholder"
        type={TextInputTypes.text}
        attributes={{ onFocus: focusHandler }}
        onChange={changeHandler}
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

  it("renders 'Optional' along with the label text", () => {
    utils.rerender(
      <TextInput
        id="myTextInput"
        labelText="Custom Input Label"
        isRequired={false}
        placeholder="Input Placeholder"
        type={TextInputTypes.text}
        attributes={{ onFocus: focusHandler }}
        onChange={changeHandler}
      />
    );

    expect(screen.getByText("Custom Input Label")).toBeInTheDocument();
    expect(screen.getByText(/Optional/i)).toBeInTheDocument();
  });

  it("does not render 'Required' along with the label text", () => {
    utils.rerender(
      <TextInput
        id="myTextInput"
        labelText="Custom Input Label"
        isRequired
        showOptReqLabel={false}
        placeholder="Input Placeholder"
        type={TextInputTypes.text}
        attributes={{ onFocus: focusHandler }}
        onChange={changeHandler}
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
        labelText="Custom Input Label"
        showLabel={false}
        helperText="Custom Helper Text"
        isRequired
        placeholder="Input Placeholder"
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
        id="myTextInputError"
        labelText="Custom Input Label"
        helperText="Custom Helper Text"
        invalidText="Custom Error Text"
        placeholder="Input Placeholder"
        isInvalid
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
        id="myTextInputError"
        labelText="Custom Input Label"
        helperText="Custom Helper Text"
        invalidText="Custom Error Text"
        placeholder="Input Placeholder"
        showHelperInvalidText={false}
        type={TextInputTypes.text}
        isInvalid
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
        id="inputID-attributes"
        labelText="Input Label"
        placeholder="Input Placeholder"
        type={TextInputTypes.text}
        attributes={{
          onChange: onChangeSpy,
          onBlur: onBlurSpy,
          maxLength: 10,
          tabIndex: 0,
        }}
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
        id="inputID-hidden"
        labelText="Hidden Input Label"
        helperText="Helper Text"
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
