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
// AF-121 Form Dropdown
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
const Icon_1 = __importDefault(require("../Icons/Icon"));
class FormDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedOption: props.selectedOption };
        this.onSelectChange.bind(this);
    }
    componentDidUpdate() {
        if (this.state.selectedOption !== this.props.selectedOption) {
            this.setState({ selectedOption: this.props.selectedOption });
        }
    }
    onSelectChange(event, additionalChange) {
        let target = event.target;
        if (target) {
            this.setState({ selectedOption: target.value });
        }
        additionalChange(event);
    }
    render() {
        const {
            dropdownId,
            blockName = "form-item",
            options,
            labelId,
            isRequired,
            ariaLabel,
            disabled = false,
            selectedOption,
            onSelectBlur,
            onSelectChange,
        } = this.props;
        const modifiers = this.props.modifiers ? this.props.modifiers : [];
        if (!labelId && !ariaLabel) {
            throw new Error("Must either have labelId or aria-label");
        }
        let formItemBlockName = blockName;
        let selectProps = {
            id: dropdownId,
            className: bem_1.default("select", modifiers, formItemBlockName),
            "aria-required": isRequired,
            value: this.state.selectedOption
                ? this.state.selectedOption
                : undefined,
            disabled: disabled,
        };
        if (labelId) {
            selectProps["aria-labelledby"] = labelId;
        } else {
            selectProps["aria-label"] = ariaLabel;
        }
        if (!options.length) return;
        return React.createElement(
            "div",
            {
                className: bem_1.default(
                    "dropdown",
                    modifiers,
                    formItemBlockName
                ),
            },
            React.createElement(
                "select",
                Object.assign({}, selectProps, {
                    onChange: (e) => this.onSelectChange(e, onSelectChange),
                    onBlur: (e) => this.onSelectChange(e, onSelectBlur),
                }),
                options.map((child, key) => {
                    return React.createElement(
                        "option",
                        {
                            key: key.toString(),
                            "aria-selected":
                                child === this.state.selectedOption,
                            value: child,
                        },
                        child
                    );
                })
            ),
            React.createElement(Icon_1.default, {
                decorative: true,
                name: "arrow",
                modifiers: ["medium"],
            })
        );
    }
}
exports.default = FormDropdown;
