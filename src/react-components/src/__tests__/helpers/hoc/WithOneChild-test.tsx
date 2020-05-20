import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import withOneChild from "../../../helpers/hoc/WithOneChild";
import BasicLink from "../../../components/01-atoms/Links/BasicLink";

interface DummyProps {
    title: string;
    age: string;
}

class DummyComponent extends React.Component<DummyProps, {}> {
    constructor(props) {
        super(props);
    }
    render(): JSX.Element {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.age}</h2>
                {this.props.children}
            </div>
        );
    }
}

describe("withOneChild HOC", () => {
    let wrapper: Enzyme.ReactWrapper<{}, {}>;

    // This DummyComponent can take as many children that are passed
    // and render them.
    it("should only modify components when used", () => {
        const multipleChildrenDummy = (
            <DummyComponent title="Wizard" age="old">
                <p>Gandalf</p>
                <p>The White</p>
            </DummyComponent>
        );
        wrapper = Enzyme.mount(multipleChildrenDummy);

        expect(wrapper.find("p")).to.have.lengthOf(2);
        expect(wrapper.prop("title")).to.equal("Wizard");
        expect(wrapper.prop("age")).to.equal("old");
    });

    it("should modify the original component to allow one child as a string", () => {
        // Use the higher-order component to restrict to have only one child:
        const DummyComponentOneChild = withOneChild<DummyProps>(DummyComponent);
        let singleChildDummy = (
            <DummyComponentOneChild title="Elf" age="old">
                Legolas
            </DummyComponentOneChild>
        );

        try {
            wrapper = Enzyme.mount(singleChildDummy);
        } catch (e) {
            // This shouldn't run since no error is thrown.
            expect(false).to.equal(true);
        }

        // The text of the component doesn't include spaces in the test.
        expect(wrapper.text()).to.equal("ElfoldLegolas");
        // Make sure that any props passed propagate correctly.
        expect(wrapper.prop("title")).to.equal("Elf");
        expect(wrapper.prop("age")).to.equal("old");
    });

    it("should modify the original component to allow one child as a component", () => {
        const DummyComponentOneChild = withOneChild<DummyProps>(DummyComponent);
        let singleChildDummy = (
            <DummyComponentOneChild title="Wizard" age="old">
                <p>Saruman</p>
            </DummyComponentOneChild>
        );

        try {
            wrapper = Enzyme.mount(singleChildDummy);
        } catch (e) {
            // This shouldn't run since no error is thrown.
            expect(false).to.equal(true);
        }

        expect(wrapper.find("p")).to.have.lengthOf(1);
        expect(wrapper.find("p").text()).to.equal("Saruman");
        expect(wrapper.prop("title")).to.equal("Wizard");
        expect(wrapper.prop("age")).to.equal("old");
    });

    it("should throw an error if more than one child is passed", () => {
        const DummyComponentOneChild = withOneChild<DummyProps>(DummyComponent);
        let singleChildDummy = (
            <DummyComponentOneChild title="Hobbit" age="very old">
                <p>Bilbo</p>
                <p>Baggins</p>
            </DummyComponentOneChild>
        );

        try {
            wrapper = Enzyme.mount(singleChildDummy);
            // This shouldn't run since an error is thrown
            expect(false).to.equal(true);
        } catch (e) {
            expect(e.message).to.equal(
                "Please only pass one child, " +
                    "got elements (p, p), for base component DummyComponent"
            );
        }
    });

    describe("BasicLink as implementation", () => {
        it("should only allow one child", () => {
            const basicLink = (
                <BasicLink className="passed-in-class">
                    <a href="#passed-in-link">Click me</a>
                </BasicLink>
            );
            const wrongBasicLink = (
                <BasicLink className="passed-in-class">
                    <a href="#passed-in-link">Don't click me</a>
                    <p>Nope</p>
                </BasicLink>
            );

            wrapper = Enzyme.mount(basicLink);
            expect(wrapper.find("a").prop("href")).to.equal("#passed-in-link");
            expect(wrapper.find("a").text()).to.equal("Click me");
            expect(wrapper.children).to.have.lengthOf(1);

            try {
                wrapper = Enzyme.mount(wrongBasicLink);
                // This shouldn't run since an error is thrown
                expect(false).to.equal(true);
            } catch (e) {
                expect(e.message).to.equal(
                    "Please only pass one child, " +
                        "got elements (a, p), for base component BasicLinkBase"
                );
            }
        });
    });
});
