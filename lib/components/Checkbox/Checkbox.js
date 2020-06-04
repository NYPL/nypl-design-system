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
const Label_1 = __importDefault(require("../Label/Label"));
/**
 * A Form Checkbox component that can be selected and deselected.
 */
function Checkbox(props) {
    const {
        name,
        modifiers = [],
        blockName = "",
        checkboxId,
        labelOptions,
        isSelected,
        onChange,
    } = props;
    const baseClass = "checkbox";
    return React.createElement(
        "div",
        { className: bem_1.default(baseClass, modifiers, blockName) },
        React.createElement("input", {
            id: checkboxId,
            name: name,
            className: bem_1.default("input", [], baseClass),
            onChange: onChange,
            type: "checkbox",
            "aria-checked": isSelected,
            checked: isSelected,
        }),
        React.createElement(
            "span",
            { className: bem_1.default("label", [], baseClass) },
            React.createElement(
                Label_1.default,
                { referenceId: checkboxId, id: labelOptions.id },
                labelOptions.labelContent
            )
        )
    );
}
exports.default = Checkbox;
