
import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";
import { stub } from "sinon";

import Accordion from "../../components/03-organisms/Accordion/Accordion";

describe("Renders Input (closed state)", () => {
  let container;
  let callback;
  before(() => {
    callback = stub();
    const container = Enzyme.mount(<Accordion
      id="accordion"
      buttonOptions={{ id: "accordionBtn", content: <>Click to expand</> }}
    > <div className="accordion-content">content content</div> </Accordion>);
  });

  it("Renders a button", () => {

  });
  it("does not render content", () => {

  });
});

describe.only("Renders Input (open state)", () => {
  let container;
  let callback;
  before(() => {
    callback = stub();
    const container = Enzyme.mount(<Accordion
      id="accordion"
      buttonOptions={{ id: "accordionBtn", content: <>Click to expand</> }}
    > <div className="accordion-content">content content</div> </Accordion>);
    container.find("#btn-accordionBtn").simulate("click");
  });

  it("Renders a button", () => {

  });
  it("Renders content", () => {

  });
});
