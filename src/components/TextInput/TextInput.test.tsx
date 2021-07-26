import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import HelperErrorText from "../HelperErrorText/HelperErrorText";
import TextInput, { TextInputRefType } from "./TextInput";
import { TextInputTypes } from "./TextInputTypes";
import generateUUID from "../../helpers/generateUUID";

describe("TextInput Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <TextInput
        id={"myTextInput"}
        labelText={"Custom Input Label"}
        required={true}
        placeholder={"Input Placeholder"}
        type={TextInputTypes.text}
        attributes={{ onFocus: jest.fn() }}
        onChange={jest.fn()}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

// describe.skip("Renders TextInput", () => {
//   let container;
//   let changeHandler;
//   let focusHandler;

//   beforeEach(() => {
//     focusHandler = jest.fn();
//     changeHandler = jest.fn();
//     container = render(
//       <TextInput
//         id={"myTextInput"}
//         labelText={"Custom Input Label"}
//         required={true}
//         placeholder={"Input Placeholder"}
//         type={TextInputTypes.text}
//         attributes={{ onFocus: focusHandler }}
//         onChange={changeHandler}
//       ></TextInput>
//     );
//   });

//   it("Renders an input element", () => {
//     expect(container.find("input").exists()).toEqual(true);
//   });

//   it("Renders as type `text`", () => {
//     expect(container.find("input").prop("type")).toEqual("text");
//   });

//   it("Renders label with label text", () => {
//     expect(container.find("label").exists()).toEqual(true);
//   });

//   it("Renders correct label text", () => {
//     expect(container.find("label").text()).to.contain("Custom Input Label");
//   });

//   it("Renders label's `for` attribute pointing at ID from input", () => {
//     expect(container.find("label").prop("htmlFor")).toEqual("myTextInput");
//   });

//   it("Renders placeholder text", () => {
//     expect(container.find("input").props().placeholder).toEqual(
//       "Input Placeholder"
//     );
//   });

//   it("Adds aria-required prop if input is required", () => {
//     expect(container.find("input").prop("aria-required")).toEqual(true);
//   });

//   it("Allows user to pass in additional attributes", () => {
//     container.find("input").simulate("focus");
//     expect(focusHandler.callCount).toEqual(1);
//   });

//   it("Changing the value calls the onChange handler", () => {
//     container.find("input").simulate("change", { target: { value: "Hello" } });

//     expect(changeHandler.callCount).toEqual(1);
//   });
// });

// describe("Renders TextInput with auto-generated ID, hidden label and visible helper text", () => {
//   let container;
//   let generateUUIDSpy;

//   beforeEach(() => {
//     generateUUIDSpy = spy(generateUUID);
//     container = render(
//       <TextInput
//         labelText={"Custom Input Label"}
//         showLabel={false}
//         helperText={"Custom Helper Text"}
//         required={true}
//         placeholder={"Input Placeholder"}
//         type={TextInputTypes.text}
//       ></TextInput>
//     );
//   });

//   it("Renders Input component", () => {
//     expect(container.find("input").exists()).toEqual(true);
//   });

//   it("Calls a UUID generation method if no ID is passed as a prop", () => {
//     expect(container.find("input").props()).to.have.property("id");
//     expect(generateUUIDSpy.called);
//   });

//   it("Does not renders Label component", () => {
//     expect(container.find("label").exists()).toEqual(false);
//   });

//   it("Renders custom aria-label", () => {
//     expect(container.find("input").prop("aria-label")).toEqual(
//       "Custom Input Label"
//     );
//   });

//   it("Renders HelperErrorText component", () => {
//     expect(container.find(".helper-text").exists()).toEqual(true);
//   });

//   it("Renders aria-describedby with helper text", () => {
//     expect(container.find("input").prop("aria-describedby")).toEqual(
//       "Custom Helper Text"
//     );
//   });
// });

// describe("TextInput shows error state", () => {
//   let container;
//   beforeEach(() => {
//     container = render(
//       <TextInput
//         id={"myTextInputError"}
//         labelText={"Custom Input Label"}
//         helperText={"Custom Helper Text"}
//         errorText={"Custom Error Text"}
//         placeholder={"Input Placeholder"}
//         errored={true}
//         type={TextInputTypes.text}
//       ></TextInput>
//     );
//   });

//   it("Renders Input component", () => {
//     expect(container.find("input").exists()).toEqual(true);
//   });

//   it("Renders Label component", () => {
//     expect(container.find("label").exists()).toEqual(true);
//   });

//   it("Renders HelperErrorText component", () => {
//     expect(container.find(".helper-text").exists()).toEqual(true);
//   });

//   it("Input shows error state", () => {
//     expect(container.find("input").hasClass("inputfield--error")).toEqual(
//       true
//     );
//   });

//   it("Helper text shows error state", () => {
//     expect(
//       container.find(".helper-text").hasClass("helper-text--error")
//     ).toEqual(true);
//   });

//   it("Helper text shows error text", () => {
//     expect(container.find(".helper-text").text()).toEqual("Custom Error Text");
//   });
// });

// describe("TextInput Group", () => {
//   let container;
//   beforeEach(() => {
//     container = render(
//       <fieldset>
//         <legend>Input Group Label</legend>

//         <TextInput
//           id="input1"
//           required={true}
//           type={TextInputTypes.text}
//           labelText="For"
//           helperText="Input 1 Helper Text"
//         />

//         <TextInput
//           id="input2"
//           required={true}
//           type={TextInputTypes.text}
//           labelText="To"
//           helperText="Input 2 Helper Text"
//         />

//         <HelperErrorText isError={true} id={"sharedHelperText"}>
//           Additional Error Text
//         </HelperErrorText>
//       </fieldset>
//     );
//   });

//   it("Renders fieldset", () => {
//     expect(container.find("fieldset").exists()).toEqual(true);
//   });

//   it("Renders legend", () => {
//     expect(container.find("legend").exists()).toEqual(true);
//   });

//   it("Renders two inputs", () => {
//     expect(container.find("input")).to.have.length(2);
//   });
// });

// describe("Renders HTML attributes passed through the `attributes` prop", () => {
//   const onChangeSpy = jest.fn();
//   const onBlurSpy = jest.fn();
//   let container;
//   beforeEach(() => {
//     container = render(
//       <TextInput
//         id="inputID-attributes"
//         labelText="Input Label"
//         placeholder={"Input Placeholder"}
//         type={TextInputTypes.text}
//         attributes={{
//           onChange: onChangeSpy,
//           onBlur: onBlurSpy,
//           maxLength: 10,
//           tabIndex: 0,
//         }}
//       ></TextInput>
//     );
//   });

//   it("Has a maxlength for the input element", () => {
//     expect(container.find("input").prop("maxLength")).toEqual(10);
//   });

//   it("Has a tabIndex", () => {
//     expect(container.find("input").prop("tabIndex")).toEqual(0);
//   });

//   it("Calls the onChange function", () => {
//     expect(onChangeSpy.callCount).toEqual(0);
//     container.find("input").simulate("change");
//     expect(onChangeSpy.callCount).toEqual(1);
//   });

//   it("Calls the onBlur function", () => {
//     expect(onBlurSpy.callCount).toEqual(0);
//     container.find("input").simulate("blur");
//     expect(onBlurSpy.callCount).toEqual(1);
//   });
// });

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
//       ></TextInput>
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
//       ></TextInput>
//     );
//     expect(container.find("textarea").instance()).toEqual(ref.current);
//   });
// });

// describe("Hidden input", () => {
//   it("Renders a hidden type input", () => {
//     const container = render(
//       <TextInput
//         id="inputID-hidden"
//         labelText={"Hidden Input Label"}
//         type={TextInputTypes.hidden}
//         value="hidden"
//       />
//     );

//     const input = container.find("input");

//     expect(input.prop("aria-hidden")).toEqual(true);
//     expect(input.prop("value")).toEqual("hidden");
//   });
// });

// describe("Textarea element type", () => {
//   let container;

//   beforeEach(() => {
//     container = render(
//       <TextInput
//         id={"myTextarea"}
//         labelText={"Custom textarea Label"}
//         placeholder={"Textarea Placeholder"}
//         type={TextInputTypes.textarea}
//       ></TextInput>
//     );
//   });

//   it("Renders a textarea element", () => {
//     expect(container.find("textarea").exists()).toEqual(true);
//   });

//   it("Renders label with label text", () => {
//     expect(container.find("label").exists()).toEqual(true);
//     expect(container.find("label").text()).to.contain("Custom textarea Label");
//   });
// });
