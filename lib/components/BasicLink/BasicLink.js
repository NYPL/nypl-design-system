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
exports.BasicLinkBase = void 0;
// Base Link Helper Class
const React = __importStar(require("react"));
const WithOneChild_1 = __importDefault(
    require("../../helpers/hoc/WithOneChild")
);
class BasicLinkBase extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { url, className, attributes, icon } = this.props;
        let props = Object.assign({ className: className }, attributes);
        let linkElement;
        // If the value is a string, then it's only one element but wrap it in a fragment.
        if (typeof this.props.children === "string") {
            if (!url) {
                throw new Error(
                    `if children ${this.props.children} has no anchor tag, please pass prop: url`
                );
            }
            props["href"] = url;
            let linkChildren = [
                React.createElement(React.Fragment, null, this.props.children),
            ];
            if (icon) {
                linkChildren.push(icon.element);
            }
            linkElement = React.createElement("a", props, linkChildren);
        } else {
            let passedInChild = this.props.children;
            let linkChildren = [passedInChild.props.children];
            if (icon) {
                linkChildren.push(icon.element);
            }
            // TODO Check that there is a href attribute and that this is indeed a link.
            linkElement = React.cloneElement(
                passedInChild,
                props,
                linkChildren
            );
        }
        return linkElement;
    }
}
exports.BasicLinkBase = BasicLinkBase;
const BasicLink = WithOneChild_1.default(BasicLinkBase);
exports.default = BasicLink;
