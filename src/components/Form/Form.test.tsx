import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Form, { FormRow, FormField } from "./Form";
import TextInput from "../TextInput/TextInput";

describe("Form", () => {
  //   let wrapper: Enzyme.ShallowWrapper<any, any>;
  it("Renders a <form> element", () => {
    const wrapper = Enzyme.shallow(<Form></Form>);
    expect(wrapper.find("form")).to.have.lengthOf(1);
  });

  it("Renders a <form> element with child .form-row element", () => {
    const wrapper = Enzyme.mount(
      <Form>
        <FormRow></FormRow>
      </Form>
    );
    expect(wrapper.find(".form")).to.have.lengthOf(1);
    expect(wrapper.find(".form .form-row")).to.have.lengthOf(1);
  });

  it("Renders a <form> element with child .form-field element", () => {
    const wrapper = Enzyme.mount(
      <Form>
        <FormField></FormField>
      </Form>
    );
    expect(wrapper.find(".form")).to.have.lengthOf(1);
    expect(wrapper.find(".form .form-field")).to.have.lengthOf(1);
  });

  it("Renders a <form> element with .form-row, .form-field and input elements properly nested", () => {
    const wrapper = Enzyme.mount(
      <Form>
        <FormRow>
          <FormField>
            <TextInput labelText="Input Field" />
          </FormField>
        </FormRow>
      </Form>
    );
    expect(wrapper.find(".form")).to.have.lengthOf(1);
    expect(wrapper.find(".form .form-row")).to.have.lengthOf(1);
    expect(wrapper.find(".form .form-row .form-field")).to.have.lengthOf(1);
    expect(
      wrapper.find(".form .form-row .form-field .textinput")
    ).to.have.lengthOf(1);
  });

  it("Renders a <form> element with .form-row and .form-field elements properly nested", () => {
    const wrapper = Enzyme.shallow(
      <Form action="/end/point" method="get"></Form>
    );
    expect(wrapper.find("form")).to.have.lengthOf(1);
    expect(wrapper.find("form").prop("action")).to.equal("/end/point");
    expect(wrapper.find("form").prop("method")).to.equal("get");
  });
});
