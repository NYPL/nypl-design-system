/* eslint-disable @typescript-eslint/no-var-requires */
import "@testing-library/jest-dom/extend-expect";
// Import this to be able to call this jest-axe assertion for all test files:
// expect(...).toHaveNoViolations();
import "jest-axe/extend-expect";

// We expect an error to be thrown and we do catch, but it still gets
// logged and we don't want to see expected errors while we test.
jest.spyOn(global.console, "error").mockImplementation(() => jest.fn());
jest.spyOn(global.console, "warn").mockImplementation(() => jest.fn());
