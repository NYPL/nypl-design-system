"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = require("sinon");
const Enzyme = __importStar(require("enzyme"));
const React = __importStar(require("react"));
const Button_1 = __importDefault(require("../../components/Button/Button"));
describe("Button", () => {
    let wrapper;
    let callback;
    beforeEach(() => {
        callback = sinon_1.stub();
        wrapper = Enzyme.shallow(React.createElement(Button_1.default, { callback: callback }));
    });
    it("calls the callback", () => {
        wrapper.simulate("click");
        chai_1.expect(callback.callCount).to.equal(1);
    });
    it("optionally renders custom text", () => {
        chai_1.expect(wrapper.text()).to.equal("Submit");
        wrapper.setProps({ content: "Some other string" });
        chai_1.expect(wrapper.text()).to.equal("Some other string");
    });
    it("optionally renders a component", () => {
        let content = React.createElement("span", null, "Element!");
        wrapper.setProps({ content });
        chai_1.expect(wrapper.find("span").length).to.equal(1);
        chai_1.expect(wrapper.text()).to.equal("Element!");
    });
    it("optionally sets a className", () => {
        chai_1.expect(wrapper.prop("className")).to.equal("button");
        wrapper.setProps({ className: "custom-class" });
        chai_1.expect(wrapper.prop("className")).to.equal("button custom-class");
    });
    it("optionally disables", () => {
        chai_1.expect(wrapper.find("[disabled=true]").length).to.equal(0);
        wrapper.setProps({ disabled: true });
        chai_1.expect(wrapper.find("[disabled=true]").length).to.equal(1);
    });
    it("optionally sets a type", () => {
        chai_1.expect(wrapper.prop("type")).to.equal("submit");
        wrapper.setProps({ type: "button" });
        chai_1.expect(wrapper.prop("type")).to.equal("button");
    });
    it("optionally calls the callback on mouseDown instead of on click", () => {
        chai_1.expect(callback.callCount).to.equal(0);
        wrapper.setProps({ mouseDown: true });
        wrapper.simulate("click");
        chai_1.expect(callback.callCount).to.equal(0);
        wrapper.simulate("mouseDown");
        chai_1.expect(callback.callCount).to.equal(1);
    });
    // Typically, any extra props are aria-attributes.
    it("should render any extra props", () => {
        wrapper = Enzyme.shallow(React.createElement(Button_1.default, { callback: callback, "aria-pressed": true, "aria-label": "aria label" }));
        const buttonProps = wrapper.props();
        chai_1.expect(buttonProps["aria-pressed"]).to.be.true;
        chai_1.expect(buttonProps["aria-label"]).to.equal("aria label");
    });
});
