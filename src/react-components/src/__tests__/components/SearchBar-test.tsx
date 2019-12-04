import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";

import * as Mocha from "mocha";

import SearchBar from "../../components/02-molecules/search-bar/SearchBar";

describe("Search Bar", () => {
  let wrapper: Enzyme.ShallowWrapper<{}, {}>;
  let searchCallback;
  beforeEach(() => {
    searchCallback = stub();
  });

  it("Search Bar has an input field and button", () => {
    let wrapper = Enzyme.shallow(<SearchBar id="id" searchHandler={searchCallback}/>);
    expect(wrapper.find("TextField")).to.have.lengthOf(1);
    expect(wrapper.find("Button")).to.have.lengthOf(1);
  });

  it("Search Bar calls callback on Submit ", () => {
    wrapper = Enzyme.shallow(<SearchBar id="id" searchHandler={searchCallback}/>);
    wrapper.find("Button").dive().find("button").simulate("click");
    expect(searchCallback.callCount).to.equal(1);
  });

  it("SearchBar calls optional onChange property", () => {
    let onChangeCallback = stub();
    wrapper = Enzyme.shallow(<SearchBar id="id" changeHandler={onChangeCallback} searchHandler={searchCallback}/>);
    wrapper.find("TextField").dive().find("input").simulate("change", { target: { value: "Hello" } });
    expect(onChangeCallback.callCount).to.equal(1);
  });
});
