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
Object.defineProperty(exports, "__esModule", { value: true });
// Base Link Helper Class
const React = __importStar(require("react"));
const react_uid_1 = require("react-uid");
class Link extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { url, className, attributes, icon } = this.props;
        let props = Object.assign(
            { className: className, href: url },
            attributes
        );
        let childProps = {};
        React.Children.forEach(this.props.children, (child, i) => {
            if (i === 0) {
                childProps = child.props;
            } else {
                throw new Error("Please pass only one child into Link");
            }
        });
        let elementChildren = React.Children.map(
            this.props.children,
            (child) => {
                if (child.type === "a") {
                    return child.props.children;
                } else {
                    if (!props.href) {
                        throw new Error("IconLink needs prop 'url'");
                    } else {
                        return child.props ? child.props.children : child;
                    }
                }
            }
        );
        elementChildren.map((child) => {
            return React.cloneElement(child, { key: react_uid_1.uid(child) });
        });
        if (icon) {
            elementChildren.push(
                React.cloneElement(icon.element, { key: react_uid_1.uid(icon) })
            );
        }
        return React.createElement(
            "a",
            Object.assign(Object.assign({}, props), childProps),
            elementChildren
        );
    }
}
exports.default = Link;
