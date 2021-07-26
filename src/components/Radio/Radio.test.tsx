import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import generateUUID from "../../helpers/generateUUID";
import Radio from "./Radio";

describe("Radio Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Radio
        id="inputID"
        attributes={{ onClick: jest.fn() }}
        onChange={jest.fn()}
        labelText="Test Label"
        showLabel={false}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

// describe("Radio Button", () => {
//   let container;
//   let changeHandler;
//   let clickHander;
//   let generateUUIDSpy;

//   beforeEach(() => {
//     clickHander = jest.fn();
//     changeHandler = jest.fn();
//     generateUUIDSpy = spy(generateUUID);
//     container = render(
//       <Radio
//         id="inputID"
//         attributes={{ onClick: clickHander }}
//         onChange={changeHandler}
//         labelText="Test Label"
//         showLabel={false}
//       ></Radio>
//     );
//   });

//   it("Renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false", () => {
//     const labelText = container.prop("labelText");
//     expect(container.find("input").prop("aria-label")).toEqual(labelText);
//   });

//   it("Renders without crashing", () => {
//     expect(container.find("input").exists()).toEqual(true);
//   });

//   it("The radio element is an input with type='radio'", () => {
//     expect(container.find("input").prop("type")).toEqual("radio");
//   });

//   it("The radio element's ID is set properly using the value passed to it.", () => {
//     expect(container.find("input").prop("id")).toEqual("inputID");
//   });

//   it("Allows user to pass in additional attributes", () => {
//     container.simulate("click");
//     expect(clickHander.callCount).toEqual(1);
//   });

//   it("Changing the value calls the onChange handler", () => {
//     container.find("input").simulate("change", { target: { value: "Hello" } });
//     expect(changeHandler.callCount).toEqual(1);
//   });

//   it("Renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false and 'helperText' has been passed", () => {
//     container = render(
//       <Radio
//         //add other props here
//         id="test_id"
//         labelText="Hello"
//         showLabel={false}
//         helperText="The helper text."
//       ></Radio>
//     );
//     const labelText = container.prop("labelText");
//     const helperText = container.prop("helperText");
//     expect(container.find("input").prop("aria-label")).toEqual(
//       `${labelText} - ${helperText}`
//     );
//   });

//   it("Renders with label", () => {
//     container = render(
//       <Radio
//         //add other props here
//         id="test_id"
//         labelText="Hello"
//         showLabel={true}
//       ></Radio>
//     );
//     expect(container.find("label").exists()).toEqual(true);
//     expect(container.find("input").props()).not.to.have.property("aria-label");
//     const radioId = container.prop("id");
//     expect(container.find("label").prop("htmlFor")).toEqual(radioId);
//   });

//   it("Renders with visible helper text", () => {
//     container = render(
//       <Radio
//         //add other props here
//         id="test_id"
//         labelText="Hello"
//         showLabel={true}
//         helperText="The helper text."
//         errorText="The error text."
//         errored={false}
//       ></Radio>
//     );
//     expect(container.find(".helper-text").text()).toEqual("The helper text.");
//   });

//   it("Renders with visible error text", () => {
//     container = render(
//       <Radio
//         //add other props here
//         id="test_id"
//         labelText="Hello"
//         showLabel={true}
//         helperText="The helper text."
//         errorText="The error text."
//         errored={true}
//       ></Radio>
//     );
//     expect(container.find(".helper-text").text()).toEqual("The error text.");
//   });

//   it("Calls a UUID generation method if no ID is passed as a prop", () => {
//     container = render(
//       <Radio labelText="Hello" showLabel={true}></Radio>
//     );
//     expect(container.find("input").props()).to.have.property("id");

//     expect(generateUUIDSpy.called);
//   });

//   it("The 'checked' attribute can set properly", () => {
//     const onChange = jest.fn();
//     const container = render(
//       <Radio
//         id="inputID-attributes"
//         labelText="Hello"
//         showLabel={false}
//         attributes={{
//           checked: true,
//           "aria-checked": true,
//           onChange,
//         }}
//       ></Radio>
//     );

//     const input = container.find("input");

//     expect(input.prop("checked")).toEqual(true);
//     expect(input.prop("aria-checked")).toEqual(true);
//   });

//   it("Passes the ref to the input element", () => {
//     const ref = React.createRef<HTMLInputElement>();
//     const container = render(
//       <Radio
//         id="inputID-attributes"
//         ref={ref}
//         labelText="Hello"
//         showLabel={false}
//       ></Radio>
//     );
//     expect(container.find("input").instance()).toEqual(ref.current);
//   });

//   it("Renders HTML attributes passed through the `attributes` prop", () => {
//     const onChangeSpy = jest.fn();
//     const onBlurSpy = jest.fn();
//     container = render(
//       <Radio
//         id="inputID-attributes"
//         attributes={{
//           onChange: onChangeSpy,
//           onBlur: onBlurSpy,
//           tabIndex: 0,
//         }}
//         labelText="Hello"
//         showLabel={true}
//       ></Radio>
//     );
//     expect(container.find("input").prop("tabIndex")).toEqual(0);
//     expect(onChangeSpy.callCount).toEqual(0);
//     container.find("input").simulate("change");
//     expect(onChangeSpy.callCount).toEqual(1);
//     expect(onBlurSpy.callCount).toEqual(0);
//     container.find("input").simulate("blur");
//     expect(onBlurSpy.callCount).toEqual(1);
//   });
// });
