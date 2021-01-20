import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";

import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  let searchBarSubmit, buttonCallback;
  beforeEach(() => {
    searchBarSubmit = stub();
  });

  it("Renders SearchBar", () => {
    const wrapper = Enzyme.shallow(
      <SearchBar id="id" ariaLabel="searchbar" onSubmit={searchBarSubmit} />
    );
    expect(wrapper.find(".searchbar")).to.have.lengthOf(1);
    expect(wrapper.find(".searchbar").prop("aria-label")).to.equal("searchbar");
  });

  it("Search Bar calls call back on Submit ", () => {
    const mounted = Enzyme.mount(
      <SearchBar ariaLabel="searchBar" id="id" onSubmit={searchBarSubmit}>
        <Button
          buttonType={ButtonTypes.Primary}
          id="button"
          onClick={buttonCallback}
          type="submit"
        >
          Search
        </Button>
      </SearchBar>
    );
    mounted.find("Button").simulate("click");
    expect(searchBarSubmit.callCount).to.equal(1);
  });
});
