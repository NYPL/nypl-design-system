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
exports.accordionWithCheckboxes = void 0;
const React = __importStar(require("react"));
const Accordion_1 = __importDefault(require("./Accordion"));
const addon_actions_1 = require("@storybook/addon-actions");
const Checkbox_1 = __importDefault(require("../Checkbox/Checkbox"));
const UnorderedList_1 = __importDefault(
    require("../UnorderedList/UnorderedList")
);
exports.default = {
    title: "Accordion",
    component: Accordion_1.default,
};
const checkboxes = [
    React.createElement(Checkbox_1.default, {
        onChange: addon_actions_1.action("changed"),
        checkboxId: "checkbox-1",
        labelOptions: {
            id: "checkbox-1-label",
            labelContent: React.createElement(
                React.Fragment,
                null,
                "Checkbox 1"
            ),
        },
    }),
    React.createElement(Checkbox_1.default, {
        onChange: addon_actions_1.action("changed"),
        checkboxId: "checkbox-2",
        labelOptions: {
            id: "checkbox-1-label",
            labelContent: React.createElement(
                React.Fragment,
                null,
                "Checkbox 2"
            ),
        },
    }),
    React.createElement(Checkbox_1.default, {
        onChange: addon_actions_1.action("changed"),
        checkboxId: "checkbox-3",
        labelOptions: {
            id: "checkbox-1-label",
            labelContent: React.createElement(
                React.Fragment,
                null,
                "Checkbox 3"
            ),
        },
    }),
];
exports.accordionWithCheckboxes = () =>
    React.createElement(
        Accordion_1.default,
        {
            id: "accordion",
            buttonOptions: {
                id: "accordionBtn",
                content: React.createElement(
                    React.Fragment,
                    null,
                    "Click to expand"
                ),
            },
        },
        " ",
        React.createElement(
            UnorderedList_1.default,
            { id: "checkbox-list" },
            checkboxes
        ),
        " "
    );
