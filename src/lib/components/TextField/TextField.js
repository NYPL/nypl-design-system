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
// AF-239 Text Field
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
function TextField(props) {
    const {
        id,
        ariaLabel,
        ariaLabelledBy,
        isRequired = "false",
        blockName,
        modifiers,
        value,
        placeholderText,
        type = "text",
        onChange,
    } = props;
    let textfieldBlockName = blockName ? blockName : "form-item";
    if (!ariaLabel && !ariaLabelledBy) {
        throw new Error("Either label or ariaLabel must be defined");
    }
    let textFieldProps = {
        className: bem_1.default("input", modifiers, textfieldBlockName),
        type: type,
        value: value,
        onChange: onChange,
        "aria-label": !ariaLabelledBy ? ariaLabel : undefined,
        "aria-labelledby": ariaLabelledBy,
    };
    if (isRequired) {
        textFieldProps["aria-required"] = true;
    }
    let transformedTextField = React.createElement(
        "input",
        Object.assign({ id: `input-${id}` }, textFieldProps, {
            placeholder: placeholderText,
        })
    );
    return transformedTextField;
}
exports.default = TextField;
