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
const RNHeaderWithSearch_1 = __importDefault(require("./RNHeaderWithSearch"));
describe("HeaderWithSearch", () => {
    let blurCallback;
    let changeCallback;
    let submitCallback;
    beforeEach(() => {
        changeCallback = sinon_1.stub();
        blurCallback = sinon_1.stub();
    });
    it("Generates a Header and a Searchbar", () => {
        let wrapper = Enzyme.shallow(
            React.createElement(RNHeaderWithSearch_1.default, {
                searchButtonId: "searchButtonId",
                searchBarAriaLabel: "Search research catalog",
                sectionTitle: React.createElement("span", null, "title"),
                advancedSearchElem: React.createElement("span", null, "hello"),
                searchBarId: "searchBarId",
                dropdownId: "dropdownId",
                textFieldAriaLabel: "Research Now",
                searchDropdownOptions: ["Keyword", "Author", "Subject"],
                searchSubmitHandler: submitCallback,
                selectChangeHandler: changeCallback,
                selectBlurHandler: blurCallback,
            })
        );
        chai_1.expect(wrapper.find("RNSectionTitle")).to.have.lengthOf(1);
        chai_1.expect(wrapper.find("SearchBar")).to.have.lengthOf(1);
    });
});
