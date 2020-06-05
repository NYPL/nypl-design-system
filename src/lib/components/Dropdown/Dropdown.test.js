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
const Dropdown_1 = __importDefault(require("./Dropdown"));
describe("Dropdown", () => {
    let wrapper;
    let blurCallback;
    let changeCallback;
    beforeEach(() => {
        changeCallback = sinon_1.stub();
        blurCallback = sinon_1.stub();
    });
    it("renders Select with Label", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Dropdown_1.default, {
                dropdownId: "dropdown",
                isRequired: false,
                labelPosition: "left",
                labelText: "Sort By",
                labelId: "nav-sort-by",
                dropdownOptions: ["test1", "test2"],
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        chai_1
            .expect(wrapper.find("FormDropdown").dive().find("select"))
            .to.have.lengthOf(1);
        chai_1
            .expect(wrapper.find("Label").dive().find("label"))
            .to.have.lengthOf(1);
    });
    it("requires ariaLabel if labelPosition is none", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(Dropdown_1.default, {
                        dropdownId: "dropdown",
                        isRequired: false,
                        labelPosition: "none",
                        dropdownOptions: ["test1", "test2"],
                        onSelectChange: changeCallback,
                        onSelectBlur: blurCallback,
                    })
                )
            )
            .to.throw(
                "prop ariaLabel must be passed into Dropdown when labelPosition is 'none'"
            );
    });
    it("does not render Label if labelPosition is none", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Dropdown_1.default, {
                dropdownId: "dropdown",
                isRequired: false,
                labelPosition: "none",
                ariaLabel: "aria-label",
                dropdownOptions: ["test1", "test2"],
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        chai_1
            .expect(wrapper.find("FormDropdown").dive().find("select"))
            .to.have.lengthOf(1);
        chai_1.expect(wrapper.find("Label")).to.have.lengthOf(0);
    });
    it("adds appropriate modifier if labelPosition is 'top' or 'left'", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Dropdown_1.default, {
                dropdownId: "dropdown",
                isRequired: false,
                labelPosition: "left",
                labelText: "Sort By",
                labelId: "nav-sort-by",
                dropdownOptions: ["test1", "test2"],
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        chai_1
            .expect(wrapper.find(".dropdown--label-left"))
            .to.have.lengthOf(1);
    });
    it("renders 'required' component if Required", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Dropdown_1.default, {
                dropdownId: "dropdown",
                isRequired: true,
                labelPosition: "left",
                labelText: "Sort By",
                labelId: "nav-sort-by",
                dropdownOptions: ["test1", "test2"],
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        chai_1
            .expect(wrapper.find(".dropdown__required-message"))
            .to.have.lengthOf(1);
    });
    it("renders HelperErrorText if helper passed", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Dropdown_1.default, {
                dropdownId: "dropdown",
                isRequired: false,
                labelPosition: "none",
                ariaLabel: "label",
                helperContentId: "helper",
                helperContent: React.createElement(
                    "span",
                    null,
                    "If you're unsure of your size, please see the",
                    " ",
                    React.createElement(
                        "a",
                        { href: "#sizing-chart" },
                        "sizing chart"
                    )
                ),
                dropdownOptions: ["test1", "test2"],
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        chai_1.expect(wrapper.find("HelperErrorText")).to.have.lengthOf(1);
    });
    it("throws error if HelperContent is passed without an id", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(Dropdown_1.default, {
                        dropdownId: "dropdown",
                        isRequired: false,
                        labelPosition: "none",
                        ariaLabel: "label",
                        dropdownOptions: ["test1", "test2"],
                        helperContent: React.createElement(
                            "span",
                            null,
                            "If you're unsure of your size, please see the",
                            " ",
                            React.createElement(
                                "a",
                                { href: "#sizing-chart" },
                                "sizing chart"
                            )
                        ),
                        onSelectChange: changeCallback,
                        onSelectBlur: blurCallback,
                    })
                )
            )
            .to.throw(
                "prop helperText [object Object] is passed, but it is missing prop helperTextId"
            );
    });
    it("renders HelperErrorText if error passed", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Dropdown_1.default, {
                dropdownId: "dropdown",
                isRequired: false,
                labelPosition: "none",
                ariaLabel: "label",
                hasError: true,
                errorContentId: "error",
                errorContent: React.createElement(
                    "span",
                    null,
                    "Error Message Lorem Ipsum"
                ),
                dropdownOptions: ["test1", "test2"],
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        chai_1.expect(wrapper.find("HelperErrorText")).to.have.lengthOf(1);
    });
    it("throws error if passed error with no content", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(Dropdown_1.default, {
                        dropdownId: "dropdown",
                        isRequired: false,
                        labelPosition: "none",
                        ariaLabel: "label",
                        dropdownOptions: ["test1", "test2"],
                        hasError: true,
                        onSelectChange: changeCallback,
                        onSelectBlur: blurCallback,
                    })
                )
            )
            .to.throw(
                "prop hasError is true, but is missing props errorMessage (got undefined) and/or errorTextId (got undefined)"
            );
    });
});
