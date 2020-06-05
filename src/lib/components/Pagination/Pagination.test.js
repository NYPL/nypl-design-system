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
const Pagination_1 = __importDefault(require("./Pagination"));
describe("Pagination Test", () => {
    let wrapper;
    let previousCallback;
    let nextCallback;
    let changeCallback;
    let blurCallback;
    beforeEach(() => {
        previousCallback = sinon_1.stub();
        nextCallback = sinon_1.stub();
        changeCallback = sinon_1.stub();
        blurCallback = sinon_1.stub();
    });
    it("Renders two buttons and a Select", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Pagination_1.default, {
                paginationDropdownOptions: [
                    "1 of 4",
                    "2 of 4",
                    "3 of 4",
                    "4 of 4",
                ],
                previousPageHandler: previousCallback,
                nextPageHandler: nextCallback,
                currentValue: "1 of 4",
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        chai_1.expect(wrapper.find("Button")).to.have.lengthOf(2);
        chai_1.expect(wrapper.find("Dropdown")).to.have.lengthOf(1);
    });
    it("Renders two buttons and a Select when there are zero pages", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Pagination_1.default, {
                paginationDropdownOptions: [
                    "1 of 4",
                    "2 of 4",
                    "3 of 4",
                    "4 of 4",
                ],
                previousPageHandler: previousCallback,
                nextPageHandler: nextCallback,
                currentValue: "1 of 4",
                onSelectChange: changeCallback,
                onSelectBlur: blurCallback,
            })
        );
        chai_1.expect(wrapper.find("Button")).to.have.lengthOf(2);
        chai_1.expect(wrapper.find("Dropdown")).to.have.lengthOf(1);
    });
});
