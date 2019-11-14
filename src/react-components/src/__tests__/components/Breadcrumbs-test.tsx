import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Breadcrumbs from "../../components/02-molecules/menus/Breadcrumbs/Breadcrumbs";

describe("Breadcrumbs", () => {
  let wrapper: Enzyme.ShallowWrapper<{}, {}>;
  let shortBreadcrumb = [{ url: "#", text: "test1" }, { url: "#", text: "test2" }];
  let components = [
    <a role="link" href="#test1"><span>Hello</span></a>, <a role="link" href="#test2">Goodbye</a>
  ];

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Breadcrumbs breadcrumbs={shortBreadcrumb} />);
  });

  it("Renders a tag with custom text", () => {
    wrapper = Enzyme.shallow(<Breadcrumbs breadcrumbs={shortBreadcrumb} />);
    let links = wrapper.render();

    expect(links.find("a.breadcrumbs__link")).to.have.lengthOf(2);
    expect(links.find("a.breadcrumbs__link").first().text()).to.equal("test1");
    expect(links.find("a.breadcrumbs__link").last().text()).to.equal("test2");
  });

  it("Renders breadcrumb when passed components", () => {
    wrapper = Enzyme.shallow(<Breadcrumbs breadcrumbs={components} />);
    let links = wrapper.render();
    expect(links.find("a.breadcrumbs__link").first().text()).to.equal("Hello");
  });
});
