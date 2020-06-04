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
const Link_1 = __importDefault(require("../../components/Link/Link"));
const LinkTypes_1 = require("../../components/Link/LinkTypes");
const Icon_1 = __importDefault(require("../../components/Icons/Icon"));
const IconTypes_1 = require("../../components/Icons/IconTypes");
describe("Link", () => {
    let wrapper;
    it("Can pass in icon, text as child and url as props", () => {
        wrapper = Enzyme.mount(
            React.createElement(
                Link_1.default,
                {
                    href: "#passed-in-link",
                    linkType: LinkTypes_1.LinkTypes.Action,
                },
                React.createElement(Icon_1.default, {
                    name: "download",
                    blockName: "more-link",
                    modifiers: ["left"],
                    decorative: true,
                    iconRotation: IconTypes_1.IconRotationTypes.rotate0,
                }),
                "Download"
            )
        );
        chai_1.expect(wrapper.find("a")).to.have.lengthOf(1);
        chai_1.expect(wrapper.find("Icon")).to.have.lengthOf(1);
    });
    it("Can pass a link with <a> tag", () => {
        wrapper = Enzyme.mount(
            React.createElement(
                Link_1.default,
                null,
                React.createElement("a", { href: "#test" }, "Test")
            )
        );
        chai_1.expect(wrapper.find("a")).to.have.lengthOf(1);
    });
    it("Can pass a link with <a> tag and an icon", () => {
        wrapper = Enzyme.mount(
            React.createElement(
                Link_1.default,
                { linkType: LinkTypes_1.LinkTypes.Action },
                React.createElement("a", { href: "#test" }, "Test"),
                React.createElement(Icon_1.default, {
                    name: "download",
                    blockName: "more-link",
                    modifiers: ["left"],
                    decorative: true,
                    iconRotation: IconTypes_1.IconRotationTypes.rotate0,
                })
            )
        );
        chai_1.expect(wrapper.find("a")).to.have.lengthOf(1);
        chai_1.expect(wrapper.find("Icon")).to.have.lengthOf(1);
    });
    it("Generated back link has icon", () => {
        wrapper = Enzyme.mount(
            React.createElement(
                Link_1.default,
                {
                    href: "#passed-in-link",
                    linkType: LinkTypes_1.LinkTypes.Backwards,
                },
                "content"
            )
        );
        chai_1
            .expect(
                wrapper
                    .find(".more-link__icon")
                    .hasClass("more-link__icon--left")
            )
            .to.equal(true);
    });
    it("Generated forwards link has icon", () => {
        wrapper = Enzyme.mount(
            React.createElement(
                Link_1.default,
                {
                    href: "#passed-in-link",
                    linkType: LinkTypes_1.LinkTypes.Forwards,
                },
                "content"
            )
        );
        chai_1
            .expect(
                wrapper
                    .find(".more-link__icon")
                    .hasClass("more-link__icon--right")
            )
            .to.equal(true);
    });
    it("Can pass in text as child and url as props", () => {
        wrapper = Enzyme.mount(
            React.createElement(Link_1.default, { href: "#test" }, "Test")
        );
        chai_1.expect(wrapper.find("a")).to.have.lengthOf(1);
    });
    it("throws an error if text is passed but no url is passed", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(React.createElement(Link_1.default, null, "Test"))
            )
            .to.throw("Link needs prop 'href'");
    });
});
