
import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Button from "../../components/01-atoms/Button/Button";

describe("Button", () => {
  let wrapper: Enzyme.ShallowWrapper<{}, {}>;
  let callback;

  beforeEach(() => {
    callback = stub();
    wrapper = Enzyme.shallow(<Button id="button" callback={callback} content="Submit" />);
  });

  it("calls the callback", () => {
    wrapper.simulate("click");
    expect(callback.callCount).to.equal(1);
  });
  it("optionally renders custom text", () => {
    expect(wrapper.text()).to.equal("Submit");
    wrapper.setProps({ content: "Some other string" });
    expect(wrapper.text()).to.equal("Some other string");
  });
  it("optionally renders a component", () => {
    let content = <span>Element!</span>;
    wrapper.setProps({ content });
    expect(wrapper.find("span").length).to.equal(1);
    expect(wrapper.text()).to.equal("Element!");
  });
  it("has 'button' class", () => {
    expect(wrapper.find(".button")).to.have.lengthOf(1);
  });

  // TODO: Allow other Types
  it("has type submit", () => {
    expect(wrapper.prop("type")).to.equal("submit");
  });

  it("optionally calls the callback on mouseDown instead of on click", () => {
    expect(callback.callCount).to.equal(0);
    wrapper.setProps({ mouseDown: true });
    wrapper.simulate("click");
    expect(callback.callCount).to.equal(0);
    wrapper.simulate("mouseDown");
    expect(callback.callCount).to.equal(1);
  });
});
