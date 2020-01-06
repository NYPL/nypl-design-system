import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";

import * as Mocha from "mocha";

import Dropdown from "../../components/02-molecules/Dropdown/Dropdown";

describe("Dropdown", () => {
  let wrapper: Enzyme.ShallowWrapper<{}, {}>;
  let blurCallback;
  let changeCallback;

  beforeEach(() => {
    changeCallback = stub();
    blurCallback = stub();
  });

  it("renders Select with Label", () => {

  });

  it("does not render Label if labelPosition is none", () => {

  });

  it("rejects invalid labelPosition", () => {

  });

  it("adds appropriate modifier if labelPosition is 'top'", () => {

  });

  it("renders 'required' component if Required", () => {

  });

  it("renders HelperContent if passed", () => { });

  it("throws error if HelperContent is passed without an id", () => { });
  it("renders errorText if passed", () => { });
  it("throws error if passed error with no content", () => { });

});
