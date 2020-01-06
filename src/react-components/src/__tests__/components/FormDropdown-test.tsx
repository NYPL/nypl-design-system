import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";

import * as Mocha from "mocha";

import FormDropdown from "../../components/01-atoms/Forms/FormDropdown";

describe("FormDropdown", () => {
  let wrapper: Enzyme.ShallowWrapper<{}, {}>;
  let blurCallback;
  let changeCallback;

  beforeEach(() => {
    changeCallback = stub();
    blurCallback = stub();
  });

  it("requires either label or aria-label", () => {
    expect(() => Enzyme.mount(<FormDropdown labelId="label" isRequired={false} dropdownId="hi" options={["opt1", "opt2", "opt3"]} onSelectChange={changeCallback} onSelectBlur={blurCallback} />))
      .to.throw("Either labelId or ariaLabel must be defined");
  });

  it("if both label and ariaLabel are defined, select has aria-labeledBy", () => {

  });

  it("if only aria-label is defined, select has aria-label", () => {

  });

  it("Form Dropdown should render a FormDropdown", () => {
    wrapper = Enzyme.shallow(<FormDropdown labelId="label" isRequired={false} dropdownId="hi" options={["opt1", "opt2", "opt3"]} onSelectChange={changeCallback} onSelectBlur={blurCallback} />);
    expect(wrapper.find("select")).to.have.lengthOf(1);
  });
  
  it("Form Dropdown should render an icon", () => {

  });

  it("sends callback with value on change", () => {
    wrapper = Enzyme.shallow(<FormDropdown
      labelId="label"
      isRequired={false}
      dropdownId="hi"
      options={["opt1", "opt2", "opt3"]}
      onSelectChange={changeCallback}
      onSelectBlur={blurCallback} />);

    wrapper.find("select").simulate("change", "", { value: ["val"] });

    expect(changeCallback.callCount).to.equal(1);
  });

  it("sends callback with no value on blur", () => {
    wrapper = Enzyme.shallow(<FormDropdown
      dropdownId="hi"
      labelId="label"
      isRequired={false}
      options={["opt1", "opt2", "opt3"]}
      onSelectChange={changeCallback} onSelectBlur={blurCallback} />);
    wrapper.find("select").simulate("blur");

    expect(blurCallback.callCount).to.equal(1);
  });

  it("renders empty select form when passed no options", () => {
    wrapper = Enzyme.shallow(<FormDropdown
      dropdownId="hi"
      labelId="label"
      isRequired={false}
      options={[]}
      onSelectChange={changeCallback} onSelectBlur={blurCallback} />);
    expect(wrapper.find("select")).to.have.lengthOf(1);
    expect(wrapper.find("option")).to.have.lengthOf(0);
  });
});
