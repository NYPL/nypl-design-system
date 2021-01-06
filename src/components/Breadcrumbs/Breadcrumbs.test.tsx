import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs", () => {
  let wrapper: Enzyme.ShallowWrapper<any, any>;
  const breadcrumbString = [
    { url: "#", text: "test1" },
    { url: "#", text: "test2" },
  ];
  const breadcrumbComponent = [
    <a key="link1" href="#test1">
      <span>Hello</span>
    </a>,
    <a key="link2" href="#test2">
      Goodbye
    </a>,
  ];

  it("Renders a tag with custom text", () => {
    wrapper = Enzyme.shallow(<Breadcrumbs breadcrumbs={breadcrumbString} />);
    const links = wrapper.render();

    expect(links.find("a.breadcrumbs__link")).to.have.lengthOf(2);
    expect(links.find("a.breadcrumbs__link").first().text()).to.equal("test1");
    expect(links.find("a.breadcrumbs__link").last().text()).to.equal("test2");
  });

  it("Renders breadcrumb when passed components", () => {
    wrapper = Enzyme.shallow(<Breadcrumbs breadcrumbs={breadcrumbComponent} />);
    const links = wrapper.render();
    expect(links.find("a.breadcrumbs__link").first().text()).to.equal("Hello");
  });

  it("Renders icon", () => {
    wrapper = Enzyme.shallow(<Breadcrumbs breadcrumbs={breadcrumbComponent} />);

    expect(wrapper.find("Icon")).to.have.lengthOf(1);
  });

  it("Throws error when nothing is passed into Breadcrumb", () => {
    expect(() => Enzyme.mount(<Breadcrumbs breadcrumbs={[]} />)).to.throw(
      "Breadcrumbs must contain a set of links. Breadcrumbs currently empty"
    );
  });
});
