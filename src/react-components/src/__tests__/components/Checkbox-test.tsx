import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Checkbox from "../../components/Checkbox/Checkbox";

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
});
