import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import ReactGa from "react-ga";
import renderer from "react-test-renderer";

import HeaderSearchButton from "./HeaderSearchButton";
import gaUtils from "../utils/googleAnalyticsUtils";

gaUtils.initialize({ testMode: true }, false);

describe("HeaderSearchButton Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<HeaderSearchButton />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for mobile", async () => {
    const { container } = render(<HeaderSearchButton isMobile />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("HeaderSearchButton", () => {
  describe("Desktop", () => {
    beforeEach(() => {
      render(<HeaderSearchButton />);
    });

    it("renders a Search button", () => {
      const searchBtn = screen.getByRole("button");

      expect(searchBtn).toBeInTheDocument();
      expect(searchBtn).toHaveTextContent(/search/i);
    });

    it("renders a Close button when clicked", () => {
      const searchBtn = screen.getByRole("button");

      expect(searchBtn).toHaveTextContent(/search/i);
      expect(screen.getByTitle(/Open Search/i)).toBeInTheDocument();
      expect(screen.queryByTitle(/Close Search/i)).not.toBeInTheDocument();

      userEvent.click(searchBtn);

      expect(searchBtn).toHaveTextContent(/close/i);
      expect(screen.queryByTitle(/Open Search/i)).not.toBeInTheDocument();
      expect(screen.getByTitle(/Close Search/i)).toBeInTheDocument();
      // The first call is the initializing call.
      // The second call is what we want.
      expect(ReactGa.testModeAPI.calls[1]).toEqual([
        "send",
        {
          eventCategory: "Global Header",
          eventAction: "Search",
          eventLabel: "Open Menu",
          hitType: "event",
        },
      ]);
    });

    it("renders the search form when clicked", () => {
      const searchBtn = screen.getByRole("button");

      expect(screen.queryByRole("form")).not.toBeInTheDocument();

      userEvent.click(searchBtn);

      expect(screen.getByRole("form")).toBeInTheDocument();
    });
  });

  describe("Mobile", () => {
    beforeEach(() => {
      render(<HeaderSearchButton isMobile />);
    });

    it("renders a Search button", () => {
      const searchBtn = screen.getByRole("button");

      // On mobile, the text is not displayed but is instead
      // added as an aria-label.
      expect(searchBtn).not.toHaveTextContent(/search/i);
      expect(searchBtn).toHaveAttribute("aria-label", "Open Search");
    });

    it("renders a Close button when clicked", () => {
      const searchBtn = screen.getByRole("button");

      expect(searchBtn).toHaveAttribute("aria-label", "Open Search");

      userEvent.click(searchBtn);

      expect(searchBtn).toHaveAttribute("aria-label", "Close Search");
      // The third call is the click event for this test.
      expect(ReactGa.testModeAPI.calls[3]).toEqual([
        "send",
        {
          eventCategory: "Global Header",
          eventAction: "Click",
          eventLabel: "Mobile clickSearch",
          hitType: "event",
        },
      ]);
    });

    it("renders the search form when clicked", () => {
      const searchBtn = screen.getByRole("button");

      expect(screen.queryByRole("form")).not.toBeInTheDocument();

      userEvent.click(searchBtn);

      expect(screen.getByRole("form")).toBeInTheDocument();
    });
  });

  it("renders the UI snapshot correctly", () => {
    const headersearchButton = renderer.create(<HeaderSearchButton />).toJSON();
    const headersearchButtonMobile = renderer
      .create(<HeaderSearchButton isMobile />)
      .toJSON();

    expect(headersearchButton).toMatchSnapshot();
    expect(headersearchButtonMobile).toMatchSnapshot();
  });
});
