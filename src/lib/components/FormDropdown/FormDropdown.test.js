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
const FormDropdown_1 = __importDefault(require("./FormDropdown"));
describe("FormDropdown", () => {
    let wrapper;
    let blurCallback;
    let changeCallback;
    beforeEach(() => {
        changeCallback = sinon_1.stub();
        blurCallback = sinon_1.stub();
    });
    it("Form Dropdown should render a FormDropdown", () => {
        wrapper = Enzyme.shallow(
            React.createElement(FormDropdown_1.default, {
                labelId: "label",
                isRequired: false,
                dropdownId: "hi",
                options: ["test1", "test2"],
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        chai_1.expect(wrapper.find("select")).to.have.lengthOf(1);
    });
    it("requires either label or aria-label", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(FormDropdown_1.default, {
                        isRequired: false,
                        dropdownId: "hi",
                        options: ["test1", "test2"],
                        onSelectChange: changeCallback,
                        onSelectBlur: blurCallback,
                    })
                )
            )
            .to.throw("Must either have labelId or aria-label");
    });
    it("if both labelId and ariaLabel are defined, select has aria-labeledBy", () => {
        wrapper = Enzyme.shallow(
            React.createElement(FormDropdown_1.default, {
                labelId: "label",
                ariaLabel: "aria-label",
                isRequired: false,
                dropdownId: "hi",
                options: ["test1", "test2"],
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        chai_1
            .expect(wrapper.find("select").props()["aria-labelledby"])
            .to.equal("label");
    });
    it("if only aria-label is defined, select has aria-label", () => {
        wrapper = Enzyme.shallow(
            React.createElement(FormDropdown_1.default, {
                ariaLabel: "aria-label",
                isRequired: false,
                dropdownId: "hi",
                options: ["test1", "test2"],
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        chai_1
            .expect(wrapper.find("select").props()["aria-label"])
            .to.equal("aria-label");
    });
    it("Form Dropdown should render an icon", () => {
        wrapper = Enzyme.shallow(
            React.createElement(FormDropdown_1.default, {
                labelId: "label",
                isRequired: false,
                dropdownId: "hi",
                options: ["test1", "test2"],
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        chai_1.expect(wrapper.find("Icon")).to.have.lengthOf(1);
    });
    it("sends callback with value on change", () => {
        wrapper = Enzyme.shallow(
            React.createElement(FormDropdown_1.default, {
                labelId: "label",
                isRequired: false,
                dropdownId: "hi",
                options: ["test1", "test2"],
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        wrapper.find("select").simulate("change", "", { value: ["val"] });
        chai_1.expect(changeCallback.callCount).to.equal(1);
    });
    it("sends callback with no value on blur", () => {
        wrapper = Enzyme.shallow(
            React.createElement(FormDropdown_1.default, {
                dropdownId: "hi",
                labelId: "label",
                isRequired: false,
                options: ["test1", "test2"],
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        wrapper.find("select").simulate("blur", "");
        chai_1.expect(blurCallback.callCount).to.equal(1);
    });
    it("displays selected when passed selectedOption", () => {
        wrapper = Enzyme.shallow(
            React.createElement(FormDropdown_1.default, {
                labelId: "label",
                isRequired: false,
                dropdownId: "hi",
                selectedOption: "test2",
                options: ["test1", "test2"],
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        chai_1.expect(wrapper.find("select").props().value).to.equal("test2");
    });
    it("renders nothing when passed no options", () => {
        wrapper = Enzyme.shallow(
            React.createElement(FormDropdown_1.default, {
                dropdownId: "hi",
                labelId: "label",
                isRequired: false,
                options: [],
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        chai_1.expect(wrapper.getElement()).to.equal(null);
    });
});
