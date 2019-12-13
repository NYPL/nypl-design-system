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

  it("Form Dropdown", () => {
    wrapper = Enzyme.shallow(<FormDropdown dropdownId="hi" labelText="hi" options={["opt1", "opt2", "opt3"]} onSelectChange={changeCallback} onSelectBlur={blurCallback} />);
    expect(wrapper.find("select")).to.have.lengthOf(1);
  });

  it("sends callback with value on change", () => {
    wrapper = Enzyme.shallow(<FormDropdown
      dropdownId="hi" labelText="hi"
      options={["opt1", "opt2", "opt3"]}
      onSelectChange={changeCallback}
      onSelectBlur={blurCallback} />);

    wrapper.find("select").simulate("change", "", { value: ["val"] });

    expect(changeCallback.callCount).to.equal(1);
  });

  it("sends callback with no value on blur", () => {
    wrapper = Enzyme.shallow(<FormDropdown dropdownId="hi" labelText="hi" options={["opt1", "opt2", "opt3"]} onSelectChange={changeCallback} onSelectBlur={blurCallback} />);
    wrapper.find("select").simulate("blur");

    expect(blurCallback.callCount).to.equal(1);
  });

  it("requires either label or aria-label", () => {
    expect(() => Enzyme.mount(<FormDropdown dropdownId="hi" options={["opt1", "opt2", "opt3"]} onSelectChange={changeCallback} onSelectBlur={blurCallback} />))
    .to.throw("Either labelText or ariaLabel must be defined");
  });

  it("renders empty select form when passed no options", () => {
    wrapper = Enzyme.shallow(<FormDropdown dropdownId="hi" labelText="hi" options={[]} onSelectChange={changeCallback} onSelectBlur={blurCallback} />);
    expect(wrapper.find("select")).to.have.lengthOf(1);
    expect(wrapper.find("option")).to.have.lengthOf(0);
  });
});
