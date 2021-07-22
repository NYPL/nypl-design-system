import { expect } from "chai";

import * as Enzyme from "enzyme";
import * as React from "react";

import List from "./List";
import { ListTypes } from "./ListTypes";

describe("List", () => {
  const fishArray = ["Mahi-mahi", "Golden trout", "Rainbowfish", "Suckerfish"];
  const fishDefinitions = [
    {
      term: "Mahi-mahi",
      definition: "The mahi-mahi is an ocean fish known...",
    },
    {
      term: "Golden trout",
      definition: "The golden trout is a beautifully colored fish...",
    },
  ];
  let wrapper: Enzyme.ReactWrapper<any, any>;

  it("renders unordered list", () => {
    wrapper = Enzyme.mount(
      <List type={ListTypes.Unordered}>
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </List>
    );
    expect(wrapper.find("ul").exists()).to.equal(true);
    expect(wrapper.find("ul").hasClass("list")).to.equal(true);
    expect(wrapper.find("li").exists()).to.equal(true);
  });

  it("renders unordered list with the `listItems` prop", () => {
    wrapper = Enzyme.mount(
      <List type={ListTypes.Unordered} listItems={fishArray} />
    );
    expect(wrapper.find("ul").exists()).to.equal(true);
    expect(wrapper.find("ul").hasClass("list")).to.equal(true);
    expect(wrapper.find("li").exists()).to.equal(true);
  });

  it("renders ordered list", () => {
    wrapper = Enzyme.mount(
      <List type={ListTypes.Ordered}>
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </List>
    );
    expect(wrapper.find("ol").exists()).to.equal(true);
    expect(wrapper.find("ol").hasClass("list")).to.equal(true);
    expect(wrapper.find("li").exists()).to.equal(true);
  });

  it("renders ordered list with the `listItems` prop", () => {
    wrapper = Enzyme.mount(
      <List type={ListTypes.Ordered} listItems={fishArray} />
    );
    expect(wrapper.find("ol").exists()).to.equal(true);
    expect(wrapper.find("ol").hasClass("list")).to.equal(true);
    expect(wrapper.find("li").exists()).to.equal(true);
  });

  it("returns definition list", () => {
    wrapper = Enzyme.mount(
      <List type={ListTypes.Definition}>
        <dt>Mahi-mahi</dt>
        <dd>The mahi-mahi is an ocean fish known...</dd>
      </List>
    );
    expect(wrapper.find("dl").exists()).to.equal(true);
    expect(wrapper.find("dt").exists()).to.equal(true);
    expect(wrapper.find("dd").exists()).to.equal(true);
  });

  it("returns definition list with the `listItems` prop", () => {
    wrapper = Enzyme.mount(
      <List
        type={ListTypes.Definition}
        title="Animal Crossing Fish"
        listItems={fishDefinitions}
      />
    );
    expect(wrapper.find("dl").exists()).to.equal(true);
    expect(wrapper.find("dt").exists()).to.equal(true);
    expect(wrapper.find("dd").exists()).to.equal(true);
  });

  it("throws an error when you pass an ordered or unordered list children that aren't <li>s", () => {
    expect(
      () =>
        (wrapper = Enzyme.mount(
          <List type={ListTypes.Ordered}>
            <span>Mahi-mahi</span>
            <span>Golden trout</span>
            <span>Rainbowfish</span>
          </List>
        ))
    ).to.throw("Direct children of `List` (ordered) should be `<li>`s");
  });

  it("throws an error when you pass a definition list children that aren't `<dt>`s or `<dd>`s", () => {
    expect(
      () =>
        (wrapper = Enzyme.mount(
          <List type={ListTypes.Definition}>
            <span>Mahi-mahi</span>
            <span>Golden trout</span>
            <span>Rainbowfish</span>
          </List>
        ))
    ).to.throw(
      "Direct children of `List` (definition) should be `<dt>`s or `<dd>`s"
    );
  });

  it("throws an error when no children are passed or the `listItems` prop is not passed", () => {
    expect(
      () => (wrapper = Enzyme.mount(<List type={ListTypes.Ordered}></List>))
    ).to.throw("Either `<li>` children or the `listItems` prop must be used.");
  });

  it("throws an error when children and the `listItems` prop are both passed", () => {
    expect(
      () =>
        (wrapper = Enzyme.mount(
          <List type={ListTypes.Ordered} listItems={fishArray}>
            <li>Mahi-mahi</li>
            <li>Golden trout</li>
            <li>Rainbowfish</li>
            <li>Suckerfish</li>
          </List>
        ))
    ).to.throw(
      "Pass in either `<li>` children or use the `listItems` data prop, don't use both."
    );
  });
});
