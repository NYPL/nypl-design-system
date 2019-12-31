import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";

import SearchBar from "../../components/02-molecules/SearchBar/SearchBar";

describe("Search Bar with Optional Parameters", () => {
  let wrapper: Enzyme.ShallowWrapper<{}, {}>;
  let searchCallback;
  let onChangeCallback;
  beforeEach(() => {
    searchCallback = stub();
    onChangeCallback = stub();
  });

  it("Search Bar has an input field and button", () => {
    let wrapper = Enzyme.shallow(<SearchBar searchBarId="id" buttonId="searchButtonId" searchSubmitHandler={searchCallback}/>);
    expect(wrapper.find("TextField")).to.have.lengthOf(1);
    expect(wrapper.find("Button")).to.have.lengthOf(1);
  });

  it("Search Bar calls callback on Submit ", () => {
    let mounted = Enzyme.mount(<SearchBar textFieldAriaLabel="searchBar" searchBarId="id" buttonId="searchButtonId" searchSubmitHandler={searchCallback}/>);
    mounted.find("Button").simulate("click");
    expect(searchCallback.callCount).to.equal(1);
  });

  it("SearchBar calls optional onChange property", () => {
    wrapper = Enzyme.shallow(<SearchBar textFieldAriaLabel="searchBar" searchBarId="id" buttonId="searchButtonId" searchChangeHandler={onChangeCallback} searchSubmitHandler={searchCallback}/>);
    wrapper.find("TextField").dive().find("input").simulate("change", { target: { value: "Hello" } });
    expect(onChangeCallback.callCount).to.equal(1);
  });

  it("Shows 'error' span when error is passed", () => {
    wrapper = Enzyme.shallow(<SearchBar searchBarId="id" buttonId="searchButtonId" hasError={true} errorMessage="test" searchSubmitHandler={searchCallback}/>);
    expect(wrapper.find(".search-bar__input-description--error")).to.have.lengthOf(1);
  });

  it("Throws error when hasError is true and no errorMessage is passed", () => {
    expect(() => Enzyme.mount(<SearchBar searchBarId="id" buttonId="searchButtonId" hasError={true} searchSubmitHandler={searchCallback}/>))
    .to.throw("If there is an error, there must also be an error message");
  });
});
