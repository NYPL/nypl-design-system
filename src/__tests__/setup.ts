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

(global as any).window = window;
(global as any).document = window.document;
Object.keys((document as Document).defaultView).forEach((property) => {
  if (typeof (global as any)[property] === "undefined") {
    exposedProperties.push(property);
    (global as any)[property] = (document as any).defaultView[property];
  }
});

// We expect an error to be thrown and we do catch, but it still gets
// logged and we don't want to see expected errors while we test.
jest.spyOn(global.console, "error").mockImplementation(() => jest.fn());
jest.spyOn(global.console, "warn").mockImplementation(() => jest.fn());
