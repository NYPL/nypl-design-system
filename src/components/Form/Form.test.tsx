import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Form, { FormRow, FormField } from "./Form";
import TextInput from "../TextInput/TextInput";

describe("Form Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<Form />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

// describe("Form", () => {
//   it("Renders a <form> element", () => {
//     const wrapper = render(<Form></Form>);
//     expect(wrapper.find("form")).to.have.lengthOf(1);
//   });

//   it("Renders a <form> element with child .form-row element", () => {
//     const wrapper = render(
//       <Form>
//         <FormRow></FormRow>
//       </Form>
//     );
//     expect(wrapper.find(".form")).to.have.lengthOf(1);
//     expect(wrapper.find(".form .form-row")).to.have.lengthOf(1);
//   });

//   it("Renders a <form> element with child .form-field element", () => {
//     const wrapper = render(
//       <Form>
//         <FormField></FormField>
//       </Form>
//     );
//     expect(wrapper.find(".form")).to.have.lengthOf(1);
//     expect(wrapper.find(".form .form-field")).to.have.lengthOf(1);
//   });

//   it("Renders a <form> element with .form-row, .form-field and input elements properly nested", () => {
//     const wrapper = render(
//       <Form>
//         <FormRow>
//           <FormField>
//             <TextInput labelText="Input Field" />
//           </FormField>
//         </FormRow>
//       </Form>
//     );
//     expect(wrapper.find(".form")).to.have.lengthOf(1);
//     expect(wrapper.find(".form .form-row")).to.have.lengthOf(1);
//     expect(wrapper.find(".form .form-row .form-field")).to.have.lengthOf(1);
//     expect(
//       wrapper.find(".form .form-row .form-field .textinput")
//     ).to.have.lengthOf(1);
//   });

//   it("Renders a <form> element with .form-row and .form-field elements properly nested", () => {
//     const wrapper = render(
//       <Form action="/end/point" method="get"></Form>
//     );
//     expect(wrapper.find("form")).to.have.lengthOf(1);
//     expect(wrapper.find("form").prop("action")).toEqual("/end/point");
//     expect(wrapper.find("form").prop("method")).toEqual("get");
//   });
// });
