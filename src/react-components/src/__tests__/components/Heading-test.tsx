
import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Heading from "../../components/01-atoms/Text/Headings/Heading";

describe("Section Headings", () => {
  let wrapper: Enzyme.ShallowWrapper<{}, {}>;

  it("Shows heading", () => {
    wrapper = Enzyme.shallow(<Heading id="h1" level={1} text={"Heading 1"} />);
    expect(wrapper.find("h1")).to.have.lengthOf(1);
  });
  it("Throws error when invalid heading number passed", () => {
    expect(() => Enzyme.mount(<Heading id="h1" level={9} text={"Heading 9"} />))
      .to.throw("Heading only supports levels 1-6");
  });
  it("Can pass heading content as child", () => {
    wrapper = Enzyme.shallow(<Heading id="h1" level={1}>Text</Heading>);
    expect(wrapper.find("h1")).to.have.lengthOf(1);
  });
  it("Can pass heading content as child span", () => {
    wrapper = Enzyme.shallow(<Heading id="h1" level={1}>Text <span>hi</span></Heading>);
    expect(wrapper.find("h1")).to.have.lengthOf(1);
  });
  it("Has <a> tag when passed URL", () => {
    wrapper = Enzyme.shallow(<Heading id="h1" level={1} url="fake-url" text={"Heading 1"} />);

    expect(wrapper.find("h1")).to.have.lengthOf(1);
    expect(wrapper.find("a")).to.have.lengthOf(1);
  });
  it("<a> has class when passed urlClass", () => {
    wrapper = Enzyme.shallow(<Heading id="h1" level={1} url="fake-url" urlClass="fake-class" text={"Heading 1"} />);
    expect(wrapper.find("h1")).to.have.lengthOf(1);
    expect(wrapper.find("a").hasClass("fake-class")).to.equal(true);
  }
  );
});
