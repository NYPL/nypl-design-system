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
const BodyText_1 = __importDefault(require("./BodyText"));
describe("BodyText", () => {
    let wrapper;
    it("Wraps <p> tag when there is text with no tag", () => {
        wrapper = Enzyme.shallow(
            React.createElement(BodyText_1.default, null, "Cupcake's")
        );
        let paragraph = wrapper.render();
        chai_1.expect(paragraph.find("p")).to.have.lengthOf(1);
    });
    it("Wraps a <p> tag when passed an ignoreable tag", () => {
        wrapper = Enzyme.shallow(
            React.createElement(
                BodyText_1.default,
                null,
                "Cupcakes ",
                React.createElement("b", null, "Donuts"),
                " Coffee"
            )
        );
        let paragraph = wrapper.render();
        chai_1.expect(paragraph.find("p")).to.have.lengthOf(1);
    });
    // TODO: Differentiate between inner (<ol>, <ul>, <h> tags) and other tags
    // it("Wraps <p> around each text component when passed an unignoreable tag", () => {
    //   wrapper = Enzyme.shallow(<BodyText>Cupcakes <ul><li>Donuts</li></ul> Coffee</BodyText>);
    //   let paragraph = wrapper.render();
    //   expect(paragraph.find("p")).to.have.lengthOf(1);
    // });
    it("Doesn't wrap <p> tag when one already exists", () => {
        wrapper = Enzyme.shallow(
            React.createElement(
                BodyText_1.default,
                { maxchar: 200 },
                React.createElement("p", null, "Cupcakes")
            )
        );
        let paragraph = wrapper.render();
        chai_1.expect(paragraph.find("p")).to.have.lengthOf(1);
    });
    it("Doesn't do anything when passed non-text tags", () => {
        wrapper = Enzyme.shallow(
            React.createElement(
                BodyText_1.default,
                null,
                React.createElement("span", null, "Cupcakes")
            )
        );
        let paragraph = wrapper.render();
        chai_1.expect(paragraph.find("p")).to.have.lengthOf(0);
        chai_1.expect(paragraph.find("span")).to.have.lengthOf(1);
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
