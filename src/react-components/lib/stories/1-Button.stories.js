"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Button_1 = __importDefault(require("../components/Button/Button"));
const addon_actions_1 = require("@storybook/addon-actions");
exports.default = {
    title: "Button",
};
exports.filled = () => React.createElement(Button_1.default, { className: "button", callback: addon_actions_1.action("clicked") });
exports.outline = () => (React.createElement(Button_1.default, { className: "button button--outline", callback: addon_actions_1.action("clicked") }));
