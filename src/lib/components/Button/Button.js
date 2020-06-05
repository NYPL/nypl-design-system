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
const Icon_1 = __importDefault(require("../Icons/Icon"));
const bem_1 = __importDefault(require("../../utils/bem"));
const ButtonTypes_1 = require("./ButtonTypes");
let Button = /** @class */ (() => {
    class Button extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            const {
                id,
                callback,
                attributes,
                modifiers,
                blockName,
                buttonType,
                type = "submit",
                mouseDown,
                iconPosition,
                iconRotation,
                iconName,
                iconModifiers = ["small"],
                iconDecorative,
                iconRole,
                children,
            } = this.props;
            let buttonModifiers = modifiers ? modifiers : [];
            if (!buttonModifiers.find((mod) => mod === buttonType)) {
                buttonModifiers.push(buttonType);
            }
            let button_base_class = "button";
            let iconProps;
            // An icon needs a position in order for it to be created and
            // rendered in the button.
            if (iconPosition) {
                iconProps = {
                    name: iconName,
                    key: `icon-${id}`,
                    blockName: button_base_class,
                    modifiers: iconModifiers,
                    decorative: iconDecorative,
                    desc: iconDecorative,
                    role: iconDecorative ? undefined : iconRole,
                    title: iconDecorative,
                };
                if (iconModifiers) {
                    iconProps.modifiers.push(...iconModifiers);
                }
                if (iconRotation) {
                    iconProps.modifiers.push(iconRotation);
                }
                buttonModifiers.push("icon");
                switch (iconPosition) {
                    case ButtonTypes_1.ButtonIconPositions.Left: {
                        buttonModifiers.push("icon-left");
                        iconProps.modifiers.push("icon-left");
                        break;
                    }
                    case ButtonTypes_1.ButtonIconPositions.Right: {
                        buttonModifiers.push("icon-right");
                        iconProps.modifiers.push("icon-right");
                        break;
                    }
                    case ButtonTypes_1.ButtonIconPositions.JustifyRight: {
                        buttonModifiers.push("justify-right");
                        iconProps.modifiers.push("justify-right");
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
            let btnCallback = mouseDown
                ? { onMouseDown: callback }
                : { onClick: callback };
            return React.createElement(
                "button",
                Object.assign(
                    {
                        id: "btn-" + id,
                        className: `${button_base_class} ${bem_1.default(
                            button_base_class,
                            buttonModifiers,
                            blockName
                        )}`,
                        type: type,
                    },
                    attributes,
                    btnCallback
                ),
                React.createElement(
                    "span",
                    {
                        className: bem_1.default(
                            "label",
                            buttonModifiers,
                            button_base_class
                        ),
                    },
                    children
                ),
                iconProps &&
                    React.createElement(
                        Icon_1.default,
                        Object.assign({}, iconProps)
                    )
            );
        }
    }
    Button.defaultProps = {
        mouseDown: false,
    };
    return Button;
})();
exports.default = Button;
