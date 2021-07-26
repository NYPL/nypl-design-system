import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Select from "./Select";

describe("Select Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Select
        labelText="Select Label"
        onChange={jest.fn()}
        onBlur={jest.fn()}
        name="test"
      >
        <option aria-selected={true}>test1</option>
        <option aria-selected={false}>test2</option>
      </Select>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

// describe("Select", () => {
//   let wrapper;
//   let blurCallback;
//   let changeCallback;

//   const warn = spy(console, "warn");

//   beforeEach(() => {
//     changeCallback = spy();
//     blurCallback = jest.fn();
//   });

//   it("Renders a select DOM element", () => {
//     wrapper = render(
//       <Select
//         labelText="Select Label"
//         onChange={changeCallback}
//         onBlur={blurCallback}
//         name="test"
//       >
//         <option aria-selected={true}>test1</option>
//         <option aria-selected={false}>test2</option>
//       </Select>
//     );
//     expect(wrapper.find("select")).to.have.lengthOf(1);
//   });

//   it("Renders a name attribute to use in forms", () => {
//     wrapper = render(
//       <Select
//         labelText="Select Label"
//         onChange={changeCallback}
//         onBlur={blurCallback}
//         name="test2"
//       >
//         <option aria-selected={true}>test1</option>
//         <option aria-selected={false}>test2</option>
//       </Select>
//     );
//     expect(wrapper.find("select").prop("name")).toEqual("test2");
//   });

//   it("Renders an aria-label", () => {
//     wrapper = render(
//       <Select
//         labelText="Select Label"
//         onChange={changeCallback}
//         onBlur={blurCallback}
//         showLabel={false}
//         name="test3"
//       >
//         <option aria-selected={true}>test1</option>
//         <option aria-selected={false}>test2</option>
//       </Select>
//     );
//     expect(wrapper.find("select").prop("aria-label")).toEqual("Select Label");
//   });

//   it("Renders an aria-label based on deprecated prop", () => {
//     wrapper = render(
//       <Select
//         labelText="Select Label"
//         ariaLabel="Aria Label"
//         onChange={changeCallback}
//         onBlur={blurCallback}
//         showLabel={false}
//         name="test3"
//       >
//         <option aria-selected={true}>test1</option>
//         <option aria-selected={false}>test2</option>
//       </Select>
//     );
//     expect(wrapper.find("select").prop("aria-label")).toEqual("Aria Label");
//   });

//   it("Renders aria-describedby when helperText prop is passed", () => {
//     wrapper = render(
//       <Select
//         id="custom-select-id"
//         showLabel={true}
//         labelText="Select Label"
//         onChange={changeCallback}
//         onBlur={blurCallback}
//         helperText="example helper text"
//         name="test4"
//       >
//         <option aria-selected={true}>test1</option>
//         <option aria-selected={false}>test2</option>
//       </Select>
//     );

//     expect(wrapper.find("select").prop("aria-describedby")).toEqual(
//       "custom-select-id-helperText"
//     );
//   });

//   it("Renders required and aria-required attributes", () => {
//     wrapper = render(
//       <Select
//         id="custom-select-id"
//         labelText="Select Label"
//         onChange={changeCallback}
//         onBlur={blurCallback}
//         name="test4"
//         required
//       >
//         <option aria-selected={true}>test1</option>
//         <option aria-selected={false}>test2</option>
//       </Select>
//     );

//     expect(wrapper.find("select").prop("aria-required")).toEqual(true);
//     expect(wrapper.find("select").prop("required")).toEqual(true);
//   });

//   it("Renders required and aria-required attributes using deprecated prop", () => {
//     wrapper = render(
//       <Select
//         id="custom-select-id"
//         labelText="Select Label"
//         onChange={changeCallback}
//         onBlur={blurCallback}
//         name="test4"
//         isRequired
//       >
//         <option aria-selected={true}>test1</option>
//         <option aria-selected={false}>test2</option>
//       </Select>
//     );

//     expect(wrapper.find("select").prop("aria-required")).toEqual(true);
//     expect(wrapper.find("select").prop("required")).toEqual(true);
//   });

//   it("Renders helper text when helperText prop is passed", () => {
//     wrapper = render(
//       <Select
//         id="custom-select-id"
//         labelText="Select Label"
//         helperText="The helper text."
//         name="test4"
//       >
//         <option aria-selected={true}>test1</option>
//         <option aria-selected={false}>test2</option>
//       </Select>
//     );

//     expect(wrapper.find(".helper-text").text()).toEqual("The helper text.");
//   });

//   it("Renders default error text when 'errorText' prop is not passed and 'errored' prop is set to true", () => {
//     wrapper = render(
//       <Select
//         id="custom-select-id"
//         labelText="Select Label"
//         name="test4"
//         errored
//       >
//         <option aria-selected={true}>test1</option>
//         <option aria-selected={false}>test2</option>
//       </Select>
//     );

//     expect(wrapper.find(".helper-text--error").text()).toEqual(
//       "There is an error related to this field."
//     );
//   });

//   it("Renders custom error text when 'errorText' prop is passed and 'errored' prop is set to true", () => {
//     wrapper = render(
//       <Select
//         id="custom-select-id"
//         labelText="Select Label"
//         errorText="Custom error text!"
//         name="test4"
//         errored
//       >
//         <option aria-selected={true}>test1</option>
//         <option aria-selected={false}>test2</option>
//       </Select>
//     );

//     expect(wrapper.find(".helper-text--error").text()).toEqual(
//       "Custom error text!"
//     );
//   });

//   it("Calls the onChange callback", () => {
//     wrapper = render(
//       <Select
//         labelText="Select Label"
//         labelId="label"
//         isRequired={false}
//         id="hi"
//         onChange={changeCallback}
//         onBlur={blurCallback}
//         name="test5"
//       >
//         <option aria-selected={true}>test1</option>
//         <option aria-selected={false}>test2</option>
//       </Select>
//     );

//     wrapper.find("select").simulate("change", { target: { value: "test2" } });

//     expect(changeCallback.callCount).toEqual(1);
//   });

//   it("Calls the callback onChange function with the updated value", () => {
//     let currentValue = "";
//     const onChange = event => {
//       currentValue = event?.target?.value;
//     };
//     wrapper = render(
//       <Select
//         labelText="Select Label"
//         labelId="label"
//         isRequired={false}
//         id="update-value"
//         onChange={onChange}
//         onBlur={blurCallback}
//         name="test6"
//       >
//         <option aria-selected={false}>value1</option>
//         <option aria-selected={false}>value2</option>
//         <option aria-selected={false}>value3</option>
//       </Select>
//     );

//     wrapper.find("select").simulate("change", { target: { value: "value2" } });
//     expect(currentValue).toEqual("value2");

//     wrapper.find("select").simulate("change", { target: { value: "value3" } });
//     expect(currentValue).toEqual("value3");

//     wrapper.find("select").simulate("change", { target: { value: "value1" } });
//     expect(currentValue).toEqual("value1");
//   });

//   it("Calls the onBlur callback", () => {
//     wrapper = render(
//       <Select
//         labelText="Select Label"
//         id="hi"
//         labelId="label"
//         isRequired={false}
//         onChange={changeCallback}
//         onBlur={blurCallback}
//         name="test7"
//       >
//         <option aria-selected={true}>test1</option>
//         <option aria-selected={false}>test2</option>
//       </Select>
//     );
//     wrapper.find("select").simulate("blur", { target: { value: "" } });

//     expect(blurCallback.callCount).toEqual(1);
//   });

//   it("Calls the callback onBlur function with the updated value", () => {
//     let currentValue = "";
//     const onBlur = event => {
//       currentValue = event?.target?.value;
//     };
//     wrapper = render(
//       <Select
//         labelText="Select Label"
//         labelId="label"
//         isRequired={false}
//         id="update-value"
//         onChange={changeCallback}
//         onBlur={onBlur}
//         name="test8"
//       >
//         <option aria-selected={false}>value1</option>
//         <option aria-selected={false}>value2</option>
//         <option aria-selected={false}>value3</option>
//       </Select>
//     );

//     wrapper.find("select").simulate("blur", { target: { value: "value2" } });
//     expect(currentValue).toEqual("value2");

//     wrapper.find("select").simulate("blur", { target: { value: "value3" } });
//     expect(currentValue).toEqual("value3");

//     wrapper.find("select").simulate("blur", { target: { value: "value1" } });
//     expect(currentValue).toEqual("value1");
//   });

//   it("Displays the selected option onLoad when passed selectedOption", () => {
//     wrapper = render(
//       <Select
//         labelText="Select Label"
//         labelId="label"
//         isRequired={false}
//         id="hi"
//         selectedOption="test2"
//         onChange={changeCallback}
//         onBlur={blurCallback}
//         name="test9"
//       >
//         <option aria-selected={true}>test1</option>
//         <option aria-selected={false}>test2</option>
//       </Select>
//     );
//     expect(wrapper.find("select").props().value).toEqual("test2");
//   });

//   it("Calls the correct handlers when a new value is selected", () => {
//     wrapper = render(
//       <Select
//         labelText="Select Label"
//         labelId="label"
//         isRequired={false}
//         id="state-change"
//         onChange={changeCallback}
//         onBlur={blurCallback}
//         selectedOption="value1"
//         name="test10"
//       >
//         <option aria-selected={false}>value1</option>
//         <option aria-selected={false}>value2</option>
//         <option aria-selected={false}>value3</option>
//       </Select>
//     );
//     expect(wrapper.find("select").props().value).toEqual("value1");

//     wrapper.find("select").simulate("change", { target: { value: "value2" } });
//     expect(changeCallback.callCount).toEqual(1);

//     wrapper.find("select").simulate("blur", { target: { value: "value3" } });
//     expect(blurCallback.callCount).toEqual(1);
//   });

//   it("Passes the ref to the select element", () => {
//     const ref = React.createRef<HTMLSelectElement>();
//     const container = render(
//       <Select
//         labelText="Select Label"
//         labelId="label"
//         isRequired={false}
//         id="ref-test"
//         name="test11"
//         ref={ref}
//       >
//         <option aria-selected={false}>test1</option>
//         <option aria-selected={false}>test2</option>
//       </Select>
//     );
//     expect(container.find("select").instance()).toEqual(ref.current);
//   });

//   it("should throw warning when fewer than 2 options", () => {
//     wrapper = render(
//       <Select
//         labelText="Select Label"
//         labelId="label"
//         isRequired={false}
//         id="ref-test"
//         name="test1"
//       >
//         <option aria-selected={false}>test1</option>
//       </Select>
//     );
//     expect(wrapper.find("select").prop("name")).toEqual("test1");
//     expect(
//       warn.calledWith(
//         "NYPL DS recommends <select> not be used for 1 or fewer options"
//       )
//     );
//   });

//   it("should throw warning when there are more than 7 options", () => {
//     wrapper = render(
//       <Select
//         labelText="Select Label"
//         labelId="label"
//         isRequired={false}
//         id="ref-test"
//         name="test1"
//       >
//         <option aria-selected={false}>test1</option>
//         <option aria-selected={false}>test2</option>
//         <option aria-selected={false}>test3</option>
//         <option aria-selected={false}>test4</option>
//         <option aria-selected={false}>test5</option>
//         <option aria-selected={false}>test6</option>
//         <option aria-selected={false}>test7</option>
//         <option aria-selected={false}>test8</option>
//       </Select>
//     );
//     expect(wrapper.find("select").prop("name")).toEqual("test1");
//     expect(
//       warn.calledWith(
//         "NYPL DS recommends that your <select>s have fewer than 8 options"
//       )
//     );
//   });
// });
