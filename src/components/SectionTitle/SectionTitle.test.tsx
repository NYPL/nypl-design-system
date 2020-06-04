import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import SectionTitle from "./SectionTitle";

describe("Section Title", () => {
    it("Shows SectionTitle with link", () => {
        const mounted = Enzyme.mount(
            <SectionTitle
                id={"test-section-title"}
                headingText={"Heading 1"}
                linkUrl="#heading2"
            />
        );
        expect(mounted.find("h2")).to.have.lengthOf(1);
        expect(mounted.find("a")).to.have.lengthOf(1);
    });

    it("Shows SectionTitle without link", () => {
        const mounted = Enzyme.mount(
            <SectionTitle id={"test-section-title"} headingText={"Heading 1"} />
        );
        expect(mounted.find("h2")).to.have.lengthOf(1);
    });

    it("SectionTitle throws error when text is too long", () => {
        expect(() =>
            Enzyme.mount(
                <SectionTitle
                    id={"test-section-title"}
                    headingText={
                        "Cupcake ipsum dolor sit amet. Lemon drops pie jelly beans topping jelly-o caramels cake tiramisu powder."
                    }
                />
            )
        ).to.throw("Section Title (h2) Text must be fewer than 80 characters");
    });
});
