import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Heading from "./Heading";
import { DisplaySizes } from "./HeadingDisplaySizes";

describe("Section Headings", () => {
  let wrapper: Enzyme.ShallowWrapper<any, any>;

  it("Shows heading", () => {
    wrapper = Enzyme.shallow(<Heading id="h1" level={1} text={"Heading 1"} />);
    expect(wrapper.find("h1")).to.have.lengthOf(1);
  });
  it("Can pass heading content as child", () => {
    wrapper = Enzyme.shallow(
      <Heading id="h1" level={1}>
        Text
      </Heading>
    );
    expect(wrapper.find("h1")).to.have.lengthOf(1);
  });

  // TODO: check that header children are links
  // it("Throws error when invalid heading is passed as child", () => {
  //   expect(() => Enzyme.mount(<Heading id="h1" level={3}><span>oh no</span></Heading>))
  //   .to.throw("Headings can only be plain text or bold");
  // });
  it("Can pass heading content as child span", () => {
    wrapper = Enzyme.shallow(
      <Heading id="h1" level={1}>
        <span>
          Text <b>hi</b>
        </span>
      </Heading>
    );
    expect(wrapper.find("h1")).to.have.lengthOf(1);
    expect(wrapper.find("span")).to.have.lengthOf(1);
  });
  it("uses child when both child and text are passed", () => {
    wrapper = Enzyme.shallow(
      <Heading id="h1" level={1} text={"Heading Text"}>
        Text
      </Heading>
    );
    expect(wrapper.find("h1")).to.have.lengthOf(1);
    expect(wrapper.find("h1").text()).to.equal("Text");
  });
  it("Has <a> tag when passed URL", () => {
    wrapper = Enzyme.shallow(
      <Heading id="h1" level={1} url="fake-url" text={"Heading 1"} />
    );

    expect(wrapper.find("h1")).to.have.lengthOf(1);
    expect(wrapper.find("a")).to.have.lengthOf(1);
  });
  it("<a> has class when passed urlClass", () => {
    wrapper = Enzyme.shallow(
      <Heading
        id="h1"
        level={1}
        url="fake-url"
        urlClass="fake-class"
        text={"Heading 1"}
      />
    );
    expect(wrapper.find("h1")).to.have.lengthOf(1);
    expect(wrapper.find("a").hasClass("fake-class")).to.equal(true);
  });
  it("Throws error when invalid heading number passed", () => {
    expect(() =>
      Enzyme.mount(<Heading id="h1" level={9} text={"Heading 9"} />)
    ).to.throw("Heading only supports levels 1-6");
  });
  it("Throws error when neither child nor text is passed", () => {
    expect(() => Enzyme.mount(<Heading id="h1" level={9} />)).to.throw(
      "Heading only supports levels 1-6"
    );
  });
  it("Throws error when heading with many children is passed", () => {
    expect(() =>
      Enzyme.shallow(
        <Heading id="h1" level={4}>
          <span>too</span>
          <span>many</span>
        </Heading>
      )
    ).to.throw("Please only pass one child into Heading, got span, span");
  });
  it("Uses custom display size", () => {
    wrapper = Enzyme.shallow(
      <Heading
        id="h1"
        level={1}
        text={"Heading with Secondary displaySize"}
        displaySize={DisplaySizes.Secondary}
      />
    );
    expect(wrapper.find("h1")).to.have.lengthOf(1);
    expect(wrapper.find("h1").hasClass("heading--secondary")).to.equal(true);
  });
});
