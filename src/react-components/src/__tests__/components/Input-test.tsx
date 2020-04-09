
import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Input from "../../components/01-atoms/Forms/Input";

describe("Renders Input", () => {
  before(() => {
    const container = Enzyme.mount(<Input labelId="blah"
    labelContent={<>Label</>}
    inputId="blah"
    isRequired={false}
  ></Input>);
  });

  it("Renders label", () => {

  });
  it("Renters TextField", () => {

  });
  it("Renders Helper", () => {

  });
});
