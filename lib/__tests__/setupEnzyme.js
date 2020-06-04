"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enzyme_1 = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const { JSDOM } = require("jsdom");
const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;
global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: "node.js",
};
// Ignore SVG
require.extensions[".svg"] = () => {};
enzyme_1.configure({ adapter: new Adapter() });
