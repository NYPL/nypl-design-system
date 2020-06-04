"use strict";
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                  enumerable: true,
                  get: function () {
                      return m[k];
                  },
              });
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, "default", {
                  enumerable: true,
                  value: v,
              });
          }
        : function (o, v) {
              o["default"] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = require("sinon");
const Enzyme = __importStar(require("enzyme"));
const React = __importStar(require("react"));
const Button_1 = __importDefault(require("./Button"));
describe("Button", () => {
    let wrapper;
    let callback;
    beforeEach(() => {
        callback = sinon_1.stub();
        wrapper = Enzyme.shallow(
            React.createElement(
                Button_1.default,
                { id: "button", callback: callback },
                "Submit"
            )
        );
    });
    it("calls the callback", () => {
        wrapper.simulate("click");
        chai_1.expect(callback.callCount).to.equal(1);
    });
    it("optionally renders a component", () => {
        chai_1.expect(wrapper.find("span").length).to.equal(1);
        chai_1.expect(wrapper.text()).to.equal("Submit");
    });
    it("has 'button' class", () => {
        chai_1.expect(wrapper.find(".button")).to.have.lengthOf(1);
    });
    it("has type submit", () => {
        chai_1.expect(wrapper.prop("type")).to.equal("submit");
    });
    it("optionally calls the callback on mouseDown instead of on click", () => {
        chai_1.expect(callback.callCount).to.equal(0);
        wrapper.setProps({ mouseDown: true });
        wrapper.simulate("click");
        chai_1.expect(callback.callCount).to.equal(0);
        wrapper.simulate("mouseDown");
        chai_1.expect(callback.callCount).to.equal(1);
    });
    describe("rendering content from its children prop", () => {
        it("should render string children", () => {
            wrapper = Enzyme.shallow(
                React.createElement(
                    Button_1.default,
                    { id: "button", callback: callback },
                    "Submit"
                )
            );
            chai_1.expect(wrapper.text()).to.equal("Submit");
        });
        it("should render element children", () => {
            wrapper = Enzyme.shallow(
                React.createElement(
                    Button_1.default,
                    { id: "button", callback: callback },
                    React.createElement("em", null, "I'm a em element")
                )
            );
            chai_1.expect(wrapper.text()).to.equal("I'm a em element");
            chai_1.expect(wrapper.find("em")).to.have.lengthOf(1);
        });
    });
    describe("passes button type", () => {
        it("button has passed type", () => {
            const wrapper = Enzyme.mount(
                React.createElement(
                    Button_1.default,
                    { id: "button", callback: callback, type: "button" },
                    React.createElement("span", null, "I'm a span element")
                )
            );
            chai_1
                .expect(wrapper.find("#btn-button").prop("type"))
                .to.equal("button");
        });
    });
});
