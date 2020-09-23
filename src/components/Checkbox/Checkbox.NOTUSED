import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Checkbox from "./Checkbox";

describe("Checkbox Test", () => {
    it("Renders Checkbox", () => {
        let callback = stub();

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

    it("Updates its check value based on the `isSelected` prop", () => {
        let callback = stub();

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

        // `false` by default.
        expect(container.find("input").prop("defaultChecked")).to.equal(false);

        container.setProps({ isSelected: true });
        expect(container.find("input").prop("defaultChecked")).to.equal(true);
    });

    it("Passes the ref to the input element", () => {
        const ref = React.createRef<HTMLInputElement>();
        let callback = stub();
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
