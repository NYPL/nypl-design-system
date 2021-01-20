import { expect } from "chai";

import * as Enzyme from "enzyme";
import * as React from "react";

import List from "./List";
import { ListTypes } from "./ListTypes";

describe("List", () => {
  let wrapper: Enzyme.ReactWrapper<any, any>;

  it("Returns unordered list", () => {
    wrapper = Enzyme.mount(
      <List type={ListTypes.Unordered}>
        <li>hello</li>
      </List>
    );
    expect(wrapper.find("ul").exists()).to.equal(true);
    expect(wrapper.find("ul").hasClass("list")).to.equal(true);
    expect(wrapper.find("li").exists()).to.equal(true);
  });

  it("Returns ordered list", () => {
    wrapper = Enzyme.mount(
      <List type={ListTypes.Ordered}>
        <li>hello</li>
      </List>
    );
    expect(wrapper.find("ol").exists()).to.equal(true);
    expect(wrapper.find("ol").hasClass("list")).to.equal(true);
    expect(wrapper.find("li").exists()).to.equal(true);
  });

  it("Throws an error when you pass it children that aren't <li>s", () => {
    expect(
      () =>
        (wrapper = Enzyme.mount(
          <List type={ListTypes.Ordered}>
            <span>hello</span>
            <span>hello</span>
            <span>hello</span>
          </List>
        ))
    ).to.throw("Direct children of `List` should be `<li>`s");
  });
});
