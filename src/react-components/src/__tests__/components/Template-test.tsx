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
    let wrapper = Enzyme.shallow(<Template
      layoutType={LayoutTypes.FullWidth}
      headerContent={<Placeholder>Header</Placeholder>}
      primaryContent={<Placeholder>Main Content</Placeholder>}
      footerContent={<Placeholder>Footer</Placeholder>}
    ></Template>);
    expect(wrapper.prop("className")).to.equal("layout-container");
  });
});

// Generates "default template", the skeleton
// Generates a full width template
// Generates a template with left sidebar
// Generates a template with right sidebar
