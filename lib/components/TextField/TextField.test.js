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
const TextField_1 = __importDefault(require("./TextField"));
describe("Search Bar Text Field", () => {
    let wrapper;
    it("Renders an input field with aria-label", () => {
        wrapper = Enzyme.shallow(
            React.createElement(TextField_1.default, {
                id: "textField",
                ariaLabel: "text",
                isRequired: false,
            })
        );
        chai_1.expect(wrapper.find("input")).to.have.lengthOf(1);
        chai_1
            .expect(wrapper.find("input").props()["aria-label"])
            .to.equal("text");
    });
    it("Renders an input field with aria-labelledby", () => {
        wrapper = Enzyme.shallow(
            React.createElement(TextField_1.default, {
                id: "textField",
                ariaLabelledBy: "labelId",
                isRequired: false,
            })
        );
        chai_1.expect(wrapper.find("input")).to.have.lengthOf(1);
        chai_1
            .expect(wrapper.find("input").props()["aria-labelledby"])
            .to.equal("labelId");
    });
    it("if both labelId and ariaLabel are defined, TextField uses aria-labeledBy", () => {
        wrapper = Enzyme.shallow(
            React.createElement(TextField_1.default, {
                id: "textField",
                ariaLabelledBy: "labelId",
                ariaLabel: "label",
                isRequired: false,
            })
        );
        chai_1
            .expect(wrapper.find("input").props()["aria-label"])
            .to.equal(undefined);
        chai_1
            .expect(wrapper.find("input").props()["aria-labelledby"])
            .to.equal("labelId");
    });
    it("Shows 'aria-required' if required", () => {
        wrapper = Enzyme.shallow(
            React.createElement(TextField_1.default, {
                id: "textField",
                ariaLabel: "text",
                isRequired: true,
            })
        );
        chai_1.expect(wrapper.props()["aria-required"]).to.equal(true);
    });
    it("Throws error if neither label or aria-label are passed", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(TextField_1.default, {
                        id: "textField",
                        isRequired: true,
                    })
                )
            )
            .to.throw("Either label or ariaLabel must be defined");
    });
});
