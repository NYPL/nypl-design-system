
import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Label from "../../components/01-atoms/Forms/Label";

describe("Label Test", () => {
  let wrapper: Enzyme.ShallowWrapper<{}, {}>;
  it("Renders a <label> when passed text as children", () => {
    wrapper = Enzyme.shallow(<Label id="label" referenceId="so-lonely">Cupcake's</Label>);
    expect(wrapper.find("label")).to.have.lengthOf(1);
  });

  it("Renders a <label> when passed text as prop", () => {
    wrapper = Enzyme.shallow(<Label id="label" referenceId="so-lonely" labelText="cupcakes" />);
    expect(wrapper.find("label")).to.have.lengthOf(1);
  });

  it("Renders a <label> when passed element as children", () => {
    wrapper = Enzyme.shallow(<Label id="label" referenceId="so-lonely"><span>Cupcakes</span></Label>);
    expect(wrapper.find("label")).to.have.lengthOf(1);
  });

  it("if both <label> children and labelText prop are passed, use labelText", () => {
    wrapper = Enzyme.shallow(<Label id="label" referenceId="so-lonely" labelText="cupcakes" >muffins</Label>);
    expect(wrapper.find("label")).to.have.lengthOf(1);
    expect(wrapper.find("label").text()).to.equal("cupcakes");
  });

  it("Throws error when neither text nor children are passed", () => {
    expect(() => Enzyme.mount(<Label id="label" referenceId="so-lonely" />))
    .to.throw("Label must have content passed as labelText or children.  Got labelText: undefined and children: undefined");
  });
});
