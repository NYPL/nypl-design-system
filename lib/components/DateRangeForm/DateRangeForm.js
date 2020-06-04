"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("../Button/Button"));
const HelperErrorText_1 = __importDefault(
    require("../HelperErrorText/HelperErrorText")
);
const Input_1 = __importDefault(require("../Input/Input"));
const bem_1 = __importDefault(require("../../utils/bem"));
/* Input fields for date ranges. */
function DateRangeForm(props) {
    const {
        formLabel,
        fromLabelOpts,
        fromInputOpts,
        fromHelper,
        toLabelOpts,
        toInputOpts,
        toHelper,
        showError,
        error,
        buttonOpts,
    } = props;
    if (showError && !error) {
        throw new Error("Error should be shown, but no Error Content exists");
    }
    let baseClass = "date-range";
    if (buttonOpts && !buttonOpts.blockName) {
        buttonOpts.blockName = baseClass;
    }
    return react_1.default.createElement(
        "fieldset",
        { className: baseClass },
        react_1.default.createElement(
            "legend",
            { className: bem_1.default("legend", [], baseClass) },
            formLabel
        ),
        react_1.default.createElement(
            "div",
            {
                className: `input-row ${bem_1.default(
                    "input-row",
                    [],
                    baseClass
                )}`,
            },
            react_1.default.createElement(Input_1.default, {
                baseClass: "input-row",
                labelId: fromLabelOpts.id,
                labelContent: fromLabelOpts.labelContent,
                inputId: fromInputOpts.inputId,
                inputType: "number",
                inputValue: fromInputOpts.inputValue,
                onInputChange: fromInputOpts.onInputChange,
                helperContentOpts: fromHelper,
            }),
            react_1.default.createElement(Input_1.default, {
                baseClass: "input-row",
                labelId: toLabelOpts.id,
                labelContent: toLabelOpts.labelContent,
                inputId: toInputOpts.inputId,
                inputType: "number",
                inputValue: toInputOpts.inputValue,
                onInputChange: toInputOpts.onInputChange,
                helperContentOpts: toHelper,
            })
        ),
        showError &&
            react_1.default.createElement(
                HelperErrorText_1.default,
                { isError: true, id: error.id },
                error.content
            ),
        buttonOpts &&
            react_1.default.createElement(
                Button_1.default,
                Object.assign(
                    { callback: buttonOpts.callback, id: buttonOpts.id },
                    buttonOpts
                ),
                buttonOpts.content
            )
    );
}
exports.default = DateRangeForm;
