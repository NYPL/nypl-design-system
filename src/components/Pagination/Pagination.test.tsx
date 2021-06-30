import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import Pagination from "./Pagination";

describe("Pagination with getPageHref", () => {
  let wrapper: Enzyme.ReactWrapper<any, any>;
  let getPageHref;

  beforeEach(() => {
    getPageHref = (page: number) => {
      return `page=${page}`;
    };
  });

  it("Renders a nav element with items and links", () => {
    wrapper = Enzyme.mount(
      <Pagination pageCount={20} currentPage={6} getPageHref={getPageHref} />
    );
    expect(wrapper.find("nav")).to.have.lengthOf(1);
    expect(wrapper.find("ul")).to.have.lengthOf(1);
    // Previous/Next buttons + truncated item list = 11 total items
    expect(wrapper.find("li")).to.have.lengthOf(11);
    // Each element links to anotherpage
    const links = wrapper.find("a");

    // Pagination should show
    // Previous 1 ... 4 5 6 7 8 ... 20 Next
    expect(links).to.have.lengthOf(9);
    // Previous Page
    expect(links.get(0).props.href).to.equal("page=5");
    expect(links.get(1).props.href).to.equal("page=1");
    expect(links.get(2).props.href).to.equal("page=4");
    expect(links.get(3).props.href).to.equal("page=5");
    expect(links.get(4).props.href).to.equal("page=6");
    expect(links.get(5).props.href).to.equal("page=7");
    expect(links.get(6).props.href).to.equal("page=8");
    expect(links.get(7).props.href).to.equal("page=20");
    // Next Page
    expect(links.get(8).props.href).to.equal("page=7");
  });

  it("Previous link is disabled when on the first page item", () => {
    wrapper = Enzyme.mount(
      <Pagination pageCount={11} currentPage={1} getPageHref={getPageHref} />
    );
    expect(wrapper.find("a").first().hasClass("disabled")).to.equal(true);
    expect(
      wrapper.find("a").first().find("[aria-disabled='true']")
    ).to.have.lengthOf(1);
  });

  it("Next link is disabled when on the last page item", () => {
    wrapper = Enzyme.mount(
      <Pagination pageCount={11} currentPage={11} getPageHref={getPageHref} />
    );
    expect(wrapper.find("a").last().hasClass("disabled")).to.equal(true);
    expect(
      wrapper.find("a").last().find("[aria-disabled='true']")
    ).to.have.lengthOf(1);
  });

  it("Current page item has active class", () => {
    wrapper = Enzyme.mount(
      <Pagination pageCount={11} currentPage={5} getPageHref={getPageHref} />
    );
    expect(wrapper.find("a").at(5).hasClass("selected")).to.equal(true);
  });

  it("When pagination has 1 element, pagination is not shown", () => {
    const shallow = Enzyme.shallow(
      <Pagination pageCount={1} currentPage={1} getPageHref={getPageHref} />
    );
    expect(shallow.isEmptyRender()).to.equal(true);
  });

  it("When pagination has 0 elements, pagination is not shown", () => {
    const shallow = Enzyme.shallow(
      <Pagination pageCount={0} currentPage={1} getPageHref={getPageHref} />
    );

    expect(shallow.isEmptyRender()).to.equal(true);
  });
});

describe("Pagination with changeCallback", () => {
  let wrapper: Enzyme.ReactWrapper<any, any>;
  let changeCallback;

  beforeEach(() => {
    changeCallback = stub();
  });

  it("Renders a nav element with an unordered list of items", () => {
    wrapper = Enzyme.mount(
      <Pagination
        pageCount={11}
        currentPage={6}
        onPageChange={changeCallback}
      />
    );
    expect(wrapper.find("nav")).to.have.lengthOf(1);
    expect(wrapper.find("ul")).to.have.lengthOf(1);
    // Previous/Next buttons + truncated item list = 11 total items
    expect(wrapper.find("li")).to.have.lengthOf(11);
  });

  it("Previous link is disabled when on the first page item", () => {
    wrapper = Enzyme.mount(
      <Pagination
        pageCount={11}
        currentPage={1}
        onPageChange={changeCallback}
      />
    );
    expect(wrapper.find("a").first().hasClass("disabled")).to.equal(true);
    expect(
      wrapper.find("a").first().find("[aria-disabled='true']")
    ).to.have.lengthOf(1);
  });

  it("Next link is disabled when on the last page item", () => {
    wrapper = Enzyme.mount(
      <Pagination
        pageCount={11}
        currentPage={11}
        onPageChange={changeCallback}
      />
    );
    expect(wrapper.find("a").last().hasClass("disabled")).to.equal(true);
    expect(
      wrapper.find("a").last().find("[aria-disabled='true']")
    ).to.have.lengthOf(1);
  });

  it("Current page item has active class", () => {
    wrapper = Enzyme.mount(
      <Pagination
        pageCount={11}
        currentPage={5}
        onPageChange={changeCallback}
      />
    );
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

  it("When pagination has 1 element, pagination is not shown", () => {
    const shallow = Enzyme.shallow(
      <Pagination pageCount={1} currentPage={1} onPageChange={changeCallback} />
    );

    expect(shallow.isEmptyRender()).to.equal(true);
  });

  it("When pagination has 0 elements, pagination is not shown", () => {
    const shallow = Enzyme.shallow(
      <Pagination pageCount={0} currentPage={1} onPageChange={changeCallback} />
    );

    expect(shallow.isEmptyRender()).to.equal(true);
  });
});
