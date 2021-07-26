import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

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

// describe("Renders Input", () => {
//   let container;
//   let changeHandler;
//   let clickHander;

//   beforeEach(() => {
//     clickHander = jest.fn();
//     changeHandler = jest.fn();
//     container = render(
//       <Input
//         id="inputID"
//         ariaLabel="Input Label"
//         ariaLabelledBy={"helperText"}
//         required={true}
//         placeholder={"Input Placeholder"}
//         type={InputTypes.text}
//         attributes={{ onClick: clickHander }}
//         onChange={changeHandler}
//       ></Input>
//     );
//   });

//   it("Renders Input", () => {
//     expect(container.find("input").exists()).toEqual(true);
//   });

//   it("Renders aria-label", () => {
//     expect(container.find("input").prop("aria-label")).toEqual("Input Label");
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
//     container.simulate("click");
//     expect(clickHander.callCount).toEqual(1);
//   });

//   it("Changing the value calls the onChange handler", () => {
//     container.find("input").simulate("change", { target: { value: "Hello" } });

//     expect(changeHandler.callCount).toEqual(1);
//   });
// });

// describe("Input with Label", () => {
//   let container;
//   beforeEach(() => {
//     container = render(
//       <>
//         <Label htmlFor="inputID" id={"label"}>
//           Input Label
//         </Label>
//         <Input
//           id="inputID"
//           ariaLabelledBy="label helperText"
//           ariaLabel="Input Label"
//           required={true}
//           placeholder={"Input Placeholder"}
//           type={InputTypes.text}
//         ></Input>
//         <HelperErrorText isError={false} id={"helperText"}>
//           Helper Text Content
//         </HelperErrorText>
//       </>
//     );
//   });

//   it("Renders Input", () => {
//     expect(container.find("input").exists()).toEqual(true);
//   });

//   it("Renders aria-label", () => {
//     expect(container.find("input").prop("aria-label")).toEqual("Input Label");
//   });

//   it("Renders aria-labelledby for inputId and ariaLabelledBy", () => {
//     expect(container.find("input").prop("aria-labelledby")).toEqual(
//       "label helperText"
//     );
//   });
// });

// describe("Input Group", () => {
//   let container;
//   beforeEach(() => {
//     container = render(
//       <fieldset>
//         <legend>Input Group Label</legend>
//         <>
//           <>
//             <Label htmlFor="input1" id={"label1"}>
//               From
//             </Label>
//             <Input
//               id="input1"
//               ariaLabelledBy="label1 helperText1 sharedHelperText"
//               required={true}
//               type={InputTypes.text}
//             ></Input>
//             <HelperErrorText isError={false} id={"helperText1"}>
//               Input 1 Helper Text
//             </HelperErrorText>
//           </>

//           <>
//             <Label htmlFor="input2" id={"label2"}>
//               To
//             </Label>
//             <Input
//               id="input2"
//               ariaLabelledBy={"label2 helperText2 sharedHelperText"}
//               required={true}
//               type={InputTypes.text}
//             ></Input>
//             <HelperErrorText isError={false} id={"helperText2"}>
//               Input 2 Helper Text
//             </HelperErrorText>
//           </>
//         </>
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
//       <Input
//         id="inputID-attributes"
//         ariaLabel="Input Label"
//         ariaLabelledBy={"helperText-attributes"}
//         placeholder={"Input Placeholder"}
//         type={InputTypes.text}
//         attributes={{
//           onChange: onChangeSpy,
//           onBlur: onBlurSpy,
//           maxLength: 10,
//           tabIndex: 0,
//         }}
//       ></Input>
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

// describe("Hidden input", () => {
//   it("Renders a hidden type input", () => {
//     const container = render(
//       <Input
//         id="inputID-hidden"
//         ariaLabel="Hidden Input Label"
//         type={InputTypes.hidden}
//         value="hidden"
//       />
//     );

//     const input = container.find("input");

//     expect(input.prop("aria-hidden")).toEqual(true);
//     expect(input.prop("value")).toEqual("hidden");
//   });
// });
