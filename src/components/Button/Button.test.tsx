import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";

import Button from "./Button";

describe("Button", () => {
  let wrapper: Enzyme.ShallowWrapper<any, any>;
  let onClick;

  beforeEach(() => {
    onClick = stub();
    wrapper = Enzyme.shallow(
      <Button id="button" onClick={onClick}>
        Submit
      </Button>
    );
  });

  it("calls the onClick", () => {
    wrapper.simulate("click");
    expect(onClick.callCount).to.equal(1);
  });
  it("optionally renders a component", () => {
    expect(wrapper.text()).to.equal("Submit");
  });
  it("has 'button' class", () => {
    expect(wrapper.find(".button")).to.have.lengthOf(1);
  });

  it("has type submit", () => {
    expect(wrapper.prop("type")).to.equal("submit");
  });

  it("optionally calls the onClick on mouseDown instead of on click", () => {
    expect(onClick.callCount).to.equal(0);
    wrapper.setProps({ mouseDown: true });
    wrapper.simulate("click");
    expect(onClick.callCount).to.equal(0);
    wrapper.simulate("mouseDown");
    expect(onClick.callCount).to.equal(1);
  });

  describe("rendering content from its children prop", () => {
    it("should render string children", () => {
      wrapper = Enzyme.shallow(
        <Button id="button" onClick={onClick}>
          Submit
        </Button>
      );
      expect(wrapper.text()).to.equal("Submit");
    });

    it("should render element children", () => {
      wrapper = Enzyme.shallow(
        <Button id="button" onClick={onClick}>
          <em>I'm a em element</em>
        </Button>
      );
      expect(wrapper.text()).to.equal("I'm a em element");
      expect(wrapper.find("em")).to.have.lengthOf(1);
    });
  });

  describe("passes button type", () => {
    it("button has passed type", () => {
      const wrapper = Enzyme.mount(
        <Button id="button" onClick={onClick} type="button">
          <span>{"I'm a span element"}</span>
        </Button>
      );
      expect(wrapper.find("button").prop("type")).to.equal("button");
    });
  });
});
