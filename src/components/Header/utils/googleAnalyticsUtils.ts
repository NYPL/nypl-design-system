import ReactGA from "react-ga";

// Account codes for Google Analytics for different NYPL environments.
export const envConfig = {
  production: "UA-1420324-3",
  development: "UA-1420324-122",
};
// Custom dimensions settings for Google Analytics.
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
 * Utility function to initialize and send events to Google Analytics.
 */
function GaUtils() {
  /**
   * Initialize Google Analytics with certain options for the production or
   * development environment. The production environment is set by default.
   */
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
    const id = envConfig[isProduction ? "production" : "development"];

    if (!id) {
      return;
    }

    ReactGA.initialize(id, options);
  };

  /**
   * Send an event to Google Analytics.
   */
  this.trackEvent = (action: string, label: string, value?: number) => {
    ReactGA.event({
      category: "Global Header",
      action,
      label,
      value,
    });
  };

  /**
   * This function serves as a pipe to return the function that is passed to it.
   * It also serves as a timer to execute the passed function after a certain
   * amount of time. This is only used in the `trackSearchQuerySend` function.
   */
  this.createFunctionWithTimeout = (callback: any, optTimeout = 500) => {
    let called = false;

    const fn = () => {
      if (!called) {
        called = true;
        callback();
      }
    };
    setTimeout(fn, optTimeout);

    return fn;
  };

  /**
   * Track a Google Analytics click event with custom dimensions. This is used
   * in the `SearchForm` `Header` component to track search queries in GA.
   * Once the GA event is sent and completed, this function will trigger the
   * `hitCallback` function.
   * The parameter "dimensions" should be an object with dimensions in
   * the format seen in `gaConfig.customDimensions`:
   *   { dimensions1: 'value1', dimensions2: 'value2', ... }
   */
  this.trackSearchQuerySend = (
    label = "",
    dimensions = {},
    hitCallback: any
  ) => {
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
