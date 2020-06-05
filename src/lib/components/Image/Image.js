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
// Images
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
function Image(props) {
    const image_base_class = "image";
    const {
        src,
        isDecorative,
        altText,
        imageModifiers,
        imageBlockname,
    } = props;
    if (!isDecorative && !altText) {
        throw new Error("If image is decorative, alt text is required");
    }
    if (altText && altText.length > 300) {
        throw new Error("Alt Text must be less than 300 characters");
    }
    let imageProps = {
        className: bem_1.default(
            image_base_class,
            imageModifiers,
            imageBlockname
        ),
        src: src,
        alt: isDecorative ? "" : altText,
    };
    return React.createElement("img", Object.assign({}, imageProps));
}
exports.default = Image;
