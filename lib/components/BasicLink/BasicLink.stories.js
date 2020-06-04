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
exports.generatedBasicLink = exports.passedInBasicLink = void 0;
const React = __importStar(require("react"));
const BasicLink_1 = __importDefault(require("./BasicLink"));
exports.default = {
    title: "Basic Link (Must be Wrapped in another component)",
    component: BasicLink_1.default,
};
exports.passedInBasicLink = () =>
    React.createElement(
        BasicLink_1.default,
        { className: "passed-in-class" },
        React.createElement("a", { href: "#passed-in-link" }, "I'm cold")
    );
exports.generatedBasicLink = () =>
    React.createElement(
        BasicLink_1.default,
        { className: "passed-in-class", url: "#passed-in-link" },
        "I'm very cold"
    );
