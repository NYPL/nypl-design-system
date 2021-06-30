import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import HelperErrorText from "./HelperErrorText";

describe("HelperErrorText Test", () => {
  it("Renders HelperErrorText", () => {
    const container = Enzyme.mount(
      <HelperErrorText id="helperTextWithLink" isError={false}>
        Text
      </HelperErrorText>
    );
    expect(container.exists("#helperTextWithLink")).to.equal(true);
  });

  it("Has 'error' modifier if error is passed", () => {
    const container = Enzyme.mount(
      <HelperErrorText id="helperTextWithLink" isError={true}>
        Text
      </HelperErrorText>
    );
    expect(container.exists("#helperTextWithLink")).to.equal(true);
  });

  it("Has aria-live and aria-atomic properties when errored", () => {
    const container = Enzyme.mount(
      <HelperErrorText id="helperTextWithLink" isError={true}>
        Text
      </HelperErrorText>
    );
    expect(container.find("div").props()["aria-live"]).to.equal("polite");
    expect(container.find("div").props()["aria-atomic"]).to.equal(true);
  });

  it("Accepts an aria-atomic value of false", () => {
    let container = Enzyme.mount(
      <HelperErrorText id="helperTextWithLink" isError={true}>
        Text
      </HelperErrorText>
    );
    // The default is "true".
    expect(container.find("div").props()["aria-atomic"]).to.equal(true);

    container = Enzyme.mount(
      <HelperErrorText
        id="helperTextWithLink"
        isError={true}
        ariaAtomic={false}
      >
        <p>
          This is static <span>but this part changes often!</span>
        </p>
      </HelperErrorText>
    );
    // But the prop accepts false in case only part of the helper text
    // should only be read instead of the whole region.
    expect(container.find("div").props()["aria-atomic"]).to.equal(false);
  });
});
