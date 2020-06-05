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
/** Wrapper component for an unordered list of objects */
function UnorderedList(props) {
    const { id, modifiers = [], blockName = "" } = props;
    const baseClass = "unordered-list";
    if (!Array.isArray(props.children)) {
        throw new Error(
            "Please pass only an Array as a child of UnorderedList"
        );
    }
    const content = props.children.map((content, i) => {
        return React.createElement(
            "li",
            {
                className: bem_1.default(baseClass, [], "list-item"),
                key: id + "-li-" + i,
            },
            content
        );
    });
    return React.createElement(
        "div",
        { className: bem_1.default(baseClass, modifiers, "list-container") },
        React.createElement(
            "ul",
            {
                id: id,
                className:
                    baseClass +
                    " " +
                    bem_1.default(baseClass, modifiers, blockName),
            },
            content
        )
    );
}
exports.default = UnorderedList;
