import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Link from "../../components/Link/Link";

describe("Link With Underline", () => {
    let wrapper: Enzyme.ReactWrapper<{}, {}>;

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
    it("throws an error when more than one components are passed", () => {
        expect(() =>
            Enzyme.mount(
                <Link>
                    <span>Test</span>
                    <span>Test2</span>
                </Link>
            )
        ).to.throw(
            "Please only pass one child, got elements (span, span), " +
                "for base component BasicLinkBase"
        );
    });
});
