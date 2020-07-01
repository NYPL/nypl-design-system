import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Accordion from "./Accordion";

describe("Renders Input (closed state)", () => {
    let container: Enzyme.ReactWrapper<
        any,
        Readonly<{}>,
        React.Component<{}, {}, any>
    >;
    before(() => {
        container = Enzyme.mount(
            <Accordion
                id="accordion"
                buttonOptions={{
                    id: "accordionBtn",
                    content: <>Click to expand</>,
                }}
            >
                {" "}
                <div className="accordion-content">content content</div>{" "}
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
                buttonOptions={{
                    id: "accordionBtn",
                    content: <>Click to expand</>,
                }}
            >
                {" "}
                <div className="accordion-content">content content</div>{" "}
            </Accordion>
        );
        container.find("#btn-accordionBtn").simulate("click");
    });

    it("Renders a button", () => {
        expect(container.find("Button").exists()).to.equal(true);
    });
    it("Renders content", () => {
        expect(container.find(".accordion-content").exists()).to.equal(true);
    });
});
