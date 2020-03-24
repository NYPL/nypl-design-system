
import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import HelperErrorText from "../../components/01-atoms/Forms/HelperErrorText";

describe("HelperErrorText Test", () => {
  it("Throws error when HElperErrorText is called with no content", () => {
    expect(() => Enzyme.mount(<HelperErrorText id="helperTextWithLink"
    isError={false}/>))
    .to.throw("Helper and Error Text must have content, or else it should not be used");
  });
});
