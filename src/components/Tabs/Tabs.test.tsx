import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import Tabs from "./Tabs";

describe("Tabs", () => {
    let wrapper;
    const content1 = <p>Content item #1</p>;
    const content2 = <p>Another content item</p>;
    const content3 = <p>More content!</p>;
    beforeEach(() => {
        wrapper = Enzyme.mount(
            <Tabs
                items={{
                    content1: content1,
                    content2: content2,
                    content3: content3,
                }}
                uniqueId="test"
            />
        );
    });
    it("should render nav buttons", () => {
        let tabNavs = wrapper.find(".tab-nav");
        expect(tabNavs.length).to.equal(3);
        expect(tabNavs.at(0).text()).to.equal("content1");
        expect(tabNavs.at(1).text()).to.equal("content2");
        expect(tabNavs.at(2).text()).to.equal("content3");
    });
    it("should render content", () => {
        let tabContent = wrapper.find(".tab-content");
        expect(tabContent.length).to.equal(3);
        expect(tabContent.at(0).text()).to.equal("Content item #1");
        expect(tabContent.at(1).text()).to.equal("Another content item");
        expect(tabContent.at(2).text()).to.equal("More content!");
    });
    it("should start out showing only the first tab", () => {
        expect(wrapper.state()["tab"]).to.equal(0);
        let currentTab = wrapper.find(".tab-nav").at(0);
        expect(currentTab.hasClass("current")).to.be.true;
        let currentContent = wrapper.find(".tab-content").at(0);
        expect(currentContent.hasClass("hidden")).to.be.false;
        expect(wrapper.find(".tab-content").at(1).hasClass("hidden")).to.be
            .true;
        expect(wrapper.find(".tab-content").at(2).hasClass("hidden")).to.be
            .true;
    });
    it("should switch tabs on click", () => {
        let tabNav2 = wrapper.find(".tab-nav").at(1);
        let button = tabNav2.find("button");
        button.simulate("click", {
            currentTarget: { id: button.props()["id"] },
        });
        expect(wrapper.state()["tab"]).to.equal(1);

        tabNav2 = wrapper.find(".tab-nav").at(1);
        expect(tabNav2.hasClass("current")).to.be.true;
        expect(wrapper.find(".tab-content").at(1).hasClass("hidden")).to.be
            .false;
    });
    it("should generate unique IDs", () => {
        // Each button should have an ID in the format "button-{idx}-{this.props.uniqueId}",
        // and an aria-controls property pointing to the ID of the corresponding panel.
        wrapper.find(".tab-nav button").map((b, idx) => {
            expect(b.prop("id")).to.equal(`button-${idx}-test`);
            expect(b.prop("aria-controls")).to.equal(`content-${idx}-test`);
        });
        // Each panel should have an ID in the format "panel-{idx}-{this.props.uniqueId}",
        // and an aria-labelledby property pointing to the ID of the corresponding button.
        wrapper.find(".tab-content").map((p, idx) => {
            expect(p.prop("id")).to.equal(`content-${idx}-test`);
            expect(p.prop("aria-labelledby")).to.equal(`button-${idx}-test`);
        });
    });
    describe("keyboard navigation", () => {
        it("should switch tabs via the right arrow key", () => {
            let button1 = wrapper.find(".tab-nav button").at(0);
            let button2 = wrapper.find(".tab-nav button").at(1);
            let button3 = wrapper.find(".tab-nav button").at(2);

            // Start out on the leftmost tab, then press the right arrow key to go to the middle tab
            button1.simulate("keydown", {
                keyCode: 39,
                currentTarget: { id: "0" },
            });
            expect(wrapper.state()["tab"]).to.equal(1);
            expect(button2.parents().at(0).render().hasClass("current")).to.be
                .true;
            expect(wrapper.find(".tab-content").at(1).hasClass("hidden")).to.be
                .false;

            // Press the right arrow key again to go to the rightmost tab
            button2.simulate("keydown", {
                keyCode: 39,
                currentTarget: { id: "1" },
            });
            expect(wrapper.state()["tab"]).to.equal(2);
            expect(button3.parents().at(0).render().hasClass("current")).to.be
                .true;
            expect(wrapper.find(".tab-content").at(2).hasClass("hidden")).to.be
                .false;

            // Pressing the right arrow key again should loop back to the leftmost tab
            button3.simulate("keydown", {
                keyCode: 39,
                currentTarget: { id: "2" },
            });
            expect(wrapper.state()["tab"]).to.equal(0);
            expect(button1.parents().at(0).render().hasClass("current")).to.be
                .true;
            expect(wrapper.find(".tab-content").at(0).hasClass("hidden")).to.be
                .false;
        });

        it("should switch tabs via the left arrow key", () => {
            let button1 = wrapper.find(".tab-nav button").at(0);
            let button2 = wrapper.find(".tab-nav button").at(1);
            let button3 = wrapper.find(".tab-nav button").at(2);

            // Start out on the rightmost tab, then press the left arrow key to go to the middle tab
            button3.simulate("keydown", {
                keyCode: 37,
                currentTarget: { id: "2" },
            });
            expect(wrapper.state()["tab"]).to.equal(1);
            expect(button2.parents().at(0).render().hasClass("current")).to.be
                .true;
            expect(wrapper.find(".tab-content").at(1).hasClass("hidden")).to.be
                .false;

            // Press the left arrow key again to go to the leftmost tab
            button2.simulate("keydown", {
                keyCode: 37,
                currentTarget: { id: "1" },
            });
            expect(wrapper.state()["tab"]).to.equal(0);
            expect(button1.parents().at(0).render().hasClass("current")).to.be
                .true;
            expect(wrapper.find(".tab-content").at(0).hasClass("hidden")).to.be
                .false;

            // Pressing the left arrow key again should loop back to the rightmost tab
            button1.simulate("keydown", {
                keyCode: 37,
                currentTarget: { id: "0" },
            });
            expect(wrapper.state()["tab"]).to.equal(2);
            expect(button3.parents().at(0).render().hasClass("current")).to.be
                .true;
            expect(wrapper.find(".tab-content").at(2).hasClass("hidden")).to.be
                .false;
        });

        it("should not respond to keys other than the right and left arrows", () => {
            let button1 = wrapper.find(".tab-nav button").at(0);
            // Start out on the leftmost tab and press "a"
            button1.simulate("keydown", {
                keyCode: 65,
                currentTarget: { id: "0" },
            });
            // Nothing happened; we're still on the leftmost tab
            expect(wrapper.state()["tab"]).to.equal(0);
            expect(button1.parents().at(0).render().hasClass("current")).to.be
                .true;
            expect(wrapper.find(".tab-content").at(0).hasClass("hidden")).to.be
                .false;
        });
    });
});
