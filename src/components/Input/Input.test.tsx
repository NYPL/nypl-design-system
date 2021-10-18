import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

import Label from "../Label/Label";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import Input from "./Input";
import { InputTypes } from "./InputTypes";

describe("Input Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Input
        id="inputID"
        ariaLabel="Input Label"
        ariaLabelledBy={"helperText"}
        required={true}
        placeholder={"Input Placeholder"}
        type={InputTypes.text}
        attributes={{ onClick: jest.fn() }}
        onChange={jest.fn()}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Input", () => {
  let changeHandler;
  let clickHander;

  beforeEach(() => {
    clickHander = jest.fn();
    changeHandler = jest.fn();
    render(
      <Input
        id="inputID"
        ariaLabel="Input Label"
        ariaLabelledBy="helperText"
        required={true}
        placeholder="Input Placeholder"
        type={InputTypes.text}
        attributes={{ onClick: clickHander }}
        onChange={changeHandler}
      ></Input>
    );
  });

  it("Renders Input", () => {
    expect(screen.getByLabelText("Input Label")).toBeInTheDocument();
  });

  it("Renders aria-label", () => {
    expect(screen.getByLabelText("Input Label")).toHaveAttribute(
      "aria-label",
      "Input Label"
    );
  });

  it("Renders placeholder text", () => {
    expect(
      screen.getByPlaceholderText("Input Placeholder")
    ).toBeInTheDocument();
  });

  it("Adds aria-required prop if input is required", () => {
    expect(screen.getByLabelText("Input Label")).toHaveAttribute("aria-label");
  });

  it("Allows user to pass in additional attributes", () => {
    expect(clickHander).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByLabelText("Input Label"));
    expect(clickHander).toHaveBeenCalledTimes(1);
  });

  it("Changing the value calls the onChange handler", () => {
    expect(changeHandler).toHaveBeenCalledTimes(0);
    fireEvent.change(screen.getByLabelText("Input Label"), {
      target: { value: "Hello" },
    });
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });
});

describe("Input with Label", () => {
  beforeEach(() => {
    render(
      <>
        <Label htmlFor="inputID" id="label">
          Input Label
        </Label>
        <Input
          id="inputID"
          ariaLabelledBy="label helperText"
          ariaLabel="Input Label"
          required={true}
          placeholder="Input Placeholder"
          type={InputTypes.text}
        />
        <HelperErrorText isInvalid={false} id="helperText">
          Helper Text Content
        </HelperErrorText>
      </>
    );
  });

  it("Renders Input", () => {
    expect(screen.getByText("Input Label")).toBeInTheDocument();
  });

  it("Renders aria-label", () => {
    expect(screen.getByLabelText("Input Label")).toHaveAttribute(
      "aria-label",
      "Input Label"
    );
  });

  it("Renders aria-labelledby for inputId and ariaLabelledBy", () => {
    expect(screen.getByLabelText("Input Label")).toHaveAttribute(
      "aria-labelledby",
      "label helperText"
    );
  });
});

describe("Input Group", () => {
  beforeEach(() => {
    render(
      <fieldset>
        <legend>Input Group Label Legend</legend>
        <>
          <>
            <Label htmlFor="input1" id={"label1"}>
              From
            </Label>
            <Input
              id="input1"
              ariaLabelledBy="label1 helperText1 sharedHelperText"
              required={true}
              type={InputTypes.text}
            ></Input>
            <HelperErrorText isInvalid={false} id={"helperText1"}>
              Input 1 Helper Text
            </HelperErrorText>
          </>

          <>
            <Label htmlFor="input2" id={"label2"}>
              To
            </Label>
            <Input
              id="input2"
              ariaLabelledBy={"label2 helperText2 sharedHelperText"}
              required={true}
              type={InputTypes.text}
            ></Input>
            <HelperErrorText isInvalid={false} id={"helperText2"}>
              Input 2 Helper Text
            </HelperErrorText>
          </>
        </>
        <HelperErrorText isInvalid={true} id={"sharedHelperText"}>
          Additional Error Text
        </HelperErrorText>
      </fieldset>
    );
  });
  it("Renders legend", () => {
    expect(screen.getByText("Input Group Label Legend")).toBeInTheDocument();
  });

  it("Renders two inputs", () => {
    expect(screen.getByText("From")).toBeInTheDocument();
    expect(screen.getByText("To")).toBeInTheDocument();
  });
});

describe("Renders HTML attributes passed through the `attributes` prop", () => {
  const onChangeSpy = jest.fn();
  const onBlurSpy = jest.fn();
  beforeEach(() => {
    render(
      <Input
        id="inputID-attributes"
        ariaLabel="Input Label"
        ariaLabelledBy="helperText-attributes"
        placeholder="Input Placeholder"
        type={InputTypes.text}
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
    expect(screen.getByLabelText("Input Label")).toHaveAttribute(
      "maxLength",
      "10"
    );
  });

  it("Has a tabIndex", () => {
    expect(screen.getByLabelText("Input Label")).toHaveAttribute(
      "tabIndex",
      "0"
    );
  });

  it("Calls the onChange function", () => {
    expect(onChangeSpy).toHaveBeenCalledTimes(0);
    fireEvent.change(screen.getByLabelText("Input Label"), {
      target: { value: "Hello" },
    });
    expect(onChangeSpy).toHaveBeenCalledTimes(1);
  });

  it("Calls the onBlur function", () => {
    expect(onBlurSpy).toHaveBeenCalledTimes(0);
    fireEvent.blur(screen.getByLabelText("Input Label"));
    expect(onBlurSpy).toHaveBeenCalledTimes(1);
  });
});

// TODO:
// describe("Forwarding refs", () => {
//   it("Passes the ref to the input element", () => {
//     const ref = React.createRef<HTMLInputElement>();
//     const container = render(
//       <Input
//         id="inputID-attributes"
//         ariaLabel="Input Label"
//         ariaLabelledBy={"helperText-attributes"}
//         placeholder={"Input Placeholder"}
//         type={InputTypes.text}
//         ref={ref}
//       ></Input>
//     );
//     expect(container.find("input").instance()).toEqual(ref.current);
//   });
// });

describe("Hidden input", () => {
  it("Renders a hidden type input", () => {
    render(
      <Input
        id="inputID-hidden"
        ariaLabel="Hidden Input Label"
        type={InputTypes.hidden}
        value="hidden"
      />
    );

    expect(screen.getByLabelText("Hidden Input Label")).toHaveAttribute(
      "aria-hidden"
    );
    expect(screen.getByLabelText("Hidden Input Label")).toHaveAttribute(
      "value",
      "hidden"
    );
  });
});
