import { configure } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");
const { JSDOM } = require("jsdom");

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

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

copyProps(window, global);

// Ignore SVG
require.extensions[".svg"] = () => {};

configure({ adapter: new Adapter() });
