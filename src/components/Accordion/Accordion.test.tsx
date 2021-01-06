import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Accordion from "./Accordion";

describe("Accordion", () => {
  let container;
  before(() => {
    container = Enzyme.mount(
      <Accordion
        id="accordion"
        inputId="accordionBtn"
        accordionLabel="Click to expand"
      >
        <p className="accordion-content">this is the accordion content</p>
      </Accordion>
    );
  });

  it("Renders an input checkbox and label", () => {
    expect(container.find("input").exists()).to.equal(true);
    expect(container.find(".accordion__label").text()).to.contain(
      "Click to expand"
    );
  });
});
