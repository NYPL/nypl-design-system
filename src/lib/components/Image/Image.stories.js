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
exports.threeByFour = exports.twoByOne = void 0;
const React = __importStar(require("react"));
const Image_1 = __importDefault(require("./Image"));
exports.default = {
    title: "Image",
    component: Image_1.default,
};
exports.twoByOne = () => [
    React.createElement(Image_1.default, {
        src: "https://placeimg.com/200/100/arch",
        isDecorative: true,
    }),
    React.createElement(Image_1.default, {
        src: "https://placeimg.com/400/200/arch",
        isDecorative: true,
    }),
    React.createElement(Image_1.default, {
        src: "https://placeimg.com/1600/800/arch",
        isDecorative: true,
    }),
    React.createElement(Image_1.default, {
        src: "https://placeimg.com/2000/1000/arch",
        isDecorative: true,
    }),
];
exports.threeByFour = () => [
    React.createElement(Image_1.default, {
        src: "https://placeimg.com/150/200/arch",
        isDecorative: true,
    }),
    React.createElement(Image_1.default, {
        src: "https://placeimg.com/300/400/arch",
        isDecorative: true,
    }),
];
