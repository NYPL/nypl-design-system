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
const Input_1 = __importDefault(require("./Input"));
describe("Renders Input", () => {
    let container;
    before(() => {
        container = Enzyme.mount(
            React.createElement(Input_1.default, {
                labelId: "label-input",
                labelContent: React.createElement(
                    React.Fragment,
                    null,
                    "Label"
                ),
                inputId: "input",
                isRequired: false,
            })
        );
    });
    it("Renders label for inputId", () => {
        chai_1.expect(container.find("label").exists()).to.equal(true);
        chai_1
            .expect(container.find("label").prop("htmlFor"))
            .to.equal("input");
    });
    it("Renters TextField", () => {
        chai_1.expect(container.find("input").exists()).to.equal(true);
    });
    it("Does not render helper if none is passed", () => {
        chai_1
            .expect(container.find("HelperErrorText").exists())
            .to.equal(false);
    });
});
describe("Input with Helper and Error", () => {
    let container;
    before(() => {
        container = Enzyme.mount(
            React.createElement(Input_1.default, {
                labelId: "label-input",
                labelContent: React.createElement(
                    React.Fragment,
                    null,
                    "Label"
                ),
                inputId: "input",
                isRequired: true,
                helperContentOpts: {
                    id: "input-helper",
                    content: React.createElement(
                        React.Fragment,
                        null,
                        "This is some helpful text"
                    ),
                },
                errorContentOpts: {
                    id: "input-error",
                    content: React.createElement(
                        React.Fragment,
                        null,
                        "Error Message Lorem Ipsum"
                    ),
                },
                showError: true,
            })
        );
    });
    it("Renders label for inputId", () => {
        chai_1.expect(container.find("label").exists()).to.equal(true);
        chai_1
            .expect(container.find("label").prop("htmlFor"))
            .to.equal("input");
    });
    it("Renters TextField", () => {
        chai_1.expect(container.find("input").exists()).to.equal(true);
    });
    it("Renders Helper", () => {
        chai_1.expect(container.find("#input-helper").exists()).to.equal(true);
    });
    it("Renders error", () => {
        chai_1.expect(container.find("#input-helper").exists()).to.equal(true);
    });
});
describe("input errors", () => {
    it("throws error if showError is passed without content", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(Input_1.default, {
                        labelId: "label-input",
                        labelContent: React.createElement(
                            React.Fragment,
                            null,
                            "Label"
                        ),
                        inputId: "input",
                        isRequired: true,
                        showError: true,
                    })
                )
            )
            .to.throw("Error should be shown, but no errorContentOpts passed");
    });
});
