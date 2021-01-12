import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  let container;
  before(() => {
    container = Enzyme.mount(
      <Dropdown
        id="dropdown"
        inputId="dropdownBtn"
        dropdownLabel="Click to expand"
      />
    );
  });

  it("Renders an input checkbox and label", () => {
    expect(container.find("input").exists()).to.equal(true);
    expect(container.find(".dropdown__label").text()).to.contain(
      "Click to expand"
    );
  });
});
