import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Link from "../../components/Link/Link";
import Icon from "../../components/Icons/Icon";

describe("Link", () => {
    let wrapper: Enzyme.ReactWrapper<{}, {}>;

    it("Can pass in left icon", () => {
        wrapper = Enzyme.mount(
            <>
                <Icon
                    name="arrow_xsmall"
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                ></Icon>
                content
            </>
        );
        expect(wrapper.find("a")).to.have.lengthOf(1);
        expect(wrapper.find("Icon")).to.have.lengthOf(1);
    });
    it("Can pass in right icon", () => {
        wrapper = Enzyme.mount(
            <>
                content
                <Icon
                    name="arrow_xsmall"
                    blockName="more-link"
                    modifiers={["right"]}
                    decorative={true}
                ></Icon>
            </>
        );
        expect(wrapper.find("a")).to.have.lengthOf(1);
        expect(wrapper.find("Icon")).to.have.lengthOf(1);
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
        // expect(wrapper.dive().find("icon")).to.have.lengthOf(1);
    });

    it("Can pass in icon, text as child and url as props", () => {
        wrapper = Enzyme.mount(
            <Link url="#test">
                <>
                    Test
                    <Icon
                        name="arrow_xsmall"
                        blockName="more-link"
                        modifiers={["right"]}
                        decorative={true}
                    ></Icon>
                </>
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
    it("Can pass in text as child and url as props", () => {
        wrapper = Enzyme.mount(<Link url="#test">Test</Link>);
        expect(wrapper.find("a")).to.have.lengthOf(1);
    });
    // TODO: check if child is link
    // it("Can pass in a non-link component with a URL", () => {
    //   wrapper = Enzyme.mount(<Link url="#test"><span>Test</span></Link>);
    //   expect(wrapper.find("a")).to.have.lengthOf(1);
    // });
    it("throws an error if text is passed but no url is passed", () => {
        expect(() => Enzyme.mount(<Link>Test</Link>)).to.throw(
            "if children Test has no anchor tag, please pass prop: url"
        );
    });
    // it("Throws error when non-link component passed without URL", () => {
    //   expect(() => Enzyme.mount(<Link><span>Test</span></Link>))
    //   .to.throw("if children [object Object] has no anchor tag, please pass URL");
    // });
    //   it("Can pass in no icon", () => {
    //     wrapper = Enzyme.mount(<IconLink url="#test">Test</IconLink>);
    //     expect(wrapper.find("a")).to.have.lengthOf(1);
    //     expect(wrapper.find("Icon")).to.have.lengthOf(0);
    // });
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
