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
// MT-18 Text Link With Optional Icon
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
const Icon_1 = __importDefault(require("../Icons/Icon"));
const BasicLink_1 = __importDefault(require("../BasicLink/BasicLink"));
class IconLink extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let iconLink__base_class = "more-link";
        const {
            url,
            attributes,
            modifiers,
            blockName,
            iconName = "arrow_xsmall",
            iconPosition,
            iconModifiers,
            iconRotation,
        } = this.props;
        let moreLinkModifiers = modifiers ? modifiers : [];
        let children = this.props.children;
        let icon = { element: undefined };
        if (iconPosition) {
            if (iconPosition === "left") {
                moreLinkModifiers.push("icon-left");
            } else if (iconPosition === "right") {
                moreLinkModifiers.push("icon-right");
            } else {
                throw new Error(
                    "iconPosition can only have values 'left' or 'right'"
                );
            }
            let moreIconModifiers = iconModifiers ? iconModifiers : [];
            if (iconRotation) {
                moreIconModifiers.push(iconRotation);
            }
            icon.element = React.createElement(Icon_1.default, {
                name: iconName,
                blockName: iconLink__base_class,
                modifiers: moreIconModifiers,
                decorative: true,
            });
        }
        let className = bem_1.default(
            iconLink__base_class,
            moreLinkModifiers,
            blockName
        );
        return React.createElement(
            BasicLink_1.default,
            {
                url: url,
                className: className,
                attributes: attributes,
                icon: icon,
            },
            children
        );
    }
}
exports.default = IconLink;
