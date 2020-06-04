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
const Enzyme = __importStar(require("enzyme"));
const React = __importStar(require("react"));
const Heading_1 = __importDefault(require("./Heading"));
describe("Section Headings", () => {
    let wrapper;
    it("Shows heading", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Heading_1.default, {
                id: "h1",
                level: 1,
                text: "Heading 1",
            })
        );
        chai_1.expect(wrapper.find("h1")).to.have.lengthOf(1);
    });
    it("Can pass heading content as child", () => {
        wrapper = Enzyme.shallow(
            React.createElement(
                Heading_1.default,
                { id: "h1", level: 1 },
                "Text"
            )
        );
        chai_1.expect(wrapper.find("h1")).to.have.lengthOf(1);
    });
    // TODO: check that header children are links
    // it("Throws error when invalid heading is passed as child", () => {
    //   expect(() => Enzyme.mount(<Heading id="h1" level={3}><span>oh no</span></Heading>))
    //   .to.throw("Headings can only be plain text or bold");
    // });
    it("Can pass heading content as child span", () => {
        wrapper = Enzyme.shallow(
            React.createElement(
                Heading_1.default,
                { id: "h1", level: 1 },
                React.createElement(
                    "span",
                    null,
                    "Text ",
                    React.createElement("b", null, "hi")
                )
            )
        );
        chai_1.expect(wrapper.find("h1")).to.have.lengthOf(1);
        chai_1.expect(wrapper.find("span")).to.have.lengthOf(1);
    });
    it("uses child when both child and text are passed", () => {
        wrapper = Enzyme.shallow(
            React.createElement(
                Heading_1.default,
                { id: "h1", level: 1, text: "Heading Text" },
                "Text"
            )
        );
        chai_1.expect(wrapper.find("h1")).to.have.lengthOf(1);
        chai_1.expect(wrapper.find("h1").text()).to.equal("Text");
    });
    it("Has <a> tag when passed URL", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Heading_1.default, {
                id: "h1",
                level: 1,
                url: "fake-url",
                text: "Heading 1",
            })
        );
        chai_1.expect(wrapper.find("h1")).to.have.lengthOf(1);
        chai_1.expect(wrapper.find("a")).to.have.lengthOf(1);
    });
    it("<a> has class when passed urlClass", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Heading_1.default, {
                id: "h1",
                level: 1,
                url: "fake-url",
                urlClass: "fake-class",
                text: "Heading 1",
            })
        );
        chai_1.expect(wrapper.find("h1")).to.have.lengthOf(1);
        chai_1.expect(wrapper.find("a").hasClass("fake-class")).to.equal(true);
    });
    it("Throws error when invalid heading number passed", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(Heading_1.default, {
                        id: "h1",
                        level: 9,
                        text: "Heading 9",
                    })
                )
            )
            .to.throw("Heading only supports levels 1-6");
    });
    it("Throws error when neither child nor text is passed", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(Heading_1.default, {
                        id: "h1",
                        level: 9,
                    })
                )
            )
            .to.throw("Heading only supports levels 1-6");
    });
    it("Throws error when heading with many children is passed", () => {
        chai_1
            .expect(() =>
                Enzyme.shallow(
                    React.createElement(
                        Heading_1.default,
                        { id: "h1", level: 4 },
                        React.createElement("span", null, "too"),
                        React.createElement("span", null, "many")
                    )
                )
            )
            .to.throw(
                "Please only pass one child into Heading, got span, span"
            );
    });
});
