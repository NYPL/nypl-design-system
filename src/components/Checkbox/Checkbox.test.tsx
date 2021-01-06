import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";

import Checkbox from "./Checkbox";

describe("Checkbox Test", () => {
  it("Renders Checkbox", () => {
    const callback = stub();

    const container = Enzyme.mount(
      <Checkbox
        checkboxId="checkbox"
        labelOptions={{
          id: "label",
          labelContent: <>Label Text</>,
        }}
        onChange={callback}
      />
    );
    expect(container.exists("#checkbox")).to.equal(true);
  });

  it("Updates its check value based on the `checked` prop", () => {
    const callback = stub();

    const container = Enzyme.mount(
      <Checkbox
        checked={false}
        checkboxId="checkbox"
        labelOptions={{
          id: "label",
          labelContent: <>Label Text</>,
        }}
        onChange={callback}
      />
    );
    // `false` by default.
    expect(container.find("input").prop("checked")).to.equal(false);
    // Set to true
    container.setProps({ checked: true });
    expect(container.find("input").prop("checked")).to.equal(true);
  });

  it("Passes the ref to the input element", () => {
    const ref = React.createRef<HTMLInputElement>();
    const callback = stub();
    const container = Enzyme.mount(
      <Checkbox
        checkboxId="CheckboxID-attributes"
        labelOptions={{
          id: "label",
          labelContent: <>Label Text</>,
        }}
        onChange={callback}
        ref={ref}
      ></Checkbox>
    );
    expect(container.find("input").instance()).to.equal(ref.current);
  });
});
