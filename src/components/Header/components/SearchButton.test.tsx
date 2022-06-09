import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import SearchButton from "./SearchButton";

describe("SearchButton Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<SearchButton />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for mobile", async () => {
    const { container } = render(<SearchButton isMobile />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("SearchButton", () => {
  describe("Desktop", () => {
    beforeEach(() => {
      render(<SearchButton />);
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
      render(<SearchButton isMobile />);
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
    });

    it("renders the search form when clicked", () => {
      const searchBtn = screen.getByRole("button");

      expect(screen.queryByRole("form")).not.toBeInTheDocument();

      userEvent.click(searchBtn);

      expect(screen.getByRole("form")).toBeInTheDocument();
    });
  });

  it("renders the UI snapshot correctly", () => {
    const searchButton = renderer.create(<SearchButton />).toJSON();
    const searchButtonMobile = renderer
      .create(<SearchButton isMobile />)
      .toJSON();

    expect(searchButton).toMatchSnapshot();
    expect(searchButtonMobile).toMatchSnapshot();
  });
});
