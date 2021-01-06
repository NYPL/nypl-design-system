import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Label from "./Label";

describe("Label Test", () => {
  let wrapper: Enzyme.ShallowWrapper<any, any>;
  it("Renders a <label> when passed text as children", () => {
    wrapper = Enzyme.shallow(
      <Label id="label" htmlFor="so-lonely">
        {"Cupcake's"}
      </Label>
    );
    expect(wrapper.find("label")).to.have.lengthOf(1);
  });

  it("Renders a <label> when passed element as children", () => {
    wrapper = Enzyme.shallow(
      <Label id="label" htmlFor="so-lonely">
        <span>Cupcakes</span>
      </Label>
    );
    expect(wrapper.find("label")).to.have.lengthOf(1);
  });

  it("Renders the optional or required helper text", () => {
    wrapper = Enzyme.shallow(
      <Label id="label" htmlFor="so-lonely">
        <span>Cupcakes</span>
      </Label>
    );
    expect(wrapper.find("div")).to.have.lengthOf(0);

    wrapper = Enzyme.shallow(
      <Label id="label" htmlFor="so-lonely" optReqFlag="Optional">
        <span>Cupcakes</span>
      </Label>
    );
    expect(wrapper.find("div")).to.have.lengthOf(1);
    expect(wrapper.find("div").text()).to.equal("Optional");

    wrapper = Enzyme.shallow(
      <Label id="label" htmlFor="so-lonely" optReqFlag="Required">
        <span>Cupcakes</span>
      </Label>
    );
    expect(wrapper.find("div")).to.have.lengthOf(1);
    expect(wrapper.find("div").text()).to.equal("Required");
  });
});
