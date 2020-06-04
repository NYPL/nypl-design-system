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
const Link_1 = __importDefault(require("../Link/Link"));
const LinkTypes_1 = require("../Link/LinkTypes");
const Heading_1 = __importDefault(require("../Heading/Heading"));
class SectionTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            id,
            modifiers,
            blockName,
            headingText,
            headingAttributes,
            linkUrl,
            linkAttributes,
            linkModifiers,
        } = this.props;
        const baseClass = "heading-section";
        if (headingText.length > 80) {
            throw new Error(
                "Section Title (h2) Text must be fewer than 80 characters"
            );
        } else if (headingText.length > 60) {
            console.warn(
                "Section Title (h2) Text should be fewer than 60 characters"
            );
        }
        let link;
        if (linkUrl) {
            let passedInAttributes = Object.assign(
                { "aria-describedby": id },
                linkAttributes
            );
            link = React.createElement(
                Link_1.default,
                {
                    href: "#passed-in-link",
                    linkType: LinkTypes_1.LinkTypes.Forwards,
                },
                "See All"
            );
        }
        let headingModifiers = linkUrl ? ["has-link"] : [];
        return React.createElement(
            "div",
            { className: bem_1.default(baseClass, modifiers, blockName) },
            React.createElement(Heading_1.default, {
                id: id,
                level: 2,
                text: headingText,
                blockName: blockName ? blockName : baseClass,
                modifiers: headingModifiers,
                attributes: headingAttributes,
            }),
            link
        );
    }
}
exports.default = SectionTitle;
