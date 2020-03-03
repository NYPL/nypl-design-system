import { configure } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");
const { JSDOM } = require("jsdom");

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

export interface Global extends NodeJS.Global {
  document: Document;
  window: Window;
  navigator: {userAgent: string};
}

declare var global: Global;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js",
};

// Ignore SVG
require.extensions[".svg"] = () => {};

// Ignore imported stylesheets.
let noop = () => {};
require.extensions[".scss"] = noop;

configure({ adapter: new Adapter() });
