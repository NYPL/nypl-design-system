import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Breadcrumbs from "../../components/02-molecules/menus/Breadcrumb/Breadcrumb";

describe("Breadcrumbs", () => {
  let wrapper: Enzyme.ShallowWrapper<{}, {}>;
  let shortBreadcrumb = [{ url: "#", text: "test1" }, { url: "#", text: "test2" }];

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Breadcrumbs breadcrumbs={shortBreadcrumb} />);
  });

  it("optionally renders custom text", () => {
    let links = wrapper.render();

    expect(links.find("a")).to.have.lengthOf(2);
    expect(links.find("a").first().text()).to.equal("test1");
    expect(links.find("a").last().text()).to.equal("test2");

  });
});
