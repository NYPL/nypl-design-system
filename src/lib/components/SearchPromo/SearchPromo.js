"use strict";
// OF-21 Search Promo
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
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
const SectionTitle_1 = __importDefault(require("../SectionTitle/SectionTitle"));
const SearchBar_1 = __importDefault(require("../SearchBar/SearchBar"));
const BodyText_1 = __importDefault(require("../BodyText/BodyText"));
function SearchPromo(props) {
    const {
        headingText,
        modifiers,
        blockName,
        titleId,
        searchBarId,
        searchButtonId,
        hasError,
        errorMessage,
        dropdownId,
        selectedOption,
        searchDropdownOptions,
        advancedSearchMessage,
        searchValue,
        searchInputAriaLabel,
        selectChangeHandler,
        selectBlurHandler,
        searchSubmitHandler,
        textChangeHandler,
    } = props;
    const searchpromo__base_class = "search-promo";
    return React.createElement(
        "div",
        {
            className: bem_1.default(
                searchpromo__base_class,
                modifiers,
                blockName
            ),
        },
        React.createElement(
            "div",
            {
                className: bem_1.default(
                    "content",
                    [],
                    searchpromo__base_class
                ),
            },
            React.createElement(SectionTitle_1.default, {
                id: titleId,
                headingText: headingText,
                blockName: searchpromo__base_class,
            }),
            React.createElement(
                "div",
                {
                    className: bem_1.default(
                        "search-section",
                        [],
                        searchpromo__base_class
                    ),
                },
                React.createElement(SearchBar_1.default, {
                    searchBarId: searchBarId,
                    searchBarAriaLabelledBy: titleId,
                    buttonId: searchButtonId,
                    dropdownId: dropdownId,
                    dropdownOptions: searchDropdownOptions,
                    dropdownAriaLabel: "Filter Search",
                    selectedField: selectedOption,
                    searchValue: searchValue,
                    hasError: hasError,
                    errorMessage: errorMessage,
                    selectBlurHandler: selectBlurHandler,
                    selectChangeHandler: selectChangeHandler,
                    searchSubmitHandler: searchSubmitHandler,
                    searchChangeHandler: textChangeHandler,
                }),
                React.createElement(
                    "div",
                    {
                        className: bem_1.default(
                            "promo-text",
                            [],
                            searchpromo__base_class
                        ),
                    },
                    React.createElement(BodyText_1.default, {
                        bodyContent: advancedSearchMessage,
                    })
                )
            )
        )
    );
}
exports.default = SearchPromo;
