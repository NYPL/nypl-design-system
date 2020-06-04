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
exports.searchFormResearchNowVariantError = exports.searchFormWithParamsAndError = exports.searchWithFormError = exports.searchWithNoParams = exports.searchWithParams = void 0;
const React = __importStar(require("react"));
const SearchBar_1 = __importDefault(require("./SearchBar"));
const addon_actions_1 = require("@storybook/addon-actions");
exports.default = {
    title: "SearchBar",
    component: SearchBar_1.default,
};
exports.searchWithParams = () =>
    React.createElement(SearchBar_1.default, {
        searchBarId: "searchBarId",
        buttonId: "searchButtonId",
        searchBarAriaLabel: "search",
        dropdownId: "dropdownId",
        dropdownAriaLabel: "filter",
        textFieldAriaLabel: "Text Field aria-label",
        dropdownOptions: ["Keyword", "Other Keyword"],
        searchSubmitHandler: addon_actions_1.action("searched"),
        selectChangeHandler: addon_actions_1.action("selectChanged"),
        selectBlurHandler: addon_actions_1.action("selectChanged"),
    });
exports.searchWithNoParams = () =>
    React.createElement(SearchBar_1.default, {
        searchBarId: "searchBarId",
        buttonId: "searchButtonId",
        searchBarAriaLabel: "search",
        textFieldAriaLabel: "Text Field aria-label",
        searchSubmitHandler: addon_actions_1.action("searched"),
    });
exports.searchWithFormError = () =>
    React.createElement(SearchBar_1.default, {
        searchBarId: "searchBarId",
        searchBarAriaLabel: "search",
        buttonId: "searchButtonId",
        textFieldAriaLabel: "Text Field aria-label",
        searchSubmitHandler: addon_actions_1.action("searched"),
        hasError: true,
        errorMessage: "Error text",
    });
exports.searchFormWithParamsAndError = () =>
    React.createElement(SearchBar_1.default, {
        searchBarId: "searchBarId",
        buttonId: "searchButtonId",
        textFieldAriaLabel: "Text Field aria-label",
        searchBarAriaLabel: "search",
        dropdownId: "dropdownId",
        dropdownAriaLabel: "filter",
        dropdownOptions: ["Keyword", "Other Keyword"],
        searchSubmitHandler: addon_actions_1.action("searched"),
        selectChangeHandler: addon_actions_1.action("selectChanged"),
        selectBlurHandler: addon_actions_1.action("selectChanged"),
        hasError: true,
        errorMessage: "Error text",
    });
exports.searchFormResearchNowVariantError = () =>
    React.createElement(SearchBar_1.default, {
        searchBarId: "searchBarId",
        searchBarAriaLabel: "search",
        buttonId: "searchButtonId",
        textFieldAriaLabel: "Text Field aria-label",
        searchSubmitHandler: addon_actions_1.action("searched"),
        helperVariant: "ResearchNow",
        hasError: true,
        errorMessage: "Error text",
    });
