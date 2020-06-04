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
// OH-31 Header with Search
const React = __importStar(require("react"));
const SearchBar_1 = __importDefault(require("../SearchBar/SearchBar"));
const bem_1 = __importDefault(require("../../utils/bem"));
const RNSectionTitle_1 = __importDefault(
    require("../RNSectionTitle/RNSectionTitle")
);
function RNHeaderWithSearch(props) {
    const {
        sectionTitle,
        searchBarId,
        searchBarAriaLabel,
        searchValue,
        selectedField,
        searchButtonId,
        hasError,
        errorMessage,
        dropdownId,
        searchDropdownOptions,
        textFieldAriaLabel,
        advancedSearchElem,
        selectChangeHandler,
        selectBlurHandler,
        searchSubmitHandler,
        textChangeHandler,
    } = props;
    const base_class = "search-header";
    return React.createElement(
        "div",
        { className: bem_1.default(base_class) },
        React.createElement(
            "div",
            { className: bem_1.default("content", [], base_class) },
            React.createElement(RNSectionTitle_1.default, null, sectionTitle),
            React.createElement(SearchBar_1.default, {
                searchBarId: searchBarId,
                searchBarAriaLabel: searchBarAriaLabel,
                searchValue: searchValue,
                selectedField: selectedField,
                blockName: base_class,
                buttonId: searchButtonId,
                dropdownId: dropdownId,
                dropdownAriaLabel: "Filter Search",
                textFieldAriaLabel: textFieldAriaLabel,
                dropdownOptions: searchDropdownOptions,
                helperVariant: "ResearchNow",
                hasError: hasError,
                errorMessage: errorMessage,
                selectBlurHandler: selectBlurHandler,
                selectChangeHandler: selectChangeHandler,
                searchSubmitHandler: searchSubmitHandler,
                searchChangeHandler: textChangeHandler,
            }),
            React.createElement(
                "div",
                { className: bem_1.default("promo-text", [], base_class) },
                React.cloneElement(advancedSearchElem, {
                    modifiers: ["dark-background"],
                })
            )
        )
    );
}
exports.default = RNHeaderWithSearch;
