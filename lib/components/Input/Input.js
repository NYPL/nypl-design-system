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
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
const TextField_1 = __importDefault(require("../TextField/TextField"));
const Label_1 = __importDefault(require("../Label/Label"));
const HelperErrorText_1 = __importDefault(
    require("../HelperErrorText/HelperErrorText")
);
/**
 * An Input field that labels a TextField and has Helpers or Errors
 */
function Input(props) {
    const {
        baseClass = "input",
        blockName = "form-item",
        labelId,
        labelContent,
        inputId,
        inputType = "text",
        inputValue,
        onInputChange,
        isRequired,
        helperContentOpts,
        errorContentOpts,
        showError,
    } = props;
    if (showError && !errorContentOpts) {
        throw new Error(
            "Error should be shown, but no errorContentOpts passed"
        );
    }
    let labelOptions = {
        id: labelId,
        labelContent: labelContent,
        referenceId: inputId,
    };
    let textFieldOptions = {
        id: inputId,
        ariaLabelledBy: labelId,
        value: inputValue,
        isRequired: isRequired,
        type: inputType,
        onChange: onInputChange,
    };
    return React.createElement(
        "div",
        { className: bem_1.default(blockName, [], baseClass) },
        React.createElement(
            "div",
            { className: "label-container" },
            React.createElement(
                "div",
                { className: bem_1.default("label", [], baseClass) },
                React.createElement(
                    Label_1.default,
                    {
                        referenceId: labelOptions.referenceId,
                        id: labelOptions.id,
                    },
                    labelOptions.labelContent
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
            TextField_1.default,
            Object.assign({ id: inputId }, textFieldOptions)
        ),
        helperContentOpts &&
            React.createElement(
                "div",
                { className: bem_1.default("help-text", [], baseClass) },
                React.createElement(
                    HelperErrorText_1.default,
                    { id: helperContentOpts.id, isError: false },
                    helperContentOpts.content
                )
            ),
        showError &&
            React.createElement(
                "div",
                { className: bem_1.default("error-text", [], baseClass) },
                React.createElement(
                    HelperErrorText_1.default,
                    { id: errorContentOpts.id, isError: true },
                    errorContentOpts.content
                )
            )
    );
}
exports.default = Input;
