
import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import UnderlineLink from "../../components/01-atoms/Links/UnderlineLink";

describe("Link With Underline", () => {
  let wrapper: Enzyme.ReactWrapper<{}, {}>;

  it("Can pass a link with <a> tag", () => {
    wrapper = Enzyme.mount(<UnderlineLink><a href="#test">Test</a></UnderlineLink>);
    expect(wrapper.find("a")).to.have.lengthOf(1);
  });
  it("Can pass in text as child and url as props", () => {
    wrapper = Enzyme.mount(<UnderlineLink url="#test">Test</UnderlineLink>);
    expect(wrapper.find("a")).to.have.lengthOf(1);
  });
  it("Can pass in a non-link component with a URL", () => {
    wrapper = Enzyme.mount(<UnderlineLink url="#test"><span>Test</span></UnderlineLink>);
    expect(wrapper.find("a")).to.have.lengthOf(1);
  });
  it("throws an error if text is passed but no url is passed", () => {
    expect(() => Enzyme.mount(<UnderlineLink>Test</UnderlineLink>))
      .to.throw("IconLink needs prop \"url\"");
  });
  it("Throws error when non-link component passed without URL", () => {
    expect(() => Enzyme.mount(<UnderlineLink><span>Test</span></UnderlineLink>))
    .to.throw("IconLink needs prop \"url\"");
  });
  it("throws an error when more than one components are passed", () => {
    expect(() => Enzyme.mount(<UnderlineLink><span>Test</span><span>Test2</span></UnderlineLink>))
    .to.throw("Please pass only one child into Link");
  });
});
