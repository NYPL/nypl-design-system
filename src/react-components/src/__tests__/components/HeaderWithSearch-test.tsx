
import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import HeaderWithSearch from "../../components/03-organisms/Headers/HeaderWithSearch";

describe("HeaderWithSearch", () => {

  let blurCallback;
  let changeCallback;
  let submitCallback;

  beforeEach(() => {
    changeCallback = stub();
    blurCallback = stub();
  });

  it("Generates a Header and a Searchbar", () => {
    let wrapper = Enzyme.shallow(<HeaderWithSearch
      searchButtonId="searchButtonId"
      searchBarAriaLabel="Search research catalog"
      advancedSearchElem={<span>hello</span>}
      searchBarId="searchBarId"
      dropdownId="dropdownId"
      textFieldAriaLabel="Research Now"
      headingContent={<span>Research<span className={"rn-section-title__emphasis"}>Now</span></span>}
      headingId="researchNow-page-title-id"
      headingUrl="#research-now-url"
      headingBaseClass="rn-section-title"
      searchDropdownOptions={["Keyword", "Author", "Subject"]}
      searchSubmitHandler={submitCallback}
      selectChangeHandler={changeCallback}
      selectBlurHandler={blurCallback} />);
    expect(wrapper.find("RNSectionTitle")).to.have.lengthOf(1);
    expect(wrapper.find("SearchBar")).to.have.lengthOf(1);
  });
});
