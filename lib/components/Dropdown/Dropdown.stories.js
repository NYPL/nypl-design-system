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
exports.RNRelevance = exports.RNItemPerPage = exports.noLabelWithError = exports.labelLeftWithError = exports.requiredWithError = exports.noLabel = exports.labelOnLeft = exports.requiredField = void 0;
const React = __importStar(require("react"));
const Dropdown_1 = __importDefault(require("./Dropdown"));
const addon_actions_1 = require("@storybook/addon-actions");
exports.default = {
    title: "Dropdown",
    component: Dropdown_1.default,
};
exports.requiredField = () =>
    React.createElement(Dropdown_1.default, {
        dropdownId: "dropdown",
        isRequired: true,
        labelPosition: "top",
        labelText: "Label",
        labelId: "label",
        helperContentId: "helper",
        helperContent: React.createElement(
            "span",
            null,
            "If you're unsure of your size, please see the",
            " ",
            React.createElement("a", { href: "#sizing-chart" }, "sizing chart")
        ),
        dropdownOptions: ["Option One", "Option Two", "Option Three"],
        onSelectChange: addon_actions_1.action("selectChanged"),
        onSelectBlur: addon_actions_1.action("selectBlur"),
    });
exports.labelOnLeft = () =>
    React.createElement(Dropdown_1.default, {
        dropdownId: "dropdown",
        isRequired: false,
        labelPosition: "left",
        labelText: "Label",
        labelId: "label",
        helperContentId: "helper",
        helperContent: React.createElement(
            "span",
            null,
            "If you're unsure of your size, please see the",
            " ",
            React.createElement("a", { href: "#sizing-chart" }, "sizing chart")
        ),
        dropdownOptions: ["one", "two"],
        onSelectChange: addon_actions_1.action("selectChanged"),
        onSelectBlur: addon_actions_1.action("selectBlur"),
    });
exports.noLabel = () =>
    React.createElement(Dropdown_1.default, {
        dropdownId: "dropdown",
        isRequired: false,
        labelPosition: "none",
        ariaLabel: "label",
        helperContentId: "helper",
        helperContent: React.createElement(
            "span",
            null,
            "If you're unsure of your size, please see the",
            " ",
            React.createElement("a", { href: "#sizing-chart" }, "sizing chart")
        ),
        dropdownOptions: ["one", "two", "three"],
        onSelectChange: addon_actions_1.action("selectChanged"),
        onSelectBlur: addon_actions_1.action("selectBlur"),
    });
exports.requiredWithError = () =>
    React.createElement(Dropdown_1.default, {
        dropdownId: "dropdown",
        isRequired: true,
        labelPosition: "top",
        labelText: "Label",
        labelId: "label",
        hasError: true,
        errorContentId: "error",
        errorContent: React.createElement(
            "span",
            null,
            "Error Message Lorem Ipsum"
        ),
        dropdownOptions: ["one", "two", "three"],
        onSelectChange: addon_actions_1.action("selectChanged"),
        onSelectBlur: addon_actions_1.action("selectBlur"),
    });
exports.labelLeftWithError = () =>
    React.createElement(Dropdown_1.default, {
        dropdownId: "dropdown",
        isRequired: false,
        labelPosition: "left",
        labelText: "Label",
        labelId: "label",
        hasError: true,
        errorContentId: "error",
        errorContent: React.createElement(
            "span",
            null,
            "Error Message Lorem Ipsum"
        ),
        dropdownOptions: ["one", "two", "three"],
        onSelectChange: addon_actions_1.action("selectChanged"),
        onSelectBlur: addon_actions_1.action("selectBlur"),
    });
exports.noLabelWithError = () =>
    React.createElement(Dropdown_1.default, {
        dropdownId: "dropdown",
        isRequired: false,
        labelPosition: "none",
        ariaLabel: "label",
        hasError: true,
        errorContentId: "error",
        errorContent: React.createElement(
            "span",
            null,
            "Error Message Lorem Ipsum"
        ),
        dropdownOptions: ["one", "two", "three"],
        onSelectChange: addon_actions_1.action("selectChanged"),
        onSelectBlur: addon_actions_1.action("selectBlur"),
    });
exports.RNItemPerPage = () =>
    React.createElement(Dropdown_1.default, {
        dropdownId: "dropdown",
        isRequired: false,
        labelPosition: "left",
        labelText: "Items Per Page",
        labelId: "nav-items-per-page",
        dropdownOptions: ["10", "20", "50", "100"],
        onSelectChange: addon_actions_1.action("selectChanged"),
        onSelectBlur: addon_actions_1.action("selectBlur"),
    });
exports.RNRelevance = () =>
    React.createElement(Dropdown_1.default, {
        dropdownId: "dropdown",
        isRequired: false,
        labelPosition: "left",
        labelText: "Sort By",
        labelId: "nav-sort-by",
        dropdownOptions: [
            "Relevance",
            "Title A-Z",
            "Title Z-A",
            "Author A-Z",
            "Author Z-A",
            "Year Published (Old-New)",
            "Year Published (New-Old)",
        ],
        onSelectChange: addon_actions_1.action("selectChanged"),
        onSelectBlur: addon_actions_1.action("selectBlur"),
    });
