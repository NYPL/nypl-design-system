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
exports.researchNowSearchHeader = void 0;
/* OH-31 Header With Search */
const React = __importStar(require("react"));
const RNHeaderWithSearch_1 = __importDefault(require("./RNHeaderWithSearch"));
const addon_actions_1 = require("@storybook/addon-actions");
const Link_1 = __importDefault(require("../Link/Link"));
const bem_1 = __importDefault(require("../../utils/bem"));
exports.default = {
    title: "Research Now Header With Search",
    component: RNHeaderWithSearch_1.default,
};
exports.researchNowSearchHeader = () =>
    React.createElement(RNHeaderWithSearch_1.default, {
        searchButtonId: "searchButtonId",
        searchBarAriaLabel: "Search research catalog",
        sectionTitle: React.createElement(
            "a",
            {
                className: `${bem_1.default(
                    "rn-section-title",
                    ["dark-background"],
                    "search-header"
                )} rn-section-title`,
                href: "researchNow-home-url",
            },
            React.createElement(
                "span",
                { id: "research-now-title" },
                "Research",
                React.createElement(
                    "span",
                    {
                        className: bem_1.default(
                            "emphasis",
                            [],
                            "rn-section-title"
                        ),
                    },
                    "Now"
                )
            )
        ),
        advancedSearchElem: React.createElement(
            Link_1.default,
            { href: "advanced-search-link" },
            "Advanced Search"
        ),
        searchBarId: "searchBarId",
        dropdownId: "dropdownId",
        textFieldAriaLabel: "Research Now",
        searchDropdownOptions: ["Keyword", "Author", "Subject"],
        searchSubmitHandler: addon_actions_1.action("searched"),
        selectChangeHandler: addon_actions_1.action("changed"),
        selectBlurHandler: addon_actions_1.action("selectChanged"),
    });
