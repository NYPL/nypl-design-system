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
exports.searchPromoWithError = exports.researchNowSearchPromo = void 0;
const React = __importStar(require("react"));
const SearchPromo_1 = __importDefault(require("./SearchPromo"));
const addon_actions_1 = require("@storybook/addon-actions");
const Link_1 = __importDefault(require("../Link/Link"));
exports.default = {
    title: "SearchPromo",
    component: SearchPromo_1.default,
};
exports.researchNowSearchPromo = () =>
    React.createElement(SearchPromo_1.default, {
        headingText: "Search the World's Research Collections",
        titleId: "title",
        searchButtonId: "searchButtonId",
        advancedSearchMessage: React.createElement(
            "p",
            null,
            "Use ",
            React.createElement(
                Link_1.default,
                { href: "#advanced-fake-link" },
                "Advanced Search"
            ),
            " to narrow your results."
        ),
        searchBarId: "searchBarId",
        dropdownId: "dropdownId",
        searchInputAriaLabel: "ariaLabel",
        searchDropdownOptions: ["Keyword", "Author"],
        searchSubmitHandler: addon_actions_1.action("searched"),
        selectChangeHandler: addon_actions_1.action("changed"),
        selectBlurHandler: addon_actions_1.action("selectChanged"),
    });
exports.searchPromoWithError = () =>
    React.createElement(SearchPromo_1.default, {
        headingText: "Search the World's Research Collections",
        titleId: "title",
        advancedSearchMessage: React.createElement(
            "p",
            null,
            "Use ",
            React.createElement(
                Link_1.default,
                { href: "#advanced-fake-link" },
                "Advanced Search"
            ),
            " to narrow your results."
        ),
        searchButtonId: "searchButtonId",
        searchBarId: "searchBarId",
        dropdownId: "dropdownId",
        searchInputAriaLabel: "ariaLabel",
        hasError: true,
        errorMessage: "oh no you messed up",
        searchDropdownOptions: ["Keyword", "Author"],
        searchSubmitHandler: addon_actions_1.action("searched"),
        selectChangeHandler: addon_actions_1.action("changed"),
        selectBlurHandler: addon_actions_1.action("selectChanged"),
    });
