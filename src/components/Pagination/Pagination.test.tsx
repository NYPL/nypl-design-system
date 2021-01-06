import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import Pagination from "./Pagination";

describe("Pagination Test", () => {
  let wrapper: Enzyme.ReactWrapper<any, any>;
  let changeCallback;

  beforeEach(() => {
    changeCallback = stub();
  });

  it("Renders a nav element with an unordered list of items", () => {
    wrapper = Enzyme.mount(<Pagination pageCount={11} currentPage={6} />);
    expect(wrapper.find("nav")).to.have.lengthOf(1);
    expect(wrapper.find("ul")).to.have.lengthOf(1);
    // Previous/Next buttons + truncated item list = 11 total items
    expect(wrapper.find("li")).to.have.lengthOf(11);
  });

  it("Previous link is disabled when on the first page item", () => {
    wrapper = Enzyme.mount(<Pagination pageCount={11} currentPage={1} />);
    expect(wrapper.find("a").first().hasClass("disabled")).to.equal(true);
    expect(
      wrapper.find("a").first().find("[aria-disabled='true']")
    ).to.have.lengthOf(1);
  });

  it("Next link is disabled when on the last page item", () => {
    wrapper = Enzyme.mount(<Pagination pageCount={11} currentPage={11} />);
    expect(wrapper.find("a").last().hasClass("disabled")).to.equal(true);
    expect(
      wrapper.find("a").last().find("[aria-disabled='true']")
    ).to.have.lengthOf(1);
  });

  it("Current page item has active class", () => {
    wrapper = Enzyme.mount(<Pagination pageCount={11} currentPage={5} />);
    expect(wrapper.find("a").at(5).hasClass("selected")).to.equal(true);
  });

  it("When page item is selected, runs the onPageChange callback", () => {
    wrapper = Enzyme.mount(
      <Pagination
        pageCount={11}
        currentPage={5}
        onPageChange={changeCallback}
      />
    );
    expect(wrapper.find("a").at(2).simulate("click"));
    expect(changeCallback.callCount).to.equal(1);
  });
});
