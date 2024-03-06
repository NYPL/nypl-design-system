/* eslint-disable @typescript-eslint/no-var-requires */
import "@testing-library/jest-dom/extend-expect";
// Import this to be able to call this jest-axe assertion for all test files:
// expect(...).toHaveNoViolations();
import "jest-axe/extend-expect";

import MatchMedia from "./mediaMatchMock";

jest.setTimeout(35000);

// We expect an error to be thrown and we do catch, but it still gets
// logged and we don't want to see expected errors while we test.
jest.spyOn(global.console, "error").mockImplementation(() => jest.fn());
jest.spyOn(global.console, "warn").mockImplementation(() => jest.fn());

// Mock match media and resize observer
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;
new MatchMedia();
