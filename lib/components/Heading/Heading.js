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
// MT-82, MT 225, etc
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
function Heading(props) {
    const {
        level,
        id,
        baseClass = "heading",
        text,
        modifiers,
        blockName,
        url,
        urlClass,
        attributes,
    } = props;
    let heading_base_class = baseClass;
    if (level < 1 || level > 6) {
        throw new Error("Heading only supports levels 1-6");
    }
    if (!props.children && !text) {
        throw new Error("Heading has no children, please pass prop: text");
    }
    if (React.Children.count(props.children) > 1) {
        const children = React.Children.map(
            props.children,
            (child) => child.type
        );
        // Catching the error because React's error isn't as helpful.
        throw new Error(
            `Please only pass one child into Heading, got ${children.join(
                ", "
            )}`
        );
    }
    let content;
    if (props.children) {
        content = url
            ? React.createElement(
                  "a",
                  { href: url, className: urlClass },
                  props.children
              )
            : props.children;
    } else {
        content = url
            ? React.createElement("a", { href: url, className: urlClass }, text)
            : text;
    }
    let headingProps = Object.assign(
        {
            className: bem_1.default(heading_base_class, modifiers, blockName),
            id: id,
        },
        attributes
    );
    return React.createElement("h" + level, headingProps, content);
}
exports.default = Heading;
