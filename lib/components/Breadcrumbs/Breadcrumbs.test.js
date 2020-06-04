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
const Breadcrumbs_1 = __importDefault(require("./Breadcrumbs"));
describe("Breadcrumbs", () => {
    let wrapper;
    let breadcrumbString = [
        { url: "#", text: "test1" },
        { url: "#", text: "test2" },
    ];
    let breadcrumbComponent = [
        React.createElement(
            "a",
            { role: "link", href: "#test1" },
            React.createElement("span", null, "Hello")
        ),
        React.createElement("a", { role: "link", href: "#test2" }, "Goodbye"),
    ];
    it("Renders a tag with custom text", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Breadcrumbs_1.default, {
                breadcrumbs: breadcrumbString,
            })
        );
        let links = wrapper.render();
        chai_1.expect(links.find("a.breadcrumbs__link")).to.have.lengthOf(2);
        chai_1
            .expect(links.find("a.breadcrumbs__link").first().text())
            .to.equal("test1");
        chai_1
            .expect(links.find("a.breadcrumbs__link").last().text())
            .to.equal("test2");
    });
    it("Renders breadcrumb when passed components", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Breadcrumbs_1.default, {
                breadcrumbs: breadcrumbComponent,
            })
        );
        let links = wrapper.render();
        chai_1
            .expect(links.find("a.breadcrumbs__link").first().text())
            .to.equal("Hello");
    });
    it("Renders icon", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Breadcrumbs_1.default, {
                breadcrumbs: breadcrumbComponent,
            })
        );
        chai_1.expect(wrapper.find("Icon")).to.have.lengthOf(1);
    });
    it("Throws error when nothing is passed into Breadcrumb", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(Breadcrumbs_1.default, {
                        breadcrumbs: [],
                    })
                )
            )
            .to.throw(
                "Breadcrumbs must contain a set of links. Breadcrumbs currently empty"
            );
    });
});
