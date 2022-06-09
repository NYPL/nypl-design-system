import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import SearchForm from "./SearchForm";

describe("SearchForm Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<SearchForm />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for mobile view", async () => {
    const { container } = render(<SearchForm isMobile />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("SearchForm", () => {
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
      render(<SearchForm />);
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

    it("makes a request to the Encore catalog", () => {
      const searchInput = screen.getByRole("textbox");
      const searchBtn = screen.getByRole("button");

      // The default value of the radio button is set to "Search the Catalog".
      userEvent.type(searchInput, "cats");
      userEvent.click(searchBtn);

      // The first call to `window.location.assign` should be...
      expect(window.location.assign).toHaveBeenNthCalledWith(
        1,
        "https://browse.nypl.org/iii/encore/search/C__Scats__Orightresult__U?searched_from=header_search&timestamp=1640995200000&lang=eng"
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

      // We mock `window.location.assign` before ALL tests and restore after
      // ALL tests. So we should have two calls to `window.location.assign`.
      // The second call to `window.location.assign` should be...
      expect(window.location.assign).toHaveBeenNthCalledWith(
        2,
        "//www.nypl.org/search/cats?searched_from=header_search&timestamp=1640995200000"
      );
    });
  });

  describe("Mobile", () => {
    beforeEach(() => {
      render(<SearchForm isMobile />);
    });

    it("renders a form with an input and two buttons on mobile", () => {
      const form = screen.getByRole("form");
      const searchInput = screen.getByRole("textbox");
      const buttons = screen.getAllByRole("button");

      expect(form).toBeInTheDocument();
      expect(searchInput).toBeInTheDocument();
      expect(buttons).toHaveLength(2);
      expect(buttons[0]).toHaveTextContent("CATALOG");
      expect(buttons[1]).toHaveTextContent("NYPL.ORG");
    });

    it("makes a request to the Encore catalog", () => {
      const searchInput = screen.getByRole("textbox");
      const catalogButton = screen.getAllByRole("button")[0];

      userEvent.type(searchInput, "cats");
      // Click on the "CATALOG" button.
      userEvent.click(catalogButton);

      expect(window.location.assign).toHaveBeenNthCalledWith(
        1,
        "https://browse.nypl.org/iii/encore/search/C__Scats__Orightresult__U?searched_from=header_search&timestamp=1640995200000&lang=eng"
      );
    });

    it("makes a request to the web catalog", () => {
      const searchInput = screen.getByRole("textbox");
      const websiteButton = screen.getAllByRole("button")[1];

      userEvent.type(searchInput, "cats");
      // Click on the "NYPL.ORG" button.
      userEvent.click(websiteButton);

      expect(window.location.assign).toHaveBeenNthCalledWith(
        2,
        "//www.nypl.org/search/cats?searched_from=header_search&timestamp=1640995200000"
      );
    });
  });

  it("renders the UI snapshot correctly", () => {
    const searchForm = renderer.create(<SearchForm />).toJSON();
    const searchFormMobile = renderer.create(<SearchForm isMobile />).toJSON();

    expect(searchForm).toMatchSnapshot();
    expect(searchFormMobile).toMatchSnapshot();
  });
});
