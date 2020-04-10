import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Input from "../../components/01-atoms/Forms/Input";

describe("Renders Input", () => {
  let container;
  before(() => {
    container = Enzyme.mount(<Input labelId="label-input"
    labelContent={<>Label</>}
    inputId="input"
    isRequired={false}
  ></Input>);
  });

  it("Renders label for inputId", () => {
    expect(container.find("label").exists()).to.equal(true);
    expect(container.find("label").prop("htmlFor")).to.equal("input");
  });
  it("Renters TextField", () => {
    expect(container.find("input").exists()).to.equal(true);
  });
  it("Does not render helper if none is passed", () => {
    expect(container.find("HelperErrorText").exists()).to.equal(false);
  });
});

describe("Input with Helper and Error", () => {
  let container;
  before(() => {
    container = Enzyme.mount(<Input labelId="label-input"
    labelContent={<>Label</>}
    inputId="input"
    isRequired={true}
    helperContentOpts={{id: "input-helper", content: <>This is some helpful text</>}}
    errorContentOpts={{id: "input-error", content: <>Error Message Lorem Ipsum</>}}
    showError={true}></Input>);
  });

  it("Renders label for inputId", () => {
    expect(container.find("label").exists()).to.equal(true);
    expect(container.find("label").prop("htmlFor")).to.equal("input");
  });
  it("Renters TextField", () => {
    expect(container.find("input").exists()).to.equal(true);
  });
  it("Renders Helper", () => {
    expect(container.find("#input-helper").exists()).to.equal(true);
  });
  it("Renders error", () => {
    expect(container.find("#input-helper").exists()).to.equal(true);
  });
});

describe("input errors", () => {
  it("throws error if showError is passed without content", () => {
    expect(() => Enzyme.mount(<Input labelId="label-input"
    labelContent={<>Label</>}
    inputId="input"
    isRequired={true}
    showError={true}></Input>))
    .to.throw("Error should be shown, but no errorContentOpts passed");
  });
});
