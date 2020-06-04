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
exports.noButton = exports.errorState = exports.defaultState = void 0;
const React = __importStar(require("react"));
const DateRangeForm_1 = __importDefault(require("./DateRangeForm"));
const addon_actions_1 = require("@storybook/addon-actions");
exports.default = {
    title: "DateRangeForm",
    component: DateRangeForm_1.default,
};
let callback = addon_actions_1.action("clicked");
exports.defaultState = () =>
    React.createElement(DateRangeForm_1.default, {
        formLabel: React.createElement(
            React.Fragment,
            null,
            "Publication Year"
        ),
        fromLabelOpts: {
            labelContent: React.createElement(React.Fragment, null, "From"),
            id: "FromLabel",
        },
        fromInputOpts: { inputId: "fromInput" },
        fromHelper: {
            content: React.createElement(React.Fragment, null, "E.x., 1901"),
            id: "fromyearhelper",
            isError: false,
        },
        toLabelOpts: {
            labelContent: React.createElement(React.Fragment, null, "To"),
            id: "ToLabel",
        },
        toInputOpts: { inputId: "toInput" },
        toHelper: {
            content: React.createElement(React.Fragment, null, "E.x., 2000"),
            id: "toYearHelper",
            isError: false,
        },
        showError: false,
        error: {
            content: React.createElement(React.Fragment, null),
            id: "errorId",
            isError: true,
        },
        buttonOpts: {
            id: "submitButtonId",
            callback: callback,
            content: React.createElement(React.Fragment, null, "Submit"),
        },
    });
exports.errorState = () =>
    React.createElement(DateRangeForm_1.default, {
        formLabel: React.createElement(
            React.Fragment,
            null,
            "Publication Year"
        ),
        fromLabelOpts: {
            labelContent: React.createElement(React.Fragment, null, "From"),
            id: "FromLabel",
        },
        fromInputOpts: { inputId: "fromInput" },
        fromHelper: {
            content: React.createElement(React.Fragment, null, "E.x., 1901"),
            id: "fromyearhelper",
        },
        toLabelOpts: {
            labelContent: React.createElement(React.Fragment, null, "To"),
            id: "ToLabel",
        },
        toInputOpts: { inputId: "toInput" },
        toHelper: {
            content: React.createElement(React.Fragment, null, "E.x., 2000"),
            id: "toYearHelper",
        },
        showError: true,
        error: {
            content: React.createElement(
                "div",
                null,
                "The end year should be the same year as or later than the start year"
            ),
            id: "errorId",
        },
        buttonOpts: {
            id: "submitButtonId",
            callback: callback,
            content: React.createElement(React.Fragment, null, "Submit"),
        },
    });
exports.noButton = () =>
    React.createElement(DateRangeForm_1.default, {
        formLabel: React.createElement(
            React.Fragment,
            null,
            "Publication Year"
        ),
        fromLabelOpts: {
            labelContent: React.createElement(React.Fragment, null, "From"),
            id: "FromLabel",
        },
        fromInputOpts: { inputId: "fromInput" },
        fromHelper: {
            content: React.createElement(React.Fragment, null, "E.x., 1901"),
            id: "fromyearhelper",
        },
        toLabelOpts: {
            labelContent: React.createElement(React.Fragment, null, "To"),
            id: "ToLabel",
        },
        toInputOpts: { inputId: "toInput" },
        toHelper: {
            content: React.createElement(React.Fragment, null, "E.x., 2000"),
            id: "toYearHelper",
        },
        showError: true,
        error: {
            content: React.createElement(
                "div",
                null,
                "The end year should be the same year as or later than the start year"
            ),
            id: "errorId",
        },
    });
