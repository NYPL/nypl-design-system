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
const SearchBar_1 = __importDefault(require("./SearchBar"));
describe("Search Bar with Optional Parameters", () => {
    let wrapper;
    let searchCallback;
    let onChangeCallback;
    beforeEach(() => {
        searchCallback = sinon_1.stub();
        onChangeCallback = sinon_1.stub();
    });
    it("Search Bar has an input field and button", () => {
        let wrapper = Enzyme.shallow(
            React.createElement(SearchBar_1.default, {
                searchBarId: "id",
                searchBarAriaLabel: "label",
                buttonId: "searchButtonId",
                searchSubmitHandler: searchCallback,
            })
        );
        chai_1.expect(wrapper.find("TextField")).to.have.lengthOf(1);
        chai_1.expect(wrapper.find("Button")).to.have.lengthOf(1);
    });
    it("Search Bar calls callback on Submit ", () => {
        let mounted = Enzyme.mount(
            React.createElement(SearchBar_1.default, {
                textFieldAriaLabel: "searchBar",
                searchBarId: "id",
                searchBarAriaLabel: "label",
                buttonId: "searchButtonId",
                searchSubmitHandler: searchCallback,
            })
        );
        mounted.find("Button").simulate("click");
        chai_1.expect(searchCallback.callCount).to.equal(1);
    });
    it("SearchBar calls optional onChange property", () => {
        wrapper = Enzyme.shallow(
            React.createElement(SearchBar_1.default, {
                textFieldAriaLabel: "searchBar",
                searchBarId: "id",
                searchBarAriaLabel: "label",
                buttonId: "searchButtonId",
                searchChangeHandler: onChangeCallback,
                searchSubmitHandler: searchCallback,
            })
        );
        wrapper
            .find("TextField")
            .dive()
            .find("input")
            .simulate("change", { target: { value: "Hello" } });
        chai_1.expect(onChangeCallback.callCount).to.equal(1);
    });
    it("Shows 'error' span when error is passed", () => {
        wrapper = Enzyme.shallow(
            React.createElement(SearchBar_1.default, {
                searchBarId: "id",
                buttonId: "searchButtonId",
                searchBarAriaLabel: "label",
                hasError: true,
                errorMessage: "test",
                searchSubmitHandler: searchCallback,
            })
        );
        chai_1
            .expect(wrapper.find(".search-bar__input-description--error"))
            .to.have.lengthOf(1);
    });
    it("Shows 'error' text inside input when error is passed with ResearchNow Variation", () => {
        let mounted = Enzyme.mount(
            React.createElement(SearchBar_1.default, {
                searchBarId: "id",
                buttonId: "searchButtonId",
                searchBarAriaLabel: "label",
                helperVariant: "ResearchNow",
                hasError: true,
                errorMessage: "test",
                searchSubmitHandler: searchCallback,
            })
        );
        chai_1
            .expect(mounted.find(".search-bar__input-description--error"))
            .to.have.lengthOf(0);
        chai_1
            .expect(mounted.find("input").prop("placeholder"))
            .to.equal("test");
    });
    it("Throws error when SearchBar is not passed aria-label or aria-labelledby", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(SearchBar_1.default, {
                        searchBarId: "id",
                        buttonId: "searchButtonId",
                        searchSubmitHandler: searchCallback,
                    })
                )
            )
            .to.throw(
                "Either searchBarAriaLabel and searchBarAriaLabelledBy must be passed"
            );
    });
    it("Throws error when hasError is true and no errorMessage is passed", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(SearchBar_1.default, {
                        searchBarId: "id",
                        buttonId: "searchButtonId",
                        searchBarAriaLabel: "label",
                        hasError: true,
                        searchSubmitHandler: searchCallback,
                    })
                )
            )
            .to.throw(
                "If there is an error, there must also be an error message"
            );
    });
});
