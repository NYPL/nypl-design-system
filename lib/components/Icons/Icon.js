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
const arrow_xsmall_svg_1 = __importDefault(
    require("../../icons/svg/arrow-xsmall.svg")
);
const arrow_svg_1 = __importDefault(require("../../icons/svg/arrow.svg"));
const download_svg_1 = __importDefault(require("../../icons/svg/download.svg"));
const minus_svg_1 = __importDefault(require("../../icons/svg/minus.svg"));
const plus_svg_1 = __importDefault(require("../../icons/svg/plus.svg"));
const search_small_svg_1 = __importDefault(
    require("../../icons/svg/search-small.svg")
);
const search_svg_1 = __importDefault(require("../../icons/svg/search.svg"));
const allSvgs = {
    arrow_xsmall: arrow_xsmall_svg_1.default,
    arrow: arrow_svg_1.default,
    download: download_svg_1.default,
    minus: minus_svg_1.default,
    plus: plus_svg_1.default,
    search_small: search_small_svg_1.default,
    search: search_svg_1.default,
};
class Icon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {
            modifiers = [],
            blockName,
            name,
            decorative,
            role,
            title,
            desc,
            iconRotation,
        } = this.props;
        let icon_base_class = "icon";
        if (this.props.iconRotation) {
            modifiers.push(this.props.iconRotation);
        }
        let iconProps = {
            className: bem_1.default(icon_base_class, modifiers, blockName),
            role: decorative ? "img" : role,
            "aria-hidden": decorative,
            "aria-labelledby": title ? "title-" + name : undefined,
            "aria-describedby": desc ? "desc-" + name : undefined,
            title: title ? `title-${name}` : undefined,
            description: desc ? `title-${name}` : undefined,
        };
        let svg = allSvgs[name];
        return React.createElement(
            "span",
            Object.assign({}, iconProps, {
                dangerouslySetInnerHTML: { __html: svg },
            })
        );
    }
}
exports.default = Icon;
