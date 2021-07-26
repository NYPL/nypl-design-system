/* eslint-disable @typescript-eslint/no-var-requires */
import "@testing-library/jest-dom";
// Import this to be able to call this jest-axe assertion for all test files:
// expect(...).toHaveNoViolations();
import "jest-axe/extend-expect";

const { JSDOM } = require("jsdom");

const jsdom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost",
});
const { window } = jsdom;
const exposedProperties = ["window", "navigator", "document"];

global.window = window;
global.document = window.document;
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === "undefined") {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});
// global.navigator = {
//   userAgent: "node.js",
// };

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

// Ignore SVG
require.extensions[".svg"] = obj => {
  obj.exports = () => "noop";
};

// Ignore imported stylesheets.
require.extensions[".scss"] = noop;

// We expect an error to be thrown and we do catch, but it still gets
// logged and we don't want to see expected errors while we test.
jest.spyOn(global.console, "error").mockImplementation(() => jest.fn());
