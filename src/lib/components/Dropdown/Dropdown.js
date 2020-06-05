"use strict";
/* MN-10: Pagination */
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
const Label_1 = __importDefault(require("../Label/Label"));
const HelperErrorText_1 = __importDefault(
    require("../HelperErrorText/HelperErrorText")
);
function Dropdown(props) {
    const {
        dropdownId,
        isRequired,
        blockName = "",
        modifiers = [],
        labelId,
        labelPosition,
        labelText,
        ariaLabel,
        helperContent,
        helperContentId,
        hasError,
        errorContent,
        errorContentId,
        dropdownOptions,
        selectedOption,
        onSelectChange,
        onSelectBlur,
    } = props;
    const baseClass = "dropdown";
    if (!["left", "top", "none"].includes(labelPosition)) {
        throw new Error(
            `prop labelPosition must be one of "left", "top", "none", but Dropdown was passed ${labelPosition}`
        );
    }
    if (labelPosition !== "none") {
        if (!labelId || !labelText) {
            throw new Error(
                `prop labelId and labelText must be passed into Dropdown when labelPosition is not "none".  (Got LabelPosition ${labelPosition})`
            );
        }
        modifiers.push("label-" + labelPosition);
    } else {
        if (!ariaLabel) {
            throw new Error(
                `prop ariaLabel must be passed into Dropdown when labelPosition is 'none'`
            );
        }
    }
    if (helperContent && !helperContentId) {
        throw new Error(
            `prop helperText ${helperContent} is passed, but it is missing prop helperTextId`
        );
    }
    if (hasError && (!errorContent || !errorContentId)) {
        throw new Error(
            `prop hasError is ${hasError}, but is missing props errorMessage (got ${errorContent}) and/or errorTextId (got ${errorContent})`
        );
    }
    return React.createElement(
        "div",
        { className: bem_1.default(baseClass, modifiers, blockName) },
        labelPosition !== "none" &&
            React.createElement(
                "div",
                { className: "label-container" },
                React.createElement(
                    "div",
                    { className: bem_1.default("label", [], baseClass) },
                    React.createElement(
                        Label_1.default,
                        { referenceId: dropdownId, id: labelId },
                        labelText
                    )
                ),
                isRequired &&
                    React.createElement(
                        "span",
                        {
                            className: bem_1.default(
                                "required-message",
                                [],
                                baseClass
                            ),
                        },
                        "Required"
                    )
            ),
        React.createElement(
            "div",
            { className: bem_1.default("select-area", [], baseClass) },
            React.createElement(
                "div",
                { className: bem_1.default("select", [], baseClass) },
                React.createElement(FormDropdown_1.default, {
                    dropdownId: dropdownId,
                    labelId: labelPosition !== "none" ? labelId : undefined,
                    isRequired: isRequired,
                    ariaLabel: labelPosition === "none" ? ariaLabel : undefined,
                    selectedOption: selectedOption,
                    options: dropdownOptions,
                    onSelectChange: onSelectChange,
                    onSelectBlur: onSelectBlur,
                })
            ),
            React.createElement(
                "div",
                { className: bem_1.default("help-text", [], baseClass) },
                helperContent &&
                    React.createElement(
                        HelperErrorText_1.default,
                        { id: helperContentId, isError: false },
                        helperContent
                    ),
                hasError &&
                    React.createElement(
                        HelperErrorText_1.default,
                        { id: errorContentId, isError: true },
                        errorContent
                    )
            )
        )
    );
}
exports.default = Dropdown;
