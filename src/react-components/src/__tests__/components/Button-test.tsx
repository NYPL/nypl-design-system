
import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Button from "../../components/Button/Button";

describe("Button", () => {
  let wrapper: Enzyme.ShallowWrapper<{}, {}>;
  let callback;
  beforeEach(() => {
    callback = stub();
    wrapper = Enzyme.shallow(<Button callback={callback} />);
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
  it("optionally sets a className", () => {
    expect(wrapper.prop("className")).to.equal("button");
    wrapper.setProps({ className: "custom-class" });
    expect(wrapper.prop("className")).to.equal("button custom-class");
  });
  it("optionally disables", () => {
    expect(wrapper.find("[disabled=true]").length).to.equal(0);
    wrapper.setProps({ disabled: true });
    expect(wrapper.find("[disabled=true]").length).to.equal(1);
  });
  it("optionally sets a type", () => {
    expect(wrapper.prop("type")).to.equal("submit");
    wrapper.setProps({ type: "button" });
    expect(wrapper.prop("type")).to.equal("button");
  });
  it("optionally calls the callback on mouseDown instead of on click", () => {
    expect(callback.callCount).to.equal(0);
    wrapper.setProps({ mouseDown: true });
    wrapper.simulate("click");
    expect(callback.callCount).to.equal(0);
    wrapper.simulate("mouseDown");
    expect(callback.callCount).to.equal(1);
  });

  // Typically, any extra props are aria-attributes.
  it("should render any extra props", () => {
    wrapper = Enzyme.shallow(
      <Button callback={callback} aria-pressed={true} aria-label="aria label" />
    );
    const buttonProps = wrapper.props();
    expect(buttonProps["aria-pressed"]).to.be.true;
    expect(buttonProps["aria-label"]).to.equal("aria label");
  });
});
