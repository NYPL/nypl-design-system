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
const Button_1 = __importDefault(require("../Button/Button"));
const Dropdown_1 = __importDefault(require("../Dropdown/Dropdown"));
const ButtonTypes_1 = require("../Button/ButtonTypes");
const IconTypes_1 = require("../Icons/IconTypes");
/** Pagination */
function Pagination(props) {
    const {
        paginationDropdownOptions,
        currentValue,
        previousPageHandler,
        nextPageHandler,
        onSelectChange,
        onSelectBlur,
    } = props;
    const pagination__base_class = "pagination";
    let buttonPrevOpts = {
        id: "pagination-previous",
        callback: previousPageHandler,
        content: React.createElement(React.Fragment, null, "Previous"),
        buttonType: ButtonTypes_1.ButtonTypes.Outline,
        iconPosition: ButtonTypes_1.ButtonIconPositions.Left,
        iconRotation: IconTypes_1.IconRotationTypes.rotate90,
        iconName: "arrow_xsmall",
        iconDecorative: true,
    };
    let buttonNextOpts = {
        id: "pagination-next",
        callback: nextPageHandler,
        content: React.createElement(React.Fragment, null, "Next"),
        buttonType: ButtonTypes_1.ButtonTypes.Outline,
        iconPosition: ButtonTypes_1.ButtonIconPositions.Right,
        iconRotation: IconTypes_1.IconRotationTypes.rotate270,
        iconName: "arrow_xsmall",
        iconDecorative: true,
    };
    let dropdownProps = {
        dropdownId: "pagination-dropdown",
        isRequired: false,
        labelId: "pagination-select-label",
        labelText: "Page",
        dropdownOptions: paginationDropdownOptions,
        selectedOption: currentValue,
        onSelectChange: onSelectChange,
        onSelectBlur: onSelectBlur,
    };
    return React.createElement(
        "nav",
        {
            "aria-label": "Pagination",
            className: bem_1.default(pagination__base_class),
        },
        React.createElement(
            Button_1.default,
            Object.assign(
                { callback: buttonPrevOpts.callback },
                buttonPrevOpts
            ),
            buttonPrevOpts.content
        ),
        React.createElement(
            Dropdown_1.default,
            Object.assign(
                { blockName: pagination__base_class, labelPosition: "left" },
                dropdownProps
            )
        ),
        React.createElement(
            Button_1.default,
            Object.assign(
                { callback: buttonNextOpts.callback },
                buttonNextOpts
            ),
            buttonNextOpts.content
        )
    );
}
exports.default = Pagination;
