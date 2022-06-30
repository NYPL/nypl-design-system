import ReactGA from "react-ga";

// Account codes for Google Analytics for different environments
const envConfig = (isProduction = true) => {
  const production = "UA-1420324-3";
  const dev = "UA-1420324-122";

  return isProduction ? production : dev;
};
export const gaConfig = {
  eventCategory: "Search",
  eventAction: "QuerySent",
  customDimensions: {
    dimension1: "HeaderSearch",
    dimension2: "Unknown",
    dimension4: "NotSet",
    dimension5: "NotSet",
  },
};

/**
 *
 */
function GaUtils() {
  this.initialize = (
    options = {
      debug: false,
      siteSpeedSampleRate: 100,
      titleCase: false,
      testMode: false,
      standardImplementation: false,
    },
    isProduction = true
  ) => {
    const id = envConfig(isProduction);
    if (!id) {
      return;
    }

    ReactGA.initialize(id, options);
  };

  /**
   *
   */
  this.trackEvent = (action, label, value) => {
    ReactGA.event({
      category: "Global Header",
      action,
      label,
      value,
    });
  };

  /**
   * createFunctionWithTimeout(callback, optTimeout)
   * The function serves as a pipe to return the function that is passed to it.
   * It also searves as a timer to execute that function after a certain amount of time.
   *
   * @param {Function} callback - The function to be executed after the time of optTimeout
   * @param {Number} optTimeout
   * @return {Function}
   */
  this.createFunctionWithTimeout = (callback, optTimeout) => {
    let called = false;

    const fn = () => {
      if (!called) {
        called = true;
        callback();
      }
    };
    setTimeout(fn, optTimeout || 500);

    return fn;
  };

  /**
   * trackSearchQuerySend = (label = '', dimensions = {})
   * Track a GA click event with custom dimensions.
   * The parameter "dimensions" should be an object with dimensions listed as the following format,
   * { dimensions1: 'value1', dimensions2: 'value2', ... }
   * This function will send GA event first, and after it is completed, it will trigger the
   * original event.
   *
   * @param {string} label - Label for GA event.
   * @param {object} dimensions - the object that consists the custom dimensions for the event.
   * @param {function} hitCallback - the function to be executed after sending GA is completed.
   */
  this.trackSearchQuerySend = (label = "", dimensions = {}, hitCallback) => {
    ReactGA.ga(
      "send",
      "event",
      gaConfig.eventCategory,
      gaConfig.eventAction,
      label,
      0,
      dimensions,
      { hitCallback: this.createFunctionWithTimeout(hitCallback) }
    );
  };
}

const gaUtils = new GaUtils();

export default gaUtils;
