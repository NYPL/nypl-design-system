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
exports.researchNowSectionTitle = void 0;
const React = __importStar(require("react"));
const RNSectionTitle_1 = __importDefault(require("./RNSectionTitle"));
const bem_1 = __importDefault(require("../../utils/bem"));
exports.default = {
    title: "Research Now Section Title",
    component: RNSectionTitle_1.default,
};
exports.researchNowSectionTitle = () =>
    React.createElement(
        RNSectionTitle_1.default,
        null,
        React.createElement(
            "a",
            {
                className: `${bem_1.default("rn-section-title", [
                    "dark-background",
                ])} rn-section-title`,
                href: "researchNow-home-url",
            },
            React.createElement(
                "span",
                { id: "research-now-title" },
                "Research",
                React.createElement(
                    "span",
                    {
                        className: bem_1.default(
                            "emphasis",
                            [],
                            "rn-section-title"
                        ),
                    },
                    "Now"
                )
            )
        )
    );
