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
const Accordion_1 = __importDefault(require("./Accordion"));
describe("Renders Input (closed state)", () => {
    let container;
    before(() => {
        container = Enzyme.mount(
            React.createElement(
                Accordion_1.default,
                {
                    id: "accordion",
                    buttonOptions: {
                        id: "accordionBtn",
                        content: React.createElement(
                            React.Fragment,
                            null,
                            "Click to expand"
                        ),
                    },
                },
                " ",
                React.createElement(
                    "div",
                    { className: "accordion-content" },
                    "content content"
                ),
                " "
            )
        );
    });
    it("Renders a button", () => {
        chai_1.expect(container.find("Button").exists()).to.equal(true);
    });
    it("does not render content", () => {
        chai_1
            .expect(container.find(".accordion-content").exists())
            .to.equal(false);
    });
});
describe("Renders Input (open state)", () => {
    let container;
    before(() => {
        container = Enzyme.mount(
            React.createElement(
                Accordion_1.default,
                {
                    id: "accordion",
                    buttonOptions: {
                        id: "accordionBtn",
                        content: React.createElement(
                            React.Fragment,
                            null,
                            "Click to expand"
                        ),
                    },
                },
                " ",
                React.createElement(
                    "div",
                    { className: "accordion-content" },
                    "content content"
                ),
                " "
            )
        );
        container.find("#btn-accordionBtn").simulate("click");
    });
    it("Renders a button", () => {
        chai_1.expect(container.find("Button").exists()).to.equal(true);
    });
    it("Renders content", () => {
        chai_1
            .expect(container.find(".accordion-content").exists())
            .to.equal(true);
    });
});
