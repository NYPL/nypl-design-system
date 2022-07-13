import ReactGA from "react-ga";

import gaUtils, { envConfig, gaConfig } from "./googleAnalyticsUtils";

describe("Google Analytics utils", () => {
  const gaOptions = { testMode: true };

  it("should initialize correctly in development environment", () => {
    const isProduction = false;
    const id = envConfig[isProduction ? "production" : "development"];

    gaUtils.initialize(gaOptions, isProduction);

    expect(id).toEqual("UA-1420324-122");
    expect(ReactGA.testModeAPI.calls).toEqual([["create", id, "auto"]]);
  });

  it("should initialize correctly in production environment", () => {
    const isProduction = true;
    const id = envConfig[isProduction ? "production" : "development"];

    gaUtils.initialize(gaOptions, isProduction);

    expect(id).toEqual("UA-1420324-3");
    expect(ReactGA.testModeAPI.calls).toEqual([
      // From the previous call. Test Mode tracks and saves everything.
      ["create", "UA-1420324-122", "auto"],
      // The new initialization call.
      ["create", id, "auto"],
    ]);
  });

  it("should send an event to Google Analytics", () => {
    gaUtils.trackEvent("theAction1", "theLabel1");
    gaUtils.trackEvent("theAction2", "theLabel2");

    expect(ReactGA.testModeAPI.calls).toEqual([
      ["create", "UA-1420324-122", "auto"],
      ["create", "UA-1420324-3", "auto"],
      // These are the two values sent to Google Analytics
      // through the `trackEvent` function.
      [
        "send",
        {
          eventAction: "theAction1",
          eventCategory: "Global Header",
          eventLabel: "theLabel1",
          hitType: "event",
        },
      ],
      [
        "send",
        {
          eventAction: "theAction2",
          eventCategory: "Global Header",
          eventLabel: "theLabel2",
          hitType: "event",
        },
      ],
    ]);
  });

  it("calls a callback function on a delay", () => {
    jest.useFakeTimers();

    const timeoutFn = jest.spyOn(global, "setTimeout");
    let testValue = "beforeBeingCalled";
    const delayedFunction = () => {
      testValue = "afterBeingCalled";
    };

    expect(testValue).toEqual("beforeBeingCalled");

    // This runs on a setTimeout delay of 500ms.
    gaUtils.createFunctionWithTimeout(delayedFunction);
    jest.runAllTimers();

    expect(testValue).toEqual("afterBeingCalled");
    expect(timeoutFn).toHaveBeenCalled();

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("should send an event with custom dimensions", () => {
    jest.useFakeTimers();

    let testValue = "beforeBeingCalled";
    const label = "label to send";
    const customDimensions = {
      dimension1: "value1",
      dimension2: "value2",
      dimension4: "value4",
      dimension5: "value5",
    };
    const delayedFunction = () => {
      testValue = "afterBeingCalled";
    };

    expect(testValue).toEqual("beforeBeingCalled");

    // This runs on a setTimeout delay of 500ms by internally calling
    // the `createFunctionWithTimeout` function with `delayedFunction`.
    gaUtils.trackSearchQuerySend(label, customDimensions, delayedFunction);
    jest.runAllTimers();

    expect(testValue).toEqual("afterBeingCalled");
    // Need to JSON.stringify the arrays to better match the expected
    // calls, specially since the "hitCallback" function is hard to test.
    expect(JSON.stringify(ReactGA.testModeAPI.calls)).toEqual(
      JSON.stringify([
        ["create", "UA-1420324-122", "auto"],
        ["create", "UA-1420324-3", "auto"],
        [
          "send",
          {
            hitType: "event",
            eventCategory: "Global Header",
            eventAction: "theAction1",
            eventLabel: "theLabel1",
          },
        ],
        [
          "send",
          {
            hitType: "event",
            eventCategory: "Global Header",
            eventAction: "theAction2",
            eventLabel: "theLabel2",
          },
        ],
        // This is the last call made that we expected.
        [
          "send",
          "event",
          gaConfig.eventCategory,
          gaConfig.eventAction,
          label,
          0,
          customDimensions,
          {
            hitCallback: gaUtils.createFunctionWithTimeout(delayedFunction),
          },
        ],
      ])
    );

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});
