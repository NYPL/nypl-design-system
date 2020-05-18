import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import Template from "../../components/Template/Template";
import { LayoutTypes } from "../../components/Template/LayoutTypes";
import Placeholder from "../../components/00-base/Placeholder";

import * as Mocha from "mocha";

describe("Template Test", () => {
  let wrapper: Enzyme.ShallowWrapper<{}, {}>;

  it("Generates a full width Template", () => {
    let wrapper = Enzyme.shallow(
      <Template
        layoutType={LayoutTypes.FullWidth}
        headerContent={<Placeholder>Header</Placeholder>}
        primaryContent={<Placeholder>Main Content</Placeholder>}
        footerContent={<Placeholder>Footer</Placeholder>}
      ></Template>
    );
    expect(wrapper.prop("className")).to.equal("layout-container");
  });

  it("Generates a template with a left sidebar", () => {
    let wrapper = Enzyme.shallow(
      <Template
        layoutType={LayoutTypes.SidebarLeft}
        headerContent={<Placeholder>Header</Placeholder>}
        heroContent={<Placeholder>Hero</Placeholder>}
        leftSidebarContent={<Placeholder>Left Sidebar</Placeholder>}
        primaryContent={<Placeholder>Main Content</Placeholder>}
        footerContent={<Placeholder>Footer</Placeholder>}
      ></Template>
    );
    expect(
      wrapper.find(".content-secondary--with-sidebar-left")
    ).to.have.lengthOf(1);
  });

  it("Generates a template with a right sidebar", () => {
    let wrapper = Enzyme.shallow(
      <Template
        layoutType={LayoutTypes.SidebarRight}
        headerContent={<Placeholder>Header</Placeholder>}
        heroContent={<Placeholder>Hero</Placeholder>}
        rightSidebarContent={<Placeholder>Right Sidebar</Placeholder>}
        primaryContent={<Placeholder>Main Content</Placeholder>}
        footerContent={<Placeholder>Footer</Placeholder>}
      ></Template>
    );
    expect(
      wrapper.find(".content-secondary--with-sidebar-right")
    ).to.have.lengthOf(1);
  });
});
