import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Breadcrumbs from "../../components/02-molecules/menus/Breadcrumbs/Breadcrumbs";

describe("Breadcrumbs", () => {
  let wrapper: Enzyme.ShallowWrapper<{}, {}>;
  let breadcrumbString = [{ url: "#", text: "test1" }, { url: "#", text: "test2" }];
  let breadcrumbComponent = [
    <a role="link" href="#test1"><span>Hello</span></a>, <a role="link" href="#test2">Goodbye</a>
  ];

  it("Renders a tag with custom text", () => {
    wrapper = Enzyme.shallow(<Breadcrumbs breadcrumbs={breadcrumbString} />);
    let links = wrapper.render();

    expect(links.find("a.breadcrumbs__link")).to.have.lengthOf(2);
    expect(links.find("a.breadcrumbs__link").first().text()).to.equal("test1");
    expect(links.find("a.breadcrumbs__link").last().text()).to.equal("test2");
  });

  it("Renders breadcrumb when passed components", () => {
    wrapper = Enzyme.shallow(<Breadcrumbs breadcrumbs={breadcrumbComponent} />);
    let links = wrapper.render();
    expect(links.find("a.breadcrumbs__link").first().text()).to.equal("Hello");
  });

  it("Renders icon", () => {
    wrapper = Enzyme.shallow(<Breadcrumbs breadcrumbs={breadcrumbComponent} />);
    let links = wrapper.render();

    expect(links.find("svg")).to.have.lengthOf(1);
  });
  it("Throws error when nothing is passed into Breadcrumb", () => {
    expect(() => Enzyme.mount(<Breadcrumbs breadcrumbs={[]} />))
    .to.throw("Breadcrumbs cannot be empty");
  });
});
