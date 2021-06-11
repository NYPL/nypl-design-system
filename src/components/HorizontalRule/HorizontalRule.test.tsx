import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import HorizontalRule from "./HorizontalRule";

describe("HorizontalRule: check for basic element", () => {
  let container;
  before(() => {
    container = Enzyme.mount(<HorizontalRule />);
  });

  it("Renders HorizontalRule component", () => {
    expect(container.find("hr").exists()).to.equal(true);
  });
});

describe("HorizontalRule: check for custom class", () => {
  let container;
  before(() => {
    container = Enzyme.mount(<HorizontalRule className={"custom-hr"} />);
  });

  it("Renders HorizontalRule component", () => {
    expect(container.find("hr").exists()).to.equal(true);
  });

  it("Renders with proper custom class", () => {
    expect(container.find("hr").hasClass("custom-hr")).to.equal(true);
  });
});

describe("HorizontalRule: check for custom dimensions", () => {
  let container;
  before(() => {
    container = Enzyme.mount(
      <HorizontalRule className={"custom-hr"} width={"720px"} height={"5rem"} />
    );
  });

  it("Renders HorizontalRule component", () => {
    expect(container.find("hr").exists()).to.equal(true);
  });

  it("Renders with correct width and height values", () => {
    expect(container.find("hr").get(0).props.style).to.have.property(
      "width",
      "720px"
    );
    expect(container.find("hr").get(0).props.style).to.have.property(
      "height",
      "5rem"
    );
  });
});

describe("HorizontalRule: check for custom width and custom alignment", () => {
  let container;
  before(() => {
    container = Enzyme.mount(
      <HorizontalRule className={"custom-hr"} width={"80%"} align={"left"} />
    );
  });

  it("Renders HorizontalRule component", () => {
    expect(container.find("hr").exists()).to.equal(true);
  });

  it("Renders with correct width and height values", () => {
    expect(container.find("hr").get(0).props.style).to.have.property(
      "width",
      "80%"
    );
    expect(container.find("hr").get(0).props.style).to.have.property(
      "height",
      "2px"
    );
  });

  it("Renders with correct alignment", () => {
    expect(container.find("hr").hasClass("horizontal-rule--left")).to.equal(
      true
    );
  });
});
