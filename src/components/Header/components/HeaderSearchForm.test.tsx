import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import HeaderSearchForm from "./HeaderSearchForm";

describe("HeaderSearchForm Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<HeaderSearchForm />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for mobile view", async () => {
    const { container } = render(<HeaderSearchForm isMobile />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("HeaderSearchForm", () => {
  // We want to spy on the `window.location.assign` method so we can know
  // that the correct search URL was called. Save the real
  // `window.location.assign` method.
  const realLocation = window.location;
  // We want to always return a timestamp date since that's get added
  // to the URL on every call. If we mock it, we'll always get the same
  // timestamp which makes testing easier.
  let realDate;

  beforeAll(() => {
    // Spy on the `window.location.assign` method.
    delete window.location;
    (window as any).location = { assign: jest.fn() };
    // Override the `Date` class so we always get the same
    // timestamp when `getTime` is called.
    const currentDate = new Date("2022-01-01");
    realDate = Date;
    (global as any).Date = class extends Date {
      constructor(date) {
        super(date);
        return currentDate;
      }
    };
  });

  afterAll(() => {
    // Restore the `window.location.assign` method.
    window.location = realLocation;
    // Restore the `Date` class.
    (global as any).Date = realDate;
  });

  describe("Desktop", () => {
    beforeEach(() => {
      render(<HeaderSearchForm />);
      jest.useFakeTimers();
    });

    // Running all pending timers and switching to real timers using Jest
    afterEach(() => {
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
    });

    it("renders a form with an input, radio inputs, and a search button", () => {
      const form = screen.getByRole("form");
      const searchInput = screen.getByRole("textbox");
      const radioGroup = screen.getByRole("radiogroup");
      const searchBtn = screen.getByRole("button");

      expect(form).toBeInTheDocument();
      expect(searchInput).toBeInTheDocument();
      expect(radioGroup).toBeInTheDocument();
      expect(searchBtn).toBeInTheDocument();
      expect(searchBtn).toHaveAttribute("aria-label", "Search");
    });

    it("makes a request to the Encore catalog", async () => {
      const searchInput = screen.getByRole("textbox");
      const searchBtn = screen.getByRole("button");

      // The default value of the radio button is set to
      // "Search the Circulating Catalog".
      userEvent.type(searchInput, "cats");
      userEvent.click(searchBtn);

      // Fast-forward until all timers have been executed.
      // The SearchForm calls `gaUtils.trackSearchQuerySend` which
      // internally has a timer.
      jest.runAllTimers();

      // The first call to `window.location.assign` should be...
      expect(window.location.assign).toHaveBeenNthCalledWith(
        1,
        "https://browse.nypl.org/iii/encore/search/C__Scats__Orightresult__U?searched_from=header_search&timestamp=1640995200000&lang=eng"
      );
    });

    it("makes a request to the Research Catalog", async () => {
      const searchInput = screen.getByRole("textbox");
      const researchRadio = screen.getByText("Search the Research Catalog");
      const searchBtn = screen.getByRole("button");

      userEvent.type(searchInput, "cats");
      // Select the "Search the Research Catalog" radio button.
      userEvent.click(researchRadio);
      userEvent.click(searchBtn);

      // Fast-forward until all timers have been executed.
      // The SearchForm calls `gaUtils.trackSearchQuerySend` which
      // internally has a timer.
      jest.runAllTimers();

      // The second call to `window.location.assign` should be...
      expect(window.location.assign).toHaveBeenNthCalledWith(
        2,
        "https://www.nypl.org/research/research-catalog/search?q=cats&?searched_from=header_search&timestamp=1640995200000&lang=eng"
      );
    });

    it("makes a request to the web catalog", () => {
      const searchInput = screen.getByRole("textbox");
      const webRadio = screen.getByText("Search NYPL.org");
      const searchBtn = screen.getByRole("button");

      userEvent.type(searchInput, "cats");
      // Select the "Search NYPL.org" radio button.
      userEvent.click(webRadio);
      // Run the search.
      userEvent.click(searchBtn);

      // Fast-forward until all timers have been executed.
      // The SearchForm calls `gaUtils.trackSearchQuerySend` which
      // internally has a timer.
      jest.runAllTimers();

      // We mock `window.location.assign` before ALL tests and restore after
      // ALL tests. So we should have two calls to `window.location.assign`.
      // The third call to `window.location.assign` should be...
      expect(window.location.assign).toHaveBeenNthCalledWith(
        3,
        "//www.nypl.org/search/cats?searched_from=header_search&timestamp=1640995200000"
      );
    });
  });

  describe("Mobile", () => {
    beforeEach(() => {
      render(<HeaderSearchForm isMobile />);
    });

    it("renders a form with an input and three radios on mobile", () => {
      const form = screen.getByRole("form");
      const searchInput = screen.getByRole("textbox");
      const radios = screen.getAllByRole("radio");

      expect(form).toBeInTheDocument();
      expect(searchInput).toBeInTheDocument();
      expect(radios).toHaveLength(3);
      expect(
        screen.getByLabelText("Search the Circulating Catalog")
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText("Search the Research Catalog")
      ).toBeInTheDocument();
      expect(screen.getByLabelText("Search NYPL.org")).toBeInTheDocument();
    });

    it("makes a request to the Encore catalog", () => {
      const searchInput = screen.getByRole("textbox");
      const circulatingCatalogRadio = screen.getAllByRole("radio")[0];

      userEvent.type(searchInput, "cats");
      // Select the Circulating Catalog
      userEvent.click(circulatingCatalogRadio);

      // Fast-forward until all timers have been executed.
      // The SearchForm calls `gaUtils.trackSearchQuerySend` which
      // internally has a timer.
      jest.runAllTimers();

      expect(window.location.assign).toHaveBeenNthCalledWith(
        1,
        "https://browse.nypl.org/iii/encore/search/C__Scats__Orightresult__U?searched_from=header_search&timestamp=1640995200000&lang=eng"
      );
    });

    it("makes a request to the Research Catalog", () => {
      const searchInput = screen.getByRole("textbox");
      const researchCatalogRadio = screen.getAllByRole("radio")[1];

      userEvent.type(searchInput, "cats");
      // Select the Research Catalog
      userEvent.click(researchCatalogRadio);

      // Fast-forward until all timers have been executed.
      // The SearchForm calls `gaUtils.trackSearchQuerySend` which
      // internally has a timer.
      jest.runAllTimers();

      expect(window.location.assign).toHaveBeenNthCalledWith(
        2,
        "https://www.nypl.org/research/research-catalog/search?q=cats&?searched_from=header_search&timestamp=1640995200000&lang=eng"
      );
    });

    it("makes a request to the web catalog", () => {
      const searchInput = screen.getByRole("textbox");
      const websiteRadio = screen.getAllByRole("radio")[2];

      userEvent.type(searchInput, "cats");
      // Select the Website
      userEvent.click(websiteRadio);

      // Fast-forward until all timers have been executed.
      // The SearchForm calls `gaUtils.trackSearchQuerySend` which
      // internally has a timer.
      jest.runAllTimers();

      expect(window.location.assign).toHaveBeenNthCalledWith(
        3,
        "//www.nypl.org/search/cats?searched_from=header_search&timestamp=1640995200000"
      );
    });
  });

  it("renders the UI snapshot correctly", () => {
    const headersearchForm = renderer.create(<HeaderSearchForm />).toJSON();
    const headersearchFormMobile = renderer
      .create(<HeaderSearchForm isMobile />)
      .toJSON();

    expect(headersearchForm).toMatchSnapshot();
    expect(headersearchFormMobile).toMatchSnapshot();
  });
});
