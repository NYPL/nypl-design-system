import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";

import * as Mocha from "mocha";

import TextField from "../../components/01-atoms/Forms/TextField";

describe("Search Bar Text Field", () => {
  let wrapper: Enzyme.ShallowWrapper<{}, {}>;

  it("Renders an input field", () => {
    wrapper = Enzyme.shallow(<TextField labelId="id" isRequired={false}/>);
    expect(wrapper.find("input")).to.have.lengthOf(1);
  });

  it("Shows 'aria-required' if required", () => {
    wrapper = Enzyme.shallow(<TextField labelId="id" isRequired={true}/>);
    expect(wrapper.props()["aria-required"]).to.equal(true);
  });

  it("Throws error if neither label or aria-label are passed", () => {
    expect(() => Enzyme.mount(<TextField isRequired={true}/>))
    .to.throw("Either label or ariaLabel must be defined");
  });
});
