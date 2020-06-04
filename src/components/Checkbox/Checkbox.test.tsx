import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Checkbox from "./Checkbox";

describe("Checkbox Test", () => {
    it("Renders Checkbox", () => {
        const callback = jest.fn();

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
