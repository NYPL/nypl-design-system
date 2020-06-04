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
const react_uid_1 = require("react-uid");
const LinkTypes_1 = require("./LinkTypes");
const Icon_1 = __importDefault(require("../Icons/Icon"));
const IconTypes_1 = require("../Icons/IconTypes");
function Link(linkProps) {
    const {
        href,
        modifiers,
        blockName,
        attributes,
        linkType = LinkTypes_1.LinkTypes.Default,
    } = linkProps;
    let link_base_class = "link";
    let childProps = {};
    let elementChildren = React.Children.map(linkProps.children, (child) => {
        if (typeof child === "string" && !linkProps.href) {
            throw new Error("Link needs prop 'href'");
        } else if (child.type === "a") {
            childProps = child.props;
            return child.props.children;
        } else {
            return child;
        }
    });
    if (
        linkType === LinkTypes_1.LinkTypes.Action ||
        linkType === LinkTypes_1.LinkTypes.Forwards ||
        linkType === LinkTypes_1.LinkTypes.Backwards
    ) {
        link_base_class = "more-link";
    } else if (linkType === LinkTypes_1.LinkTypes.Button) {
        link_base_class = "button";
    } else {
        link_base_class = "link";
    }
    let navigationIconProps, iconRotation, iconPosition, iconLeft, iconRight;
    // An icon needs a position in order for it to be created and
    // rendered in the link.
    if (linkType === LinkTypes_1.LinkTypes.Backwards) {
        iconRotation = IconTypes_1.IconRotationTypes.rotate90;
        iconPosition = "left";
    } else if (linkType === LinkTypes_1.LinkTypes.Forwards) {
        iconRotation = IconTypes_1.IconRotationTypes.rotate270;
        iconPosition = "right";
    }
    navigationIconProps = {
        name: "arrow_xsmall",
        modifiers: [iconPosition, iconRotation, modifiers],
        blockName: "more-link",
        decorative: "true",
    };
    if (linkType === LinkTypes_1.LinkTypes.Backwards) {
        iconLeft = React.createElement(
            Icon_1.default,
            Object.assign({}, navigationIconProps)
        );
    } else if (linkType === LinkTypes_1.LinkTypes.Forwards) {
        iconRight = React.createElement(
            Icon_1.default,
            Object.assign({}, navigationIconProps)
        );
    }
    elementChildren.map((child) => {
        return React.cloneElement(child, { key: react_uid_1.uid(child) });
    });
    let className = bem_1.default(link_base_class, modifiers, blockName);
    return React.createElement(
        "a",
        Object.assign(
            Object.assign(Object.assign({}, linkProps), { className }),
            childProps
        ),
        iconLeft,
        elementChildren,
        iconRight
    );
}
exports.default = Link;
