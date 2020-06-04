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
// MT-173 Text Link
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
const BasicLink_1 = __importDefault(require("../BasicLink/BasicLink"));
class UnderlineLink extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let link__base_class = "link";
        const { url, attributes, modifiers, blockName } = this.props;
        let className = bem_1.default(link__base_class, modifiers, blockName);
        let children = this.props.children;
        return React.createElement(
            BasicLink_1.default,
            { url: url, className: className, attributes: attributes },
            children
        );
    }
}
exports.default = UnderlineLink;
