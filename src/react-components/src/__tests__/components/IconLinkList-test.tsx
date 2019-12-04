
import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import IconLinkList from "../../components/03-organisms/IconLinkList/IconLinkList";

describe("IconLinkList", () => {
  let linkContent = [{ text: "link1", url: "#url1" }, { text: "link2", url: "#url2" }];
  let linkContentComponent = [<a href="#url">link1</a>, <a href="#url">link1</a>];
  let notLinkContent = [<span>link1</span>, <span>link1</span>];

  it("Generates a list of links with text and url", () => {
    let list = Enzyme.mount(<IconLinkList titleId="test" titleText="test" textLinks={linkContent} />);
    expect(list.find("a")).to.have.lengthOf(2);
  });

  it("Can pass in list of link-type objects", () => {
    let list = Enzyme.mount(<IconLinkList titleId="test" titleText="test" linkObjects={linkContentComponent} />);
    expect(list.find("a")).to.have.lengthOf(2);
  });

  it("Throws error when passed things that aren't links", () => {
    expect(() => Enzyme.mount(<IconLinkList titleId="test" titleText="test" linkObjects={notLinkContent} />))
    .to.throw("Please only pass in objects of type <a>");
  });
});
