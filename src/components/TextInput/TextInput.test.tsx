import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

import HelperErrorText from "../HelperErrorText/HelperErrorText";
import TextInput from "./TextInput";
import { TextInputTypes } from "./TextInputTypes";
import * as generateUUID from "../../helpers/generateUUID";

describe("TextInput Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <TextInput
        id="myTextInput"
        labelText="Custom Input Label"
        required={true}
        placeholder="Input Placeholder"
        type={TextInputTypes.text}
        attributes={{ onFocus: jest.fn() }}
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
        required={true}
        placeholder="Input Placeholder"
        type={TextInputTypes.text}
        attributes={{ onFocus: focusHandler }}
        onChange={changeHandler}
      />
    );
  });

  it("Renders an input element", () => {
    expect(screen.getByLabelText(/Custom Input Label/i)).toBeInTheDocument();
  });

  it("Renders label with label text", () => {
    expect(screen.getByText("Custom Input Label")).toBeInTheDocument();
  });

  it("Renders 'Required' along with the label text", () => {
    expect(screen.getByText("Custom Input Label")).toBeInTheDocument();
    expect(screen.getByText(/Required/i)).toBeInTheDocument();
  });

  it("Renders 'Optional' along with the label text", () => {
    utils.rerender(
      <TextInput
        id="myTextInput"
        labelText="Custom Input Label"
        required={false}
        placeholder="Input Placeholder"
        type={TextInputTypes.text}
        attributes={{ onFocus: focusHandler }}
        onChange={changeHandler}
      />
    );

    expect(screen.getByText("Custom Input Label")).toBeInTheDocument();
    expect(screen.getByText(/Optional/i)).toBeInTheDocument();
  });

  it("Does not render 'Required' along with the label text", () => {
    utils.rerender(
      <TextInput
        id="myTextInput"
        labelText="Custom Input Label"
        required={true}
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

  it("Renders label's `for` attribute pointing at ID from input", () => {
    expect(screen.getByText(/Custom Input Label/i)).toHaveAttribute(
      "for",
      "myTextInput"
    );
  });

  it("Renders placeholder text", () => {
    expect(
      screen.getByPlaceholderText("Input Placeholder")
    ).toBeInTheDocument();
  });

  it("Adds aria-required prop if input is required", () => {
    expect(screen.getByLabelText(/Custom Input Label/i)).toHaveAttribute(
      "aria-required"
    );
  });

  it("Allows user to pass in additional attributes", () => {
    expect(focusHandler).toHaveBeenCalledTimes(0);
    fireEvent.focus(screen.getByLabelText(/Custom Input Label/i));
    expect(focusHandler).toHaveBeenCalledTimes(1);
  });

  it("Changing the value calls the onChange handler", () => {
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
        required={true}
        placeholder="Input Placeholder"
        type={TextInputTypes.text}
      />
    );
  });

  it("Renders Input component", () => {
    expect(screen.getByLabelText(/Custom Input Label/i)).toBeInTheDocument();
  });

  it("Calls a UUID generation method if no ID is passed as a prop", () => {
    // Called twice for the `TextInput` and the SVG icon components.
    expect(generateUUIDSpy).toHaveBeenCalledTimes(2);
  });

  it("Does not renders Label component", () => {
    expect(screen.queryByText(/Custom Input Label/i)).not.toBeInTheDocument();
  });

  it("Renders custom aria-label", () => {
    expect(screen.getByLabelText(/Custom Input Label/i)).toHaveAttribute(
      "aria-label",
      "Custom Input Label"
    );
  });

  it("Renders HelperErrorText component", () => {
    expect(screen.getByText("Custom Helper Text")).toBeInTheDocument();
  });

  it("Renders aria-describedby with helper text", () => {
    expect(screen.getByLabelText(/Custom Input Label/i)).toHaveAttribute(
      "aria-describedby",
      "Custom Helper Text"
    );
  });
});

describe("TextInput shows error state", () => {
  beforeEach(() => {
    render(
      <TextInput
        id="myTextInputError"
        labelText="Custom Input Label"
        helperText="Custom Helper Text"
        errorText="Custom Error Text"
        placeholder="Input Placeholder"
        errored={true}
        type={TextInputTypes.text}
      />
    );
  });

  it("Renders Input component", () => {
    expect(screen.getByLabelText(/Custom Input Label/i)).toBeInTheDocument();
  });

  it("Renders Label component", () => {
    expect(screen.getByText(/Custom Input Label/i)).toBeInTheDocument();
  });

  it("Renders HelperErrorText component", () => {
    expect(screen.queryByText("Custom Helper Text")).not.toBeInTheDocument();
    expect(screen.getByText("Custom Error Text")).toBeInTheDocument();
  });

  it("Input shows error state", () => {
    expect(screen.getByLabelText(/Custom Input Label/i)).toHaveAttribute(
      "class",
      "inputfield inputfield--error "
    );
  });
});

describe("TextInput Group", () => {
  beforeEach(() => {
    render(
      <fieldset>
        <legend>Input Group Label Legend</legend>

        <TextInput
          id="input1"
          required={true}
          type={TextInputTypes.text}
          labelText="For"
          helperText="Input 1 Helper Text"
        />

        <TextInput
          id="input2"
          required={true}
          type={TextInputTypes.text}
          labelText="To"
          helperText="Input 2 Helper Text"
        />

        <HelperErrorText isError={true} id={"sharedHelperText"}>
          Additional Error Text
        </HelperErrorText>
      </fieldset>
    );
  });

  it("Renders legend", () => {
    expect(screen.getByText("Input Group Label Legend")).toBeInTheDocument();
  });

  it("Renders two inputs", () => {
    expect(screen.getAllByRole("textbox")).toHaveLength(2);
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

  it("Has a maxlength for the input element", () => {
    expect(screen.getByLabelText(/Input Label/i)).toHaveAttribute(
      "maxLength",
      "10"
    );
  });

  it("Has a tabIndex", () => {
    expect(screen.getByLabelText(/Input Label/i)).toHaveAttribute(
      "tabIndex",
      "0"
    );
  });

  it("Calls the onChange function", () => {
    expect(onChangeSpy).toHaveBeenCalledTimes(0);
    userEvent.type(screen.getByLabelText(/Input Label/i), "Hello");
    expect(onChangeSpy).toHaveBeenCalledTimes(5);
  });

  it("Calls the onBlur function", () => {
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
  it("Renders a hidden type input", () => {
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

  it("Renders a textarea element", () => {
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("Renders label with label text", () => {
    expect(screen.getByLabelText(/Custom textarea Label/i)).toBeInTheDocument();
  });
});
