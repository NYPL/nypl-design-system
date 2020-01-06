
import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Pagination from "../../components/02-molecules/Menus/Pagination/Pagination";

describe("Pagination Test", () => {

  let wrapper: Enzyme.ShallowWrapper<{}, {}>;
  let previousCallback;
  let nextCallback;
  let changeCallback;
  let blurCallback;

  beforeEach(() => {
    previousCallback = stub();
    nextCallback = stub();
    changeCallback = stub();
    blurCallback = stub();
  });

  it("Renders two buttons and a Select", () => {
    wrapper = Enzyme.shallow(<Pagination
      totalPages={10}
      previousPageHandler={previousCallback}
      nextPageHandler={nextCallback}
      onSelectChange={changeCallback}
      onSelectBlur={blurCallback} />
    );
    expect(wrapper.find("Button")).to.have.lengthOf(2);
    expect(wrapper.find("Dropdown")).to.have.lengthOf(1);
  });

  it("Renders two buttons and a Select when there are zero pages", () => {
    wrapper = Enzyme.shallow(<Pagination
      totalPages={0}
      previousPageHandler={previousCallback}
      nextPageHandler={nextCallback}
      onSelectChange={changeCallback}
      onSelectBlur={blurCallback} />
    );
    expect(wrapper.find("Button")).to.have.lengthOf(2);
    expect(wrapper.find("Dropdown")).to.have.lengthOf(1);
  });
});
