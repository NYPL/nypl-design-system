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
exports.inputRequiredWithHelperAndError = exports.inputRequiredWithError = exports.inputWithHelper = exports.input = void 0;
const React = __importStar(require("react"));
const Input_1 = __importDefault(require("./Input"));
exports.default = {
    title: "Input",
    component: Input_1.default,
};
exports.input = () =>
    React.createElement(Input_1.default, {
        labelId: "blah",
        labelContent: React.createElement(React.Fragment, null, "Label"),
        inputId: "blah",
        isRequired: false,
    });
exports.inputWithHelper = () =>
    React.createElement(Input_1.default, {
        labelId: "blah",
        labelContent: React.createElement(React.Fragment, null, "Label"),
        inputId: "blah",
        helperContentOpts: {
            id: "blah",
            content: React.createElement(
                React.Fragment,
                null,
                "This is some helpful text"
            ),
        },
    });
exports.inputRequiredWithError = () =>
    React.createElement(Input_1.default, {
        labelId: "blah",
        labelContent: React.createElement(React.Fragment, null, "Label"),
        inputId: "blah",
        isRequired: true,
        errorContentOpts: {
            id: "blah",
            content: React.createElement(
                React.Fragment,
                null,
                "Error Message Lorem Ipsum"
            ),
        },
        showError: true,
    });
exports.inputRequiredWithHelperAndError = () =>
    React.createElement(Input_1.default, {
        labelId: "blah",
        labelContent: React.createElement(React.Fragment, null, "Label"),
        inputId: "blah",
        isRequired: true,
        helperContentOpts: {
            id: "blah",
            content: React.createElement(
                React.Fragment,
                null,
                "This is some helpful text"
            ),
        },
        errorContentOpts: {
            id: "blah",
            content: React.createElement(
                React.Fragment,
                null,
                "Error Message Lorem Ipsum"
            ),
        },
        showError: true,
    });
