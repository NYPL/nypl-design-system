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
exports.linkWithRightIcon = exports.linkWithLeftIcon = exports.passedInLinkWithNoIcon = exports.passedInLinkWithLeftIcon = void 0;
const React = __importStar(require("react"));
const IconTypes_1 = require("../Icons/IconTypes");
const IconLink_1 = __importDefault(require("./IconLink"));
exports.default = {
    title: "Link with Icon",
    component: IconLink_1.default,
};
exports.passedInLinkWithLeftIcon = () =>
    React.createElement(
        IconLink_1.default,
        {
            iconPosition: "left",
            iconRotation: IconTypes_1.IconRotationTypes.rotate90,
        },
        React.createElement("a", { href: "#passed-in-link" }, "hello there")
    );
exports.passedInLinkWithNoIcon = () =>
    React.createElement(
        IconLink_1.default,
        null,
        React.createElement("a", { href: "#passed-in-link" }, "hello there")
    );
exports.linkWithLeftIcon = () =>
    React.createElement(
        IconLink_1.default,
        {
            url: "#generated-link-link",
            iconPosition: "left",
            iconRotation: IconTypes_1.IconRotationTypes.rotate90,
        },
        "hello there"
    );
exports.linkWithRightIcon = () =>
    React.createElement(
        IconLink_1.default,
        {
            url: "#generated-link-link",
            iconPosition: "right",
            iconRotation: IconTypes_1.IconRotationTypes.rotate270,
        },
        "hello there"
    );
