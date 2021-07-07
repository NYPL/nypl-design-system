import { configure } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");
const { JSDOM } = require("jsdom");

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

export interface Global extends NodeJS.Global {
  document: Document;
  window: Window;
  navigator: { userAgent: string };
}

declare let global: Global;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js",
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

// Ignore SVG
require.extensions[".svg"] = obj => {
  obj.exports = () => "noop";
};

// Ignore imported stylesheets.
require.extensions[".scss"] = noop;

configure({ adapter: new Adapter() });
