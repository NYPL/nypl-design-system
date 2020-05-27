import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Link from "../../components/Link/Link";
import Icon from "../../components/Icons/Icon";

describe("Link", () => {
    let wrapper: Enzyme.ReactWrapper<{}, {}>;

    it("Can pass in icon, text as child and url as props", () => {
        wrapper = Enzyme.mount(
            <Link url="#test">
                Test
                <Icon
                    name="arrow_xsmall"
                    blockName="more-link"
                    modifiers={["right"]}
                    decorative={true}
                ></Icon>
            </Link>
        );
        expect(wrapper.find("a")).to.have.lengthOf(1);
        expect(wrapper.find("Icon")).to.have.lengthOf(1);
    });

    it("Can pass a link with <a> tag", () => {
        wrapper = Enzyme.mount(
            <Link>
                <a href="#test">Test</a>
            </Link>
        );
        expect(wrapper.find("a")).to.have.lengthOf(1);
    });

    it("Can pass a link with <a> tag and an icon", () => {
        wrapper = Enzyme.mount(
            <Link>
                <a href="#test">Test</a>
                <Icon
                    name="arrow_xsmall"
                    blockName="more-link"
                    modifiers={["right"]}
                    decorative={true}
                ></Icon>
            </Link>
        );
        expect(wrapper.find("a")).to.have.lengthOf(1);
        expect(wrapper.find("Icon")).to.have.lengthOf(1);
    });

    it("Can pass in left icon", () => {
        wrapper = Enzyme.mount(
            <Link url="#nice-url">
                <Icon
                    name="arrow_xsmall"
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                ></Icon>
                content
            </Link>
        );
        expect(
            wrapper.find(".more-link__icon").hasClass("more-link__icon--left")
        ).to.equal(true);
    });

    it("Can pass in right icon", () => {
        wrapper = Enzyme.mount(
            <Link url="#whatever">
                content
                <Icon
                    name="arrow_xsmall"
                    blockName="more-link"
                    modifiers={["right"]}
                    decorative={true}
                ></Icon>
            </Link>
        );
        expect(
            wrapper.find(".more-link__icon").hasClass("more-link__icon--right")
        ).to.equal(true);
    });

    it("Can pass in text as child and url as props", () => {
        wrapper = Enzyme.mount(<Link url="#test">Test</Link>);
        expect(wrapper.find("a")).to.have.lengthOf(1);
    });

    it("throws an error if text is passed but no url is passed", () => {
        expect(() => Enzyme.mount(<Link>Test</Link>)).to.throw(
            "Link needs prop 'url'"
        );
    });

    // it("throws an error when icon is badly formed", () => {
    //     expect(() =>
    //         Enzyme.mount(
    //             <IconLink iconPosition="center" url="#test">
    //                 Test
    //             </IconLink>
    //         )
    //     ).to.throw("iconPosition can only have values 'left' or 'right'");
    // });
});
