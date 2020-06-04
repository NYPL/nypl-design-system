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
exports.linkLikeButtonIconLeft = exports.linkLikeButton = exports.buttonFullWidthIconRight = exports.buttonIconChildrenElement = exports.buttonIconChildrenString = exports.buttonWithSpan = exports.buttonOutline = exports.buttonFilledIcon = void 0;
const React = __importStar(require("react"));
const Button_1 = __importDefault(require("./Button"));
const addon_actions_1 = require("@storybook/addon-actions");
const storybook_addon_designs_1 = require("storybook-addon-designs");
const ButtonTypes_1 = require("./ButtonTypes");
exports.default = {
    title: "Button",
    component: Button_1.default,
    decorators: [storybook_addon_designs_1.withDesign],
};
exports.buttonFilledIcon = () =>
    React.createElement(
        Button_1.default,
        {
            callback: addon_actions_1.action("clicked"),
            id: "button",
            buttonType: ButtonTypes_1.ButtonTypes.Filled,
            type: "submit",
            iconPosition: ButtonTypes_1.ButtonIconPositions.Left,
            iconName: "search_small",
            iconDecorative: true,
        },
        "Search"
    );
exports.buttonFilledIcon.story = {
    name: "Button Filled Icon",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=14972%3A0",
        },
    },
};
exports.buttonOutline = () =>
    React.createElement(
        Button_1.default,
        {
            callback: addon_actions_1.action("clicked"),
            id: "button",
            type: "submit",
            buttonType: ButtonTypes_1.ButtonTypes.Outline,
        },
        "Hello World"
    );
exports.buttonOutline.story = {
    name: "Button Outline",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=14972%3A143",
        },
    },
};
exports.buttonWithSpan = () =>
    React.createElement(
        Button_1.default,
        {
            callback: addon_actions_1.action("clicked"),
            id: "button",
            buttonType: ButtonTypes_1.ButtonTypes.Outline,
        },
        React.createElement("span", null, "Style my span!")
    );
exports.buttonIconChildrenString = () =>
    React.createElement(
        Button_1.default,
        {
            callback: addon_actions_1.action("clicked"),
            id: "button",
            buttonType: ButtonTypes_1.ButtonTypes.Filled,
            type: "submit",
            iconPosition: ButtonTypes_1.ButtonIconPositions.Right,
            iconName: "search_small",
            iconDecorative: true,
        },
        "Search!"
    );
exports.buttonIconChildrenElement = () =>
    React.createElement(
        Button_1.default,
        {
            callback: addon_actions_1.action("clicked"),
            id: "button",
            buttonType: ButtonTypes_1.ButtonTypes.Outline,
            type: "button",
            iconPosition: ButtonTypes_1.ButtonIconPositions.Right,
            iconName: "search_small",
            iconDecorative: true,
        },
        React.createElement("span", null, "I'm wrapped in a span!")
    );
exports.buttonFullWidthIconRight = () =>
    React.createElement(
        Button_1.default,
        {
            callback: addon_actions_1.action("clicked"),
            id: "button",
            type: "submit",
            buttonType: ButtonTypes_1.ButtonTypes.Outline,
            iconPosition: ButtonTypes_1.ButtonIconPositions.JustifyRight,
            modifiers: ["large"],
            iconName: "plus",
            iconDecorative: true,
        },
        React.createElement("span", null, "button content")
    );
exports.linkLikeButton = () =>
    React.createElement(
        Button_1.default,
        {
            callback: addon_actions_1.action["clicked"],
            id: "button",
            type: "button",
            buttonType: ButtonTypes_1.ButtonTypes.Link,
        },
        React.createElement("span", null, "button content")
    );
exports.linkLikeButtonIconLeft = () =>
    React.createElement(
        Button_1.default,
        {
            callback: addon_actions_1.action["clicked"],
            id: "button",
            type: "button",
            buttonType: ButtonTypes_1.ButtonTypes.Link,
            iconPosition: ButtonTypes_1.ButtonIconPositions.Left,
            iconName: "arrow_xsmall",
            iconModifiers: ["left"],
            iconDecorative: true,
        },
        React.createElement("span", null, "button content")
    );
