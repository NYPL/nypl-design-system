
import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import HelperErrorText from "../../components/01-atoms/Forms/HelperErrorText";

describe("HelperErrorText Test", () => {
  it("Throws error when HelperErrorText is called with no content", () => {
    expect(() => Enzyme.mount(<HelperErrorText id="helperTextWithLink"
    isError={false}/>))
    .to.throw("Expected any of the following to exist, but found none[null,null]");
  });
});
