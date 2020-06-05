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
exports.headingNoLink = exports.headingsWithLinks = void 0;
const React = __importStar(require("react"));
const SectionTitle_1 = __importDefault(require("./SectionTitle"));
exports.default = {
    title: "Section Title",
    component: SectionTitle_1.default,
};
exports.headingsWithLinks = () =>
    React.createElement(SectionTitle_1.default, {
        id: "section-title-with-link",
        headingText: "Heading 2",
        linkUrl: "#heading2",
    });
exports.headingNoLink = () =>
    React.createElement(SectionTitle_1.default, {
        id: "section-title-without-link",
        headingText: "Heading 2",
    });
