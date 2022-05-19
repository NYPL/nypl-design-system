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
});

describe("SearchButton", () => {
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

    userEvent.click(searchBtn);

    expect(searchBtn).toHaveTextContent(/close/i);
  });

  it("renders the search form when clicked", () => {
    const searchBtn = screen.getByRole("button");

    expect(screen.queryByRole("form")).not.toBeInTheDocument();

    userEvent.click(searchBtn);

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("renders the UI snapshot correctly", () => {
    const searchButton = renderer.create(<SearchButton />).toJSON();

    expect(searchButton).toMatchSnapshot();
  });
});
