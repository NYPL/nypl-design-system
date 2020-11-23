import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Accordion from "./Accordion";

describe("Renders Input (closed state)", () => {
    let container;
    before(() => {
        container = Enzyme.mount(
            <Accordion
                id="accordion"
                inputId="accordionBtn"
                accordionLabel="Click to expand"
            >
                <div className="accordion-content">
                    this is the accordion content
                </div>
            </Accordion>
        );
    });

    it("Renders an input", () => {
        expect(container.find("input").exists()).to.equal(true);
    });
    // TODO:
    // it("renders content but is hidden", () => {});
});

describe("Renders Input (open state)", () => {
    let container: Enzyme.ReactWrapper<
        any,
        Readonly<{}>,
        React.Component<{}, {}, any>
    >;
    before(() => {
        container = Enzyme.mount(
            <Accordion
                id="accordion"
                inputId="accordionBtn2"
                accordionLabel="Click to expand"
            >
                <div className="accordion-content">content content</div>
            </Accordion>
        );
        container.find("input").simulate("click");
    });

    it("Renders an input", () => {
        expect(container.find("input").exists()).to.equal(true);
    });
    // TODO:
    // it("Renders content and is visible", () => {});
});
