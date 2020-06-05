"use strict";
// MF-46 Search Bar with Search By Parameter
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
const FormDropdown_1 = __importDefault(require("../FormDropdown/FormDropdown"));
const TextField_1 = __importDefault(require("../TextField/TextField"));
const __1 = require("../..");
const ButtonTypes_1 = require("../Button/ButtonTypes");
function SearchBar(props) {
    const {
        blockName,
        searchBarId,
        buttonId,
        searchBarAriaLabel,
        searchBarAriaLabelledBy,
        dropdownId,
        dropdownOptions,
        dropdownAriaLabel,
        selectedField,
        searchValue,
        placeholderText,
        helperVariant,
        hasError,
        errorMessage,
        selectBlurHandler,
        searchSubmitHandler,
        selectChangeHandler,
        searchChangeHandler,
    } = props;
    if (dropdownOptions) {
        if (
            !(
                dropdownId &&
                dropdownAriaLabel &&
                selectBlurHandler &&
                selectChangeHandler
            )
        ) {
            throw new Error(`If dropdownOptions are passed, dropdownId (currently ${dropdownId}),
      dropdownAriaLabel (currently ${dropdownAriaLabel}), selectChangeHandler (currently ${selectChangeHandler}),
      and selectBlurHandler (currently ${selectBlurHandler}) must also be passed`);
        }
    }
    if (!searchBarAriaLabel && !searchBarAriaLabelledBy) {
        throw new Error(
            "Either searchBarAriaLabel and searchBarAriaLabelledBy must be passed"
        );
    }
    let modifiers = [];
    if (hasError) {
        if (!errorMessage) {
            throw new Error(
                "If there is an error, there must also be an error message"
            );
        }
        modifiers.push("error");
    }
    let searchbar__base_class = "search-bar";
    let textfieldProps = {
        id: searchBarId + "-input-textfield",
        ariaLabelledBy: buttonId,
        onChange: searchChangeHandler,
        isRequired: true,
        blockName: searchbar__base_class,
        placeholderText:
            hasError && helperVariant ? errorMessage : placeholderText,
        value: searchValue,
        modifiers: modifiers,
    };
    let buttonProps = {
        id: buttonId,
        callback: searchSubmitHandler,
        blockName: searchbar__base_class,
        content: React.createElement(React.Fragment, null, "Search"),
        buttonType: ButtonTypes_1.ButtonTypes.Filled,
        iconPosition: ButtonTypes_1.ButtonIconPositions.Left,
        iconName: "search_small",
        iconDecorative: true,
    };
    return React.createElement(
        "form",
        {
            className: `${bem_1.default(
                searchbar__base_class,
                modifiers,
                blockName
            )} ${bem_1.default(searchbar__base_class, modifiers)}`,
            id: searchBarId,
            role: "search",
            "aria-label": searchBarAriaLabel,
            "aria-labelledby": searchBarAriaLabelledBy,
        },
        dropdownOptions &&
            React.createElement(FormDropdown_1.default, {
                isRequired: false,
                selectedOption: selectedField,
                ariaLabel: "Search by",
                dropdownId: dropdownId,
                options: dropdownOptions,
                onSelectBlur: selectBlurHandler,
                blockName: searchbar__base_class,
                onSelectChange: selectChangeHandler,
            }),
        React.createElement(
            "div",
            {
                className: bem_1.default(
                    "input-group",
                    [],
                    searchbar__base_class
                ),
            },
            React.createElement(
                TextField_1.default,
                Object.assign({}, textfieldProps)
            ),
            React.createElement(
                __1.Button,
                Object.assign({ callback: searchSubmitHandler }, buttonProps),
                buttonProps.content
            ),
            hasError &&
                !helperVariant &&
                React.createElement(
                    "span",
                    {
                        className: bem_1.default(
                            "input-description",
                            modifiers,
                            searchbar__base_class
                        ),
                    },
                    errorMessage
                )
        )
    );
}
exports.default = SearchBar;
