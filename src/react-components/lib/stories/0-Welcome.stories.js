"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("@storybook/react");
react_1.storiesOf("Home", module)
    .add("introduction", () => React.createElement("div", null,
    React.createElement("h2", null, "NYPL Simplified Reusable Components"),
    React.createElement("p", null, "Welcome to the documentation for components used in various SimplyE web apps.")), {
    info: {
        disable: true
    }
});
