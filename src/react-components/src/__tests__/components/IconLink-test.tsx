import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import IconLink from "../../components/IconLink/IconLink";

describe("Link With Icon", () => {
    let wrapper: Enzyme.ReactWrapper<{}, {}>;

    it("Can pass in left icon", () => {
        wrapper = Enzyme.mount(
            <IconLink iconPosition="left" url="#test">
                Test
            </IconLink>
        );
        expect(wrapper.find("a")).to.have.lengthOf(1);
        expect(wrapper.find("Icon")).to.have.lengthOf(1);
    });
    it("Can pass in right icon", () => {
        wrapper = Enzyme.mount(
            <IconLink iconPosition="right" url="#test">
                Test
            </IconLink>
        );
        expect(wrapper.find("a")).to.have.lengthOf(1);
        expect(wrapper.find("Icon")).to.have.lengthOf(1);
    });
    it("Can pass a link with <a> tag and an icon", () => {
        wrapper = Enzyme.mount(
            <IconLink iconPosition="left">
                <a href="#test">Test</a>
            </IconLink>
        );
        expect(wrapper.find("a")).to.have.lengthOf(1);
        expect(wrapper.find("Icon")).to.have.lengthOf(1);
    });
    it("Can pass in icon, text as child and url as props", () => {
        wrapper = Enzyme.mount(
            <IconLink iconPosition="left" url="#test">
                Test
            </IconLink>
        );
        expect(wrapper.find("a")).to.have.lengthOf(1);
        expect(wrapper.find("Icon")).to.have.lengthOf(1);
    });
    it("Can pass in no icon", () => {
        wrapper = Enzyme.mount(<IconLink url="#test">Test</IconLink>);
        expect(wrapper.find("a")).to.have.lengthOf(1);
        expect(wrapper.find("Icon")).to.have.lengthOf(0);
    });
    it("throws an error when icon is badly formed", () => {
        expect(() =>
            Enzyme.mount(
                <IconLink iconPosition="center" url="#test">
                    Test
                </IconLink>
            )
        ).to.throw("iconPosition can only have values 'left' or 'right'");
    });
});
