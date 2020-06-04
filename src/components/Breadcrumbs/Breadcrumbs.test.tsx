import * as Enzyme from "enzyme";
import * as React from "react";

import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;
    const breadcrumbString = [
        { url: "#", text: "test1" },
        { url: "#", text: "test2" },
    ];
    const breadcrumbComponent = [
        <a href="#test1" key="test1">
            <span>Hello</span>
        </a>,
        <a href="#test2" key="test2">
            Goodbye
        </a>,
    ];

    it("Renders a tag with custom text", () => {
        wrapper = Enzyme.shallow(
            <Breadcrumbs breadcrumbs={breadcrumbString} />
        );
        const links = wrapper.render();

        expect(links.find("a.breadcrumbs__link")).toHaveLength(2);
        expect(
            links
                .find("a.breadcrumbs__link")
                .first()
                .text()
        ).toBe("test1");
        expect(
            links
                .find("a.breadcrumbs__link")
                .last()
                .text()
        ).toBe("test2");
    });

    it("Renders breadcrumb when passed components", () => {
        wrapper = Enzyme.shallow(
            <Breadcrumbs breadcrumbs={breadcrumbComponent} />
        );
        const links = wrapper.render();
        expect(
            links
                .find("a.breadcrumbs__link")
                .first()
                .text()
        ).toBe("Hello");
    });

    it("Renders icon", () => {
        wrapper = Enzyme.shallow(
            <Breadcrumbs breadcrumbs={breadcrumbComponent} />
        );

        expect(wrapper.find("Icon")).toHaveLength(1);
    });

    it("Throws error when nothing is passed into Breadcrumb", () => {
        expect(() => Enzyme.mount(<Breadcrumbs breadcrumbs={[]} />)).toThrowError("Breadcrumbs must contain a set of links. Breadcrumbs currently empty");
    });
});
