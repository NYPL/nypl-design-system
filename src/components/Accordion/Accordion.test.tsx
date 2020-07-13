import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Accordion from "./Accordion";

describe("Renders Accordion (closed state)", () => {
    let container: Enzyme.ReactWrapper<
        any,
        Readonly<{}>,
        React.Component<{}, {}, any>
    >;
    before(() => {
        container = Enzyme.mount(
            <Accordion
                id="accordion"
                accordionLabel="Click to expand"
                labelId="accordionBtn"
            >
                <div className="accordion-content">content content</div>
            </Accordion>
        );
    });

    it("Renders a button", () => {
        expect(container.find("Button").exists()).to.equal(true);
    });
    it("does not render content", () => {
        expect(container.find(".accordion-content").exists()).to.equal(false);
    });
});

describe("Renders Accordion (open state)", () => {
    let container: Enzyme.ReactWrapper<
        any,
        Readonly<{}>,
        React.Component<{}, {}, any>
    >;
    before(() => {
        container = Enzyme.mount(
            <Accordion
                accordionLabel="Click to expand"
                id="accordion"
                labelId="accordionBtn"
            >
                content content
            </Accordion>
        );
        container.find("#accordion").simulate("click");
    });

    it("Renders a button", () => {
        expect(container.find("Button").exists()).to.equal(true);
    });
    it("Renders content", () => {
        expect(container.find(".accordion-content").exists()).to.equal(true);
    });
});
