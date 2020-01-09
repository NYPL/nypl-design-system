
import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import RNHeaderWithSearch from "../../components/03-organisms/Headers/RNHeaderWithSearch";

describe("HeaderWithSearch", () => {

  let blurCallback;
  let changeCallback;
  let submitCallback;

  beforeEach(() => {
    changeCallback = stub();
    blurCallback = stub();
  });

  it("Generates a Header and a Searchbar", () => {
    let wrapper = Enzyme.shallow(<RNHeaderWithSearch
      searchButtonId="searchButtonId"
      searchBarAriaLabel="Search research catalog"
      advancedSearchElem={<span>hello</span>}
      searchBarId="searchBarId"
      dropdownId="dropdownId"
      textFieldAriaLabel="Research Now"
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
