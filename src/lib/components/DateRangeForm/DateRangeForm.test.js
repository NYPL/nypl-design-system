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
const sinon_1 = require("sinon");
const DateRangeForm_1 = __importDefault(require("./DateRangeForm"));
describe("Date Range Form", () => {
    let container;
    let callback;
    before(() => {
        callback = sinon_1.stub();
        container = Enzyme.mount(
            React.createElement(DateRangeForm_1.default, {
                formLabel: React.createElement(
                    React.Fragment,
                    null,
                    "Publication Year"
                ),
                fromLabelOpts: {
                    labelContent: React.createElement(
                        React.Fragment,
                        null,
                        "From"
                    ),
                    id: "FromLabel",
                },
                fromInputOpts: { inputId: "fromInput" },
                fromHelper: {
                    content: React.createElement(
                        React.Fragment,
                        null,
                        "EX. 1901"
                    ),
                    id: "fromyearhelper",
                    isError: false,
                },
                toLabelOpts: {
                    labelContent: React.createElement(
                        React.Fragment,
                        null,
                        "To"
                    ),
                    id: "ToLabel",
                },
                toInputOpts: { inputId: "toInput" },
                toHelper: {
                    content: React.createElement(
                        React.Fragment,
                        null,
                        "EX. 2000"
                    ),
                    id: "toYearHelper",
                    isError: false,
                },
                showError: false,
                error: {
                    content: React.createElement(React.Fragment, null),
                    id: "errorId",
                    isError: true,
                },
                buttonOpts: {
                    id: "submitButtonId",
                    callback: callback,
                    content: React.createElement(
                        React.Fragment,
                        null,
                        "Submit"
                    ),
                },
            })
        );
    });
    it("Renders two inputs", () => {
        chai_1.expect(container.find("input")).to.have.length(2);
    });
    it("renders two helpers", () => {
        chai_1.expect(container.find("HelperErrorText")).to.have.length(2);
    });
    it("Renders a submit button", () => {
        chai_1
            .expect(container.find("#submitButtonId").exists())
            .to.equal(true);
    });
});
