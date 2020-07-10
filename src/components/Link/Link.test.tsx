import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Link from "./Link";
import { LinkTypes } from "./LinkTypes";
import {
    BrowserRouter as Router,
    Link as ReactRouterLink,
} from "react-router-dom";
import Icon from "../Icons/Icon";
import { IconRotationTypes, IconNames } from "../Icons/IconTypes";

describe("Link", () => {
    let wrapper: Enzyme.ReactWrapper<{}, {}>;

    it("Can pass in icon, text as child and url as props", () => {
        wrapper = Enzyme.mount(
            <Link href="#passed-in-link" linkType={LinkTypes.Action}>
                <Icon
                    name={IconNames.download}
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                    iconRotation={IconRotationTypes.rotate0}
                ></Icon>
                Download
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
            <Link linkType={LinkTypes.Action}>
                <a href="#test2">
                    <Icon
                        name={IconNames.download}
                        blockName="more-link"
                        modifiers={["left"]}
                        decorative={true}
                        iconRotation={IconRotationTypes.rotate0}
                    ></Icon>
                    Test
                </a>
            </Link>
        );
        expect(wrapper.find("a")).to.have.lengthOf(1);
        expect(wrapper.find("Icon")).to.have.lengthOf(1);
    });

    it("Generated back link has icon", () => {
        wrapper = Enzyme.mount(
            <Link href="#passed-in-link" linkType={LinkTypes.Backwards}>
                content
            </Link>
        );
        expect(
            wrapper.find(".more-link__icon").hasClass("more-link__icon--left")
        ).to.equal(true);
    });

    it("Generated forwards link has icon", () => {
        wrapper = Enzyme.mount(
            <Link href="#passed-in-link" linkType={LinkTypes.Forwards}>
                content
            </Link>
        );
        expect(
            wrapper.find(".more-link__icon").hasClass("more-link__icon--right")
        ).to.equal(true);
    });

    it("Can pass in text as child and url as props", () => {
        wrapper = Enzyme.mount(<Link href="#test">Test</Link>);
        expect(wrapper.find("a")).to.have.lengthOf(1);
    });

    it("Can pass in a ReactRouter Link", () => {
        wrapper = Enzyme.mount(
            <Router>
                <Link linkType={LinkTypes.Action}>
                    <ReactRouterLink to="#">
                        <Icon
                            name={IconNames.download}
                            blockName="more-link"
                            modifiers={["left"]}
                            decorative={true}
                            iconRotation={IconRotationTypes.rotate0}
                        ></Icon>
                        Download
                    </ReactRouterLink>
                </Link>
            </Router>
        );
        expect(wrapper.find("a")).to.have.lengthOf(1);
    });

    it("throws an error if text is passed but no url is passed", () => {
        expect(() => Enzyme.mount(<Link>Test</Link>)).to.throw(
            "Link needs prop 'href'"
        );
    });

    it("throws an error if more than one child is passed", () => {
        expect(() =>
            Enzyme.mount(
                <Link>
                    <Icon
                        name={IconNames.download}
                        blockName="more-link"
                        modifiers={["left"]}
                        decorative={true}
                        iconRotation={IconRotationTypes.rotate0}
                    ></Icon>
                    <a href="#test">Test</a>
                </Link>
            )
        ).to.throw("Please pass only one child into Link");
    });
});
