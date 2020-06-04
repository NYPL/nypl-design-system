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
const Button_1 = __importDefault(require("../Button/Button"));
const bem_1 = __importDefault(require("../../utils/bem"));
const ButtonTypes_1 = require("../Button/ButtonTypes");
/** Accordion component that shows content on toggle */
class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.toggleContentShow = this.toggleContentShow.bind(this);
    }
    toggleContentShow() {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    }
    render() {
        const { buttonOptions, modifiers = [], blockName = "" } = this.props;
        buttonOptions.type = "button";
        buttonOptions.blockName = "accordion";
        buttonOptions.modifiers = ["large"];
        buttonOptions.iconPosition =
            ButtonTypes_1.ButtonIconPositions.JustifyRight;
        buttonOptions.iconName = this.state.isOpen ? "minus" : "plus";
        buttonOptions.iconModifiers = ["medium"];
        buttonOptions.buttonType = ButtonTypes_1.ButtonTypes.Outline;
        return React.createElement(
            "div",
            { className: bem_1.default("accordion", modifiers, blockName) },
            React.createElement(
                Button_1.default,
                Object.assign(
                    { callback: this.toggleContentShow },
                    buttonOptions
                ),
                buttonOptions.content
            ),
            this.state.isOpen &&
                React.createElement(
                    "div",
                    { className: "accordion-content" },
                    this.props.children
                )
        );
    }
}
exports.default = Accordion;
