import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";

import * as Mocha from "mocha";

import BodyText from "../../components/BodyText/BodyText";

describe("BodyText", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;

    it("Wraps <p> tag when there is text with no tag", () => {
        wrapper = Enzyme.shallow(<BodyText>Cupcake's</BodyText>);
        let paragraph = wrapper.render();
        expect(paragraph.find("p")).to.have.lengthOf(1);
    });

    it("Wraps a <p> tag when passed an ignoreable tag", () => {
        wrapper = Enzyme.shallow(
            <BodyText>
                Cupcakes <b>Donuts</b> Coffee
            </BodyText>
        );
        let paragraph = wrapper.render();
        expect(paragraph.find("p")).to.have.lengthOf(1);
    });

    // TODO: Differentiate between inner (<ol>, <ul>, <h> tags) and other tags
    // it("Wraps <p> around each text component when passed an unignoreable tag", () => {
    //   wrapper = Enzyme.shallow(<BodyText>Cupcakes <ul><li>Donuts</li></ul> Coffee</BodyText>);
    //   let paragraph = wrapper.render();
    //   expect(paragraph.find("p")).to.have.lengthOf(1);
    // });

    it("Doesn't wrap <p> tag when one already exists", () => {
        wrapper = Enzyme.shallow(
            <BodyText maxchar={200}>
                <p>Cupcakes</p>
            </BodyText>
        );
        let paragraph = wrapper.render();
        expect(paragraph.find("p")).to.have.lengthOf(1);
    });

    it("Doesn't do anything when passed non-text tags", () => {
        wrapper = Enzyme.shallow(
            <BodyText>
                <span>Cupcakes</span>
            </BodyText>
        );
        let paragraph = wrapper.render();
        expect(paragraph.find("p")).to.have.lengthOf(0);
        expect(paragraph.find("span")).to.have.lengthOf(1);
    });

    // it("Throws error when passed invalid HTML", () => {
    //   expect(() => Enzyme.mount(<BodyText><p><ul><li>hi I'm wrong</li></ul></p>hi I'm wrong</BodyText>))
    //     .to.throw("Invalid HTML.  Please validate HTML and make sure all tags are closed before passing it into BodyText");
    // });

    // it("Throws error when passed text is longer than maxChar", () => {
    //   expect(() => Enzyme.mount(<BodyText maxchar={2}><p>hi I'm wrong</p></BodyText>))
    //   .to.throw("Body text must be fewer than 2 characters");
    // });
});
