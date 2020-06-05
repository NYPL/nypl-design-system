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
exports.dropdownWithSelected = exports.dropdown = void 0;
const React = __importStar(require("react"));
const FormDropdown_1 = __importDefault(require("./FormDropdown"));
const addon_actions_1 = require("@storybook/addon-actions");
const addon_knobs_1 = require("@storybook/addon-knobs");
exports.default = {
    title: "FormDropdown",
    component: FormDropdown_1.default,
};
exports.dropdown = () =>
    React.createElement(FormDropdown_1.default, {
        dropdownId: "baaah",
        isRequired: false,
        ariaLabel: "search",
        options: ["one", "two", addon_knobs_1.text("third option", "three")],
        onSelectBlur: addon_actions_1.action("blur"),
        onSelectChange: addon_actions_1.action("changed"),
    });
exports.dropdownWithSelected = () =>
    React.createElement(FormDropdown_1.default, {
        dropdownId: "baaah",
        isRequired: false,
        ariaLabel: "search",
        selectedOption: "two",
        options: ["one", "two"],
        onSelectBlur: addon_actions_1.action("blur"),
        onSelectChange: addon_actions_1.action("changed"),
    });
